"use client";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export default function FullStackJourneyPage() {
  return (
    <div className={`min-h-screen flex items-center justify-center bg-white p-8 ${poppins.className}`}>
      <div className="w-full max-w-3xl text-center">
        {/* Main Heading */}
        <h1 className="text-7xl font-serif font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-700 drop-shadow-lg mb-12">
          Full Stack Journey
        </h1>

        {/* Step */}
        <h2 className="text-5xl font-bold text-blue-900 drop-shadow-md mb-6">
          Step 01
        </h2>

        {/* Substep / Section */}
        <div className="space-y-6">
          <h3 className="text-3xl md:text-4xl font-semibold text-blue-800 drop-shadow-sm">
            Authentications
          </h3>
          
          {/* Links */}
          <div className="flex flex-col md:flex-row justify-center gap-6 mt-4">
            <Link 
              href="/signup" 
              className="px-6 py-3 text-xl md:text-2xl font-medium text-white bg-gradient-to-r from-purple-900 to-purple-700 rounded-xl shadow-lg hover:scale-105 transition transform"
            >
              Signup
            </Link>
            <Link 
              href="/login" 
              className="px-6 py-3 text-xl md:text-2xl font-medium text-white bg-gradient-to-r from-purple-900 to-purple-700 rounded-xl shadow-lg hover:scale-105 transition transform"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
