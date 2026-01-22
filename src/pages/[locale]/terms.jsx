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
        subtitle={t('subtitle')}
      />
      <TermsArea/>
      <FooterSeven />
    </Wrapper>
  );
}

// Load translations for this page
export async function getServerSideProps({ params }) {
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
