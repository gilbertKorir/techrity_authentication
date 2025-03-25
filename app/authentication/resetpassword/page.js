'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const handleReset = (e) => {
    e.preventDefault();
    alert('Password reset link sent!');
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side */}
      <div className="w-5/12 bg-[#463A93] flex flex-col justify-between items-center py-8">
       <div className="text-white text-1xl font-bold flex items-center">
 <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" />
<path d="M5 12l6 6" /><path d="M5 12l6 -6" /></svg>&nbsp;
  back to website
</div>


  {/* Copyright */}
  <div className="text-white text-sm">
   Terms & Privacy &nbsp;&nbsp; Copyright © 2024 Techrity Inc. All rights reserved.
  </div>
      </div>

      {/* Right Side - Reset Password */}
      <div className="w-7/12 flex justify-center items-center bg-white">
        <form
          onSubmit={handleReset}
          className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96"
        >
          {/* Back Arrow */}
          <div className="text-2xl mb-6 cursor-pointer">←</div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-black mb-2">Reset your password</h2>
          <p className="text-sm text-gray-600 mb-6">
            Enter the email address associated with your account, and we’ll send you a link to reset password.
          </p>

          {/* Email Input */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-1">Email</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">📧</span>
              <input
                type="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                style={{ borderColor: '#463A93' }}
              />
            </div>
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            className="w-full bg-gray-400 text-white py-3 rounded-full cursor-not-allowed mb-6"
            disabled
          >
            Continue
          </button>

          {/* Sign Up */}
          <p className="text-sm text-center text-gray-700">
            Don’t have an account? <span className="font-semibold underline cursor-pointer"
            onClick={() => router.push('/authentication')}
            >Sign up</span>
          </p>
        </form>
      </div>
    </div>
  );
}
