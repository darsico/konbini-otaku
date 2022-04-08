import Link from "next/link";

import Image from "next/image";
import { DEFAULT_IMG_URL } from "../../utils/constants/images";

const Products = ({ productList }) => {
  return (
    <div className="max-w-2xl px-4 pb-16 mx-auto sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Productos</h2>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {productList.map((product) => {
          const img = product.images[0];
          return productList.length > 0 ? (
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
                <p className="mt-1 text-lg font-medium text-gray-900">S/.{product.price}</p>
              </a>
            </Link>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Products;
