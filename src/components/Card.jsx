import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoDotFill } from "react-icons/go";

export default function Card({ pet }) {
  const { productTitle, largeImage, shortDescription, meta, _id } = pet;
  return (
    <Link
      href={`/pets/${_id}`}
      className="p-1.5 shadow-sm rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300  cursor-pointer "
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
        <h2 className="font-bold text-xl">{productTitle}</h2>
        <p className="text-sm flex items-center gap-1.5 text-[#667479]">
          Gene: {shortDescription.gender} <GoDotFill /> Age:{" "}
          {shortDescription.age}
        </p>
        <h2 className="font-bold">Price : {meta.price}</h2>
      </div>
    </Link>
  );
}
