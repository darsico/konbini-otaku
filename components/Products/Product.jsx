import Link from "next/link";
import Image from "next/image";
import { DEFAULT_IMG_URL } from "../../utils/constants/images";
import sanitizeHtml from "sanitize-html";
import AddToCart from "../Cart/AddToCart";

const Product = ({ product }) => {
  const img = product.images[0];
  const productType = product.type;
  return (
    <div>
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
      {"simple" === productType ? <AddToCart product={product} /> : null}
    </div>
  );
};

export default Product;