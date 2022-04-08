import axios from "axios";
import Footer from "../components/Footer/Footer";
import Header from "../components/header/Header";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import { GET_PRODUCT_ENDPOINT, HEADER_FOOTER_ENDPOINT } from "../utils/constants/endpoints";

export const getStaticProps = async () => {
  const { data: headerFooter } = await axios.get(HEADER_FOOTER_ENDPOINT);
  const { data: products } = await axios.get("http://localhost:3000/api/get-products");

  const data = {
    headerFooter,
    products,
  };
  return {
    props: data || {},
    revalidate: 1,
  };
};

export default function Home({ headerFooter, products }) {
  const { header, footer } = headerFooter.data || {};
  const { products: productList } = products;

  return (
    <>
      <Header header={header} />

      <main>
        <Hero header={header} />
        <Products productList={productList} />
      </main>

      <footer>
        <Footer footer={footer} />
      </footer>
    </>
  );
}
