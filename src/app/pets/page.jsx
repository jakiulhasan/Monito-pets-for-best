"use client";
import api from "@/axios/axios";
import Card from "@/components/Card";
import React, { useEffect, useState } from "react";

export default function AllPets() {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);

  const [gender, setGender] = useState("All");

  // Price filter states
  const [maxPrice, setMaxPrice] = useState(0);
  const [priceLimit, setPriceLimit] = useState(0);

  // Search state
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("/pets").then((res) => {
      const data = res.data;

      // Convert price string → number
      const parsed = data.map((pet) => ({
        ...pet,
        numericPrice: Number(
          pet.meta.price.replace(/\./g, "").replace(" VND", "")
        ),
      }));

      setPets(parsed);

      const highest = Math.max(...parsed.map((p) => p.numericPrice));
      setMaxPrice(highest);
      setPriceLimit(highest);

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

  // Filter pets
  const filteredPets = pets
    .filter((pet) =>
      gender === "All" ? true : pet?.shortDescription?.gender === gender
    )
    .filter((pet) => pet.numericPrice <= priceLimit)
    .filter((pet) =>
      pet.productTitle.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="my-6">
      {/* Beautiful Heading */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          🐾 Explore Our Lovely Pets
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto mt-2">
          Find your perfect furry companion from our carefully selected pets.
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="🔍 Search by pet name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full max-w-md"
        />
      </div>

      {/* Filters */}
      <div className="flex justify-center flex-col md:flex-row gap-6 mb-6">
        {/* Gender Filter */}
        <div className="flex justify-center items-center gap-3">
          <label className="font-semibold whitespace-nowrap">Gender:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="select select-bordered w-40"
          >
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* Price Slider */}
        <div className="flex justify-center flex-col">
          <label className="font-semibold flex justify-center mb-1">
            Max Price: {priceLimit.toLocaleString()} VND
          </label>
          <input
            type="range"
            min={0}
            max={maxPrice}
            value={priceLimit}
            onChange={(e) => setPriceLimit(Number(e.target.value))}
            className="range range-primary text-center w-64 mx-auto"
          />
        </div>
      </div>

      {/* Pets Grid */}
      <div className="grid md:grid-cols-4 gap-4 my-3">
        {filteredPets.map((pet) => (
          <Card key={pet._id} pet={pet} />
        ))}
      </div>
    </div>
  );
}
