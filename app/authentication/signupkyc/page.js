'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupKyc() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    gender: '',
    termsAccepted: false,
  });
 const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    //alert(`Account Created for ${formData.firstName} ${formData.lastName}`);
  };

  return (
    <div className="flex min-h-screen">
      {/* Left side */}
      <div className="w-5/12 bg-[#463A93] flex flex-col justify-between items-center py-8">
        <div className="text-white text-1xl font-bold">back to website</div>
        <div className="text-white text-sm">
          Terms & Privacy | Copyright © 2024 Techrity Inc. All rights reserved.
        </div>
      </div>

      {/* Right side - Signup Form */}
      <div className="w-7/12 flex justify-center items-center bg-white">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96"
        >
          <h2 className="text-2xl font-bold text-black text-center mb-6">
            Sign Up to techrity
          </h2>

          {/* First and Last Name */}
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Ada"
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
                style={{ borderColor: '#463A93' }}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Segun"
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
                style={{ borderColor: '#463A93' }}
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="+ 6 Characters"
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
                style={{ borderColor: '#463A93' }}
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="+ 6 Characters"
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
                style={{ borderColor: '#463A93' }}
              />
            </div>
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
              style={{ borderColor: '#463A93' }}
            >
              <option>Rather not say</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Create Account Button */}
          <button
            type="submit"
            className="w-full bg-[#463A93] text-white py-3 rounded-full hover:bg-[#3c327c] mb-4"
            onClick={() => router.push('/authentication/signupcv')}
          >
            Create Account
          </button>

          {/* Terms */}
          <div className="flex items-start mb-4">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2"
            />
            <p className="text-xs text-gray-500">
              I agree with Techrity's{' '}
              <span className="underline">Terms of Services</span>,{' '}
              <span className="underline">Privacy Policy</span> and default{' '}
              <span className="underline">Newsletter Notifications</span>.
            </p>
          </div>

          {/* Already have an account */}
          <p className="text-sm text-center text-gray-700">
            Already have an account?{' '}
            <span className="font-semibold underline cursor-pointer"
            onClick={() => router.push('/authentication/signin')}
            >Login</span>
          </p>
        </form>
      </div>
    </div>
  );
}
