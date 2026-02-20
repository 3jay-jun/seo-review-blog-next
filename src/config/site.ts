export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL!,
  name: process.env.NEXT_PUBLIC_SITE_NAME!,
  description: process.env.NEXT_PUBLIC_DEFAULT_DESCRIPTION!,
  defaultOgImage: process.env.NEXT_PUBLIC_DEFAULT_OG_IMAGE!,
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  naverVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION,
};