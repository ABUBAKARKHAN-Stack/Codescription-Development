import { notFound } from "next/navigation";
import { serviceDetails } from "@/data/servicesDetail.data";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/reusable";
import ReactMarkDown from 'react-markdown'
import { ContainerLayout } from "@/components/layout";
import ContactCardServices from "@/components/section/services/ContactCardServices";


export  async function generateStaticParams() {
 return Object.keys(serviceDetails).map((slug)=> ({
    slug,
  }))
}

type ParamType = {
  params: Promise<{ slug: string }>;
};
//  <div className="prose prose-lg dark:prose-invert text-white">
//           <ReactMarkDown>
//             {service.fullContent}
//           </ReactMarkDown>
//         </div>
export default async function ServiceDetailPage({ params }: ParamType) {
  const { slug } = await params;
  const service = serviceDetails[slug as keyof typeof serviceDetails];
  if (!service) return notFound();

  const Icon = service.icon;

  return (
    <div className="flex flex-col bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden">
      <PageHeader
        pageHeading={service.title}
        subText={service.shortDescription}
        iconElement={<Icon className="size-12 drop-shadow-lg" />}
      />

      <section className="">

        <ContainerLayout>
        <div className="flex flex-col xl:justify-between xl:gap-20 xl:flex-row py-20 ">

          <div className="lg:max-w-[700px] xl:max-w-[600px] text-[14px] lg:text-[18px] xl:text-[20px] ">
            {service.fullContent.map((para, i) => (
              <p key={i} className="mb-4 text-gray-300">{para}</p>
            ))}

            {service.features.map((section, i) => (
              <div key={i} className="mb-6">
                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                <ul className="list-disc pl-6 text-gray-400">
                  {section.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

<ContactCardServices />
        
        </div> 
        </ContainerLayout>

      </section>
    </div>
  );
}
