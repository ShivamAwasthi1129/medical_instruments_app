"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

import { CiShoppingCart } from "react-icons/ci";

import { CiUser } from "react-icons/ci";


const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-0 inset-x-0 max-w-full mx-auto z-50  flex items-center justify-evenly  bg-white/50 backdrop-blur-md")}
    >
       <div className="left flex items-center">
        <img className="h-16" src="/photos/logo.png" alt=""  />
      </div>
        <div className="center"> <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">CPAP Masks</HoveredLink>
            <HoveredLink href="/courses">CPAP Machines</HoveredLink>
            <HoveredLink href="/courses">CPAP Suplies</HoveredLink>
            <HoveredLink href="/courses">Power Solutions</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/Brandshop"}>
          <MenuItem setActive={setActive} active={active} item="Shop by brand">
          <div className="flex flex-row space-x-7 ">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">ResMed</HoveredLink>
              <HoveredLink href="/interface-design"> Philips Respironics</HoveredLink>
              <HoveredLink href="/seo">Fisher & Paykal</HoveredLink>
              <HoveredLink href="/branding">Choice One Medical</HoveredLink>
            </div>
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Medistrom</HoveredLink>
              <HoveredLink href="/interface-design">Somnetics</HoveredLink>
              <HoveredLink href="/seo">Breas</HoveredLink>
              <HoveredLink href="/branding">React Health</HoveredLink>
            </div>
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Drive Medical</HoveredLink>
              <HoveredLink href="/interface-design">Liviliti Health Products</HoveredLink>
              <HoveredLink href="/seo">Transcend</HoveredLink>
              <HoveredLink href="/branding">Zopec Medical</HoveredLink>
            </div>

            </div>
          </MenuItem>
        </Link>
        <Link href={"/blog"}>
          <MenuItem setActive={setActive} active={active} item="Blog">
          </MenuItem>
        </Link>
        <Link href={"/ContactUs"} >
          <MenuItem  setActive={setActive} active={active} item="Contact Us">
          </MenuItem>
        </Link>
      
     
      </Menu></div>
      <div className="right flex items-center justify-around  w-[10%]">
        <CiSearch className="hover:invert-0" filter="invert(1)" size={34}  />
        <Link href={"/Cart"}> <CiShoppingCart className="hover:invert-0" filter="invert(1)" size={34} /></Link>
        <Link  href={"/userLogin"}> <CiUser className="hover:invert-0" filter="invert(1)" size={34} /></Link>
        </div>
      
      </div>
      
   

  );
};
export default Navbar;