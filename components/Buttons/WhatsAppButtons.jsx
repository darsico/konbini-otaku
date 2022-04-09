import { IoLogoWhatsapp } from "react-icons/io";
const WhatsAppButton = ({ productItem }) => {
  const { name, regular_price, sale_price, tags } = productItem;
  const { name: tagName } = tags[0];
  const apiWhatsApp = `https://api.whatsapp.com/send?phone=51991537893&text=Hola%20Konbini%20Otaku%20Store,%20quiero%20comprar%20el%20siguiente%20producto:%20${name};%20Tema:%20${tagName};%20el%20precio%20es%20el%20siguiente:%20S/.%20${
    sale_price || regular_price
  }.%20Muchas%20Gracias`;

  return (
    <>
      <a
        href={apiWhatsApp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white transition-colors border border-transparent rounded-md bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
      >
        Pedir en <IoLogoWhatsapp className="ml-3 scale-150" />
      </a>
    </>
  );
};

export default WhatsAppButton;
