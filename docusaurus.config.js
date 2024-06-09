// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Grammarsaurus",
    tagline: "Grammarsaurus - Collection of grammar references in web format (powered by Docusaurus)",
    favicon: "img/favicon.ico",

    url: "https://yell0wsuit.github.io",
    baseUrl: "/grammarsaurus/",

    // GitHub pages deployment config.
    organizationName: "yell0wsuit",
    projectName: "grammarsaurus",
    trailingSlash: false,

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "throw",

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
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    /*editUrl:
                        'https://github.com/yell0wsuit/grammarsaurus/tree/main/',*/
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
                docsRouteBasePath: "/"
            },
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                title: "Grammarsaurus",
                logo: {
                    alt: "Grammarsaurus Logo",
                    src: "img/grammarsaurus-logo.svg",
                },
                items: [
                    {
                        type: "docSidebar",
                        sidebarId: "tutorialSidebar",
                        position: "left",
                        label: "Practical English Usage",
                    },
                    {
                        href: "https://github.com/yell0wsuit/grammarsaurus",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                copyright: `Copyright © ${new Date().getFullYear()} Grammarsaurus. Built with Docusaurus.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
            colorMode: {
                disableSwitch: false,
            },
        }),
};

export default config;
