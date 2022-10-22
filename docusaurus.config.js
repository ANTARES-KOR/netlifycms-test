// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Ybigta",
  tagline: "연세대학교 빅데이터 학회",
  url: "https://introducing-ybigta.pages.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ybigta", // Usually your GitHub org/user name.
  projectName: "introducing-ybigta", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  plugins: [
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "teams",
        path: "teams",
        routeBasePath: "teams",
        sidebarPath: require.resolve("./sidebars.js"),
      }),
    ],
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "conference",
        path: "conference",
        routeBasePath: "conference",
        sidebarPath: require.resolve("./sidebars.js"),
      }),
    ],
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 85,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 4, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: [],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: "keyword", content: "연세대학교, 빅데이터, bigdata, yonsei" },
      ],
      navbar: {
        title: "연세대학교 빅데이터 학회 Ybigta",
        logo: {
          alt: "Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "about",
            position: "left",
            label: "About",
          },
          {
            to: "/teams/intro",
            label: "Teams",
            position: "left",
          },
          {
            to: "/conference/intro",
            label: "Conference",
            position: "left",
          },
          {
            href: "https://github.com/YBIGTA-DE",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "About",
            items: [
              {
                label: "About us",
                to: "/docs/about",
              },
              {
                label: "Recruiting",
                to: "/docs/recruiting",
              },
              {
                label: "Curriculum",
                to: "/docs/curriculum",
              },
              {
                label: "Alumni",
                to: "/docs/alumni",
              },
            ],
          },
          {
            title: "Teams",
            items: [
              {
                label: "Data Analytics",
                to: "/teams/data-analytics",
              },
              {
                label: "Data Science",
                to: "/teams/data-science",
              },
              {
                label: "Data Engineering",
                to: "/teams/data-engineering",
              },
            ],
          },
          {
            title: "Channels",
            items: [
              {
                label: "Instagram",
                href: "https://www.instagram.com/yonsei_ybigta/",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/channel/UCRcHg9Ch34qikQi1xcnT8fw/featured",
              },
              {
                label: "Email",
                href: "mailto:yonseibigdata@gmail.com",
              },
              {
                label: "Facebook",
                href: "https://www.facebook.com/yonseibigdata",
              },
              {
                label: "Kakaotalk",
                href: "http://pf.kakao.com/_KxcxkBK",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 연세대학교 빅데이터학회 Ybigta.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
