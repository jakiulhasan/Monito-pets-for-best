import Image from "next/image";
import React from "react";
import bannerPicture from "../assets/bannerPicture.png";
import { FaRegPlayCircle } from "react-icons/fa";

export default function Banner() {
  return (
    <div className="mb-10 bg-[url('../assets/Herro_Banner.png')] bg-cover bg-no-repeat relative w-full">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 lg:px-10 flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Text Section */}
        <div className="flex flex-col justify-center text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-black text-[#002A48]">
            One More Friend
          </h1>
          <h3 className="text-2xl sm:text-4xl font-bold text-[#002A48] mt-2">
            Thousands More Fun!
          </h3>
          <p className="text-sm sm:text-base text-[#242B33] mt-4 sm:mt-6 lg:w-3/4">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
            <button className="btn btn-outline rounded-full text-[#003459] flex items-center justify-center gap-2">
              View Intro <FaRegPlayCircle />
            </button>
            <button className="btn bg-[#003459] text-white rounded-full">
              Explore Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
          <Image
            src={bannerPicture}
            alt="banner image"
            className="w-full max-w-lg h-auto"
          />
        </div>
      </div>
    </div>
  );
}
