import { useTranslation } from "react-i18next";
import HeartIcon from "~icons/lucide/heart";
import JavaIcon from "~icons/devicon/java?raw";
import SpringIcon from "~icons/devicon/spring?raw";
import MavenIcon from "~icons/devicon/maven?raw";
import OracleIcon from "~icons/devicon/oracle?raw";
import GitIcon from "~icons/devicon/git?raw";
import GitLabIcon from "~icons/devicon/gitlab?raw";
import IntelliJIcon from "~icons/devicon/intellij?raw";
import JiraIcon from "~icons/devicon/jira?raw";
import ConfluenceIcon from "~icons/devicon/confluence?raw";
import JavaScriptIcon from "~icons/devicon/javascript?raw";
import TypeScriptIcon from "~icons/devicon/typescript?raw";
import ReactIcon from "~icons/devicon/react?raw";
import TailwindIcon from "~icons/devicon/tailwindcss?raw";
import HtmlIcon from "~icons/devicon/html5?raw";
import ViteIcon from "~icons/devicon/vitejs?raw";
import NodeIcon from "~icons/devicon/nodejs?raw";
import VSCodeIcon from "~icons/devicon/vscode?raw";
import PostmanIcon from "~icons/devicon/postman?raw";
import OpenShiftIcon from "~icons/simple-icons/redhatopenshift?raw";
import BrunoIcon from "~icons/simple-icons/bruno?raw";
import GitHubIcon from "~icons/simple-icons/github?raw";
import ClaudeIcon from "~icons/simple-icons/claude?raw";

type Skill = {
  name: string;
  icon?: string;
  favorite?: boolean;
};

const svg = (raw: string, color = "currentColor") =>
  `data:image/svg+xml,${encodeURIComponent(
    raw
      .replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" ')
      .replace(/currentColor/g, color),
  )}`;
const pub = (file: string) => `${import.meta.env.BASE_URL}icons/${file}`;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j] as T, a[i] as T];
  }
  return a;
}

const workSkills: Skill[] = [
  { name: "Java", icon: svg(JavaIcon), favorite: true },
  { name: "Spring Boot", icon: svg(SpringIcon), favorite: true },
  { name: "Maven", icon: svg(MavenIcon) },
  { name: "Oracle", icon: svg(OracleIcon) },
  { name: "OpenShift", icon: svg(OpenShiftIcon, "#EE0000") },
  { name: "XLDeploy", icon: pub("xldeploy.png") },
  { name: "XLRelease" },
  { name: "Git", icon: svg(GitIcon) },
  { name: "GitLab", icon: svg(GitLabIcon) },
  { name: "IntelliJ", icon: svg(IntelliJIcon), favorite: true },
  { name: "Jira", icon: svg(JiraIcon) },
  { name: "Confluence", icon: svg(ConfluenceIcon) },
  { name: "Bruno", icon: svg(BrunoIcon, "#F4AA41") },
  { name: "DBeaver", icon: pub("dbeaver.svg") },
];

const personalSkills: Skill[] = [
  { name: "JavaScript", icon: svg(JavaScriptIcon) },
  { name: "TypeScript", icon: svg(TypeScriptIcon), favorite: true },
  { name: "React", icon: svg(ReactIcon), favorite: true },
  { name: "Tailwind", icon: svg(TailwindIcon), favorite: true },
  { name: "HTML / CSS", icon: svg(HtmlIcon) },
  { name: "Vite", icon: svg(ViteIcon), favorite: true },
  { name: "Node.js", icon: svg(NodeIcon) },
  { name: "VS Code", icon: svg(VSCodeIcon), favorite: true },
  { name: "GitHub", icon: svg(GitHubIcon, "#FFFFFF") },
  { name: "Postman", icon: svg(PostmanIcon) },
  { name: "Claude Code", icon: svg(ClaudeIcon, "#D97757") },
];

function SkillItem({
  name,
  icon,
  compact = false,
  favorite = false,
}: Skill & { compact?: boolean }) {
  return (
    <div
      className={`flex flex-col items-center group cursor-default ${
        compact ? "gap-2" : "shrink-0 gap-3 mx-6"
      }`}
    >
      <div className="relative">
        <div
          className={`flex items-center justify-center rounded-xl border border-white/10 bg-white/5 group-hover:border-orange-500/40 group-hover:bg-orange-500/10 group-hover:scale-110 transition-all duration-300 ${
            compact ? "w-12 h-12 p-2" : "w-16 h-16 p-3"
          }`}
        >
          {icon ? (
            <img
              src={icon}
              alt={name}
              className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          ) : (
            <span
              className={`text-white/70 font-bold font-orbitron text-center leading-tight ${
                compact ? "text-[8px]" : "text-[10px]"
              }`}
            >
              {name.length > 4
                ? name.slice(0, 3).toUpperCase()
                : name.toUpperCase()}
            </span>
          )}
        </div>
        {favorite && (
          <HeartIcon
            className={`absolute -top-1 -right-1 text-orange-400 fill-orange-400 ${
              compact ? "w-3 h-3" : "w-3.5 h-3.5"
            }`}
          />
        )}
      </div>
      <span
        className={`text-slate-400 font-medium group-hover:text-orange-400 transition-colors duration-300 text-center whitespace-nowrap ${
          compact ? "text-[9px]" : "text-xs"
        }`}
      >
        {name}
      </span>
    </div>
  );
}

const shuffledWork = shuffle(workSkills);
const shuffledPersonal = shuffle(personalSkills);

export default function Skills() {
  const { t } = useTranslation("global");
  const doubledWork = [...shuffledWork, ...shuffledWork];
  const doubledPersonal = [...shuffledPersonal, ...shuffledPersonal];

  return (
    <section
      id="skills"
      className="section-animate py-14 md:py-24 bg-space relative overflow-hidden"
    >
      <div className="absolute -top-20 left-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 text-white">
            {t("skills.title")}
          </h2>
          <div className="title-line mt-5" />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-slate-400 text-xs font-orbitron tracking-widest uppercase mb-4 pl-1">
              {t("skills.work")}
            </p>

            <div className="md:hidden rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm p-4">
              <div className="grid grid-cols-4 gap-y-4 gap-x-2">
                {shuffledWork.map((skill, i) => (
                  <SkillItem key={i} {...skill} compact />
                ))}
              </div>
            </div>

            <div className="hidden md:block overflow-hidden rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm p-6">
              <div className="skill-marquee">
                {doubledWork.map((skill, i) => (
                  <SkillItem key={i} {...skill} />
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-slate-400 text-xs font-orbitron tracking-widest uppercase mb-4 pl-1">
              {t("skills.personal")}
            </p>

            <div className="md:hidden rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm p-4">
              <div className="grid grid-cols-4 gap-y-4 gap-x-2 justify-items-center">
                {shuffledPersonal.map((skill, i) => (
                  <SkillItem key={i} {...skill} compact />
                ))}
              </div>
            </div>

            <div className="hidden md:block overflow-hidden rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm p-6">
              <div className="skill-marquee-reverse">
                {doubledPersonal.map((skill, i) => (
                  <SkillItem key={i} {...skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
