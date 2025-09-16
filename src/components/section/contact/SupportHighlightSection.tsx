'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Handshake, Users } from "lucide-react";
import Link from "next/link";
import support from '../../../../public/assets/imgs/support.svg'
import { SectionHeader } from '@/components/reusable';
import { ContainerLayout } from '@/components/layout';
import Image from 'next/image';

function SupportHighlightSection() {
  return (
    <section className="w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <ContainerLayout >
      {/* Team / Support Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className=" lg:flex justify-between gap-20  space-y-4"
      >

        <div className='space-y-5 '>
        <SectionHeader  mainHeading=' Real People. Real Support.' />
        <div className="flex justify-center gap-3 text-purple-200">
          <Users className="w-8 h-8" />
          <Handshake className="w-8 h-8" />
        </div>
        <div className=''>
        <p className=" md:text-lg text-[14px] text-center lg:text-left lg:mx-0 mx-auto max-w-[600px]">
          No bots, no canned responses. Our team of friendly experts is here to
          answer your questions, guide you through options, and make sure you
          feel supported every step of the way.
        </p>
        </div>
        </div>
        <div className='max-w-[500px] hidden lg:block' >
        <Image className='' src={support} alt='support' />
        </div>
      </motion.div>
        </ContainerLayout>
      </section>
  )
}

export default SupportHighlightSection