import React from "react";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

const SidebarDropdown = ({ item }: any) => {

  return (
    <>
      <ul className="my-2 flex flex-col gap-1.5 pl-9">
        {item.map((item: any, index: number) => (
          <li key={index}>
            <ResponsiveNavLink href={item.route} active={item.active}>{item.label}</ResponsiveNavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SidebarDropdown;
