import { nanoid } from "nanoid";
import Link from "next/link";

const NavItemsMobile = ({ headerMenuItems }) => {
  return (
    <ul className="flex flex-col space-y-6">
      {headerMenuItems.map((item) => {
        let uniqueId = nanoid();
        return (
          <li
            key={uniqueId}
            className="flex items-center justify-between text-base text-gray-800 dark:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-gray-800"
          >
            <Link href={item.url}>{item.title}</Link>
            <svg
              className="text-black fill-stroke dark:text-white"
              width={12}
              height={12}
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 3L7.5 6L4.5 9"
                stroke="currentColor"
                strokeWidth="0.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItemsMobile;
