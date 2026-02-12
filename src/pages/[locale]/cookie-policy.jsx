import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import SectionArea from "@components/section-area/section-area";
import CookiePolicyArea from "@components/terms-policy/cookie-policy-area";
import { useTranslations } from '@context/IntlContext';

export default function CookiePolicy() {
  const t = useTranslations('policy.cookie');

  return (
    <Wrapper>
      <SEO
        pageTitle={t('title')}
        url="/cookie-policy"
        pageType="default"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Cookie Policy" }
        ]}
      />
      <HeaderEight />
      <SectionArea
        title={t('title')}
        subtitle={t('subtitle')}
      />
      <CookiePolicyArea />
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
