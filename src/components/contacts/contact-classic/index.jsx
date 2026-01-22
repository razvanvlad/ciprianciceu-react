import React from 'react';
import ContactSectionWrapper from '../contact-area/contact-section-wrapper';
import ClassicFormArea from './classic-form-area';
import ClassicLocationArea from './classic-location-area';
import { useTranslations } from '@context/IntlContext';

const ContactClassicArea = () => {
  const t = useTranslations('contact.header');

  return (
    <React.Fragment>
      <ContactSectionWrapper title={t('title')} subtitle={t('subtitle')} />
      <ClassicFormArea/>
      <ClassicLocationArea/>
    </React.Fragment>
  );
};

export default ContactClassicArea;