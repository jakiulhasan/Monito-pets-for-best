import Link from "next/link";
import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";

export default function Navbar() {
  const linkItems = [
    <Link href="/" key="home">
      Home
    </Link>,
    <Link href="/category" key="category">
      Category
    </Link>,
    <Link href="/about" key="about">
      About
    </Link>,
    <Link href="/contact" key="contact">
      Contact
    </Link>,
  ];

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar w-6xl mx-auto ">
        <div className="navbar-start">
          {/* For Mobile Device  */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {linkItems}
            </ul>
          </div>
          {/* Mobile dropdown end */}

          {/* Logo */}
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              className="w-22 h-8 cursor-pointer"
            ></Image>
          </Link>
        </div>
        {/* navbar center */}
        <div className="navbar-center hidden lg:flex lg:gap-10">
          <div className="">
            <ul className="menu menu-horizontal px-1 flex gap-5 font-semibold">
              {linkItems}
            </ul>
          </div>
          <div>
            <label className="input rounded-4xl">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" required placeholder="Search" />
            </label>
          </div>
        </div>

        <div className="navbar-end">
          <a className="btn-primary btn px-10 py-1.5 rounded-full">Login</a>
        </div>
      </div>
    </div>
  );
}
