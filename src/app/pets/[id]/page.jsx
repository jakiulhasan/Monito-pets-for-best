import api from "@/axios/axios";
import Image from "next/image";
import React from "react";

export default async function PetDetails({ params }) {
  const { id } = await params;

  let petData = null;

  try {
    const response = await api.get(`/pets/${id}`);
    petData = response.data;
    console.log(petData);
  } catch (error) {
    console.error("Error fetching pet data:", error);
  }

  if (!petData) return <p>Pet not found.</p>;

  return (
    <div className="mt-10">
      <div className="flex gap-5">
        <Image
          src={petData.largeImage}
          alt={petData.productTitle}
          width={400}
          height={400}
        />
        <div>
          <h1 className="text-3xl font-bold">{petData.productTitle}</h1>
          <p>{petData.fullDescription}</p>
          <h2 className="font-bold text-xl">Price: {petData.meta.price}</h2>
        </div>
      </div>
    </div>
  );
}
