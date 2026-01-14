import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import ContactClassicArea from "@components/contacts/contact-classic";
import { useTranslations } from '@context/IntlContext';

export default function Contact() {
  const t = useTranslations('contact.seo');

  return (
    <Wrapper>
      <SEO
        pageTitle={t('title')}
        description={t('description')}
        url="/contact"
      />
      <HeaderEight />
      <ContactClassicArea />
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
        ...(await import(`../../messages/${locale}/contact.json`)).default,
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
