import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpengraphImage() {
  const imagePath = path.join(
    process.cwd(),
    "public",
    "assets",
    "imgs",
    "main-og.png",
  );
  const imageBuffer = fs.readFileSync(imagePath);
  const base64Image = `data:image/png;base64,${imageBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={base64Image}
          alt="Codescription - OG"
          width={1200}
          height={630}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
