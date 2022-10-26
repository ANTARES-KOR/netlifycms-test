import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.tagline}
      description={`${siteConfig.tagline} ${siteConfig.title}`}
    >
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
