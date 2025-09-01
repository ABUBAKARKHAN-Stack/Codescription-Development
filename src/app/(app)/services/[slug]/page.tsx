// app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import { whatWeDoData } from "@/data/whatwedo.data";
import { serviceDetails } from "@/data/servicesDetail.data";

type ParamType = {
    slug : string
}

export default function ServiceDetailPage({ params }: { params: ParamType}){
  const service = serviceDetails[params.slug as keyof typeof serviceDetails ]

  if (!service) return notFound();

  const Icon = service.icon;

  return (
    <div className="p-8">
      <div className="flex items-center gap-3">
        <Icon className="w-10 h-10 text-blue-600" />
        <h1 className="text-3xl font-bold">{service.title}</h1>
      </div>
      <p className="mt-4 text-lg text-gray-700">{service.shortDescription}</p>

         <div className="mt-6 prose max-w-[60vw]">
        <p>{service.fullContent}</p>
      </div>

      {service.features && (
        <ul className="mt-6 list-disc pl-6 text-gray-700">
          {service.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
