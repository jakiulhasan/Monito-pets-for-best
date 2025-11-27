"use client";
import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useSession, signIn, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default function LoginPage() {
  const { data: session } = useSession();

  if (session) {
    redirect("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 space-y-2">
        <h1 className="text-3xl font-bold text-center mb-5">Login</h1>

        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
        <button
          onClick={() => signIn("google")}
          className="w-full py-2 bg-gray-200  rounded-xl hover:bg-gray-300 transition"
        >
          <span className="flex items-center justify-center space-x-2">
            <FcGoogle />
            <span>Sign in with Google</span>
          </span>
        </button>
        <button
          onClick={() => signIn("github")}
          className="w-full py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-700 transition"
        >
          <span className="flex items-center justify-center space-x-2">
            <FaGithub />
            <span>Sign in with GitHub</span>
          </span>
        </button>
        <p className="text-center text-sm mt-5">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
