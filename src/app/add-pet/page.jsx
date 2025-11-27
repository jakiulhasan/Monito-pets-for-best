"use client";
import api from "@/axios/axios";
import { useState } from "react";
import Swal from "sweetalert2";

export default function AddPetForm() {
  const [formData, setFormData] = useState({
    productTitle: "",
    largeImage: "",
    fullDescription: "",
    meta: {
      price: "",
      dateAdded: "",
      priority: 1,
    },
    shortDescription: {
      gender: "",
      age: "",
      extra: "",
    },
  });

  // handle change for nested objects
  const handleNestedChange = (e, parent) => {
    setFormData({
      ...formData,
      [parent]: {
        ...formData[parent],
        [e.target.name]: e.target.value,
      },
    });
  };

  // handle change for normal fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitted Data:", formData);

    api
      .post("/add-pet", formData)
      .then((response) => {
        console.log("Pet added successfully:", response.data);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error adding pet:", error);
        alert("Failed to add pet. Please try again.");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 mt-5 bg-white shadow-lg rounded-xl space-y-5"
    >
      <h1 className="text-2xl font-bold text-center mb-4">Add New Pet</h1>

      {/* Product Title */}
      <div>
        <label className="block text-sm font-semibold mb-1">Pet Title</label>
        <input
          type="text"
          name="productTitle"
          value={formData.productTitle}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="Pomeranian White"
          required
        />
      </div>

      {/* Image URL */}
      <div>
        <label className="block text-sm font-semibold mb-1">Image URL</label>
        <input
          type="url"
          name="largeImage"
          value={formData.largeImage}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          placeholder="https://image-link.png"
          required
        />
      </div>

      {/* Full Description */}
      <div>
        <label className="block text-sm font-semibold mb-1">
          Full Description
        </label>
        <textarea
          name="fullDescription"
          value={formData.fullDescription}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          rows={4}
          placeholder="This adorable white Pomeranian puppy..."
          required
        ></textarea>
      </div>

      {/* Short Description */}
      <div className="grid md:grid-cols-3 gap-3">
        <div>
          <label className="block text-sm font-semibold mb-1">Gender</label>
          <input
            type="text"
            name="gender"
            value={formData.shortDescription.gender}
            onChange={(e) => handleNestedChange(e, "shortDescription")}
            className="w-full border p-2 rounded"
            placeholder="Male"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Age (Month)
          </label>
          <input
            type="text"
            name="age"
            value={formData.shortDescription.age}
            onChange={(e) => handleNestedChange(e, "shortDescription")}
            className="w-full border p-2 rounded"
            placeholder="02"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Extra Info</label>
          <input
            type="text"
            name="extra"
            value={formData.shortDescription.extra}
            onChange={(e) => handleNestedChange(e, "shortDescription")}
            className="w-full border p-2 rounded"
            placeholder="White Pomeranian"
          />
        </div>
      </div>

      {/* Meta Info */}
      <h2 className="font-semibold text-lg mt-4">Meta Info</h2>
      <div className="grid md:grid-cols-3 gap-3">
        <div>
          <label className="block text-sm font-semibold mb-1">
            Price (VND)
          </label>
          <input
            type="text"
            name="price"
            value={formData.meta.price}
            onChange={(e) => handleNestedChange(e, "meta")}
            className="w-full border p-2 rounded"
            placeholder="6.900.000"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Date Added</label>
          <input
            type="date"
            name="dateAdded"
            value={formData.meta.dateAdded}
            onChange={(e) => handleNestedChange(e, "meta")}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Priority</label>
          <input
            type="number"
            name="priority"
            value={formData.meta.priority}
            onChange={(e) => handleNestedChange(e, "meta")}
            className="w-full border p-2 rounded"
            min="1"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add Pet
      </button>
    </form>
  );
}
