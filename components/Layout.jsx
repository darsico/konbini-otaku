import Head from "next/head";
import Header from "./Header/Header";
import Footer from "./Footer/Footer.jsx";
import { siteURL } from "../utils/constants/siteURL";

const Layout = ({ children, headerFooter }) => {
  const { header, footer } = headerFooter.data;

  const { siteDescription, siteTitle, favicon } = header;
  return (
    <>
      <Head>
        <title>{siteTitle} || Tienda Otaku</title>
        <meta name="description" content={siteDescription} />
        <link rel="icon" href={siteURL + favicon} />
      </Head>
      <Header header={header} />
      {children}
      <Footer footer={footer} />
    </>
  );
};

export default Layout;
