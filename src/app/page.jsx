import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import OurPets from "@/components/OurPets";
import React from "react";

export default function page() {
  return (
    <div>
      <div className=" flex justify-center">
        <Banner></Banner>
      </div>
      <OurPets> </OurPets>
      <Hero></Hero>
    </div>
  );
}
