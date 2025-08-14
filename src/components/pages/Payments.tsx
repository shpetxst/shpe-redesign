import React, { useState, useEffect } from 'react';
import { ShoppingCart, Plus, Minus, CreditCard, Package, Star, Loader2 } from 'lucide-react';
import { shopifyService, ShopifyProduct, ShopifyCart } from '../../utils/shopify';

// Types for our products and cart
interface Product {
  id: string;
  title: string;
  description: string;
  price?: number;
  image: string;
  category: 'merchandise' | 'events' | 'memberships';
  inStock: boolean;
  rating?: number;
  variants?: ProductVariant[];
}

interface ProductVariant {
  id: string;
  title: string;
  price: number;
  available: boolean;
}

interface CartItem {
  productId: string;
  variantId?: string;
  quantity: number;
  product: Product;
  variant?: ProductVariant;
}

// Demo products - used when Shopify is not configured
const DEMO_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'SHPE Texas State T-Shirt',
    description: 'Official SHPE Texas State chapter t-shirt. High-quality cotton blend with our logo.',
    price: 25.00,
    image: '/assets/icons/SHPE_logo_horiz_Texas State_KO.png',
    category: 'merchandise',
    inStock: true,
    rating: 4.8,
    variants: [
      { id: '1-s', title: 'Small', price: 25.00, available: true },
      { id: '1-m', title: 'Medium', price: 25.00, available: true },
      { id: '1-l', title: 'Large', price: 25.00, available: true },
      { id: '1-xl', title: 'X-Large', price: 27.00, available: true },
    ]
  },
  {
    id: '2',
    title: 'SHPE Hoodie',
    description: 'Comfortable hoodie perfect for those chilly Texas mornings. Features embroidered SHPE logo.',
    price: 45.00,
    image: '/assets/icons/SHPE_logo_horiz_Texas State_KO.png',
    category: 'merchandise',
    inStock: true,
    rating: 4.9,
    variants: [
      { id: '2-s', title: 'Small', price: 45.00, available: true },
      { id: '2-m', title: 'Medium', price: 45.00, available: true },
      { id: '2-l', title: 'Large', price: 45.00, available: true },
      { id: '2-xl', title: 'X-Large', price: 47.00, available: false },
    ]
  },
  {
    id: '3',
    title: 'Annual Membership',
    description: 'SHPE Texas State annual membership. Includes access to all events, networking opportunities, and more.',
    price: 30.00,
    image: '/assets/icons/SHPE_logo_horiz_Texas State_KO.png',
    category: 'memberships',
    inStock: true,
    rating: 5.0,
    variants: [
      { id: '3-default', title: 'Standard', price: 30.00, available: true }
    ]
  },
  {
    id: '4',
    title: 'National Convention Registration',
    description: 'Register for the SHPE National Convention. Early bird pricing available for members.',
    price: 150.00,
    image: '/assets/icons/SHPE_logo_horiz_Texas State_KO.png',
    category: 'events',
    inStock: true,
    rating: 4.7,
    variants: [
      { id: '4-default', title: 'General', price: 150.00, available: true }
    ]
  },
];

// Map Shopify objects to our UI model
const mapCategoryFromShopify = (productType: string, tags: string[]): Product['category'] => {
  const type = (productType || '').toLowerCase();
  const tagText = (tags || []).join(' ').toLowerCase();
  if (type.includes('member') || tagText.includes('member')) return 'memberships';
  if (type.includes('event') || tagText.includes('event')) return 'events';
  return 'merchandise';
};

const adaptShopifyProduct = (p: ShopifyProduct): Product => {
  const image = p.images && p.images.length > 0 ? p.images[0].src : '/assets/icons/logo.svg';
  const variants: ProductVariant[] = (p.variants || []).map((v: any) => ({
    id: v.id,
    title: v.title || 'Default',
    price: parseFloat(typeof v.price === 'string' ? v.price : v.price.amount),
    available: Boolean((v as any).available ?? true)
  }));
  return {
    id: p.id,
    title: p.title,
    description: p.description,
    image,
    category: mapCategoryFromShopify((p as any).productType || '', (p as any).tags || []),
    inStock: Boolean((p as any).availableForSale && variants.some(v => v.available)),
    price: variants[0]?.price,
    variants
  };
};

