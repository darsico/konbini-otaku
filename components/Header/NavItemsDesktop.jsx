import { nanoid } from "nanoid";
import Link from "next/link";

const NavItemsDesktop = ({ headerMenuItems }) => {

  return (
    <ul className="items-center justify-center hidden w-8/12 space-x-8 md:flex">
      {headerMenuItems.map((item) => {
        let uniqueId = nanoid();
        return (
          <li key={uniqueId}>
            <Link
              href={item.url}
              className="text-base text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItemsDesktop;
