// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

const isHashRouter = process.env.USE_HASH_ROUTER === "true";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "DocuGrammar",
    tagline: "DocuGrammar - Collection of grammar references in web format (powered by Docusaurus)",
    favicon: "img/favicon.ico",

    url: "https://yell0wsuit.github.io",
    baseUrl: "/docugrammar/",

    // GitHub pages deployment config.
    organizationName: "yell0wsuit",
    projectName: "docugrammar",
    trailingSlash: false,

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: "/",
                    sidebarPath: "./sidebars.js",
                    editUrl: "https://github.com/yell0wsuit/docugrammar/edit/main/",
                },
                blog: false,
                theme: {
                    customCss: "./src/css/custom.css",
                },
            }),
        ],
    ],

    themes: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
            {
                hashed: true,
                explicitSearchResultPath: true,
                docsRouteBasePath: "/",
            },
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                title: "DocuGrammar",
                logo: {
                    alt: "DocuGrammar Logo",
                    src: "img/docugrammar-logo.svg",
                    srcDark: "img/docugrammar-logo-dark.svg",
                },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "tutorialSidebar",
                        position: "left",
                        label: "Grammar references",
                    },
                    {
                        href: "https://github.com/yell0wsuit/docugrammar",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                copyright: `Copyright © ${new Date().getFullYear()} DocuGrammar. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
            colorMode: {
                disableSwitch: false,
            },
        }),

    future: {
        experimental_router: isHashRouter ? "hash" : "browser",
    },
};

export default config;
