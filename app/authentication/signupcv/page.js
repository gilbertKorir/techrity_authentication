'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfileCompletion() {
  const [source, setSource] = useState('');
  const router = useRouter();

  const handleContinue = (e) => {
    e.preventDefault();
    alert('Profile Completed');
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

      {/* Right Side - Upload CV */}
      <div className="w-7/12 flex justify-center items-center bg-white">
        <form
          onSubmit={handleContinue}
          className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96"
        >
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-6 text-sm">
            <span className="cursor-pointer">{'<-'}</span>
            <span className="text-black underline cursor-pointer">Skip this</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-black mb-2">You’re almost done</h2>
          <p className="text-sm text-gray-600 mb-6">
            Before you continue, please take a moment to create your profile
          </p>

          {/* Upload CV Box */}
        <h4>Upload your CV</h4>
          <div className="border border-dashed border-gray-400 rounded-lg p-6 text-center mb-6">
            <div className="text-3xl mb-2">⬆️</div>
            <p className="text-sm text-gray-600">Click or Drag to upload file (.pdf, .doc or .docx)</p>
            <p className="text-xs font-semibold mt-2">Max size: 20mb</p>
          </div>

          {/* Dropdown */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">How did you hear about us?</label>
            <select
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
              style={{ borderColor: '#463A93' }}
            >
              <option>Choose...</option>
              <option>Social Media</option>
              <option>Friend or Colleague</option>
              <option>Advertisement</option>
              <option>Other</option>
            </select>
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            className="w-full bg-[#463A93] text-white py-3 rounded-full hover:bg-[#3c327c]"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
