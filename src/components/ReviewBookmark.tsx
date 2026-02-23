import Link from 'next/link';
import Image from 'next/image';

interface ReviewBookmarkProps {
  href: string;
  thumbnail: string;
  title: string;
  description: string;
  price?: string;
  rating?: number;
}

export default function ReviewBookmark({
  href,
  thumbnail,
  title,
  description,
  price,
  rating = 1,
}: ReviewBookmarkProps) {
  return (
    <Link href={href} className="group block">
      <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        {/* 썸네일 영역 */}
        <div className="relative w-full md:w-72 h-48 md:h-auto overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            솔직후기
          </div>
        </div>

        {/* 텍스트 컨텐츠 영역 */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>

            <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>

          <div className="mt-4 flex items-center text-sm font-bold text-gray-400 group-hover:text-red-500">
            상세 보기
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}