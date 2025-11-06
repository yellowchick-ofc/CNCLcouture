"use client"

import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-6 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border border-gray-600" />
          ))}
        </div>
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">Get 20% OFF</h2>
        <p className="text-2xl md:text-3xl font-light mb-8">On Your First Purchase</p>

        <p className="text-gray-400 mb-8">Sign up for our newsletter and receive exclusive deals and offers</p>

        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 bg-white text-black placeholder-gray-500 focus:outline-none"
          />
          <button className="bg-white text-black px-6 py-3 font-semibold hover:bg-gray-100 transition whitespace-nowrap">
            REGISTER IT NOW
          </button>
        </div>
      </div>
    </section>
  )
}
