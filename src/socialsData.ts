import { Github, Linkedin, type LucideIcon } from "lucide-react";

export interface Social {
  label: string;
  handle: string;
  href: string;
  Icon: LucideIcon;
}

export const EMAIL = "kvishwakarmaofficial@gmail.com";

export const socials: Social[] = [
  {
    label: "GitHub",
    handle: "github.com/kanakvishwakarma",
    href: "https://github.com",
    Icon: Github,
  },
];
