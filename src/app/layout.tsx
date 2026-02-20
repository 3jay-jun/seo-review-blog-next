import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import { siteConfig } from "@/config/site";
import {Metadata} from "next";

export const metadata: Metadata = {
    metadataBase: siteConfig.url,

    title: {
        default: siteConfig.name,
        template: `%s | ${siteConfig.name}`,
    },

    description: siteConfig.description,

    verification: {
        google: siteConfig.googleVerification,
        other: {
            "naver-site-verification": siteConfig.naverVerification,
        },
    },

    openGraph: {
        siteName: siteConfig.name,
        locale: "ko_KR",
        type: "website",
        images: [
            {
                url: siteConfig.defaultOgImage,
                width: 1200,
                height: 630,
            },
        ],
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ko">
            <body className="min-h-screen bg-background">
                <Header/>
                <main className="container py-8 min-h-screen">{children}</main>
                <Footer/>
            </body>
        </html>);
}