import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

function ContactCardServices() {
    return (
        <Card className="relative mx-auto h-fit  overflow-hidden rounded-3xl bg-gray-900/80 backdrop-blur-xl shadow-2xl border border-gray-800/50 hover:shadow-purple-500/10 hover:shadow-2xl transition-all duration-300  xl:max-w-md w-full ">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 via-gray-900/20 to-purple-900/20 opacity-80"></div>

            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/10 to-cyan-500/20 p-px">
                <div className="rounded-3xl bg-gray-900/90 h-full w-full"></div>
            </div>

            {/* Content */}
            <CardContent className="relative pt-4 lg:p-8 z-10">
                <div className="mb-8">
                    <h3 className="text-[20px] lg:text-2xl font-bold text-white mb-3 leading-tight">
                        Get Started
                    </h3>
                    <p className="text-gray-300 text-[14px] lg:text-lg leading-relaxed">
                        Ready to take your business to the next level?
                    </p>
                </div>

                {/* Ultra sleek button */}
                <div className="relative ">
                    {/* Glow background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 rounded-2xl blur-md opacity-70 hover:opacity-100 transition duration-300"></div>

                    {/* Button core */}
                    <button className="relative group w-full bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-500/40 overflow-hidden">

                        {/* Text + Icon */}
                        <span className="relative z-10 flex items-center justify-center gap-2 text-[14px]">
                            Contact Us
                            <svg
                                className="w-5 h-5 transform group-hover:translate-x-40 transition-transform duration-300"
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
            <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
            <div className="absolute bottom-6 left-6 w-10 h-10 bg-gradient-to-br from-cyan-500/30 to-purple-500/20 rounded-full blur-lg group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute top-12 left-12 w-20 h-20 bg-gradient-to-br from-yellow-500/30 to-purple-500/40 rounded-full blur-lg group-hover:scale-110 transition-transform duration-700"></div>

            {/* Floating particles */}
            <div className="absolute top-12 left-12 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-16 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute bottom-5 left-40 -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-500"></div>
        </Card>
    )
}

export default ContactCardServices