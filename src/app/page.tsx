import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { buildMetadata, generateJsonLd, getSEO } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import ReviewBookmark from "@/components/ReviewBookmark";

const PAGE_PATH = '/';
export const generateMetadata = () => buildMetadata(PAGE_PATH);

export default function HomePage() {
    return (
        <main className="max-w-5xl mx-auto px-4 py-12 space-y-16">
            {/* 인사말 섹션: 신뢰성 강조 */}
            <section className="text-center space-y-4">
                <h1 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
                    {siteConfig?.name}
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    업체의 광고성 글에 지친 분들을 위해, <br className="hidden md:block" />
                    <span className="text-red-600 font-bold">100% 내돈내산</span> 실제 경험과 사진으로 기록한 솔직한 리뷰를 공유합니다.
                </p>
                <div className="w-20 h-1 bg-red-600 mx-auto mt-6 rounded-full" />
            </section>

            {/* 리뷰 리스트 섹션 */}
            <section className="grid grid-cols-1 gap-8">
                <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-2xl font-bold text-gray-800">최신 리얼 후기</h2>
                    <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded">Real-time</span>
                </div>

                {/* 1. 입주청소 의뢰 및 결과 후기 */}
                <ReviewBookmark
                    href="/review"
                    thumbnail="/images/review/before-room-dust-main.jpg"
                    title="안양 입주청소 후기 | 비포에프터클린, 추가금 63만원의 결과가 이렇다고?"
                    description="업무로 직접 청소하지 못해 막막했던 리모델링 청소, 분진 제거 및 새집증후군 제거를 위해 전문가의 청소로 기대반 설렘반 비포에프터클린 업체 솔직 후기입니다. 업체 선정 전 반드시 확인하세요."
                />

                {/* 2. A/S 대응 및 최종 실망 후기 */}
                <ReviewBookmark
                    href="/as"
                    thumbnail="/images/review/after-cabinet-clean-before.jpg"
                    title="입주청소 A/S 후기 | 비포에프터클린 A/S 후기, A/S에 또 A/S? 입주 못하나?"
                    description="수납장 레일, 수납장 틀, 약속한 방등 등 먼지가 가득해 요청한 A/S, 40분만의 철수, A/S 후에도 제가 직접 닦으니 쏟아져 나오는 먼지들... 결국 입주 전 밤새 직접 다시 청소한 후기입니다."
                />
            </section>

            {/* 하단 안내 섹션 (선택 사항) */}
            <section className="bg-gray-50 p-8 rounded-3xl border border-gray-100 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">정확한 정보 제공을 약속합니다</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                    본 블로그의 모든 후기는 직접 비용을 지불하고 이용한 경험을 바탕으로 작성되었으며,<br />
                    해당 업체의 다른 팀장인 경우 사실과 다를 수 있습니다.
                </p>
            </section>

            <script type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(generateJsonLd(getSEO(PAGE_PATH)))
                    }}
            />
        </main>
    );
}