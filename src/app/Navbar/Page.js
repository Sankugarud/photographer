"use client"; // for nextjs 13.4 users
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import photologo from '../../../public/image/photoLogo.png'
import Link from "next/link";

const Navbars = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/service", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
  ];
  return (
    <>
      <header className="sticky top-px  bg-white sm:px-8 px-4 py-2 z-10 w-full">
        <nav className="flex justify-between">
          <div className="flex justify-between w-full">
            <Link href="/" className="text-3xl font-bold">
                <Image src={photologo} alt="photoLogo" priority width={100} />
            </Link>
            <ul className=" flex items-center gap-16 max-lg:hidden">
                {navLinks.map((item) => (
                <li key={item.label}>
                    <Link
                    href={item.href}
                    className=" hover:text-orange-700 font-semibold leading-normal text-lg text-slate-gray"
                    >
                    {item.label}
                    </Link>
                </li>
                ))}
            </ul>
          </div>
          
          
          <div
            className="hidden max-lg:block cursor-pointer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <RxHamburgerMenu className="text-4xl" />
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div>
          <nav className=" lg:bottom-auto bg-slate-100  ">
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <AiOutlineClose className="text-4xl" />
            </div>
            <ul className="lg:hidden flex flex-col px-8 gap-3 justify-center h-full ">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};
export default Navbars;