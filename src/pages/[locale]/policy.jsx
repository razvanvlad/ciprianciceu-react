import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SectionArea from "@components/section-area/section-area";
import PolicyArea from "@components/terms-policy/policy-area";
import { useTranslations } from '@context/IntlContext';

export default function Policy() {
  const t = useTranslations('policy.privacy');

  return (
    <Wrapper>
      <SEO
        pageTitle={t('title')}
        url="/policy"
        pageType="default"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Privacy Policy" }
        ]}
      />
      <HeaderEight />
      <SectionArea
        title={t('title')}
        subtitle={t('subtitle')}
      />
      <PolicyArea/>
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
