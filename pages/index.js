import axios from "axios";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import { GET_PRODUCT_ENDPOINT, HEADER_FOOTER_ENDPOINT } from "../utils/constants/endpoints";
import { getProductsData } from "../utils/constants/products";

export const getStaticProps = async () => {
  const { data: headerFooter } = await axios.get(HEADER_FOOTER_ENDPOINT);
  const { data: products } = await getProductsData();

  return {
    props: {
      headerFooter: headerFooter.data || {},
      products: products || {},
    },

    revalidate: 1,
  };
};

export default function Home({ headerFooter, products }) {
  const { header, footer } = headerFooter || {};

  return (
    <>
      <Header header={header} />

      <main>
        <Hero header={header} />
        <Products products={products} />
      </main>

      <footer>
        <Footer footer={footer} />
      </footer>
    </>
  );
}
