import React from "react";
import Head from "next/head";

import "../styles/scss/style.scss";
import "../styles/globals.css";

import { register } from "swiper/element/bundle";
// register Swiper custom elements
register();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* seo begin */}
        <title>
          Dentist Fairfield NSW | Fairfield Dental Care | Family Dentistry
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Our Fairfield dentist office looks forward to welcoming you and your loved ones. Learn more and contact us to see how we can help you maintain oral health."
        />
        <meta httpEquiv="Cache-control" content="no-store" />
        <meta property="og:title" content="Welcome to Our Practice" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Our Fairfield dentist office looks forward to welcoming you and your loved ones. Learn more and contact us to see how we can help you maintain oral health."
        />
        <link rel="canonical" href="https://www.fairfielddentalcare.com.au/" />
        <link
          rel="alternate"
          href="https://www.fairfielddentalcare.com.au/"
          hrefLang="en"
        />
        <link rel="icon" href="/img/favicon.png" type="image/x-icon" />
        <link rel="shortcut icon" href="/img/favicon.png" type="image/x-icon" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap"
        />
        <meta name="city" content="Fairfield" />
        <meta name="state" content="NSW" />
        <meta name="country" content="AU" />
        <meta httpEquiv="content-language" content="en_AU" />
        <meta name="verify-v1" content="0" />
        <meta name="google-site-verification" content="0" />
        <meta name="msvalidate.01" content="C95EC6631E585C446148D083D84ED1DB" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=yes, minimal-ui"
        />
        <meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
        {/* seo end */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
