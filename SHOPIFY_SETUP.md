# Shopify Integration Setup Guide

This guide will walk you through setting up Shopify integration for your SHPE Texas State website's payments page.

## Prerequisites

- A Shopify store (you can create one at [shopify.com](https://shopify.com))
- Admin access to your Shopify store
- Node.js and npm installed on your development machine

## Step 1: Create a Shopify Store

1. Go to [shopify.com](https://shopify.com) and create a new store
2. Complete the store setup process
3. Note your store's domain (e.g., `your-store-name.myshopify.com`)

## Step 2: Create a Custom App and Enable Storefront API

1. Log into your Shopify admin panel
2. Go to **Settings** → **Apps and sales channels** → **Develop apps**
3. Click **Create an app** and name it "SHPE Website Integration"
4. Open the app and go to **Configuration** → **Storefront API integration** → **Configure**
5. Grant access scopes:
   - Read products, variants and collections
   - Read and modify checkouts
   - (Optional) Read customers if you plan to personalize the store
6. Click **Save**
7. Go to **API credentials** and click **Install app** (top right)
8. Under **Storefront API access tokens**, click **Reveal token once** and copy it
9. Note your store's domain, e.g. `your-store-name.myshopify.com`

## Step 3: Set Up Environment Variables (Vite)

1. Create a `.env` file in your project root (if it doesn't exist already)
2. Add the following variables:

```env
# Shopify Configuration
VITE_SHOPIFY_DOMAIN=your-store-name.myshopify.com
VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your-storefront-access-token-here
```

**Important**: 
- Replace `your-store-name.myshopify.com` with your actual store domain
- Replace `your-storefront-access-token-here` with the token you copied in Step 2
- Never commit your `.env` file to version control - it should be in your `.gitignore`

## Step 4: Add Products to Your Shopify Store

1. In your Shopify admin, go to **Products**
2. Click **Add product**
3. Add your SHPE merchandise, memberships, and event tickets:

### Recommended Product Structure:

**Merchandise Products:**
- SHPE T-Shirts (with size variants)
- SHPE Hoodies (with size variants)  
- SHPE Stickers
- Any other branded merchandise

**Membership Products:**
- Annual SHPE Membership
- Semester SHPE Membership

**Event Products:**
- National Convention Registration
- Regional Conference Registration
- Local Event Tickets

### Product Configuration Tips:
- Use clear, descriptive titles
- Add high-quality product images
- Set up variants for items with different sizes/options
- Use product types and tags for categorization:
  - Product Type: "Merchandise", "Membership", "Event"
  - Tags: "apparel", "membership", "convention", etc.
- Ensure inventory tracking is enabled if needed

## Step 5: Test Your Integration

1. Start your development server:
```bash
npm run dev
```

2. Navigate to the `/payments` page
3. You should see:
   - A green banner indicating "Connected to Shopify" (if credentials are valid)
   - Your actual products loaded from Shopify
   - Working add to cart functionality
   - Checkout button that redirects to the Shopify checkout URL

## Step 6: Configure Shopify Checkout Settings

1. In your Shopify admin, go to **Settings** → **Checkout**
2. Configure the following settings:
   - **Customer accounts**: Set to "Accounts are optional" or "Accounts are disabled" for easier checkout
   - **Checkout language**: Set to English (or your preferred language)
   - **Order processing**: Configure as needed for your organization

## Step 7: Set Up Payment Methods

1. Go to **Settings** → **Payments**
2. Set up your payment providers:
   - **Shopify Payments** (recommended if available in your region)
   - **PayPal**
   - **Stripe** (via Shopify Payments where available)
   - Or other payment gateways as needed

## Step 8: Configure Shipping (if applicable)

If you're selling physical merchandise:

1. Go to **Settings** → **Shipping and delivery**
2. Set up shipping zones and rates
3. Consider offering:
   - Local pickup (for campus pickup)
   - Flat rate shipping
   - Free shipping over a certain amount

## Step 9: Test the Complete Flow

1. Add products to cart on your website
2. Click "Checkout with Shopify"
3. Complete a test purchase using Shopify's test payment methods
4. Verify the order appears in your Shopify admin

## Step 10: Go Live

1. Remove any test products
2. Add your real products with accurate pricing
3. Set up your domain and SSL certificate
4. Configure your payment settings for live transactions
5. Test thoroughly before announcing to your members

## Troubleshooting

### "Demo mode" banner shows instead of Shopify connection

**Possible causes:**
- Environment variables not set correctly
- Storefront API not enabled
- Invalid access token
- Network connectivity issues
 - Products not available to the Storefront (headless) sales channel

**Solutions:**
1. Check your `.env` file exists and has correct values
2. Verify your Shopify domain format (should include `.myshopify.com`)
3. Confirm your Storefront access token is correct
4. In Shopify Admin, ensure products are active and available to the Online Store/Storefront sales channels
5. Check browser console for error messages

### Products not loading

**Possible causes:**
- No products published in your Shopify store
- Products not available for online sales
- Storefront API permissions insufficient

**Solutions:**
1. Ensure products are published and available online
2. Check product availability settings
3. Verify Storefront API permissions include product reading

### Checkout not working

**Possible causes:**
- Invalid checkout session
- Network issues
- Shopify store not properly configured

**Solutions:**
1. Check browser console for errors
2. Verify payment methods are set up in Shopify
3. Test with different browsers/devices

## Security Considerations

1. **Never expose your Admin API password** - only use the Storefront access token
2. **Use HTTPS** in production
3. **Validate all user inputs** on both client and server side
4. **Monitor for suspicious activity** in your Shopify admin

## Additional Features You Can Add

1. **Inventory Management**: Show stock levels and handle out-of-stock items
2. **Product Search**: Add search functionality to filter products
3. **Wishlist**: Allow users to save products for later
4. **Order Tracking**: Integrate with Shopify's order tracking
5. **Customer Accounts**: Allow members to create accounts and view order history
6. **Discount Codes**: Set up member discounts and promotional codes

## Support Resources

- [Shopify Partner Documentation](https://shopify.dev/)
- [Storefront API Reference](https://shopify.dev/api/storefront)
- [Shopify Buy SDK Documentation](https://github.com/Shopify/js-buy-sdk)
- [Shopify Community Forums](https://community.shopify.com/)

## Need Help?

If you encounter issues during setup:

1. Check the browser console for error messages
2. Review the Shopify admin logs
3. Consult the official Shopify documentation
4. Reach out to the development team for assistance

---

**Note**: This integration is designed to be flexible and can be extended based on your specific needs. The current implementation provides a solid foundation for selling SHPE merchandise, memberships, and event tickets through your website.
