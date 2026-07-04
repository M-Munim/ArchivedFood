import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "FAC",
    description:
      "The only food allergy certification designed for childcare centers.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#188079",
    icons: [
      { src: "/icon.png", sizes: "600x600", type: "image/png" },
      { src: "/apple-icon.png", sizes: "600x600", type: "image/png" },
    ],
  };
}
