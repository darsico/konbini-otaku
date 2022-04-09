const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3",
});

/**
 * Get Products.
 */

export const getProductsData = async (perPage) => {
  return await api.get("products", {
    per_page: perPage || 20,
  });
};


export const getSingleProductData = async (id) => {
  return await api.get(`products/${id}`);
}
