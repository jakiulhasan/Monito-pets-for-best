"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setStatus("Please enter an email.");
      return;
    }

    setStatus("Thanks for subscribing! 🎉");
    setEmail("");
  };

  return (
    <section className="bg-base-100 rounded-2xl p-6 md:p-10 mt-10 shadow-md">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold ">
          Subscribe to Our Newsletter
        </h2>

        <p className=" mt-2">
          Get updates, tips, and exclusive content delivered straight to your
          inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col md:flex-row items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all w-full md:w-auto"
          >
            Subscribe
          </button>
        </form>

        {status && (
          <p className="mt-3 text-sm font-medium text-green-600">{status}</p>
        )}
      </div>
    </section>
  );
}
