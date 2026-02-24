import { menus } from "@/config/menu";

export const dynamic = 'force-static'; // 이 줄을 추가하세요!

export default function sitemap() {
    return menus.map((menu) => ({
        url: menu.seo.canonical,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
    }));
}