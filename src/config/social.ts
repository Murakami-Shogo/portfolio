import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Email",
        href: "mailto:murakami@ai.cs.ehime-u.ac.jp",
        linkTitle: "Email",
        isActive: true,
    },
    {
        name: "GitHub",
        href: "https://github.com/Murakami-Shogo",
        linkTitle: "GitHub",
        isActive: true,
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Email: "Mail",
    GitHub: "Github",
    Github: "Github",
    Mail: "Mail",
    Linkedin: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
    RSS: "RSS",
};
