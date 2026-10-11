import type { SiteConfig, ThemeConfig, SettingsConfig, UmamiAnalyticsConfig, AnalyticsConfig } from "../types";

export const SITE: SiteConfig = {
    website: "https://murakami-shogo-portfolio.vercel.app/",
    author: "村上 彰悟",
    desc: "愛媛大学大学院・自然言語処理研究室に所属する村上 彰悟（村上彰悟）のポートフォリオ。機械学習・深層学習、特に自然言語処理を専門とし、研究、コンペティション、ブログ、経歴を掲載しています。",
    title: "村上 彰悟",
    ogImage: "profile.jpg",
    postPerPage: 5,
    favicon: "/favicon.svg",
    lang: "ja",
};

export const THEME_CONFIG: ThemeConfig = {
    lightAndDark: true,
    themeLight: "light_default",
    themeDark: "dark_notepad",
};

export const SETTINGS: SettingsConfig = {
    showTagsInNavbar: false,
    showRSSInFooter: false,
    addDevToolsInProduction: false,
};

const umami: UmamiAnalyticsConfig = {
    websiteId: "", // e.g., 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
    src: "https://cloud.umami.is/script.js", // Default Umami cloud script URL
}

export const ANALYTICS: AnalyticsConfig = {
    // Google Analytics 4 Measurement ID (e.g., 'G-XXXXXXXXXX')
    ga4Id: "",
    // Umami Analytics configuration
    umami: umami
};
