import React from "react";
import {
  IoAirplane,
  IoBatteryFull,
} from "react-icons/io5";
import { MdOutlineWifi } from "react-icons/md";

const Navbar = () => {
  return (
    <header>
      <nav className="flex w-full items-center justify-between px-10 pt-5">
        <div className="font-medium text-[1.2rem] pl-2">03:50</div>
        <div className="flex items-center gap-2 text-2xl">
            <IoAirplane />
            <MdOutlineWifi />
            <IoBatteryFull />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
