/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

export default function Example() {
  return (
    <div className="bg-white">
      <section className="grid items-start w-11/12 , grid-cols-1 md:grid-cols-2 p-6 mx-auto md:max-w-screen-lg md:flex-row gap-4 lg:gap-5 ">
        <figure className="aspect-[4/4]  sm:rounded sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
          <img
            src={product.images[3].src}
            alt={product.images[3].alt}
            className="object-cover object-center w-full h-full rounded-lg"
          />
        </figure>

        {/* Product info */}
        <div className="max-w-2xl mx-auto pb-16 px-4 sm:px-0 lg:pt-0 lg:pb-24 lg:grid lg:grid-cols-1 lg:grid-rows-[auto,auto,1fr] ">
          <div className="lg:col-span-2 ">
            <h4 className="mb-2 text-sm text-gray-600">Naruto</h4>
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            <div className="flex gap-2">
              <h2 className="text-xl ">{product.price}</h2>
              <h2 className="text-base text-gray-500 line-through">$250</h2>
            </div>
          </div>

          {/* Description */}
          <div className="pt-4 pb-8 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 ">
            <h3 className="sr-only">Description</h3>
            <div className="space-y-6">
              <p className="text-base text-gray-900">{product.description}</p>
            </div>
          </div>

          {/* Price and ADD TO CART */}
          <div className="mt-4 lg:mt-0">
            <h2 className="sr-only">Product information</h2>

            <div className="flex flex-col gap-5 lg:flex-row">
              <button className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white transition-colors bg-gray-900 border border-transparent rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Pagar ahora {product.price}
              </button>
              <button className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white transition-colors border border-transparent rounded-md bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500">
                Pedir en <IoLogoWhatsapp className="ml-3 scale-150" />
              </button>
            </div>
          </div>
          {/* Price and ADD TO CART  END */}
        </div>
      </section>
    </div>
  );
}
