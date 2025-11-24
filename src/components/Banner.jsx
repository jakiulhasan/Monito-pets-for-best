import Image from "next/image";
import React from "react";
import bannerPicture from "../assets/bannerPicture.png";
import { FaRegPlayCircle } from "react-icons/fa";

export default function Banner() {
  return (
    <div className="bg-[url('../assets/Herro_Banner.png')] bg-cover bg-no-repeat text-white relative w-full -top-16">
      <div className="w-full mt-16 flex px-10">
        <div className="flex flex-1 flex-col justify-center">
          <h1 className="text-5xl text-[#002A48] font-black">
            One More Friend
          </h1>
          <h3 className="font-bold text-4xl text-[#002A48] ">
            Thousands More Fun!
          </h3>
          <p className="font-medium pt-3.5 text-[12px] text-[#242B33] w-3/4">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
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
        <div className="flex-1">
          <Image
            src={bannerPicture}
            alt="banner image"
            className="w-full h-auto"
          ></Image>
        </div>
      </div>
    </div>
  );
}
