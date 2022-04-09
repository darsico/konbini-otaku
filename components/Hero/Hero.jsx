const Hero = ({ header }) => {
  const { headerMenuItems, siteDescription, siteTitle, siteLogoUrl } = header || {};
  return (
    <header className="relative overflow-hidden bg-white sans">
      <div className="mx-auto max-w-7xl">
        <div className="relative pb-8 mx-auto bg-white lg:max-w-2xl lg:w-full">
          <main className="px-4 mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Bienvenidos a </span>{" "}
                <span className="block text-indigo-600 xl:inline">{siteTitle}</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {siteDescription}
              </p>
              <div className="justify-center mt-5 sm:mt-8 sm:flex">
                <div className="rounded-md shadow ">
                  <a
                    href="#"
                    className="flex items-center justify-center w-full px-6 py-4 mx-auto text-base font-medium text-white bg-gray-900 border border-transparent border-none divide-x divide-gray-600 rounded-md hover:bg-gray-700 md:text-lg"
                  >
                    <span className="pr-6">Obtén los nuevos stickers</span>
                    <span className="pl-6">S/.20</span>
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </header>
  );
};

export default Hero;
