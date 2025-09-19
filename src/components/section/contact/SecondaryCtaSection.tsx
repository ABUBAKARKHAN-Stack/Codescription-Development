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
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

function SecondaryCtaSection() {
  return (
    <section className="w-full bg-gradient-to-br from-purple-900 via-slate-900 to-purple-900 py-16">
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
                <InteractiveHoverButton className="text-primary ext-white float-end w-fit transform overflow-hidden rounded-2xl border-none bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 py-4 font-semibold transition-all duration-300 focus:ring-4 focus:ring-purple-500/40 focus:outline-none active:scale-95">
                  View Our Services
                </InteractiveHoverButton>
              </Link>
            </div>
          </div>
          <div className="hidden max-w-[500px] scale-x-[-1] lg:block">
            <ChooseIllustration className="size-full" />
          </div>
        </motion.div>
      </ContainerLayout>
    </section>
  );
}

export default SecondaryCtaSection;
