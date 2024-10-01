"use client";

import React from "react";
import { Link } from '@inertiajs/react';
import SidebarItem from "@/Layouts/Sidebar/SidebarItem";
import ClickOutside from "@/Components/ClickOutside";
import { Image } from "@nextui-org/image"
import { DevicePhoneMobileIcon } from "@heroicons/react/24/solid";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}



const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {

  const menuGroups = [
    {
      name: "MAIN MENU",
      menuItems: [
        {
          icon: (
            <DevicePhoneMobileIcon className="w-6 h-6" />
          ),
          label: "Products",
          route: "#",
          children: [
            { label: "Current", route: route('product-item.current'), active: route().current('product-item.current') },
            { label: "Available", route: route('product-item.available') , active: route().current('product-item.available') },
            { label: "Courier", route: route('product-item.courier') , active: route().current('product-item.courier')  },
            { label: "Bad", route: route('product-item.bad') , active: route().current('product-item.bad') },
            { label: "Sold", route: route('product-item.sold'), active: route().current('product-item.sold')  },
          ],
        },
      ],
    }
  ];

  return (
    <ClickOutside onClick={() => setSidebarOpen(false)}>
      <aside
        className={`absolute left-0 top-0 z-9999 flex h-screen w-80 flex-col overflow-y-hidden border-r border-stroke bg-white dark:border-stroke-dark dark:bg-gray-dark lg:static lg:translate-x-0 ${
          sidebarOpen
            ? "translate-x-0 duration-300 ease-linear"
            : "-translate-x-full"
        }`}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-between gap-2 px-6 py-2 lg:py-2 xl:py-2">
          <Link href="/">
            
            <Image
                width={100}
                height={80}
                src={"/Images/logo/logo.jpg"}
                alt="Logo"
              />
          </Link>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="block lg:hidden"
          >
            <svg
              className="fill-current"
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          {/* <!-- Sidebar Menu --> */}
          <nav className="mt-1 px-4 lg:px-6">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h3 className="mb-5 text-sm font-medium text-dark-4 dark:text-dark-6">
                  {group.name}
                </h3>

                <ul className="mb-6 flex flex-col gap-2">
                  {group.menuItems.map((menuItem, menuIndex) => (
                    <SidebarItem
                      key={menuIndex}
                      item={menuItem}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          {/* <!-- Sidebar Menu --> */}
        </div>
      </aside>
    </ClickOutside>
  );
};

export default Sidebar;
