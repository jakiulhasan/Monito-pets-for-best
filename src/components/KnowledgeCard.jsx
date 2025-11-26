import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoDotFill } from "react-icons/go";

export default function KnowledgeCard({ pet }) {
  const { productTitle, largeImage, fullDescription, meta, _id } = pet;
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
        <h1 className="bg-[#003459] rounded-full text-white w-fit px-3 py-1 text-sm mb-2">
          Pet Knowledge
        </h1>
        <h2 className="font-bold text-xl line-clamp-1">{productTitle}</h2>
        <p className="text-sm flex items-center gap-1.5 text-[#667479]">
          {fullDescription}
        </p>
      </div>
    </Link>
  );
}
