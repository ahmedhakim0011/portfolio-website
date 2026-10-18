import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: mobile apps & consulting`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F2E6CC",
          border: "16px solid #2E1D14",
          padding: 64,
          color: "#2E1D14",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, letterSpacing: 6, textTransform: "uppercase", color: "#B5483A" }}>
          Admit one · {site.years}+ years
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 116, fontWeight: 900, lineHeight: 1.02 }}>Mobile apps,</div>
          <div style={{ fontSize: 116, fontWeight: 900, lineHeight: 1.02, color: "#B5483A" }}>made to last.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 38 }}>
          <span>{site.name}</span>
          <span style={{ display: "flex", background: "#D9A33A", padding: "4px 24px", border: "5px solid #2E1D14" }}>
            {site.role}
          </span>
        </div>
      </div>
    ),
    size,
  );
}
