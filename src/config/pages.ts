import type { PagesConfig } from "../types";

export const PAGES: PagesConfig = {
    home: {
        title: "About Me",
        subtitle: "",
        isActive: true,
    },
    blog: {
        title: "Blog",
        subtitle: "",
        isActive: true,
    },
    publications: {
        title: "Research",
        subtitle: "",
        isActive: true,
    },
    talks: {
        title: "Talks & Presentations",
        subtitle: "Public lectures, colloquia, and conference presentations.",
        isActive: false,
    },
    projects: {
        title: "Competitions",
        subtitle: "",
        isActive: true,
    },
    teaching: {
        title: "Teaching",
        subtitle: "Academic courses and educational materials.",
        isActive: false,
    },
    tags: {
        title: "Tags",
        subtitle: "Explore content by topic.",
        isActive: false,
    },
    cv: {
        title: "Curriculum Vitae",
        subtitle: "Academic and professional history.",
        isActive: true,
    },
};
