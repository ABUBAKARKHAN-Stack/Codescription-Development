"use client";

import { notFound } from "next/navigation";
import { serviceDetails } from "@/data/servicesDetail.data";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

type ParamType = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetailPage({ params }: ParamType) {
  const { slug } = await params;
  const service = serviceDetails[slug as keyof typeof serviceDetails];
  if (!service) return notFound();

  const Icon = service.icon;

  return (
    <div className="flex bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 text-white py-16 px-8 md:px-20">
        {/* <ContainerLayout ></ContainerLayout> */}
        <div className="mx-auto w-fit py-24 ">
          <div className="flex items-center justify-center gap-4">
            <Icon className="h-12 w-12 drop-shadow-lg" />
            <h1 className="font-audiowide text-4xl md:text-5xl font-extrabold tracking-tight">
              {service.title}
            </h1>
          </div>
          <p className="mt-6 text-lg md:text-xl text-center opacity-90 leading-relaxed max-w-3xl">
            {service.shortDescription}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-8 md:px-20  py-12 grid lg:grid-cols-3 gap-12">
        {/* Left: Main Content */}
        <div className="lg:col-span-2">
          <div className="prose prose-lg text-white dark:prose-invert">
            <p>{service.fullContent}</p>
          </div>

          {service.features && service.features.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Key Features
              </h2>
              <ul className="mt-6 space-y-4">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <CheckCircle2 className="h-6 w-6 text-blue-600 flex-shrink-0" />
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right: Sidebar / Highlights */}
        <div className="space-y-6">
          <Card className="rounded-2xl shadow-lg border border-gray-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Why Choose This Service?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We combine expertise, innovation, and customer-focused solutions
                to ensure maximum impact for your business.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-lg border border-gray-200">
            <CardContent className="p-6 pb-0">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Get Started
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Ready to take your business to the next level?
              </p>
              <button className="w-full rounded-xl bg-primary text-white py-3 font-semibold cursor-pointer transition-all">
                Contact Us
              </button>
            </CardContent>
          </Card>

        </div>
      </section>

    </div>
  )
}




