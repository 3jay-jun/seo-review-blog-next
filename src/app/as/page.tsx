import Image from "next/image";
import {buildMetadata, generateJsonLd, getSEO} from "@/lib/seo";
import ReviewBookmark from "@/components/ReviewBookmark";

const PAGE_PATH = '/as'
export const generateMetadata = () => buildMetadata(PAGE_PATH);

export default function ASReviewPage() {
    return (
        <article className="max-w-4xl mx-auto px-4 pb-16 text-slate-800 leading-relaxed">
            <section className="mb-16">
                <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
                    {/* 배경 장식 아이콘 */}
                    <div className="absolute top-0 right-0 p-10 opacity-10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                    </div>

                    <div className="relative z-10 space-y-8">
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-yellow-400 mb-2">Previous Summary</h2>
                            <h3 className="text-3xl md:text-4xl font-black leading-tight">
                                지난 리뷰 요약: <br/>
                                63만원을 지불하고 마주한 처참한 현실
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                            {/* 포인트 1: 배경 상황 */}
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                <span className="text-yellow-400 font-black text-2xl mb-2 block">01</span>
                                <h4 className="font-bold text-lg mb-2 text-white">분진과의 전쟁 시작</h4>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    구축 오피스텔 전체 리모델링 후, 집안 곳곳을 뒤덮은 <strong>엄청난 분진 가루</strong>에 압도되었습니다. 직접 청소는 불가능하다 판단하여 신중하게 전문 업체를 물색했습니다.
                                </p>
                            </div>

                            {/* 포인트 2: 업체 선정 이유 */}
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                <span className="text-yellow-400 font-black text-2xl mb-2 block">02</span>
                                <h4 className="font-bold text-lg mb-2 text-white">이름에 걸었던 기대</h4>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    하청 없는 본사 직영 시스템과 확실한 사후 관리를 약속한 <strong>'비포에프터클린'</strong>을 선정했습니다. 추가 비용을 지불하더라도 완벽한 새집을 마주할 기대감에 부풀어 있었죠.
                                </p>
                            </div>

                            {/* 포인트 3: 아쉬움과 A/S의 서막 */}
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                                <span className="text-yellow-400 font-black text-2xl mb-2 block">03</span>
                                <h4 className="font-bold text-lg mb-2 text-white">뼈아픈 비대면 검수</h4>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    업무로 인해 <strong>현장 검수를 직접 하지 못한 채</strong> 사진만 믿고 잔금을 입금했습니다. 하지만 퇴근 후 마주한 전문성이 결여된 결과물에 결국 <strong>재청소(A/S)</strong>를 요청하게 되었습니다.
                                </p>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/10 flex flex-col items-left justify-between gap-4">
                            <p className="text-slate-400 text-sm">
                                * 자세한 첫 번째 리뷰 내용이 궁금하시다면 이전 포스팅을 참고해 주세요.
                            </p>

                            <ReviewBookmark
                                href="/review"
                                thumbnail="/images/review/before-room-dust-main.jpg"
                                title="안양 입주청소 후기 | 비포에프터클린, 추가금 63만원의 결과가 이렇다고?"
                                description="업무로 직접 청소하지 못해 막막했던 리모델링 청소, 분진 제거 및 새집증후군 제거를 위해 전문가의 청소로 기대반 설렘반 비포에프터클린 업체 솔직 후기입니다. 업체 선정 전 반드시 확인하세요."
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* 2. 타임라인: 안심에서 의심으로 */}
            <section className="mb-20">
                <header className="mb-16 text-center">
                    <span className="text-red-600 font-bold tracking-widest uppercase text-sm">A/S Fail</span>
                    <h1 className="text-3xl md:text-4xl font-black mt-4 mb-6 text-slate-900 leading-tight">
                        "A/S에 또 A/S? 결국 제가 밤새 직접 닦았습니다"<br/> 비포에프터클린 A/S 후기

                    </h1>
                    <p className="text-lg text-slate-600">
                        죄송하다는 사과와 빠른 피드백과 A/S 약속까지 안심했던 짧은 순간, <br className="hidden md:block"/>
                        그 믿음의 대가는 이사 전날의 밤샘 청소였습니다.
                    </p>
                </header>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <ImageBox
                        src="/images/as/as-message-1.png"
                        alt="a/s 요청 메시지 사진"
                    />
                    <ImageBox
                        src="/images/as/as-message-2.png"
                        alt="a/s 요청 메시지 사진"
                    />
                    <ImageBox
                        src="/images/as/as-message-3.png"
                        alt="a/s 요청 메시지 사진"
                    />
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                    {/* 왼쪽: 문자 메시지 증거 이미지 */}
                    <div className="space-y-4 w-full">
                        <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl  bg-white">
                            {/* aspect-square나 h-80 같은 제한을 없애고 원본 비율(h-auto)을 유지합니다 */}
                            <ImageBox
                                src="/images/as/as-message-4.png"
                                alt="현관 비번 전송과 완료 문자가 담긴 실제 대화 내용"
                                full={true}
                            />
                            {/* 사진이 너무 길어 보일 수 있으니 강조용 빨간 테두리 효과만 살짝 줍니다 */}
                            <div className="absolute inset-0 pointer-events-none border-[1px] border-red-500/10 rounded-2xl"></div>
                        </div>
                        <p className="text-center text-xs text-slate-400 font-medium">
                            ▲ 실제 문자 전송 시간: 15:17(비번 전달) → 15:57(출차 요청)
                        </p>
                    </div>

                    {/* 오른쪽: 타임라인 분석 */}
                    <div className="relative pt-4 flex flex-col justify-center h-full">
                        {/* 세로선 */}
                        <div className="absolute left-[11px] top-6 bottom-6 w-0.5 bg-slate-200" />

                        <div className="space-y-12 relative">
                            {/* 포인트 1 */}
                            <div className="flex gap-6 relative">
                                <div className="z-10 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center ring-4 ring-white shadow-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">기분 좋은 시작</h4>
                                    <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                                        "미흡한 부분 죄송하다, 바로 다시 하겠다"는 피드백. <br className="hidden md:block" />
                                        정중한 태도에 <strong>희망</strong>이 생겼고, 꼼꼼한 확인을 부탁하며 비밀번호를 전달했습니다.
                                    </p>
                                </div>
                            </div>

                            {/* 포인트 2: 결정적 의구심 */}
                            <div className="flex gap-6 relative">
                                <div className="z-10 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center ring-4 ring-white shadow-sm animate-pulse">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-red-600 text-lg">작업 시간: 단 40분</h4>
                                    <div className="bg-white p-5 rounded-2xl border-2 border-red-100 mt-3 shadow-md">
                                        <div className="flex justify-between text-sm mb-2 pb-2 border-b border-slate-50">
                                            <span className="text-slate-500 font-medium">15:17</span>
                                            <span className="text-blue-600 font-bold">비밀번호 전달</span>
                                        </div>
                                        <div className="flex justify-between text-sm mb-4">
                                            <span className="text-slate-500 font-medium">15:57</span>
                                            <span className="text-red-600 font-bold">출차 요청</span>
                                        </div>
                                        <div className="bg-red-50 p-3 rounded-lg text-center">
                                            <p className="text-red-700 font-black text-base italic">
                                                "28평 리모델링 현장 재검수,<br/> 정말 40분 만에 가능합니까?"
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                                        탈거 청소, 구석 분진, 화장실 벽면... 이 모든 걸 다시 확인했다면 <br className="hidden md:block" />
                                        절대 나올 수 없는 시간 아닐까요?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="my-20 space-y-10">
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-black text-slate-900">
                        "각별히 신경 써달라는 부탁, 그리고 약속"
                    </h3>
                    <p className="text-slate-500 mt-2 text-sm md:text-base">
                        작업 완료 보고를 받고, 마지막으로 한 번 더 부탁 드렸던 통화 내용입니다.
                    </p>
                </div>

                {/* 대화창 UI */}
                <div className="max-w-2xl mx-auto bg-[#BACEE0] p-4 md:p-8 rounded-3xl shadow-inner">
                    <div className="space-y-6">
                        {/* 업체 메신저 */}
                        <div className="flex items-start gap-2">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xs font-bold shrink-0">청소</div>
                            <div className="space-y-1">
                                <p className="text-[11px] text-slate-600 ml-1">청소팀장님</p>
                                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] text-sm leading-relaxed text-slate-800">
                                    고객님, A/S 작업 완료했습니다~ <br/>
                                    작업 사진 보내드리고요, 추가로 더 각별히 신경 쓰시는 부분 있을까요?
                                </div>
                            </div>
                        </div>

                        {/* 나의 답변 */}
                        <div className="flex flex-col items-end gap-1">
                            <div className="bg-[#FEE500] p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] text-sm leading-relaxed text-slate-800">
                                전체적으로 봐주시고 작은방 벽면에 분진 가루가 많았는데, 그 부분 신경 써주세요.
                            </div>
                        </div>

                        {/* 업체 메신저 */}
                        <div className="flex items-start gap-2">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-xs font-bold shrink-0">청소</div>
                            <div className="space-y-1">
                                <p className="text-[11px] text-slate-600 ml-1">청소팀장님</p>
                                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] text-sm leading-relaxed text-slate-800 font-medium">
                                    그럼 벽면 하고 전체적으로 한번 더 검토 후 나갈게요.
                                </div>
                            </div>
                        </div>

                        {/* 나의 답변 */}
                        <div className="flex flex-col items-end gap-1">
                            <div className="bg-[#FEE500] p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[85%] text-sm leading-relaxed text-slate-800">
                                네, 부탁드립니다.
                            </div>
                        </div>
                    </div>
                </div>

                {/* 업체가 보내준 사진 그리드 (9장) */}
                <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-2 md:gap-4">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                            <div key={i} className="aspect-square relative rounded-lg overflow-hidden bg-slate-200">
                                <Image
                                    src={`/images/as/as-send-${i}.jpg`}
                                    alt={`업체가 전송한 완료 사진 ${i}`}
                                    fill
                                    className="object-cover transition duration-300 hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-xs text-slate-400">▲ 비포에프터클린 청소팀장님이 "검토 완료"라며 전송한 사진들 (총 9장)</p>
                </div>

                {/* 심경 변화 텍스트 */}
                <div className="max-w-2xl mx-auto text-center py-8">
                    <p className="text-lg text-slate-700 leading-relaxed font-medium">
                        전송된 사진들을 보니 <br className="hidden md:block"/>
                        <span className="text-blue-600 font-bold">"고생하셨구나, 설마 해당 부분만 했겠어?"</span>라는 생각에 <br
                        className="hidden md:block"/>
                        더 이상의 확인 없이 기분 좋게 팀장님을 보내드렸습니다.
                    </p>
                </div>
            </section>


            {/* 3. 현장 검수: 충격적인 실체 */}
            <section className="space-y-12">
                <div className="prose prose-lg max-w-none">
                    <h2 className="text-3xl font-black text-slate-900">퇴근 후 마주한 '진짜' 충격</h2>
                    <p>
                        보내준 사진상으론 깨끗해 보였습니다. 하지만 직접 벽면을 청소포로 닦아본 순간, 제 눈을 의심했습니다.
                        <strong>시커먼 갈색 먼지</strong>가 청소포 가득 묻어 나왔습니다.
                        만약 이 상태로 입주했다면 제 가족이 이 먼지를 다 마셨을 거라는 생각에 기분이 더욱 안좋아졌습니다..
                    </p>
                </div>

                {/* 갈색 먼지 강조 섹션 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-900">
                        {/* 갈색 먼지 묻은 청소포 사진 배치 */}
                        <div className="aspect-[4/5] bg-slate-200 relative">
                            <Image src="/images/as/as-self-clean-main.png" alt="벽면에서 나온 갈색 먼지" fill className="object-cover" />
                        </div>
                        <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-xs font-bold rounded">경악스러움</div>
                    </div>
                    <div className="flex flex-col justify-center space-y-4 bg-red-50 p-8 rounded-2xl">
                        <h4 className="text-xl font-bold text-red-700">모든 벽면에서 나오는 먼지</h4>
                        <p className="text-red-900/80 leading-relaxed font-medium">
                            손이 닿는 모든 벽면에서 나오는 먼지, 주방 상부장, 하부장, 심지어 추가금을 낸 수납장까지 사람 손이 닿는 곳임에도 갈색 분진이 그대로였습니다.
                            분명히 '전체적으로 검토했다'는 말을 믿었는데, 제가 직접 닦으니 지워지는 자국들이 왜 전문가의 손길에 남아있는 건지 참으로 아쉬움이 남네요.
                        </p>
                        <div className="bg-white/50 p-4 rounded-lg border border-red-200 text-sm italic">
                            "시간이 지나고 다시 닦아보니, 더 이상 묻어나오지 않더군요.
                        </div>
                    </div>
                </div>
            </section>


            <section className="mt-32 space-y-16">
                {/* 역설적인 제목 섹션 */}
                <div className="relative text-center">
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center opacity-[0.03] pointer-events-none">
                        <span className="text-[12rem] font-black uppercase tracking-tighter">DISASTER</span>
                    </div>
                    <h2 className="relative text-3xl md:text-5xl font-black text-slate-900 leading-tight">
                        비포에프터클린?<br/>
                        <span className="text-red-600 underline decoration-double decoration-red-600 underline-offset-8">
                            '에프터'...?
                        </span>
                    </h2>
                    <p className="mt-8 text-lg text-slate-600 font-medium">
                        A/S를 받고 처리 됐다는 사진에 나온 그 곳,<br className="md:hidden"/> 제가 직접 닦으며 찍은 사진입니다.
                    </p>
                </div>

                {/* 증거 사진 갤러리 (5~6개) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { src: "/images/as/as-self-clean-8.jpg", label: "주방 하부장 안쪽", desc: "손이 닿는 곳임에도 갈색 가루가 가득합니다." },
                        { src: "/images/as/after-cabinet-clean-before.jpg", label: "수납장 레일, 수납장 위", desc: "한 번만 훑어도 시커먼 먼지가 묻어납니다." },
                        { src: "/images/as/as-self-clean-1.png", label: "벽면 분진 상태", desc: "분명히 신경 써달라고 부탁드렸던 벽면인데.. " },
                        { src: "/images/as/as-window.jpg", label: "창문 내부", desc: "창문도 먼지가 그대로 이길래 손으로 문질러보니 손자국이 그대로이네요." },
                        { src: "/images/as/after-lamp-1.jpg", label: "방등 내부", desc: "탈거 청소를 약속 및 A/S 내용에도 포함이 된 내용인데, 먼지가 그대로입니다." },
                        { src: "/images/as/as-self-clean-2.jpg", label: "주방 상부장", desc: "상부장 모서리, 경첩 부분 등 묻어 나오는 먼지" },
                    ].map((item, idx) => (
                        <div key={idx} className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:border-red-500 transition-all duration-300">
                            <div className="relative aspect-square">
                                <Image
                                    src={item.src}
                                    alt={item.label}
                                    fill
                                    className="object-cover group-hover:scale-110 transition duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                                    Evidence {idx + 1}
                                </div>
                            </div>
                            <div className="p-5">
                                <h4 className="text-slate-900 font-bold mb-1">{item.label}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 분노의 결론 포인트 */}
                <div className="max-w-3xl mx-auto">
                    <div className="bg-red-50 rounded-3xl p-8 md:p-12 border-2 border-dashed border-red-200 relative">
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-2 rounded-full font-black shadow-xl">
                            후기를 작성한 포인트
                        </div>

                        <div className="space-y-6 text-red-900 text-center md:text-left">
                            <p className="text-xl md:text-2xl font-black leading-snug">
                                "내 가족이 이 먼지를 먹었을 생각을 하니<br className="md:hidden"/> 억장이 무너집니다."
                            </p>
                            <div className="h-px bg-red-200 w-full" />
                            <p className="text-base md:text-lg leading-relaxed font-medium">
                                분진이 많은 집이라 어쩔 수 없다는 변명, <br/>
                                전문가가 3시간 + A/S(40분) 작업 시 못 본 먼지를 일반인인 제가 검수 단 몇 분 만에 닦아냈습니다. <br className="hidden md:block"/>
                                <strong>이게 과연 63만원짜리 청소 서비스의 '애프터'입니까?</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            {/* 4. 마지막 대화와 결심 */}
            <section className="mt-20 py-12 border-t border-slate-200">
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">마지막 연락, 그리고 포기</h3>
                    <p className="text-slate-700 mb-8">
                        이사가 당장 내일인데, 밤늦게 직접 청소를 하며 너무 화가 나 늦은 시간 임에도 불구하고 비포에프터클린 청소 팀장님에게 다시 연락을 드렸습니다.
                        작업이 안 된 부분들을 따지니 돌아온 대답은 <strong>"A/S가 더 필요한 거냐"</strong>는 물음이었습니다.
                        <br/>
                        <strong>'A/S를 이미 받았는데, 또 A/S? 집에 가구 들어오고 정리하면 그때는?'</strong>이라는 생각에 <br/>
                        더 이상의 대화는 의미가 없다고 판단했고, 저는 그냥 후기를 남기기로 했습니다.
                    </p>



                    <div className="my-12 relative">
                        {/* 배경에 깔리는 부드러운 하이라이트와 큰 따옴표 장식 */}
                        <div className="absolute -top-10 -left-4 text-8xl text-slate-100 font-serif select-none">“</div>

                        <div className="relative bg-slate-50 border-l-4 border-slate-900 p-8 md:p-10 rounded-r-3xl shadow-sm">
                            <div className="space-y-6 text-slate-700">
                                <p className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                                    "분진이 많아서 어쩔 수 없다고요?"
                                </p>

                                <div className="space-y-4 text-base md:text-lg leading-relaxed">
                                    <p>
                                        그럼 <span className="text-red-600 font-bold underline decoration-2 underline-offset-4">분진 + 새집증후군 비용</span>은 대체 왜 받으신 건가요?
                                        작업을 완수할 수 없는 환경이었다면 차라리 처음부터 말씀해 주시는 게 맞지 않았을까요?
                                        <br/>
                                        다른 구축 인테리어 집들은 대체 어떻게 청소하시는 건지... 정말 의문만 남습니다.
                                    </p>

                                    <p className="font-medium">
                                        분진과 먼지를 제거하는 게 입주 청소의 본질일 텐데,
                                        업체가 다녀간 뒤에도 물걸레에 시커먼 먼지가 그대로 묻어 나오는 상황을 보니
                                        <span className="bg-yellow-100 px-1 font-bold text-slate-900 uppercase">'차라리 내가 직접 할걸'</span>이라는 후회만 가득합니다.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-10 -right-4 text-8xl text-slate-100 font-serif rotate-180 select-none">“</div>
                    </div>

                    <div className="bg-black text-white p-8 rounded-3xl shadow-xl">
                        <h4 className="text-xl font-black mb-4 text-red-500">결론: 이런 업체는 피하는게 좋지 않을까요?</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">✕</span>
                                <span>추가금을 받고도 '분진 탓'을 하는 무책임함</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">✕</span>
                                <span>형식적인 A/S와 보여주기식 사진 촬영</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">✕</span>
                                <span>결국 고객이 직접 청소하게 만드는 최악의 전문성</span>
                            </li>
                        </ul>
                        <p className="mt-8 text-sm text-slate-400 text-center border-t border-white/10 pt-6">
                            리모델링 후 가장 행복해야 할 순간을 망치지 마시길 바랍니다.
                        </p>
                    </div>
                </div>
            </section>


            <script type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(generateJsonLd(getSEO(PAGE_PATH)))
                    }}
            />
        </article>
    );
}


function ImageBox({ src, alt, large = false, full = false }: {
    src: string;
    alt: string;
    large?: boolean;
    full?: boolean;
}) {
    return (
        <div
            className={`relative rounded-lg overflow-hidden ${
                full ? "" : large ? "h-80" : "aspect-square"
            }`}
        >
            {/* full이 true일 때는 fill 대신 원본 비율을 유지하는 방식으로 렌더링 */}
            {full ? (
                <img src={src} alt={alt} className="w-full h-auto object-contain" />
            ) : (
                <Image src={src} alt={alt} fill className="object-cover" />
            )}
        </div>
    );
}