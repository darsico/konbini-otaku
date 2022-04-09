import axios from "axios";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { HEADER_FOOTER_ENDPOINT } from "../utils/constants/endpoints";

function MyApp({ Component, pageProps, headerFooter }) {
  return (
    <Layout headerFooter={headerFooter}>
      {" "}
      <Component {...pageProps} headerFooter={headerFooter} />;
    </Layout>
  );
}

export default MyApp;

MyApp.getInitialProps = async () => {
  const { data: headerFooter } = await axios.get(HEADER_FOOTER_ENDPOINT);
  return {
    headerFooter,
  };
};
