import { Card, CardContent } from "@/components/ui/card";
import React from "react";

function ContactCardServices() {
  return (
    <Card className="relative mx-auto h-fit w-full overflow-hidden rounded-3xl border border-gray-800/50 bg-gray-900/80 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 xl:max-w-md">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 via-gray-900/20 to-purple-900/20 opacity-80"></div>

      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/10 to-cyan-500/20 p-px">
        <div className="h-full w-full rounded-3xl bg-gray-900/90"></div>
      </div>

      {/* Content */}
      <CardContent className="relative z-10 pt-4 lg:p-8">
        <div className="mb-8">
          <h3 className="mb-3 text-[20px] leading-tight font-bold text-white lg:text-2xl">
            Get Started
          </h3>
          <p className="text-[14px] leading-relaxed text-gray-300 lg:text-lg">
            Ready to take your business to the next level?
          </p>
        </div>

        {/* Ultra sleek button */}
        <div className="relative">
          {/* Glow background */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 opacity-70 blur-md transition duration-300 hover:opacity-100"></div>

          {/* Button core */}
          <button className="group relative w-full transform overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 px-6 py-4 font-semibold text-white transition-all duration-300 focus:ring-4 focus:ring-purple-500/40 focus:outline-none active:scale-95">
            {/* Text + Icon */}
            <span className="relative z-10 flex items-center justify-center gap-2 text-[14px]">
              Contact Us
              <svg
                className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
        </div>
      </CardContent>

      {/* Decorative elements */}
      <div className="absolute top-6 right-6 h-16 w-16 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-xl transition-transform duration-500 group-hover:scale-110"></div>
      <div className="absolute bottom-6 left-6 h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-500/20 blur-lg transition-transform duration-700 group-hover:scale-110"></div>
      <div className="absolute top-12 left-12 h-20 w-20 rounded-full bg-gradient-to-br from-yellow-500/30 to-purple-500/40 blur-lg transition-transform duration-700 group-hover:scale-110"></div>

      {/* Floating particles */}
      <div className="absolute top-12 left-12 h-1 w-1 animate-pulse rounded-full bg-purple-400"></div>
      <div className="absolute top-20 right-16 h-1 w-1 animate-pulse rounded-full bg-blue-400 delay-1000"></div>
      <div className="absolute bottom-5 left-40 h-1 w-1 -translate-x-1/2 animate-pulse rounded-full bg-yellow-400 delay-500"></div>
    </Card>
  );
}

export default ContactCardServices;
