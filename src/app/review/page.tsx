import Image from "next/image";
import {buildMetadata, generateJsonLd, getSEO} from "@/lib/seo";

const PAGE_PATH = '/review'

export const generateMetadata = () => buildMetadata(PAGE_PATH);

export default function ReviewPage() {
  return (
      <article
          className="prose max-w-none"
          itemScope
          itemType="https://schema.org/Review"
      >
        <h1 itemProp="name">제품 사용 상세 후기</h1>

        <meta itemProp="author" content="홍길동" />
        <meta itemProp="datePublished" content="2026-02-20" />

        <div itemProp="reviewBody">
          <p>
            실제 사용 경험을 바탕으로 장점과 단점을 정리했습니다.
          </p>

          <Image
              src="/review1.jpg"
              alt="제품 사용 이미지"
              width={800}
              height={500}
              className="rounded-lg"
          />

          <p>
            제품의 내구성과 마감은 기대 이상이었습니다.
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