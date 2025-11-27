import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import OurPets from "@/components/OurPets";
import PetKnowledge from "@/components/PetKnowledge";
import React from "react";

export default function page() {
  return (
    <div>
      <Banner></Banner>

      <OurPets> </OurPets>
      <Hero></Hero>
      <PetKnowledge></PetKnowledge>
      <Newsletter></Newsletter>
    </div>
  );
}
