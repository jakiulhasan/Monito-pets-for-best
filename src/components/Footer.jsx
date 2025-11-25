import Image from "next/image";
import React from "react";
import logo from "../assets/logo.png";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
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
    <footer className="max-w-6xl mx-auto mt-10">
      <div className="flex flex-col gap-5 lg:flex-row justify-between items-center">
        <div className="flex gap-10 ">{linkItems}</div>
        <div className="flex gap-10 text-2xl">
          <Link href="">
            <FaFacebook />
          </Link>
          <Link href="">
            <FaTwitter />
          </Link>
          <Link href="">
            <FaInstagram />
          </Link>
          <Link href="">
            <FaYoutube />
          </Link>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center p-5 border-t border-gray-300 mt-5">
        <div className="flex-1">
          <p>Copyright © 2024 - All right reserved by Monito</p>
        </div>
        <div className="flex-1 flex justify-center">
          <Image src={logo} alt="logo" className="w-25" />
        </div>
        <div className="flex-1 flex justify-end gap-5">
          <Link href="/">Terms of Service</Link>
          <Link href="/">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
