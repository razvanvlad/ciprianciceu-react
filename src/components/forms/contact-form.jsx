import React, { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
// internal
import { contact_schema } from "@utils/validation-schema";
import ErrorMsg from "./error-msg";
import { useTranslations, useLocale } from '@context/IntlContext';

const ContactForm = ({ style_2 = false }) => {
  const t = useTranslations('contact.form');
  const router = useRouter();
  const locale = useLocale();
  const [status, setStatus] = useState({ loading: false, success: false, error: false });

  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phone: "",
        company: "",
        msg: "",
      },
      validationSchema: contact_schema,
      onSubmit: async (values, { resetForm }) => {
        setStatus({ loading: true, success: false, error: false });

        try {
          const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: values.name,
              email: values.email,
              phone: values.phone,
              company: values.company,
              message: values.msg,
            }),
          });

          if (!response.ok) {
            const data = await response.json().catch(() => ({}));
            throw new Error(data.error || data.message || 'Failed to send message');
          }

          resetForm();
          router.push(`/${locale}/thank-you`);
        } catch (error) {
          console.error("Contact form error:", error);
          setStatus({ loading: false, success: false, error: true });
        }
      },
    });
  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="contact__input-2">
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder={t('name')}
              id="name"
            />
            {touched.name && <ErrorMsg error={errors.name} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact__input-2">
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              placeholder={t('email')}
              id="email"
            />
            {touched.email && <ErrorMsg error={errors.email} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact__input-2">
            <input
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder={t('phone')}
              id="phone"
            />
            {touched.phone && <ErrorMsg error={errors.phone} />}
          </div>
        </div>
        <div className="col-md-6">
          <div className="contact__input-2">
            <input
              name="company"
              value={values.company}
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
              placeholder={t('company')}
              id="company"
            />
            {touched.company && <ErrorMsg error={errors.company} />}
          </div>
        </div>
        <div className="col-md-12">
          <div className="contact__input-2">
            <textarea
              name="msg"
              value={values.msg}
              onChange={handleChange}
              onBlur={handleBlur}
              id="msg"
              placeholder={t('message')}
            ></textarea>
            {touched.msg && <ErrorMsg error={errors.msg} />}
          </div>
        </div>
        <div className="col-md-12">
          <div className="contact__agree d-flex align-items-start mb-25">
            <input className="e-check-input" type="checkbox" id="e-agree" />
            <label className="e-check-label" htmlFor="e-agree">
              {t('agree')}
            </label>
          </div>
        </div>
        <div className="col-md-5">
          <div className="contact__btn-2">
            <button type="submit" className="tp-btn" disabled={status.loading}>
              {status.loading ? "..." : t('submit')}
            </button>
          </div>
          {status.error && (
            <p className="text-danger mt-15">{t('error')}</p>
          )}
        </div>
        {style_2 && (
          <div className="col-md-7">
            <div className="contact__form-call float-md-end">
              <span>{t('callTitle')}</span>
              <p style={{ display: 'flex', alignItems: 'center' }}>
                <a href="https://wa.me/971502809015" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                  <i className="fa-brands fa-whatsapp" style={{ color: '#25D366', fontSize: '2em' }}></i>
                </a>
                <a href="https://wa.me/971502809015" style={{ color: '#25D366' }}>
                  +971/502809015
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
