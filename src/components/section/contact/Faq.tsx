"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";
import { ContainerLayout } from "@/components/layout";
import { SectionHeader } from "@/components/reusable";

const faqs = [
    {
        question: "How soon will I get a reply?",
        answer: "We usually reply within 24 hours on business days.",
    },
    {
        question: "Do you offer custom solutions?",
        answer: "Yes! Every project is tailored to meet your specific needs.",
    },
    {
        question: "Can we schedule a call?",
        answer: "Absolutely! Just reach out via the form, and we'll set it up.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="mx-auto px-4 py-12 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <ContainerLayout >
                <SectionHeader mainHeading='Frequently Asked Questions' />

                <div className="space-y-4 mt-10">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={` border group border-gray-300 rounded-2xl overflow-hidden shadow-sm`}
                        >
                            <button
                                className={`w-full flex justify-between ${openIndex === index ? 'bg-white/10 hover:bg-white/10 text-white' : 'cursor-pointer group-hover:bg-gray-50 group-hover:text-black'} items-center px-6 py-4 text-left  text-lg font-medium  transition-colors`}
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span className={` text-white ${openIndex === index ? "group-hover:text-white" : "group-hover:text-black"} `}>
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
                                        // className={`${openIndex === index ? 'bg-transparent' : null}`}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className={`${openIndex === index ? 'bg-white' : null}  px-6 py-4 text-gray-600`}>
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
