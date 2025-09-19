"use client";
import React from "react";
import { motion } from "framer-motion";
import { Handshake, Users } from "lucide-react";
import { SectionHeader } from "@/components/reusable";
import { ContainerLayout } from "@/components/layout";
import { SupportIllustration } from "@/components/ui/illustrations";

function SupportHighlightSection() {
  return (
    <section className="w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16">
      <ContainerLayout>
        {/* Team / Support Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="justify-between gap-20 space-y-4 lg:flex"
        >
          <div className="space-y-5">
            <SectionHeader mainHeading=" Real People. Real Support." />
            <div className="flex justify-center gap-3 text-purple-200">
              <Users className="h-8 w-8" />
              <Handshake className="h-8 w-8" />
            </div>
            <p className="mx-auto max-w-[600px] text-center text-[14px] md:text-lg lg:mx-0 lg:text-left">
              No bots, no canned responses. Our team of friendly experts is here
              to answer your questions, guide you through options, and make sure
              you feel supported every step of the way.
            </p>
          </div>
          <div className="hidden max-w-[500px] lg:block">
            <SupportIllustration className="size-full" />
          </div>
        </motion.div>
      </ContainerLayout>
    </section>
  );
}

export default SupportHighlightSection;
