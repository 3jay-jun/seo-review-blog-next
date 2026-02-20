import { menus } from "@/config/menu";

export default function sitemap() {
    return menus.map((menu) => ({
        url: menu.seo.canonical,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
    }));
}