"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import api from "@/axios/axios";
import Card from "./Card";

export default function OurPets() {
  const [loading, setLoading] = useState(true);
  const [pets, setPets] = React.useState([]);

  useEffect(() => {
    api.get("/pets").then((res) => {
      console.log(res.data);
      const filteredPets = res.data.slice(0, 8);
      setPets(filteredPets);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="py-10 flex justify-center items-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="px-10">
      <div className="flex justify-between items-center">
        <div>
          <h3>Whats New?</h3>
          <h1 className="font-bold text-[#003459]">
            Take a look at some of our pets
          </h1>
        </div>
        <div>
          <button className="btn btn-outline text-[#003459] rounded-full">
            {" "}
            View More <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4 my-3">
        {pets.map((pet) => (
          <Card key={pet._id} pet={pet} />
        ))}
      </div>
    </div>
  );
}
