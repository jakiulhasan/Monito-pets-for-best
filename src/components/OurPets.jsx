"use client";
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import api from "@/axios/axios";
import Card from "./Card";

export default function OurPets() {
  useEffect(() => {
    api.get("/users").then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div className="px-10">
      <div>
        <h3>Whats New?</h3>
        <div className="flex justify-between">
          <h1 className="font-bold text-[#003459]">
            Take a look at some of our pets
          </h1>
          <button className="btn btn-outline text-[#003459] rounded-full">
            {" "}
            View More <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 my-10">
        <Card></Card>
      </div>
    </div>
  );
}
