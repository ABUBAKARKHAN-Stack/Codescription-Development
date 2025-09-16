'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from "next/link";
import { SectionHeader } from '@/components/reusable';
import choose from '../../../../public/assets/imgs/choose.svg'
import { ContainerLayout } from '@/components/layout';
import Image from 'next/image';
import ContactCardServices from '../services/ContactCardServices';

function SecondaryCtaSection() {
  return (
    <section className="w-full bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900 py-20">
        <ContainerLayout >
      {/* Team / Support Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row-reverse justify-between gap-20  space-y-4"
      >

        <div className='space-y-5 lg:flex lg:flex-col lg:items-end'>
            <div className=''>
        <SectionHeader  mainHeading='Not Ready Yet?' />
            </div>
        <div className='flex flex-col items-center lg:items-end'>
        <p className="mb-6 text-[14px] md:text-lg max-w-[600px] text-center lg:text-right mx-auto lg:mx-0">
          If now isn’t the right time to connect, no problem. Browse our
          Services and see how we can help when you’re ready.
        </p>
        <Link
          href="/services"
        >
            {/* <button className=" w-[200px] text-[14px] md:text-base  px-6 py-3 rounded-xl border border-purple-600 text-purple-600 font-medium hover:bg-purple-600 hover:text-white transition-colors">
          View Our Services
            </button> */}
           <div className="relative lg:w-[250px]">
                    {/* Glow background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 rounded-2xl blur-md opacity-70 hover:opacity-100 transition duration-300"></div>

                    {/* Button core */}
                    <button className="relative group w-full bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-500/40 overflow-hidden">

                        {/* Text + Icon */}
                        <span className="relative z-10 flex items-center justify-center gap-2 text-[14px]">
                            View Our Services
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
        </Link>
        </div>
        </div>
        <div className='max-w-[500px] hidden scale-x-[-1] lg:block' >
        <Image className='' src={choose} alt='image' />
        </div>
      </motion.div>
        </ContainerLayout>
      </section>
  )
}

export default SecondaryCtaSection