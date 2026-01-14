import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SectionArea from "@components/section-area/section-area";
import TermsArea from "@components/terms-policy/terms-area";
import { useTranslations } from '@context/IntlContext';

export default function Terms() {
  const t = useTranslations('policy.terms');

  return (
    <Wrapper>
      <SEO pageTitle={t('title')} url="/terms" />
      <HeaderEight />
      <SectionArea
        title={t('title')}
        subtitle={
          <>
            These Terms govern the use of this Website. By accessing or using this Website, <br />
            you agree to be bound by these Terms and Conditions.
          </>
        }
      />
      <TermsArea/>
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
