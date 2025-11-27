import api from "@/axios/axios";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoDotFill } from "react-icons/go";
import Swal from "sweetalert2";

export default function ManageCard({ pet }) {
  const { productTitle, largeImage, shortDescription, meta, _id } = pet;

  const handleDelet = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        api
          .delete(`/deletepets/${id}`)
          .then((res) => {
            console.log("Pet deleted:", res.data);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .then(() => {
            window.location.reload();
          })
          .catch((err) => {
            console.error("Error deleting pet:", err);
          });
      }
    });
  };

  return (
    <div
      href={`/pets/${_id}`}
      className="p-1.5 shadow-sm rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
    >
      <figure>
        <Image
          loading="eager"
          src={largeImage}
          alt={productTitle}
          quality={100}
          width={800}
          height={800}
          className="w-full rounded-lg"
        />
      </figure>
      <div className="mt-1.5 p-1.5">
        <h2 className="font-bold text-xl line-clamp-1">{productTitle}</h2>
        <p className="text-sm flex items-center gap-1.5 text-[#667479]">
          Gene: {shortDescription.gender} <GoDotFill /> Age:{" "}
          {shortDescription.age.split(" ")[0]} Month
        </p>
        <h2 className="font-bold">Price : {meta.price.split(" ")[0]} VND</h2>
        <div className="flex gap-2 mt-3">
          <Link
            href={`/pets/${_id}`}
            className="bg-primary text-white rounded-full py-0.5 px-5"
          >
            View
          </Link>
          <button
            onClick={() => handleDelet(_id)}
            className="bg-red-600 text-white rounded-full py-0.5 px-5"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
