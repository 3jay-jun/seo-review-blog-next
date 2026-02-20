import { menus } from "@/config/menu";
import type { Metadata } from "next";

export function generateJsonLd(seo: any) {
    return {
        "@context": "https://schema.org",
        "@type": seo.schemaType,
        name: seo.title,
        description: seo.description,
        url: seo.canonical,
    };
}

export function getSEO(path: string) {
    const current = menus.find((m) => m.path === path)!;
    return current.seo;
}

export function buildMetadata(path: string): Metadata {
    const current = menus.find((m) => m.path === path)!;

    return {
        title: current.seo.title,
        description: current.seo.description,
        alternates: {
            canonical: current.seo.canonical,
        },
        openGraph: {
            title: current.seo.title,
            description: current.seo.description,
            url: current.seo.canonical,
            images: [current.seo.ogImage],
            type: "article",
        },
    };
}