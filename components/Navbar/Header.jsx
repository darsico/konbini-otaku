import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteURL } from "../../utils/constants/siteURL";
import NavItemsDesktop from "./NavItemsDesktop";
import NavItemsMobile from "./NavItemsMobile";

const Header = ({ header }) => {
  const [searchInput, setSearchInput] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  const { headerMenuItems, siteTitle, siteLogoUrl } = header || {};

  return (
    <header>
      <nav className="z-10 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="relative">
            {/* For large screens */}
            <div className="px-6 py-4 dark:bg-gray-900 bg-gray-50">
              <div className="container flex items-center justify-between mx-auto">
                {/* Logo */}
                <Link href="/" passHref>
                  <figure className="w-20 cursor-pointer md:w-30">
                    <img layout="fill" className="w-full" src={siteURL + siteLogoUrl} alt={`Logo de ${siteTitle}`} />
                  </figure>
                </Link>
                {/*  nav items in desktop */}
                <NavItemsDesktop headerMenuItems={headerMenuItems} />
                <div className="flex items-center justify-end space-x-4 md:w-2/12 xl:space-x-8">
                  <div className="items-center hidden md:flex">
                    <button
                      onClick={() => setSearchInput(!searchInput)}
                      aria-label="search items"
                      className="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
                    >
                      <svg
                        className="fill-stroke"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 11C5 15.4183 8.58172 19 13 19C17.4183 19 21 15.4183 21 11C21 6.58172 17.4183 3 13 3C8.58172 3 5 6.58172 5 11Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.99961 20.9999L7.34961 16.6499"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <input
                      id="searchInput"
                      type="text"
                      placeholder="search"
                      className={` ${
                        searchInput ? "hidden" : ""
                      } text-sm dark:bg-gray-900 dark:placeholder-gray-300 text-gray-600 rounded ml-1 border border-transparent focus:outline-none focus:border-gray-400 px-1`}
                    />
                  </div>
                  <div className="items-center hidden space-x-4 md:flex xl:space-x-8">
                    <button
                      aria-label="go to cart"
                      className="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
                    >
                      <svg
                        className="fill-stroke"
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 1L1 5.8V22.6C1 23.2365 1.28095 23.847 1.78105 24.2971C2.28115 24.7471 2.95942 25 3.66667 25H22.3333C23.0406 25 23.7189 24.7471 24.219 24.2971C24.719 23.847 25 23.2365 25 22.6V5.8L21 1H5Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M1 5.7998H25"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.3346 10.6001C18.3346 11.8731 17.7727 13.094 16.7725 13.9942C15.7723 14.8944 14.4158 15.4001 13.0013 15.4001C11.5868 15.4001 10.2303 14.8944 9.23007 13.9942C8.22987 13.094 7.66797 11.8731 7.66797 10.6001"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex lg:hidden">
                    <button
                      aria-label="open menu"
                      onClick={() => setShowMenu(true)}
                      className="text-black rounded dark:text-white dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 focus:ring-gray-600"
                    >
                      <svg
                        className="fill-stroke"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 6H20"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 12H20"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 18H20"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* For small screen */}
            <div
              id="mobile-menu"
              className={`${
                showMenu ? "flex" : "hidden"
              } absolute dark:bg-gray-900 z-10 inset-0  bg-white flex-col h-screen w-full`}
            >
              <div className="flex items-center justify-between p-4 pb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-3">
                  <div>
                    <svg
                      className="text-gray-800 fill-stroke dark:text-white"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.9984 18.9999L14.6484 14.6499"
                        stroke="currentColor"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search for products"
                    className="text-sm text-gray-600 placeholder-gray-600 dark:bg-gray-900 dark:placeholder-gray-300 focus:outline-none"
                  />
                </div>
                <button
                  onClick={() => setShowMenu(false)}
                  aria-label="close menu"
                  className="rounded focus:outline-none focus:ring-2 focus:ring-gray-600"
                >
                  <svg
                    className="text-gray-800 fill-stroke dark:text-white"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 4L4 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 4L12 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
              {/* NAV ITEMS IN MOBILE VERSION */}
              <div className="p-4 mt-6">
                {" "}
                <NavItemsMobile headerMenuItems={headerMenuItems} />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
