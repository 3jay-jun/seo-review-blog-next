export const dynamic = 'force-static'; // 이 줄을 추가하세요!
export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: "https://before-after-clean-review.3jay.kr/sitemap.xml",
    };
}