"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = () => {
    if (email.trim() === "") {
      alert("Please enter your email");
      return;
    }
    router.push("/authentication/signupkyc"); // Proceed if not empty
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-5/12 bg-[#463A93] flex flex-col justify-between items-center py-8">
        <div
          className="text-white text-1xl font-bold flex items-center"
          onClick={() => router.push("https://techrity.org/")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M5 12l6 6" />
            <path d="M5 12l6 -6" />
          </svg>
          &nbsp; back to website
        </div>

        {/* Copyright */}
        <div className="text-white text-sm">
          Terms & Privacy &nbsp;&nbsp; Copyright © 2024 Techrity Inc. All rights
          reserved.
        </div>
      </div>

      <div className="w-7/12 flex justify-center items-center bg-white">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
          <h2 className="text-2xl font-bold text-black mb-4">
            Sign Up to techrity
          </h2>
          <p
            className="text-sm text-black mb-4"
            style={{ fontFamily: "Adamina" }}
          >
            Continue with email
          </p>

          <div className="mb-5 relative w-full max-w-md">
            <label className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-700 text-lg">
              📧
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-black text-black placeholder-gray-500 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            className="w-full bg-[#463A93] text-white py-3 rounded-full hover:bg-[#3c327c] mb-4"
            onClick={handleSignup}
          >
            Sign up
          </button>

          <div className="flex items-center mb-4">
            <hr className="flex-grow border-gray-300" />
            <span className="px-2 text-gray-500 text-sm">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <button className="w-full bg-black text-white py-3 rounded-full flex items-center justify-center hover:bg-gray-800 mb-4">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 533.5 544.3">
              <path
                fill="#4285F4"
                d="M533.5 278.4c0-17.4-1.4-34.1-4.1-50.2H272v95h146.9c-6.4 34.7-25.2 64.1-53.9 83.7v69.6h87.2c51-47 81.3-116.2 81.3-197.1z"
              />
              <path
                fill="#34A853"
                d="M272 544.3c72.4 0 133.1-23.9 177.4-64.8l-87.2-69.6c-24.2 16.3-55 26-90.2 26-69 0-127.6-46.5-148.6-109.1H33.1v68.5c44.6 88.4 136.2 148.9 238.9 148.9z"
              />
              <path
                fill="#FBBC05"
                d="M123.4 326.8c-10-29.7-10-61.5 0-91.2V167H33.1c-40.2 79.9-40.2 174.6 0 254.5l90.3-69.7z"
              />
              <path
                fill="#EA4335"
                d="M272 107.7c39.4 0 74.7 13.5 102.5 39.8l76.7-76.7C405.1 24.8 345.1 0 272 0 169.3 0 77.7 60.5 33.1 149l90.3 69.8c21-62.7 79.6-109.1 148.6-109.1z"
              />
            </svg>
            Sign up with Google
          </button>

          <p
            className="text-xs text-gray-600 text-center mb-4"
            style={{ fontFamily: "Now Alt" }}
          >
            By creating an account, you agree with our Terms of Services,
            Privacy Policy, and our default Newsletters.
          </p>

          <p className="text-sm text-center text-gray-700">
            Already have an account?&nbsp;&nbsp;
            <span
              className="font-semibold underline cursor-pointer"
              onClick={() => router.push("/authentication/signin")}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
