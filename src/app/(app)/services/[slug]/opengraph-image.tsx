import { ImageResponse } from "next/og";
import { serviceDetails } from "@/data/services.data";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const service = serviceDetails[params.slug as keyof typeof serviceDetails];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 64,
          color: "black",
        }}
      >
        {service.title}
      </div>
    ),
    { width: size.width, height: size.height },
  );
}
