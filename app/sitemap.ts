import type { MetadataRoute } from "next";
import { tools } from "@/lib/tools";
import fs from "fs";
import path from "path";

const BASE_URL = "https://teknoarac.com";

function getGuideSlugs(): string[] {
  const dir = path.join(process.cwd(), "content", "guides");
  try {
    return fs.readdirSync(dir)
      .filter((f: string) => f.endsWith(".tsx") && f !== "registry.tsx")
      .map((f: string) => f.replace(".tsx", ""));
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: BASE_URL + "/araclar", lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: BASE_URL + "/rehberler", lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: BASE_URL + "/oyunlar", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: BASE_URL + "/hakkinda", lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: BASE_URL + "/iletisim", lastModified: new Date(), changeFrequency: "monthly", priority: 0.4 },
    { url: BASE_URL + "/gizlilik", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: BASE_URL + "/kullanim-sartlari", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: BASE_URL + "/kategoriler", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: BASE_URL + "/cerezler", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const toolPages: MetadataRoute.Sitemap = tools.map((t) => ({
    url: BASE_URL + "/araclar/" + t.slug,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const guideSlugs = getGuideSlugs();
  const guidePages: MetadataRoute.Sitemap = guideSlugs.map((slug: string) => ({
    url: BASE_URL + "/rehberler/" + slug,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...toolPages, ...guidePages];
}
