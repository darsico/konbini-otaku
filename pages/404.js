import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen overflow-x-hidden py-16">
      <div className="px-4 lg:py-12">
        <div className="lg:gap-4 lg:flex">
          <div className="flex flex-col items-center justify-center md:py-6 lg:py-16">
            <h1 className="font-bold text-indigo-600 text-9xl">404</h1>
            <p className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-[#EF7800]">Oops!</span> Página no encontrada
            </p>
            <p className="mb-8 text-center text-gray-500 md:text-lg">La pagina que estas buscando no existe.. aún.</p>
            <Link href="/">
              <a className="px-6 py-2 text-sm font-semibold text-blue-800 bg-indigo-600 rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Go home
              </a>
            </Link>
          </div>
          <div className="mt-4 w-72 md:w-90 h-80 mx-auto -mt-10 lg:mt-0 ">
            <figure style={{ width: "100%", height: "100%", position: "relative" }}>
              <Image
                layout="fill"
                objectFit="contain"
                className="object-center object-cover w-full h-full mb-auto "
                src="
                https://i.ytimg.com/vi/xHtFw7os5Aw/maxresdefault.jpg"
                alt="img"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
