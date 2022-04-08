const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_URL,
  consumerKey: process.env.WC_CONSUMER_KEY,
  consumerSecret: process.env.WC_CONSUMER_SECRET,
  version: "wc/v3",
});

export default async function handler(request, response) {
  const responseData = {
    success: false,
    products: [],
  };

  const { perPage } = request?.query ?? {};

  try {
    const { data } = await api.get("products", {
      per_page: perPage || 20,
    });

    responseData.success = true;
    responseData.products = data;

    response.json(responseData);
  } catch (error) {
    responseData.error = error.message;
    response.status(500).json(responseData);
  }
}
