import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {buildMetadata, generateJsonLd, getSEO} from "@/lib/seo";
import {siteConfig} from "@/config/site";

const PAGE_PATH = '/'
export const generateMetadata = () => buildMetadata(PAGE_PATH);


export default function HomePage() {
  return (
      <main className="space-y-12">
        {/* 인사말 */}
        <section>
          <h1 className="text-3xl font-bold mb-4">
              { siteConfig?.name }에 오신 것을 환영합니다
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            실제 이용 경험을 기반으로 신뢰할 수 있는 정보만을 제공합니다.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <BookmarkCard
              href="/review"
              title="실제 리뷰"
              description="다양한 사진과 상세한 후기 내용을 확인하세요."
          />

          <BookmarkCard
              href="/as"
              title="A/S 사례"
              description="신속하고 책임감 있는 처리 사례를 소개합니다."
          />
        </section>
          <script type="application/ld+json"
                  dangerouslySetInnerHTML={{
                      __html: JSON.stringify(generateJsonLd(getSEO(PAGE_PATH)))
                  }}
          />
      </main>

  );
}

function BookmarkCard({
                        href,
                        title,
                        description,
                      }: {
  href: string;
  title: string;
  description: string;
}) {
  return (
      <Link href={href}>
        <Card className="p-6 border rounded-xl hover:shadow-lg transition cursor-pointer">
          <CardContent>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
          </CardContent>
        </Card>
      </Link>
  );
}