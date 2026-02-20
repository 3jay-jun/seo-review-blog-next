export interface SeoConfig {
    title: string;
    description: string;
    ogImage: string;
    canonical: string;
    schemaType: "WebPage" | "Article" | "Review";
}

export interface MenuItem {
    path: string;
    label: string;
    seo: SeoConfig;
}

import { siteConfig } from "./site";

export const menus: MenuItem[] = [
    {
        path: "/",
        label: "메인",
        seo: {
            title: siteConfig?.name,
            description:
                "실제 후기와 A/S 사례를 투명하게 공개하는 신뢰 기반 콘텐츠 사이트입니다.",
            canonical: `${siteConfig.url}/`,
            ogImage: `${siteConfig.url}/og-main.jpg`,
            schemaType: "WebPage",
        },
    },
    {
        path: "/review",
        label: "시공 리뷰",
        seo: {
            title: `내돈내산 입주청소 최악의 청소 업체 \'비포에프터클린\' 솔직 리뷰- ${siteConfig?.name}`,
            description:
                "실제 사용 경험을 바탕으로 작성된 상세 리뷰입니다.",
            canonical: `${siteConfig.url}/review`,
            ogImage: `${siteConfig.url}/og-review.jpg`,
            schemaType: "Review",
        },
    },
    {
        path: "/as",
        label: "A/S 리뷰",
        seo: {
            title: `A/S 처리 사례 - ${siteConfig?.name}`,
            description:
                "문제 발생부터 처리 완료까지의 상세 과정을 공개합니다.",
            canonical: `${siteConfig.url}/as`,
            ogImage: `${siteConfig.url}/og-as.jpg`,
            schemaType: "Article",
        },
    },
];