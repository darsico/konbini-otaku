import Link from "next/link";

import Image from "next/image";
import { DEFAULT_IMG_URL } from "../../utils/constants/images";
import sanitizeHtml from "sanitize-html";

const Products = ({ products }) => {
  return (
    <section className="max-w-2xl py-10 px-4 pb-16 mx-auto sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-col gap-6">
      <h2 className="text-2xl text-center font-bold ">Explora nuestro catálogo</h2>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products ? (
          products.map((product) => {
            const img = product.images[0];
            return (
              <Link key={product.id} href={product.permalink}>
                <a className="group">
                  <figure className="w-full aspect-[4/3]   rounded-lg  group-hover:opacity-75 shadow">
                    <div style={{ width: "100%", height: "100%", position: "relative" }}>
                      <Image
                        layout="fill"
                        objectFit="contain"
                        className="object-center object-cover group-hover:opacity-75"
                        src={DEFAULT_IMG_URL + img.src}
                        alt={img.alt}
                        title={product.name}
                      />
                    </div>
                  </figure>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900"></p>
                  <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(product.price_html) }}></div>
                </a>
              </Link>
            );
          })
        ) : (
          <div>No se pudo fetchear</div>
        )}
      </div>
      {/* "<del aria-hidden="true">
      <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">S/</span>&nbsp;65.00</bdi></span></del> 
      <ins><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">S/</span>&nbsp;60.00</bdi></span></ins>" */}
    </section>
  );
};

export default Products;
