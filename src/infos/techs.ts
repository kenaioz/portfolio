import {
  IoLogoReact,
  IoLogoPython,
  IoLogoNodejs,
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoJavascript,
} from "react-icons/io5";
import {
  BiLogoTypescript,
  BiLogoGithub,
  BiLogoGit,
  BiLogoPostgresql,
} from "react-icons/bi";
import {
  SiSqlite,
  SiStyledcomponents,
  SiFlask,
  SiDjango,
  SiTailwindcss,
  SiNextdotjs,
  SiNestjs,
  SiExpress,
  SiDocker,
  SiGoogleappsscript,
  SiRemix,
  SiKubernetes,
  SiGithubactions,
  SiMongodb,
  SiGrafana,
  SiRabbitmq,
  SiApachekafka,
  SiNginx,
  SiTraefikproxy,
  SiPrometheus,
  SiVite,
  SiWebpack,
  SiStorybook,
} from "react-icons/si";
import { FaAws, FaGolang, FaLinux } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { DiMsqlServer, DiRedis } from "react-icons/di";

import { IconType } from "react-icons";

interface TechItem {
  name: string;
  icon: IconType;
}

interface Techs {
  name: string;
  items: TechItem[];
}

const techs: Techs[] = [
  {
    name: "Front-End",
    items: [
      { name: "HTML", icon: IoLogoHtml5 },
      { name: "CSS", icon: IoLogoCss3 },
      { name: "Styled-Components", icon: SiStyledcomponents },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "JavaScript", icon: IoLogoJavascript },
      { name: "TypeScript", icon: BiLogoTypescript },
      { name: "ReactJS", icon: IoLogoReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Remix", icon: SiRemix },
      { name: "Vite", icon: SiVite },
      { name: "Webpack", icon: SiWebpack },
      { name: "Storybook", icon: SiStorybook },
    ],
  },
  {
    name: "Back-End",
    items: [
      { name: "Node.js", icon: IoLogoNodejs },
      { name: "Express", icon: SiExpress },
      { name: "NestJS", icon: SiNestjs },
      { name: "Python", icon: IoLogoPython },
      { name: "Flask", icon: SiFlask },
      { name: "Django", icon: SiDjango },
      { name: "GoLang", icon: FaGolang },
      { name: "MySQL", icon: GrMysql },
      { name: "PostgreSQL", icon: BiLogoPostgresql },
      { name: "Microsoft SQL Server", icon: DiMsqlServer },
      { name: "SQLite", icon: SiSqlite },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis | Valkey | Memcached", icon: DiRedis },
    ],
  },
  {
    name: "Skills",
    items: [
      { name: "Google Apps Script", icon: SiGoogleappsscript },
      { name: "Git", icon: BiLogoGit },
      { name: "GitHub", icon: BiLogoGithub },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "AWS", icon: FaAws },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "Grafana LGTM Stack", icon: SiGrafana },
      { name: "Prometheus", icon: SiPrometheus },
      { name: "RabbitMQ", icon: SiRabbitmq },
      { name: "Apache Kafka", icon: SiApachekafka },
      { name: "Nginx", icon: SiNginx },
      { name: "Traefik", icon: SiTraefikproxy },
      { name: "Linux (Arch BTW)", icon: FaLinux },
    ],
  },
];

export { techs };
export type { Techs };
