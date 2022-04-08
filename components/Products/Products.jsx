import Product from "./Product";

const Products = ({ products }) => {
  return (
    <section className="max-w-2xl py-10 px-4 pb-16 mx-auto sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8 flex flex-col gap-6">
      <h2 className="text-2xl text-center font-bold ">Explora nuestro catálogo</h2>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products ? (
          products.map((product) => {
            return <Product key={product.id} product={product} />;
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
