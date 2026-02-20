import Image from "next/image";
import {buildMetadata, generateJsonLd, getSEO} from "@/lib/seo";

const PAGE_PATH = '/as'
export const generateMetadata = () => buildMetadata(PAGE_PATH);

export default function ASPage() {
    return (
        <article
            className="prose max-w-none"
            itemScope
            itemType="https://schema.org/Article"
        >
            <h1 itemProp="headline">A/S 처리 상세 사례</h1>

            <meta itemProp="author" content="서비스팀" />
            <meta itemProp="datePublished" content="2026-02-20" />

            <div itemProp="articleBody">
                <p>
                    고객 문의 접수 후 24시간 내 처리 완료한 사례입니다.
                </p>

                <Image
                    src="/as1.jpg"
                    alt="A/S 처리 과정 이미지"
                    width={800}
                    height={500}
                    className="rounded-lg"
                />

                <p>
                    문제 원인 분석 및 부품 교체 후 정상 작동 확인.
                </p>
            </div>
            <script type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(generateJsonLd(getSEO(PAGE_PATH)))
                }}
            />
        </article>
    );
}