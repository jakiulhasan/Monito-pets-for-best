import api from "@/axios/axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function PetDetails({ params }) {
  const { id } = await params;

  let petData = null;

  try {
    const response = await api.get(`/pets/${id}`);
    petData = response.data;
  } catch (error) {
    console.error("Error fetching pet data:", error);
  }

  if (!petData) return <p>Pet not found.</p>;

  const fullDate = new Date(petData.meta?.dateAdded).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="w-full mt-10">
      {/* Back Button */}
      <div className="px-6 lg:px-20 mb-6">
        <Link
          href="/pets"
          className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
        >
          ← Back
        </Link>
      </div>

      {/* Page Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900">
          {petData.productTitle}
        </h1>
        <p className="text-gray-600 mt-2">
          Discover everything about your new best friend.
        </p>
      </div>

      {/* Main Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 lg:px-20">
        <div className="flex justify-center">
          <Image
            src={petData.largeImage}
            alt={petData.productTitle}
            width={500}
            height={500}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Pet Information</h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            {petData.fullDescription}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-gray-100 rounded-xl">
              <p className="text-sm text-gray-500">Gender</p>
              <p className="font-semibold">{petData.shortDescription.gender}</p>
            </div>

            <div className="p-4 bg-gray-100 rounded-xl">
              <p className="text-sm text-gray-500">Age</p>
              <p className="font-semibold">{petData.shortDescription.age}</p>
            </div>

            <div className="p-4 bg-gray-100 rounded-xl col-span-2">
              <p className="text-sm text-gray-500">Extra Info</p>
              <p className="font-semibold">{petData.shortDescription.extra}</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-green-600 mb-6">
            Price: {petData.meta.price}
          </h2>

          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
              Adopt Now
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">
              Contact Seller
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-5">Added on: {fullDate}</p>
        </div>
      </div>

      <div className="mt-20 px-6 lg:px-20">
        <h2 className="text-2xl font-bold mb-4">Why Choose This Pet?</h2>
        <p className="text-gray-700 leading-relaxed">
          This lovely pet has been raised in a healthy, happy environment. All
          pets listed on our platform are vet-checked, vaccinated, and follow
          proper care routines. We ensure every pet is in good hands before
          finding their new home.
        </p>
      </div>

      <footer className="mt-20 bg-gray-900 text-white py-10 text-center">
        <h3 className="text-xl font-semibold">Monito Pets</h3>
        <p className="text-gray-400 mt-2">
          Your trusted platform for adopting healthy and loving pets.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          © {new Date().getFullYear()} Monito Pets. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