const Payments = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [shopifyCart, setShopifyCart] = useState<ShopifyCart | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [useShopifyProducts, setUseShopifyProducts] = useState(false);

  // Initialize Shopify data
  useEffect(() => {
    const initializeShopify = async () => {
      try {
        setLoading(true);
        
        // Try to fetch products from Shopify
        const shopifyProducts = await shopifyService.fetchProducts();
        if (shopifyProducts && shopifyProducts.length > 0) {
          const mapped = shopifyProducts.map(adaptShopifyProduct);
          setProducts(mapped);
          setUseShopifyProducts(true);
        } else {
          setProducts(DEMO_PRODUCTS);
        }

        // Reuse or create checkout session
        const existingId = localStorage.getItem('shopify-checkout-id');
        let checkout: ShopifyCart | null = null;
        if (existingId) {
          checkout = await shopifyService.fetchCheckout(existingId);
        }
        if (!checkout) {
          checkout = await shopifyService.createCheckout();
        }
        if (checkout) {
          setShopifyCart(checkout);
          localStorage.setItem('shopify-checkout-id', checkout.id);
        }
      } catch (error) {
        console.error('Failed to initialize Shopify:', error);
        // Fall back to demo products
        setUseShopifyProducts(false);
        setProducts(DEMO_PRODUCTS);
      } finally {
        setLoading(false);
      }
    };

    initializeShopify();
  }, []);

  // Cart functionality
  const addToCart = (product: Product, variant?: ProductVariant) => {
    const effectiveVariant = variant || product.variants?.find(v => v.available) || product.variants?.[0];
    if (!effectiveVariant) return;
    setCart(prevCart => {
      const existingItem = prevCart.find(item => 
        item.productId === product.id && item.variantId === effectiveVariant.id
      );
      if (existingItem) {
        return prevCart.map(item =>
          item.productId === product.id && item.variantId === effectiveVariant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, {
        productId: product.id,
        variantId: effectiveVariant.id,
        quantity: 1,
        product,
        variant: effectiveVariant
      }];
    });
  };

  const updateQuantity = (productId: string, variantId: string | undefined, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCart(prevCart => prevCart.filter(item => 
        !(item.productId === productId && item.variantId === variantId)
      ));
    } else {
      setCart(prevCart => prevCart.map(item =>
        item.productId === productId && item.variantId === variantId
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => {
      const price = item.variant?.price || item.product.price || 0;
      return total + (price * item.quantity);
    }, 0);
  };

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Shopify checkout function
  const handleShopifyCheckout = async () => {
    if (!shopifyCart || cart.length === 0) return;

    try {
      setCheckoutLoading(true);
      
      // Convert cart items to Shopify line items
      const lineItemsToAdd = cart
        .filter(item => Boolean(item.variantId))
        .map(item => ({
          variantId: item.variantId as string,
          quantity: item.quantity,
        }));

      // Add items to Shopify checkout
      const updatedCheckout = await shopifyService.addToCheckout(shopifyCart.id, lineItemsToAdd);
      
      if (updatedCheckout) {
        // Redirect to Shopify checkout
        const checkoutUrl = shopifyService.getCheckoutUrl(updatedCheckout);
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error('Checkout failed:', error);
      alert('Checkout failed. Please try again.');
    } finally {
      setCheckoutLoading(false);
    }
  };

  // Filter products by category
  const displayProducts = products;
  const filteredProducts = selectedCategory === 'all' 
    ? displayProducts 
    : displayProducts.filter(product => product.category === (selectedCategory as Product['category']));

  const categories = [
    { key: 'all', label: 'All Products' },
    { key: 'merchandise', label: 'Merchandise' },
    { key: 'memberships', label: 'Memberships' },
    { key: 'events', label: 'Events' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              SHPE Store
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Support SHPE Texas State by purchasing merchandise, memberships, and event registrations
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary-600 mr-3" />
            <span className="text-lg text-gray-600">Loading products...</span>
          </div>
        ) : (
          <>
            {/* Status Banner */}
            <div className="w-full mb-6">
              <div className={`p-4 rounded-lg ${useShopifyProducts ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'}`}>
                <p className={`text-sm ${useShopifyProducts ? 'text-green-800' : 'text-yellow-800'}`}>
                  {useShopifyProducts 
                    ? '✅ Connected to Shopify - Real products and checkout available'
                    : '⚠️ Demo mode - Using sample products. Configure Shopify credentials for live functionality.'
                  }
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="flex-1">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map(category => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.key
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-primary-50 border border-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={addToCart}
                />
              ))}
            </div>
          </div>

          {/* Shopping Cart Sidebar */}
          <div className="lg:w-80">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold flex items-center">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Cart ({getCartItemCount()})
                  </h3>
                </div>

                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">Your cart is empty</p>
                ) : (
                  <>
                    <div className="space-y-4 mb-6">
                      {cart.map(item => (
                        <CartItemComponent
                          key={`${item.productId}-${item.variantId}`}
                          item={item}
                          onUpdateQuantity={updateQuantity}
                        />
                      ))}
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold">Total:</span>
                        <span className="text-lg font-bold text-primary-600">
                          ${getCartTotal().toFixed(2)}
                        </span>
                      </div>
                      
                      <button 
                        onClick={useShopifyProducts ? handleShopifyCheckout : undefined}
                        disabled={checkoutLoading || cart.length === 0 || !useShopifyProducts}
                        className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center"
                      >
                        {checkoutLoading ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Processing...
                          </>
                        ) : (
                          <>
                            <CreditCard className="mr-2 h-5 w-5" />
                            {useShopifyProducts ? 'Checkout with Shopify' : 'Checkout (Demo)'}
                          </>
                        )}
                      </button>
                      
                      <p className="text-xs text-gray-500 text-center mt-2">
                        Secure checkout powered by Shopify
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    )}
    </div>
    </div>
  );
};

