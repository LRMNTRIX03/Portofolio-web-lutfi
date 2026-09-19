import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

export interface HeroData {
  deskripsi: string;
  roles: string[];
  profile: {
    Icon: LucideIcon;
    href: string;
    label: string;
  }[];
}

const hero: HeroData[] = [
  {
    deskripsi:
      "Computer Science graduate with a 3.96 GPA and a strong interest in Backend Engineering and Full-Stack Web Development. Experienced in developing enterprise Human Capital applications for the banking industry, contributing to digital solutions that streamline HR operations and improve internal business processes. Proficient in building RESTful APIs, authentication systems, and relational database architectures using Laravel, Spring Boot, Django, Next.js, React, and Docker. A proactive learner with strong analytical thinking, problem-solving abilities, and a collaborative mindset, committed to delivering reliable and scalable software solutions.",
    roles: ["Software Engineer", "Full Stack Web Developer", "AI Enthusiast"],
    profile: [
      {
        Icon: Github,
        href: "https://github.com/LRMNTRIX03",
        label: "Github",
      },
      {
        Icon: Linkedin,
        href: "https://linkedin.com/in/lutfi-rizaldi-mahida-65a566300/",
        label: "Linkedin",
      },
      {
        Icon: Mail,
        href: "mailto:rizaldilutfi1@gmail.com",
        label: "Email",
      },
    ],
  },
];

export default hero;