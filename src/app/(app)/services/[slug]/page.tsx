import { notFound } from "next/navigation";
import { serviceDetails } from "@/data/servicesDetail.data";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/reusable";

type ParamType = {
  params: Promise<{ slug: string }>;
};

export default async function ServiceDetailPage({ params }: ParamType) {
  const { slug } = await params;
  const service = serviceDetails[slug as keyof typeof serviceDetails];
  if (!service) return notFound();

  const Icon = service.icon;

  return (
    <div className="flex flex-col bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 px-8 py-16 text-white md:px-20">
        {/* <ContainerLayout ></ContainerLayout> */}
        {/* <div className="mx-auto w-fit py-24 ">
            <div className="flex items-center justify-center gap-4">
              <Icon className="h-12 w-12 drop-shadow-lg" />
              <h1 className="font-audiowide text-4xl md:text-5xl font-extrabold tracking-tight">
                {service.title}
              </h1>
            </div>
            <p className="mt-6 text-lg md:text-xl text-center opacity-90 leading-relaxed max-w-3xl">
              {service.shortDescription}
            </p>
          </div> */}
        <PageHeader
          pageHeading={service.title}
          subText={service.shortDescription}
        >
          <Icon className="h-12 w-12 drop-shadow-lg" />
        </PageHeader>
      </section>

      {/* Main Content */}
      <section className="mx-auto grid max-w-5xl gap-12 px-8 py-12 md:px-20 lg:grid-cols-3">
        {/* Left: Main Content */}
        <div className="lg:col-span-2">
          <div className="prose prose-lg dark:prose-invert text-white">
            <p>{service.fullContent}</p>
          </div>

          <Card className="rounded-2xl border border-gray-200 shadow-lg">
            <CardContent className="p-6 pb-0">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                Get Started
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                Ready to take your business to the next level?
              </p>
              <button className="bg-primary w-full cursor-pointer rounded-xl py-3 font-semibold text-white transition-all">
                Contact Us
              </button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
