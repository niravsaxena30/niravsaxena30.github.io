import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Nirav Saxena, UX Researcher";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fraunces = await readFile(
  join(process.cwd(), "assets/fonts/Fraunces-SemiBold.ttf")
);

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#0A0A0A",
          fontFamily: "Fraunces",
        }}
      >
        <div
          style={{
            fontSize: 156,
            lineHeight: 1.05,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
          }}
        >
          Nirav Saxena
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 64,
            lineHeight: 1.1,
            color: "#FFD100",
          }}
        >
          UX Researcher
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, style: "normal", weight: 600 },
      ],
    }
  );
}
