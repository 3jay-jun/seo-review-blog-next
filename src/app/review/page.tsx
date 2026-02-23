import Image from "next/image";
import {buildMetadata, generateJsonLd, getSEO} from "@/lib/seo";
import ReviewBookmark from '@/components/ReviewBookmark';

const PAGE_PATH = '/review'

export const generateMetadata = () => buildMetadata(PAGE_PATH);

export default function ReviewPage() {
    const reviewData = {
        company: '비포에프터클린',
        price: '총 63만원 (기본 33만 + 새집증후군 25만 + 수납장 추가금)',
        location: '안양시',
        period: '2026년 2월'
    };


    return (<article className="max-w-4xl mx-auto px-4 py-8">
            {/* 핵심 정보 섹션 */}
            <header className="mb-10 border-b pb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    안양 입주청소 후기 | 비포에프터클린, 추가금 63만원의 결과가 이렇다고?
                </h1>
                <p className="text-sm text-gray-500 mb-4">
                    작성일: {reviewData.period} 실제 이용 후기
                </p>
                <div className="grid grid-cols-2 gap-4 bg-gray-50 p-6 rounded-lg text-sm">
                    <p><strong>업체명:</strong> {reviewData.company}</p>
                    <p><strong>지역:</strong> {reviewData.location}</p>
                    <p><strong>지출 비용:</strong> {reviewData.price}</p>
                    <p><strong>작업 범위:</strong> 입주청소 + 새집증후군(분진 추가 포함)</p>
                </div>
            </header>

            <section className="space-y-16">
                {/* 1. 인트로: 리모델링의 설렘과 현실 */}
                <div className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100">
                    <div className="prose prose-lg max-w-none text-slate-700">
                        <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center">
                            리모델링의 끝, 그리고 시작된 '분진과의 전쟁'
                        </h2>
                        <p className="leading-relaxed">
                            도배, 장판, 화장실 덧방 & 졸리컷 시공까지.. 큰 마음 먹고 진행한 전체 리모델링이었습니다.
                            공사 과정에서 발생하는 분진이 엄청나다는 건 알고 있었지만, <strong>바쁜 회사 업무 때문에 도저히 직접 청소할 엄두가 나지 않았습니다.</strong>
                        </p>
                    </div>
                </div>

                {/* 2. Before 갤러리 섹션 */}
                <div className="space-y-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-slate-200 pb-4">
                        <div>
                            <h3 className="text-2xl font-black text-slate-900">Before: 공사 직후 현장 상황</h3>
                            <p className="text-slate-500 mt-1">전문 업체의 손길이 절실했던 처참한 분진 상태입니다.</p>
                        </div>
                        <span className="bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm font-bold">⚠️ 심각성 주의</span>
                    </div>

                    {/* 메인 강조 사진 */}
                    <div className="relative group">
                        <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg">
                            <Image
                                src="/images/review/before-room-dust-main.jpg"
                                alt="안양 28평 리모델링 직후 방 바닥에 쌓인 공사 분진과 미세먼지"
                                fill
                                priority
                                className="object-cover transition duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <p className="text-white font-medium text-lg">바닥을 가득 덮은 하얀 공사 분진</p>
                            </div>
                        </div>
                    </div>

                    {/* 상세 사진 그리드 - Mosaic Layout 스타일 */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {[
                            { src: "/images/review/before-living-room.jpg", label: "거실 및 몰딩" },
                            { src: "/images/review/before-restroom-dust-1.jpg", label: "화장실 벽면" },
                            { src: "/images/review/before-room-dust-1.jpg", label: "구석 먼지 뭉치" },
                            { src: "/images/review/before-room-dust-2.jpg", label: "문틀 상단" },
                            { src: "/images/review/before-washstand.jpg", label: "세면대 하부" },
                            { src: "/images/review/before-window-main.jpg", label: "창문틀 레일" },
                            { src: "/images/review/before-window-1.jpg", label: "창문 틈새" },
                            { src: "/images/review/before-laundry-room-1.jpg", label: "세탁실" },
                        ].map((item, idx) => (
                            <div key={idx} className="group relative aspect-square rounded-xl overflow-hidden bg-slate-100">
                                <Image src={item.src} alt={item.label} fill className="object-cover group-hover:scale-110 transition duration-300" />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white text-xs font-bold bg-black/50 px-2 py-1 rounded">{item.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. 업체 선정 및 상담 섹션 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div className="prose prose-lg max-w-none text-slate-700">
                        <h3 className="text-2xl font-bold text-slate-900 mb-4 italic">"비포에프터클린을 선택한 이유"</h3>
                        <p>
                            수많은 업체 중 <strong>비포에프터클린</strong>을 선택한 결정적 이유는 아래였습니다.
                        </p>
                        <p className="block mt-2 font-medium text-slate-900">1. 하청 없는 본사 직영 <br/>2. 확실한 A/S 보장 <br/>3. 꼼꼼한 청소 과정 설명. <br/>4. 수 많은 후기와 좋은 내용.</p>
                    </div>

                    {/* 업체 약속 리스트 카드 */}
                    <div className="bg-white border-2 border-yellow-400 p-6 rounded-2xl shadow-sm relative">
                        <div className="absolute -top-3 left-6 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full font-black text-xs uppercase">
                            Contract info
                        </div>
                        <h4 className="text-lg font-bold mb-4 mt-2">당시 업체가 약속했던 핵심 범위</h4>
                        <ul className="space-y-3">
                            {[
                                { text: "벽지 분진 마른걸레로 제거, 실크 벽지 일부 얼룩 제거", highlight: true },
                                { text: "주방 및 현관 등 수납장 탈거 청소", highlight: true },
                                { text: "타일 벽, 배수구 탈거 청소 · 약품 소독", highlight: true },
                                { text: "새집증후군 케어", highlight: true },
                            ].map((list, i) => (
                                <li key={i} className="flex items-center text-sm md:text-base">
                                    <span className="text-yellow-500 mr-2">✔</span>
                                    <span className={list.highlight ? "font-bold text-slate-900" : "text-slate-600"}>
              {list.text}
            </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <p className="text-sm bg-slate-100 p-4 rounded-lg">
                    방문 상담 시 <strong>"분진 추가금 10만원 혹은 새집증후군 25만원"</strong>에 대한 안내를 받았습니다.
                    이미 방문을 하신 상태였고 다음 일정도 있었기에, 쾌적한 새집을 위해 기분 좋게 진행을 결정했습니다.
                </p>

                <br/>
                <br/>

                <div className="space-y-6">
                    <h3 className="text-2xl font-bold border-l-4 border-gray-400 pl-4">after: 청소 후, "업무 때문에 직접 못 본 게 죄일까?"</h3>
                    <ImageBox
                        src="/images/review/after-send-way-1.jpg"
                        alt="업체가 청소 완료 후 전송한 현관 복도 사진"
                        large
                    />
                </div>
                <section className="space-y-12 my-16">
                    {/* 입금 전 상황 요약 */}
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                        <h3 className="text-xl font-bold text-blue-900 mb-2">"5명이서 빠르게 끝냈습니다"</h3>
                        <p className="text-blue-800">
                            약 3시간 만에 청소 완료 연락. 의구심이 들었지만, <span className="font-bold">"3인 5시간 분량을 5인이 투입되어 3시간에 진행했다"</span>는 말과 깨끗해 보이는 사진에 역시 전문가는 다르구나라는 생각에 기분 좋게 받아드리고 잔금을 입금했습니다.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <ImageBox
                            src="/images/review/after-send-laundry-1.jpg"
                            alt="청소 완료 후 세탁실 사진 (업체 제공)"
                        />
                        <ImageBox
                            src="/images/review/after-send-restroom-1.jpg"
                            alt="청소 완료 후 화장실 사진 (업체 제공)"
                        />
                        <ImageBox
                            src="/images/review/after-send-restroom-2.jpg"
                            alt="청소 완료 후 화장실 추가 각도 사진"
                        />
                        <ImageBox
                            src="/images/review/after-send-restroom-3.jpg"
                            alt="청소 완료 후 화장실 벽면 상태"
                        />
                        <ImageBox
                            src="/images/review/after-send-room-1.jpg"
                            alt="청소 완료 후 방 내부 사진 (업체 제공)"
                        />
                        <ImageBox
                            src="/images/review/after-send-room-2.jpg"
                            alt="청소 완료 후 방 바닥 상태"
                        />
                        <ImageBox
                            src="/images/review/after-send-window-1.jpg"
                            alt="청소 완료 후 창문틀 사진 (업체 제공)"
                        />
                        <ImageBox
                            src="/images/review/after-send-window-2.jpg"
                            alt="청소 완료 후 창문 레일 상태"
                        />
                        <ImageBox
                            src="/images/review/after-send-window-3.jpg"
                            alt="청소 완료 후 창문 하단 상태"
                        />
                        <ImageBox
                            src="/images/review/after-send-cabinet-1.jpg"
                            alt="청소 완료 후 수납장 내부 사진 (업체 제공)"
                        />
                    </div>


                    <div className="my-16 relative">
                        {/* 배경에 깔리는 부드러운 하이라이트 */}
                        <div className="absolute inset-0 bg-blue-50/50 -skew-y-1 rounded-3xl" />

                        <div className="relative p-8 md:p-12 text-center">
                            <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">
                                Success? (After Cleaning)
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                                "전송받은 사진 속 거실은<br className="md:hidden" /> 너무나 완벽해 보였습니다"
                            </h3>

                            <div className="max-w-2xl mx-auto space-y-4">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    청소 완료 후 업체가 전송해 준 사진들은 그야말로 <span className="text-blue-600 font-bold">'환골탈태'</span>였습니다.
                                    워낙 분진이 심했던 집이었기에, 사진상으로 보이는 깨끗한 바닥과 광택은 제 판단력을 흐리게 만들기에 충분했습니다.
                                </p>

                                {/* 심리적 대조를 보여주는 짧은 박스 */}
                                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8">
                                    <div className="flex items-center space-x-2 text-gray-500">
                                        <span className="line-through decoration-red-400 decoration-2">심각했던 분진 상태</span>
                                    </div>
                                    <div className="hidden md:block text-blue-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                    <div className="bg-white px-6 py-3 rounded-full shadow-sm border border-blue-100 font-bold text-blue-600">
                                        ✨ 사진 속 완벽한 깨끗함
                                    </div>
                                </div>

                                <p className="text-gray-500 text-sm mt-6 italic">
                                    * 3인 분량을 5인이 투입되어 진행했다는 말에 '역시 전문가구나' 싶어 <br className="hidden md:block" />
                                    한 치의 의심도 없이 기분 좋게 잔금을 입금했습니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                </section>


                {/* 청소 후 및 직접 청소 비교 영역 */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold border-l-4 text-red-600 pl-4">After: 직접 확인 한 청소, 처참한 실체</h3>
                    <p className="text-gray-700 font-medium">하지만, 들어가자마자 보이는 먼지들과 수납장을 열었을 때 처리가 안된 먼지들.. 사람이 하다보니 실수가 있을 수 있지만.. 이 정도는 실수라고 볼 수 있을까요? </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <ImageBox
                            src="/images/review/after-cabinet-1.jpg"
                            alt="수납장 내부 바닥에 남아 있는 먼지"
                        />
                        <ImageBox
                            src="/images/review/after-cabinet-2.jpg"
                            alt="수납장 내부 빨간 펜 자국이 남아 있는 상태"
                        />
                        <ImageBox
                            src="/images/review/after-cabinet-3.jpg"
                            alt="수납장 문 하단 모서리에 쌓인 먼지"
                        />
                        <ImageBox
                            src="/images/review/after-cabinet-4.jpg"
                            alt="수납장 레일 상단에 남아 있는 분진 뭉치"
                        />
                        <ImageBox
                            src="/images/review/after-cabinet-5.jpg"
                            alt="신발장 구석 모서리에 제거되지 않은 먼지"
                        />
                        <ImageBox
                            src="/images/review/after-cabinet-corner-1.jpg"
                            alt="수납장 모서리 틈 사이에 남은 미세먼지"
                        />
                        <ImageBox
                            src="/images/review/after-cabinet-corner-2.jpg"
                            alt="수납장 하단 틈에 쌓여 있는 분진"
                        />
                        <ImageBox
                            src="/images/review/after-door-1.jpg"
                            alt="문틀 상단에 남아 있는 공사 분진"
                        />
                        <ImageBox
                            src="/images/review/after-door-2.jpg"
                            alt="문틀 모서리에 제거되지 않은 먼지"
                        />
                    </div>

                    <p className="text-gray-700 font-medium">
                        너무 많이 보이는 구석 먼지들... 수납장 하단 모서리 마다 먼지가 있는데.. 탈거를 했을지 의문이 들고 이때부터 의심과 화가 조금 씩 나기 시작했습니다.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                                <Image src="/images/review/after-dust-1.jpg" alt="AS 후 수납장 레일" fill className="object-cover" />
                            </div>
                            <p className="text-sm font-bold text-red-500">▲ 구석에 그대로 있는 먼지들</p>
                        </div>
                        <div className="space-y-4">
                            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                                <Image src="/images/review/after-dust-2.jpg" alt="AS 후 수납장 레일" fill className="object-cover" />
                            </div>
                            <p className="text-sm font-bold text-red-500">▲ 구석에 그대로 있는 먼지들</p>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                                <Image src="/images/review/after-wall-dust-1.jpg" alt="청소 후 수납장 문 하단 내 먼지" fill className="object-cover"/>
                            </div>
                            <p className="text-sm font-bold text-red-500">▲ 벽에서 쉽게 뭍어 나오는 분진 가루</p>
                        </div>
                        <div className="space-y-4">
                            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                                <Image src="/images/review/after-wall-dust-2.jpg" alt="청소 후 레일 위 먼지" fill className="object-cover"/>
                            </div>
                            <p className="text-sm font-bold text-red-500">▲ 벽에서 쉽게 뭍어 나오는 분진 가루</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="aspect-square bg-gray-200 relative rounded-lg overflow-hidden">
                            <Image src="/images/review/after-restroom-1.jpg" alt="청소 후 수납장 내 먼지" fill className="object-cover"/>
                        </div>
                        <div className="aspect-square bg-gray-200 relative rounded-lg overflow-hidden">
                            <Image src="/images/review/after-shoe_rack-1.jpg" alt="청소 후 수납장 내 빨간펜 자국" fill className="object-cover"/>
                        </div>

                        <div className="aspect-square bg-gray-200 relative rounded-lg overflow-hidden">
                            <Image src="/images/review/after-window-1.jpg" alt="청소 후 신발장 구석 먼지" fill className="object-cover"/>
                        </div>
                        <div className="aspect-square bg-gray-200 relative rounded-lg overflow-hidden">
                            <Image src="/images/review/after-window-2.jpg" alt="청소 후 창문틀-1" fill className="object-cover"/>
                        </div>
                        <div className="aspect-square bg-gray-200 relative rounded-lg overflow-hidden">
                            <Image src="/images/review/after-window-3.jpg" alt="청소 후 창문틀-2" fill className="object-cover"/>
                        </div>
                        <div className="aspect-square bg-gray-200 relative rounded-lg overflow-hidden">
                            <Image src="/images/review/after-window-4.jpg" alt="청소 후 창문틀-3" fill className="object-cover"/>
                        </div>
                    </div>
                    <p className="text-gray-700 font-medium">
                        작업 완료라고 보내준 사진에 나오는 문 주변을 보니 수북한 먼지... 손으로 밀면 그대로 묻어 나오는데...
                    </p>


                    <section className="my-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-black text-gray-900 mb-4">
                                "사진 증거와 함께 정중히 A/S를 요청했습니다"
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                현장을 직접 확인하고 너무 놀라, 미흡한 부분들을 사진으로 찍어 업체에 전달했습니다.
                                수납장 내 구석 먼지, 분진이 가득한 문틀... 하지만 돌아온 대답은 황당했습니다.
                            </p>
                        </div>

                        {/* 대화 및 요청 섹션 */}
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">

                            {/* 왼쪽: 내가 보낸 사진들 (썸네일 형태) */}
                            <div className="lg:col-span-2 space-y-4">
                                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Sent Photos (요청 시 전달한 사진들)</p>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="relative h-32 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                                        <Image src="/images/review/after-shoe_rack-1.jpg" alt="미흡 사진 1" fill className="object-cover grayscale hover:grayscale-0 transition" />
                                    </div>
                                    <div className="relative h-32 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                                        <Image src="/images/review/after-restroom-1.jpg" alt="미흡 사진 2" fill className="object-cover grayscale hover:grayscale-0 transition" />
                                    </div>
                                    <div className="relative h-32 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                                        <Image src="/images/review/after-wall-dust-2.jpg" alt="미흡 사진 3" fill className="object-cover grayscale hover:grayscale-0 transition" />
                                    </div>
                                    <div className="relative h-32 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                                        <Image src="/images/review/after-window-3.jpg" alt="미흡 사진 4" fill className="object-cover grayscale hover:grayscale-0 transition" />
                                    </div>
                                    <div className="relative h-32 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                                        <Image src="/images/review/after-window-4.jpg" alt="미흡 사진 5" fill className="object-cover grayscale hover:grayscale-0 transition" />
                                    </div>
                                    <div className="relative h-32 rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-gray-100 flex items-center justify-center text-xs text-gray-400">
                                        외 다수 전송...
                                    </div>
                                </div>
                            </div>

                            {/* 오른쪽: 업체의 황당한 답변 (메시지 UI) */}
                            <div className="lg:col-span-3 bg-white p-8 rounded-3xl border border-gray-200 shadow-xl relative">
                                <div className="space-y-6">
                                    <div className="flex flex-col items-end">
                                        <div className="bg-blue-600 text-white px-5 py-3 rounded-2xl rounded-tr-none text-sm md:text-base shadow-md mb-2">
                                            "보내드린 사진 보시다시피 분진이랑 먼지가 너무 많아요. <br/>탈거 청소도 안 되어 있어서 A/S 부탁드립니다."
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-start">
                                        <div className="bg-gray-100 border border-gray-200 text-gray-800 px-5 py-3 rounded-2xl rounded-tl-none text-sm md:text-base shadow-sm mb-2">
                                            <span className="text-red-500 font-bold">"그 집이 유독 분진이 많은 집이라, 청소 후 그럴 수 있어요. A/S 해드릴게요."</span>
                                        </div>
                                        <span className="text-[10px] text-gray-400 font-bold text-red-400">비포에프터클린의 답변</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



                    {/* 강조 문구 (Quote) */}
                    <div className="relative py-10 px-6 bg-gray-900 rounded-3xl overflow-hidden text-center">
                        <div className="relative z-10">
                            <span className="text-4xl text-yellow-400 font-serif leading-none">"</span>
                            <p className="text-xl md:text-2xl text-white font-bold leading-snug my-4">
                                남들 다 하는 인테리어, 왜 우리집만 유독 심하다는건가요?<br />
                                <span className="text-yellow-400 text-lg md:text-xl">
                                  우리 집만 유독 많다는 변명, 추가금을 받은 시점에서 하면 안 되는 것 아닌가요?
                                </span>
                            </p>
                            <span className="text-4xl text-yellow-400 font-serif leading-none block transform rotate-180">"</span>
                        </div>
                    </div>

                    {/* 실제 현장 확인 결과 (대조 구조) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="border border-gray-200 p-6 rounded-2xl shadow-sm">
                            <h4 className="text-lg font-bold mb-4 flex items-center text-green-600">
                                <span className="mr-2">✅</span> 업체가 약속한 청소 범위
                            </h4>
                            <ul className="space-y-3 text-gray-600">
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">•</span> 전등 커버 및 수납장 완전 탈거 청소
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">•</span> 벽면 바닥먼지 제거 • 실크 벽지 일부 얼룩 제거
                                </li>
                                <li className="flex items-start">
                                    <span className="text-green-500 mr-2">•</span> 집안 전체를 꼼꼼하게 청소
                                </li>
                            </ul>
                        </div>

                        <div className="border border-red-100 p-6 rounded-2xl shadow-sm bg-red-50/30">
                            <h4 className="text-lg font-bold mb-4 flex items-center text-red-600">
                                <span className="mr-2">❌</span> 직접 확인한 처참한 현실
                            </h4>
                            <ul className="space-y-3 text-gray-800 font-medium">
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span> 레일 위 먼지, 구석 뭉치 그대로 방등 먼지 그대로
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span> 문틀 상단, 신발장 아래 손만 대면 분진 가득
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span> 수납장 내부 공사용 빨간 펜 자국 방치
                                </li>
                            </ul>
                        </div>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed indent-2">
                        결국 업체는 <strong>'눈에 보이는 넓은 면'</strong>과 <strong>'손에 닿는 편한 부분'</strong>만 훑고 지나간거 아닌가요?
                        전문 장비를 동원한 분진 청소가 아니라, 일반적인 물걸레질 수준에 그친 작업 퀄리티로 느껴져 기운이 빠졌습니다.
                    </p>
                </div>
            </section>

            <section className="mt-16 space-y-12">
                {/* 3. 새집증후군 & 분진 추가금 비판 섹션 */}

                <div className="bg-gray-100 p-6 rounded-xl my-6 border-l-8 border-gray-400">
                    <p className="italic text-gray-700 m-0">
                        "새집증후군... 제 주변 지인은 수치 변화 비교를 눈으로 확인하며 안심했다는데,
                        저는 <strong>돈을 허공에 뿌린 느낌</strong>입니다. 증빙도 없는 작업을 어떻게 믿으라는 건지 모르겠습니다."
                    </p>
                </div>

                <p className="font-bold text-lg text-red-700  p-4 rounded-lg">
                    결국 이사를 앞두고.. A/S 일정을 잡고 빠른 처리와 보다 꼼꼼한 처리를 부탁했습니다.
                </p>

                {/* A/S 결과 대조 섹션 - 시각적 임팩트 강화 */}
                <div className="space-y-8 bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-200">
                    <small className='text-gray-600'>A/S 후기 미리보기</small>
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-black text-gray-900 mb-4 italic">"이게 A/S를 마친 상태라고요?"</h3>
                        <p className="text-lg text-gray-600">
                            참다못해 제가 직접 물티슈 한 장으로 닦아보았습니다. <strong>업체는 못 닦은 게 아니라 '안' 닦은 것입니다.</strong>
                        </p>
                    </div>

                    {/* 비교 그리드 1: 먼지 뭉치 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        <div className="group relative">
                            <div className="overflow-hidden rounded-2xl shadow-md border-4 border-red-200">
                                <Image src="/images/review/after-cabinet-clean-before.jpg" alt="AS 후 수납장 레일 상태" width={600} height={450} className="object-cover w-full h-[300px]" />
                                <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 rounded-md font-bold">A/S 직후</div>
                            </div>
                            <p className="mt-3 text-red-600 font-bold flex items-center">
                                <span className="text-2xl mr-2">👎</span> 레일 구석에 그대로 방치된 먼지 뭉치
                            </p>
                        </div>
                        <div className="group relative">
                            <div className="overflow-hidden rounded-2xl shadow-md border-4 border-blue-200">
                                <Image src="/images/review/after-cabinet-clean-after.jpg" alt="직접 닦은 후 상태" width={600} height={450} className="object-cover w-full h-[300px]" />
                                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-md font-bold">본인 직접 청소</div>
                            </div>
                            <p className="mt-3 text-blue-600 font-bold flex items-center">
                                <span className="text-2xl mr-2">👍</span> 물티슈 한 장으로 가볍게 닦이는 분진
                            </p>
                        </div>
                    </div>

                    {/* 비교 그리드 2: 빨간펜 자국 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start pt-8 border-t border-gray-200">
                        <div className="group relative">
                            <div className="overflow-hidden rounded-2xl shadow-md border-4 border-red-200">
                                <Image src="/images/review/after-cabinet-clean-2-before.jpg" alt="제거 안 된 빨간펜 자국" width={600} height={450} className="object-cover w-full h-[300px]" />
                                <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 rounded-md font-bold">A/S 직후</div>
                            </div>
                            <p className="mt-3 text-red-600 font-bold flex items-center">
                                <span className="text-2xl mr-2">👎</span> A/S 받았음에도 계속 있는 빨간펜 자국
                            </p>
                        </div>
                        <div className="group relative">
                            <div className="overflow-hidden rounded-2xl shadow-md border-4 border-blue-200">
                                <Image src="/images/review/after-cabinet-clean-2-after.jpg" alt="직접 제거한 빨간펜 자국" width={600} height={450} className="object-cover w-full h-[300px]" />
                                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-md font-bold">본인 직접 청소</div>
                            </div>
                            <p className="mt-3 text-blue-600 font-bold flex items-center">
                                <span className="text-2xl mr-2">👍</span> 티슈로 문지르니 5초 만에 깨끗하게 삭제
                            </p>
                        </div>
                    </div>
                    <ReviewBookmark
                        href="/as"
                        thumbnail="/images/review/after-cabinet-clean-before.jpg" // 메인으로 쓸 처참한 사진
                        title="입주청소 A/S 후기 | 비포에프터클린, A/S 후기"
                        description="새집증후군(분진 추가금) 비용까지 지불했지만, 수납장 레일, 수납장 틀, 약속한 방등 등 먼지가 가득했습니다. A/S 40분 컷, 실망스러웠던 내돈내산 솔직 후기입니다."
                    />
                </div>
            </section>

            {/* 최종 강력 비추천 결론 섹션 */}
            <footer className="mt-20 overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black text-white">
                <div className="p-10 md:p-16 text-center">
                    <div className="inline-block bg-red-600 text-white px-6 py-1 rounded-full text-sm font-black mb-6 animate-bounce">
                        DANGER
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
                        비포에프터클린,<br />
                        한번 더 생각해보세요.
                    </h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                        리모델링 후 소중한 우리 집, <br className="hidden md:block" />
                        광고만큼의 전문성과 책임감은 찾아볼 수 없었습니다. <br />
                        <span className="text-white font-bold underline decoration-red-500 underline-offset-4">추가금은 추가금대로 받고, 청소는 집주인이 다시 해야 하는 상황</span>을 느겼습니다.
                    </p>
                    <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm text-left max-w-xl mx-auto border border-white/20">
                        <p className="font-bold mb-2">💡 현명한 선택을 위한 팁:</p>
                        <ul className="list-disc ml-5 space-y-2 text-gray-300">
                            <li>현장 검수 시 신발장 아래, 문틀 위를 무조건 손으로 쓸어보세요.</li>
                            <li>새집증후군 작업 시 수치 측정 사진을 실시간으로 요구하세요.</li>
                            <li>말뿐인 A/S보다 책임감을 갖고 일하는 업체를 찾으세요.</li>
                        </ul>
                    </div>
                </div>
            </footer>

            <script type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(generateJsonLd(getSEO(PAGE_PATH)))
                    }}
            />
        </article>
    );
}

function ImageBox({ src, alt, large = false }) {
    return (
        <div
            className={`relative rounded-lg overflow-hidden ${
                large ? "h-80" : "aspect-square"
            }`}
        >
            <Image src={src} alt={alt} fill className="object-cover" />
        </div>
    );
}