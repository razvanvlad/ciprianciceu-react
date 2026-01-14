import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SectionArea from "@components/section-area/section-area";
import CookiePolicyArea from "@components/terms-policy/cookie-policy-area";
import { useTranslations } from '@context/IntlContext';

export default function CookiePolicy() {
  const t = useTranslations('policy.cookie');

  return (
    <Wrapper>
      <SEO pageTitle={t('title')} url="/cookie-policy" />
      <HeaderEight />
      <SectionArea
        title={t('title')}
        subtitle={
          <>
            This Cookie Policy explains how we use cookies and similar technologies <br />
            to recognize visitors and improve user experience on our Website.
          </>
        }
      />
      <CookiePolicyArea />
      <FooterSeven />
    </Wrapper>
  );
}

// Load translations for this page
export async function getStaticProps({ params }) {
  const locale = params.locale;

  return {
    props: {
      messages: {
        ...(await import(`../../messages/${locale}/common.json`)).default,
        ...(await import(`../../messages/${locale}/policy.json`)).default,
      }
    }
  };
}

// Generate static pages for all locales
export async function getStaticPaths() {
  return {
    paths: [
      { params: { locale: 'en' } },
      { params: { locale: 'fr' } },
      { params: { locale: 'ro' } },
      { params: { locale: 'ar' } }
    ],
    fallback: false
  };
}
