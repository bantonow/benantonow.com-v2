"use client";

import { TextScrambleLink } from "./TextScrambleLink";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Quotes", href: "/quotes" },
    { label: "Musings", href: "/blog" },
    { label: "Media", href: "/media" },
    { label: "Work", href: "/resume.pdf" },
    { label: "Twitter", href: "https://x.com/benantonow" },
    { label: "GitHub", href: "https://github.com/bantonow" },
    { label: "LinkedIn", href: "https://www.Linkedin.com/in/benantonow/" }
  ];

  return (
    <p className="mt-6">
      {links.map((link, index) => (
        <span key={link.href}>
          <span className={
            link.href === "/"
              ? pathname === "/" 
                ? "underline"
                : ""
              : pathname.startsWith(link.href) 
              ? "underline"
              : ""
            }
          >
            <TextScrambleLink href={link.href}>
              {link.label}
            </TextScrambleLink>
          </span>
          {index < links.length - 1 && " | "}
        </span>
      ))}
    </p>
  );
}