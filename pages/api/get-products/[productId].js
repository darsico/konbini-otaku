import { getProductsData } from "../../../utils/constants/products";

export default async function handler(req, res) {
  const { productId } = req.query;
  const { data: products } = await getProductsData();

  const product = products.find((product) => product.id === parseInt(productId));

  res.status(200).json(product);
}
