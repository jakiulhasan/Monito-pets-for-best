import Banner from "@/components/Banner";
import OurPets from "@/components/OurPets";
import React from "react";

export default function page() {
  return (
    <div>
      <div className=" flex justify-center">
        <Banner></Banner>
      </div>
      <OurPets> </OurPets>
      
    </div>
  );
}
