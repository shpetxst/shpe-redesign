import Client from 'shopify-buy';

// Shopify configuration
const shopifyConfig = {
  domain: import.meta.env.VITE_SHOPIFY_DOMAIN || 'your-shop-name.myshopify.com',
  storefrontAccessToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN || 'your-storefront-access-token',
};

// Create Shopify client
export const shopifyClient = Client.buildClient({
  domain: shopifyConfig.domain,
  storefrontAccessToken: shopifyConfig.storefrontAccessToken,
});

// Types for Shopify products
export interface ShopifyProduct {
  id: string;
  title: string;
  description: string;
  handle: string;
  images: Array<{
    id: string;
    src: string;
    altText: string | null;
  }>;
  variants: Array<{
    id: string;
    title: string;
    price: {
      amount: string;
      currencyCode: string;
    };
    available: boolean;
    selectedOptions: Array<{
      name: string;
      value: string;
    }>;
  }>;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
    maxVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
  productType: string;
  tags: string[];
  availableForSale: boolean;
}

export interface ShopifyCart {
  id: string;
  webUrl: string;
  lineItems: Array<{
    id: string;
    title: string;
    quantity: number;
    variant: {
      id: string;
      title: string;
      price: {
        amount: string;
        currencyCode: string;
      };
      product: {
        title: string;
        handle: string;
      };
    };
  }>;
  lineItemsSubtotalPrice: {
    amount: string;
    currencyCode: string;
  };
  totalTaxPrice: {
    amount: string;
    currencyCode: string;
  };
  totalPrice: {
    amount: string;
    currencyCode: string;
  };
}

// Shopify API functions
export class ShopifyService {
  private client: typeof Client;

  constructor() {
    this.client = shopifyClient;
  }

  // Fetch all products
  async fetchProducts(): Promise<ShopifyProduct[]> {
    try {
      const products = await this.client.product.fetchAll();
      return products as unknown as ShopifyProduct[];
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }

  // Fetch products by collection
  async fetchProductsByCollection(collectionHandle: string): Promise<ShopifyProduct[]> {
    try {
      const collection = await this.client.collection.fetchByHandle(collectionHandle);
      if (collection) {
        const products = await this.client.product.fetchMultiple(
          collection.products.map((product: any) => product.id)
        );
        return products as unknown as ShopifyProduct[];
      }
      return [];
    } catch (error) {
      console.error('Error fetching products by collection:', error);
      return [];
    }
  }

  // Create a new checkout/cart
  async createCheckout(): Promise<ShopifyCart | null> {
    try {
      const checkout = await this.client.checkout.create();
      return checkout as unknown as ShopifyCart;
    } catch (error) {
      console.error('Error creating checkout:', error);
      return null;
    }
  }

  // Add line items to checkout
  async addToCheckout(
    checkoutId: string,
    lineItemsToAdd: Array<{
      variantId: string;
      quantity: number;
    }>
  ): Promise<ShopifyCart | null> {
    try {
      const checkout = await this.client.checkout.addLineItems(checkoutId, lineItemsToAdd);
      return checkout as unknown as ShopifyCart;
    } catch (error) {
      console.error('Error adding to checkout:', error);
      return null;
    }
  }

  // Update line item quantities in checkout
  async updateCheckout(
    checkoutId: string,
    lineItemsToUpdate: Array<{
      id: string;
      quantity: number;
    }>
  ): Promise<ShopifyCart | null> {
    try {
      const checkout = await this.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate);
      return checkout as unknown as ShopifyCart;
    } catch (error) {
      console.error('Error updating checkout:', error);
      return null;
    }
  }

  // Remove line items from checkout
  async removeFromCheckout(
    checkoutId: string,
    lineItemIds: string[]
  ): Promise<ShopifyCart | null> {
    try {
      const checkout = await this.client.checkout.removeLineItems(checkoutId, lineItemIds);
      return checkout as unknown as ShopifyCart;
    } catch (error) {
      console.error('Error removing from checkout:', error);
      return null;
    }
  }

  // Fetch checkout by ID
  async fetchCheckout(checkoutId: string): Promise<ShopifyCart | null> {
    try {
      const checkout = await this.client.checkout.fetch(checkoutId);
      return checkout as unknown as ShopifyCart;
    } catch (error) {
      console.error('Error fetching checkout:', error);
      return null;
    }
  }

  // Get checkout URL for redirect to Shopify
  getCheckoutUrl(checkout: ShopifyCart): string {
    return checkout.webUrl;
  }
}

// Create a singleton instance
export const shopifyService = new ShopifyService();

// Helper functions
export const formatPrice = (amount: string, currencyCode: string = 'USD'): string => {
  const price = parseFloat(amount);
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
  }).format(price);
};

export const getProductImage = (product: ShopifyProduct): string => {
  return product.images.length > 0 ? product.images[0].src : '/placeholder-product.jpg';
};

export const getProductPrice = (product: ShopifyProduct): string => {
  return formatPrice(product.priceRange.minVariantPrice.amount, product.priceRange.minVariantPrice.currencyCode);
};

export const isProductAvailable = (product: ShopifyProduct): boolean => {
  return product.availableForSale && product.variants.some(variant => variant.available);
};
