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
      "Software Engineer and Informatics Engineering graduate from Budi Luhur University with hands-on experience developing reliable and scalable applications. Currently working as a Human Capital Technology & Information Staff at Bank Syariah Indonesia, contributing to the development and maintenance of internal enterprise applications and automation solutions that support business operations. Proficient in Python, PHP, JavaScript/TypeScript, and Java, with experience building web applications, RESTful APIs, and database-driven systems. Strong analytical and problem-solving skills, adaptable to new technologies, and committed to continuously improving technical expertise while delivering impactful software solutions.",
    roles: ["Backend Developer", "Software Engineer", "Full Stack Web Developer"],
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