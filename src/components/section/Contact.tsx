// components/ContactSection.tsx
"use client";

import { ContactSectionHeader } from "@/data/contact.data";
import { Mail, Phone, MapPin } from "lucide-react";
import { SectionHeader } from "../reusabe";
import ContainerLayout from "../layout/ContainerLayout";

const ContactSection = () => {
  return (
    <section className="h-full w-full md:py-24 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white py-16 px-6">
        <ContainerLayout>
  <div className=" mx-auto lg:flex lg:justify-between grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
           <SectionHeader
                    mainHeading={ContactSectionHeader.mainHeading}
                    animateOnce={true}
                />
          <p className="text-slate-300 my-8 max-w-[400px] mx-auto text-center lg:text-left ">
            We’d love to hear from you. Whether you have a question, feedback, or
            just want to say hello, feel free to reach out.
          </p>

          <div className="space-y-4 flex flex-col items-center lg:items-baseline ">
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-purple-400" />
              <a href="mailto:contact@yourstartup.com" className="hover:underline">
                contact@yourstartup.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-purple-400" />
              <a href="tel:+1234567890" className="hover:underline">
                +1 (234) 567-890
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-purple-400" />
              <span>123 Space Street, Galaxy City</span>
            </div>
          </div>
        </div>

        {/* Right content: Contact Form */}
        <div>
          <form className="backdrop-blur-3xl p-8 lg:w-[500px] rounded-2xl shadow-2xl space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Write your message..."
                className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-purple-600 hover:bg-purple-700 transition font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

        </ContainerLayout>
    
    </section>
  );
};

export default ContactSection;