// Product Card Component
const ProductCard: React.FC<{ product: Product; onAddToCart: (product: Product, variant?: ProductVariant) => void }> = ({ 
  product, 
  onAddToCart 
}) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(
    product.variants?.find(v => v.available) || product.variants?.[0]
  );

  const handleAddToCart = () => {
    onAddToCart(product, selectedVariant);
  };

  const currentPrice = selectedVariant?.price || product.price || 0;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square bg-gray-50 flex items-center justify-center">
        <img src={product.image} alt={product.title} className="max-h-40 object-contain" />
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-gray-900 line-clamp-2">{product.title}</h3>
          {product.rating && (
            <div className="flex items-center ml-2">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
            </div>
          )}
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        
        {product.variants && (
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">Options:</label>
            <select
              value={selectedVariant?.id || ''}
              onChange={(e) => {
                const variant = product.variants?.find(v => v.id === e.target.value);
                setSelectedVariant(variant);
              }}
              className="w-full border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {product.variants.map(variant => (
                <option key={variant.id} value={variant.id} disabled={!variant.available}>
                  {variant.title} {!variant.available ? '(Out of Stock)' : ''}
                </option>
              ))}
            </select>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary-600">
            ${currentPrice.toFixed(2)}
          </span>
          
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock || (selectedVariant && !selectedVariant.available)}
            className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add to Cart
          </button>
        </div>
        
        {!product.inStock && (
          <p className="text-red-500 text-sm mt-2">Out of Stock</p>
        )}
      </div>
    </div>
  );
};

// Cart Item Component
const CartItemComponent: React.FC<{ 
  item: CartItem; 
  onUpdateQuantity: (productId: string, variantId: string | undefined, quantity: number) => void;
}> = ({ item, onUpdateQuantity }) => {
  const price = item.variant?.price || item.product.price;
  
  return (
    <div className="flex items-center space-x-3 py-2">
      <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center flex-shrink-0">
        <Package className="h-6 w-6 text-gray-400" />
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-gray-900 truncate">{item.product.title}</h4>
        {item.variant && (
          <p className="text-xs text-gray-500">{item.variant.title}</p>
        )}
        <p className="text-sm text-primary-600 font-semibold">${price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onUpdateQuantity(item.productId, item.variantId, item.quantity - 1)}
          className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
        >
          <Minus className="h-3 w-3" />
        </button>
        
        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
        
        <button
          onClick={() => onUpdateQuantity(item.productId, item.variantId, item.quantity + 1)}
          className="w-6 h-6 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
        >
          <Plus className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
};

export default Payments;
