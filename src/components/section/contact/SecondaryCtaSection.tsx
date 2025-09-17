"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeader } from "@/components/reusable";
import choose from "../../../../public/assets/imgs/choose.svg";
import { ContainerLayout } from "@/components/layout";
import Image from "next/image";
import ContactCardServices from "../services/ContactCardServices";
import { ChooseIllustration } from "@/components/ui/illustrations";

function SecondaryCtaSection() {
  return (
    <section className="w-full bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900 py-20">
      <ContainerLayout>
        {/* Team / Support Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between gap-20 space-y-4 lg:flex-row-reverse"
        >
          <div className="space-y-5 lg:flex lg:flex-col lg:items-end">
            <div className="">
              <SectionHeader mainHeading="Not Ready Yet?" />
            </div>
            <div className="flex flex-col items-center lg:items-end">
              <p className="mx-auto mb-6 max-w-[600px] text-center text-[14px] md:text-lg lg:mx-0 lg:text-right">
                If now isn’t the right time to connect, no problem. Browse our
                Services and see how we can help when you’re ready.
              </p>
              <Link href="/services">
                {/* <button className=" w-[200px] text-[14px] md:text-base  px-6 py-3 rounded-xl border border-purple-600 text-purple-600 font-medium hover:bg-purple-600 hover:text-white transition-colors">
          View Our Services
            </button> */}
                <div className="relative lg:w-[250px]">
                  {/* Glow background */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 opacity-70 blur-md transition duration-300 hover:opacity-100"></div>

                  {/* Button core */}
                  <button className="group relative w-full transform overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 px-6 py-4 font-semibold text-white transition-all duration-300 focus:ring-4 focus:ring-purple-500/40 focus:outline-none active:scale-95">
                    {/* Text + Icon */}
                    <span className="relative z-10 flex items-center justify-center gap-2 text-[14px]">
                      View Our Services
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
              </Link>
            </div>
          </div>
          <div className="hidden max-w-[500px] scale-x-[-1] lg:block">
            <ChooseIllustration
              className="size-full"
            />
          </div>
        </motion.div>
      </ContainerLayout>
    </section>
  );
}

export default SecondaryCtaSection;
