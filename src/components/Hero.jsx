import Image from "next/image";
import React from "react";
import pets from "../assets/pets.png";
import { FaRegPlayCircle } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="w-full mt-10 bg-[#0A3A5C] text-white rounded-2xl overflow-hidden flex flex-col lg:flex-row items-center">
      <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px]">
        <Image
          src={pets}
          alt="Person holding pet"
          fill
          className="object-contain lg:object-cover"
          priority
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 bg-[#F5E9D5] text-[#003459] p-8 lg:p-14 rounded-t-3xl lg:rounded-l-[60px] lg:rounded-t-none">
        <h1 className="text-3xl md:text-4xl font-extrabold">One More Friend</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-[#003459]">
          Thousands More Fun!
        </h2>

        <p className="mt-4 text-sm md:text-base leading-relaxed">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-3">
          <button className="btn btn-outline rounded-full text-[#003459]">
            View Intro <FaRegPlayCircle />
          </button>
          <button className="btn bg-[#003459] text-white rounded-full ">
            {" "}
            Explore Now{" "}
          </button>
        </div>
      </div>
    </section>
  );
}
