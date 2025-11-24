import Image from "next/image";
import React from "react";

export default function Card() {
  return (
    <div className="p-1.5 shadow-sm rounded-lg">
      <figure>
        <Image src="" alt="card Image" className="" />
      </figure>
      <div className="mt-1.5 p-1.5">
        <h2>Pet Name</h2>
        <p>
          Gene: ${} Age: ${}
        </p>
        <h2>Price : 6900.000 VND</h2>
      </div>
    </div>
  );
}
