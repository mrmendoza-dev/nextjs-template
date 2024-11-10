"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "@assets/icons";
import ThemeToggle from "./ThemeToggle";
// import { apps, notifications } from "@data/defaultData";
import Link from "next/link";
import { useApplicationShell } from "@contexts/ApplicationShellContext";

function Nav() {
  const {
    expandedSidebar,
    setExpandedSidebar,
    sidebarWidths,
    setSidebarWidths,
  } = useApplicationShell();

  return (
    <nav
      onClick={() => {
        console.log("clicked");
      }}
      className="Nav bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex justify-start items-center">
          <button
            className="mr-2 px-3 py-2 text-sm font-medium focus:outline-none rounded-md border hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-primary-700 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => {
              console.log("clicked");
              setExpandedSidebar(!expandedSidebar);
            }}
          >
            <FontAwesomeIcon icon={icons.faBars} className="" />
          </button>

          <Link href="/" className="flex items-center justify-between mr-4">
            <img
              src="/images/logo.png"
              className="mr-3 h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-black">
              Title
            </span>
          </Link>
          <form action="#" method="GET" className="hidden md:block md:pl-2">
            <label htmlFor="topbar-search" className="sr-only">
              Search
            </label>
            <div className="relative md:w-64 md:w-96">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <FontAwesomeIcon
                  icon={icons.faMagnifyingGlass}
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                />
              </div>
              <input
                type="text"
                name="email"
                id="topbar-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
        <div className="flex items-center lg:order-2">
          <ThemeToggle />
          <button
            type="button"
            data-drawer-toggle="drawer-navigation"
            aria-controls="drawer-navigation"
            className="p-2 mr-1 text-gray-500 rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Toggle search</span>
            <FontAwesomeIcon
              aria-hidden="true"
              icon={icons.faMagnifyingGlass}
              className="w-5 h-5"
            />
          </button>
          {/* <!-- Notifications --> */}
          <button
            type="button"
            data-dropdown-toggle="notification-dropdown"
            className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <span className="sr-only">View notifications</span>
            {/* <!-- Bell icon --> */}

            <FontAwesomeIcon icon={icons.faBell} className="w-5 h-5" />
          </button>

          {/* <!-- Apps --> */}
          <button
            type="button"
            data-dropdown-toggle="apps-dropdown"
            className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            <span className="sr-only">View notifications</span>
            {/* <!-- Icon --> */}
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
            </svg>
          </button>

          <button
            type="button"
            className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="dropdown"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="/images/avatar.jpg"
              alt="user photo"
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
