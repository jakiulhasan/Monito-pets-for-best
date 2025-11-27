"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import api from "@/axios/axios";
import ManageCard from "@/components/ManageCard";

export default function ManagePets() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/pets").then((res) => {
      setPets(res.data);
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
    <div className="p-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-2 text-center">Manage Pets</h1>
      <p className="text-gray-600 mb-6 text-center">
        View, manage, or delete pets from the list below.
      </p>

      {/* Pet List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.isArray(pets) && pets.length > 0 ? (
          pets.map((pet) => <ManageCard key={pet._id} pet={pet}></ManageCard>)
        ) : (
          <p className="col-span-full text-gray-500">No pets available.</p>
        )}
      </div>
    </div>
  );
}
