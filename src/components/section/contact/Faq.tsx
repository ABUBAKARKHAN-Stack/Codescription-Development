"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ContainerLayout } from "@/components/layout";
import { SectionHeader } from "@/components/reusable";

const faqs = [
  {
    question: "How soon will I get a reply?",
    answer: "We usually respond within 24 hours on business days.",
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "Yes! Every project is tailored to meet your specific business needs.",
  },
  {
    question: "Can we schedule a call?",
    answer:
      "Absolutely! Just reach out via the form, and we'll arrange a meeting at your convenience.",
  },
  {
    question: "What services do you provide?",
    answer:
      "We specialize in full-stack web development, mobile app development, UI/UX design, e-commerce solutions, DevOps, and custom software tailored to your needs.",
  },
  {
    question: "How do you ensure project quality?",
    answer:
      "We follow industry best practices, agile methodologies, and conduct thorough testing before delivery.",
  },
  {
    question: "Do you provide ongoing support after project delivery?",
    answer:
      "Yes, we offer maintenance and support packages to ensure your software runs smoothly long after launch.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Of course! We build scalable solutions that integrate seamlessly with your current tools and infrastructure.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mx-auto bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-4 py-16">
      <ContainerLayout>
        <SectionHeader mainHeading="Frequently Asked Questions" />

        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group overflow-hidden rounded-2xl border border-gray-300 shadow-sm`}
            >
              <button
                className={`flex w-full cursor-pointer justify-between ${openIndex === index ? "bg-white/10 text-white hover:bg-white/10" : "cursor-pointer group-hover:bg-gray-50 group-hover:text-black"} items-center px-6 py-4 text-left text-lg font-medium transition-colors`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span
                  className={`text-white ${openIndex === index ? "group-hover:text-white" : "group-hover:text-black"} `}
                >
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div
                      className={`${openIndex === index ? "bg-white" : null} px-6 py-4 text-neutral-900`}
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </ContainerLayout>
    </section>
  );
}
