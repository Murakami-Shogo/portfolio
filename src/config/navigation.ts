import type { NavLink } from "../types";

export const NAV_LINKS: NavLink[] = [
    { href: "/", label: "About", isActive: true },
    { href: "/publications", label: "Research", isActive: true },
    { href: "/projects", label: "Competitions", isActive: true },
    { href: "/posts", label: "Blog", isActive: true },
    { href: "/cv", label: "CV", isActive: true },
    { href: "/talks", label: "Talks", isActive: false },
    { href: "/teaching", label: "Teaching", isActive: false },
    { href: "/tags", label: "Tags", isActive: false },
];
