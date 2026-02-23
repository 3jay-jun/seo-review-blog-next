export interface SeoConfig {
    title: string;
    description: string;
    ogImage: string;
    canonical: string;
    schemaType: "WebPage" | "Article" | "Review";
    openGraph?: {}
    keywords?: {}
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
            title: `안양 입주청소 비추천 후기 - 비포에프터클린 (내돈내산 솔직후기) | ${siteConfig?.name}`,
            description: '추가금 63만원 지불 후 최악의 경험을 한 안양 비포에프터클린 입주청소 및 A/S 솔직 후기입니다. 분진 제거 미흡, 새집증후군 증빙 부재 등 사실 그대로를 공유합니다.',
            openGraph: {
                title: `63만원 날린 안양 입주청소 비추천 후기 | ${siteConfig?.name}`,
                description: '분진 많다고 추가금 받았으면서 레일엔 먼지가 수북? A/S 후에도 처참했던 현장을 공개합니다.',
                type: 'article',
            },
            keywords: ['안양입주청소', '비포에프터클린', '후기', '입주청소비추천', '리모델링청소', '분진제거', '새집증후군후기', '비포에프터클린후기'],
            canonical: `${siteConfig.url}/review`,
            ogImage: `${siteConfig.url}/og-review.jpg`,
            schemaType: "Review",
        },
    },
    {
        path: "/as",
        label: "A/S 리뷰",
        seo: {
            title: `입주청소 A/S 후기 | ${siteConfig?.name}, 40분 만에 끝난 황당한 재청소`,
            description: 'A/S 요청 후 기대를 품었으나 결과는 더 처참했습니다. 40분 만에 철수한 청소팀, 직접 닦으니 쏟아져 나오는 갈색 분진... 입주 전 밤새 직접 청소하게 된 솔직 후기입니다.',
            
            keywords: ['안양입주청소', '비포에프터클린', '입주청소비추천', '리모델링청소', '분진제거', '새집증후군후기'],
            canonical: `${siteConfig.url}/as`,
            ogImage: `${siteConfig.url}/og-as.jpg`,
            schemaType: "Article",
        },
    },
];