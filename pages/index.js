import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";

import { getProductsData } from "../utils/constants/products";

export const getStaticProps = async () => {
  const { data: products } = await getProductsData();

  return {
    props: {
      products: products || {},
    },

    revalidate: 1,
  };
};

export default function Home({ products, headerFooter }) {
  const { header } = headerFooter.data || {};

  return (
    <main>
      <Hero header={header} products={products} />
      <Products products={products} />
    </main>
  );
}
