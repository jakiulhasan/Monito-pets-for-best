"use client";
import Link from "next/link";
import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  const linkItems = [
    <Link href="/" key="home">
      Home
    </Link>,
    <Link href="/pets" key="category">
      All Pets
    </Link>,
    <Link href="/about" key="about">
      About
    </Link>,
    <Link href="/contact" key="contact">
      Contact
    </Link>,
  ];

  return (
    <div className="bg-transparent backdrop-blur-sm bg-blur-2 shadow-sm sticky top-0 z-50">
      <div className="navbar max-w-6xl mx-auto px-10">
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
          {session ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost m-1 flex items-center gap-2"
              >
                <Image
                  src={session?.user?.image || "/default-avatar.png"}
                  width={400}
                  height={400}
                  alt="user photo"
                  className="w-10 h-10 rounded-full cursor-pointer"
                ></Image>
                <h2 className="font-bold">{session?.user?.name}</h2>
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <Link href={"/add-pet"}>Add Pet</Link>
                </li>
                <li>
                  <Link href={"/manage-pets"}>Manage Pets</Link>
                </li>
                <li>
                  <button
                    onClick={() => signOut()}
                    className="btn bg-base-200  px-6 py-1.5"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            // <div className="flex items-center gap-4">
            //   <span className="font-semibold">Hello, {session.user.name}</span>

            // </div>
            <Link
              href="/login"
              className="btn bg-base-300 px-10 py-1.5 rounded-full"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
