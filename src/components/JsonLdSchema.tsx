/**
 * JSON-LD 구조화 데이터 컴포넌트
 * 네이버 및 구글 검색 엔진이 콘텐츠를 구조적으로 이해할 수 있도록 지원
 */

interface Review {
  id: number;
  title: string;
  author: string;
  date: string;
  rating: number;
  content: string;
}

interface JsonLdSchemaProps {
  reviews?: Review[];
  type: 'website' | 'reviews' | 'local-business';
}

export default function JsonLdSchema({ reviews, type }: JsonLdSchemaProps) {
  // 웹사이트 기본 스키마
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "고품질 리뷰 블로그",
    "description": "실제 고객 후기와 A/S 사례를 투명하게 공개하는 신뢰할 수 있는 서비스 리뷰 블로그",
    "url": typeof window !== 'undefined' ? window.location.origin : '',
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": typeof window !== 'undefined' ? `${window.location.origin}/?tab={search_term_string}` : ''
      },
      "query-input": "required name=search_term_string"
    }
  };

  // 지역 비즈니스 스키마
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "고품질 리뷰 블로그",
    "description": "실제 고객 후기와 A/S 사례를 투명하게 공개하는 신뢰할 수 있는 서비스",
    "image": "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    "telephone": "010-1234-5678",
    "email": "contact@example.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "테헤란로 123",
      "addressLocality": "강남구",
      "addressRegion": "서울특별시",
      "addressCountry": "KR"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$",
    "aggregateRating": reviews && reviews.length > 0 ? {
      "@type": "AggregateRating",
      "ratingValue": (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1),
      "reviewCount": reviews.length,
      "bestRating": "5",
      "worstRating": "1"
    } : undefined
  };

  // 리뷰 스키마 (개별 리뷰)
  const reviewsSchema = reviews && reviews.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": reviews.map((review, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": review.author
        },
        "datePublished": review.date,
        "reviewBody": review.content,
        "name": review.title,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating,
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    }))
  } : null;

  // 타입에 따라 적절한 스키마 선택
  let schema;
  if (type === 'website') {
    schema = websiteSchema;
  } else if (type === 'local-business') {
    schema = localBusinessSchema;
  } else if (type === 'reviews' && reviewsSchema) {
    schema = reviewsSchema;
  }

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
