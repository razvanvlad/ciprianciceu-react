import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SectionArea from "@components/section-area/section-area";
import PolicyArea from "@components/terms-policy/policy-area";
import { useTranslations } from '@context/IntlContext';

export default function Policy() {
  const t = useTranslations('policy.privacy');

  return (
    <Wrapper>
      <SEO pageTitle={t('title')} url="/policy" />
      <HeaderEight />
      <SectionArea
        title={t('title')}
        subtitle={
          <>
            Your privacy is important to us. This Privacy Policy explains how personal data <br />
            is collected, used, and protected when you visit our Website.
          </>
        }
      />
      <PolicyArea/>
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
