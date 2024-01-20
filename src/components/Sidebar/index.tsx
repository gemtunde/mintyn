"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
import { menus } from "@/utils/sidemenu";
import Image from "next/image";

type Props = {};

const Sidebar = (props: Props) => {
  const [active, setActive] = useState(0);
  return (
    <div
      className={`sm:none duration-200 flex flex-col !z-50 min-h-full bg-white pb-10 shadow-2xl shadow-white/5 transition-all  md:!z-50  lg:!z-50  xl:!z-0
        `}
    >
      <div className=" mt-[20px] flex items-center p-4">
        <div className="ml-1 mt-1 font-bold text-gray-100 bg-green-600 px-4 py-2 m-2 rounded-3xl">
          <Link href="/" className="cursor-pointer">
            <h2>GENERATE INVOICE</h2>
          </Link>
        </div>
      </div>
      <ul className="mb-auto ml-6 pt-1">
        {menus.map((menu) => (
          <div key={menu.id} className="p-2">
            <h4 className="text-gray-600 mb-2"> {menu.name}</h4>
            {menu.submenus.map((submenu, index) => (
              <div
                key={submenu.subId}
                className={`relative my-1 mr-8 py-2 flex hover:cursor-pointer ${
                  submenu.subId === active
                    ? "bg-blue-100 border border-l-4 border-l-blue-600"
                    : ""
                }`}
                onClick={() => setActive(index + 1)}
              >
                <li className="my-[3px] flex cursor-pointer items-center px-8">
                  <span className="font-medium text-gray-600">
                    <Image priority src={submenu.icon} alt="icon" />
                  </span>
                  <p
                    className={`text-[14px] ml-3 flex font-medium text-gray-600 
                ${submenu.subId === active ? "text-gray-700" : ""}
                `}
                  >
                    {submenu.subName}
                  </p>
                </li>
              </div>
            ))}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
