import React from "react";
import Head from "next/head";
import { NextSeo } from "next-seo";

import Header from "./Header";
import Footer from "./Footer";
import { AppConfig } from "@/utils/AppConfig";

interface MainProps {
  children: React.ReactNode;
  title: string;
  canonical: string;
}

const Main: React.FC<MainProps> = ({ children, title, canonical }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NextSeo
        title={title}
        description={AppConfig.description}
        canonical={canonical}
        openGraph={{
          title: title,
          description: AppConfig.description,
          url: canonical,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />

      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export { Main };
