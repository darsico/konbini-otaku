import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";


import sanitizeHtml from "sanitize-html";
import WhatsAppButton from "../../components/Buttons/WhatsAppButtons";
import { DEFAULT_IMG_URL } from "../../utils/constants/images";
import { getProductsData } from "../../utils/constants/products";


export const getStaticPaths = async () => {
  const { data: products } = await getProductsData();
  const ids = products.map((product) => product.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { data: products } = await getProductsData();
  const { params } = context;
  const { id } = params;

  const productItem = products.find((product) => product.id === parseInt(id));

  return {
    props: {
      productItem,
    },
  };
};

const ProductPage = ({ productItem }) => {
  const {
    name,
    short_description,
    price,
    regular_price,
    sale_price,
    tags,
    images,
    related_ids,
    price_html,
    categories,
  } = productItem;
  const { src, alt } = images[0];
  const { name: tagName } = tags[0];
  return (
    <>
      <div className="bg-white">
        <section className="grid items-start w-11/12 , grid-cols-1 md:grid-cols-2 p-6 mx-auto md:max-w-screen-lg md:flex-row gap-4 lg:gap-5 ">
          <div className="aspect-[4/4]  sm:rounded sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <figure style={{ width: "100%", height: "100%", position: "relative" }}>
              <Image
                src={DEFAULT_IMG_URL + src}
                alt={alt}
                className="object-cover object-center w-full h-full rounded-lg "
                layout="fill"
                objectFit="contain"
              />
            </figure>
          </div>
          {/* Product info */}
          <div className="max-w-2xl mx-auto pb-16 px-4 sm:px-0 lg:pt-0 lg:pb-24 lg:grid lg:grid-cols-1 lg:grid-rows-[auto,auto,1fr] ">
            <div className="lg:col-span-2 ">
              <h4 className="mb-2 text-sm text-gray-600">{tagName}</h4>
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{name}</h1>
              <div className="flex gap-2">
                <h2 className="text-xl ">{`S/. ${sale_price || price}`}</h2>
                <h2 className="text-base text-gray-500 line-through">
                  {" "}
                  {sale_price === price ? `S/. ${regular_price}` : ""}
                </h2>
              </div>
            </div>
            {/* Description */}
            <div className="pt-4 pb-8 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 ">
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                {short_description || (
                  <div
                    dangerouslySetInnerHTML={{ __html: sanitizeHtml(short_description) }}
                    className="text-base text-gray-900"
                  ></div>
                )}
              </div>
            </div>
            {/* Price and ADD TO CART */}
            <div className="mt-4 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className="flex flex-col gap-5 lg:flex-row">
                <button className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white transition-colors bg-gray-900 border border-transparent rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  Pagar ahora S/.{price}
                </button>
                {/*  BOTON DE WHATS APP */}
                <WhatsAppButton productItem={productItem} />
              </div>
              <p className="mt-5 text-xs text-gray-800">
                *Pedidos por WhatsApp: Si estas en una computadora, asegúrate de que este activado el WhatsApp Web
              </p>
            </div>
            {/* Price and ADD TO CART  END */}
          </div>
        </section>
      </div>
    </>
  );
};

// export const getServerSideProps = async (context) => {
//  const res = await getProductsData();

// }
// const getProducts = async() => {
//   return products
// }

export default ProductPage;
