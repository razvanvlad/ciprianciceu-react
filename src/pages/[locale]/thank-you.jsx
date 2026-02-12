import { FooterSeven, HeaderEight, Wrapper } from "@layout/index";
import SEO from "@components/seo";
import { useTranslations, useLocale } from '@context/IntlContext';
import Link from "next/link";

export default function ThankYou() {
  const t = useTranslations('contact.thankYou');
  const locale = useLocale();

  return (
    <Wrapper>
      <SEO pageTitle={t('seoTitle')} url="/thank-you" />
      <HeaderEight />
      <section className="tp-section-area pt-120 pb-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 text-center">
              <div className="tp-section-wrapper-2">
                <span className="tp-section-subtitle-2 subtitle-mb-9">
                  {t('title')}
                </span>
                <h2 className="tp-section-title-2 font-70 mb-25">
                  {t('subtitle')}
                </h2>
                <p className="mb-40" style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  {t('text')}
                </p>
                <Link href={`/${locale}`} className="tp-btn">
                  {t('button')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSeven />
    </Wrapper>
  );
}

export async function getServerSideProps({ params }) {
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
