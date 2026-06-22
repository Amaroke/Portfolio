import { useTranslation } from "react-i18next";
import HeartIcon from "~icons/lucide/heart";

const DV = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI = "https://cdn.simpleicons.org";
const dv = (slug: string) => `${DV}/${slug}/${slug}-original.svg`;
const si = (slug: string, color?: string) =>
  color ? `${SI}/${slug}/${color}` : `${SI}/${slug}`;
const pub = (file: string) => `${import.meta.env.BASE_URL}icons/${file}`;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j] as T, a[i] as T];
  }
  return a;
}

const workSkills: { name: string; icon?: string; favorite?: boolean }[] = [
  { name: "Java", icon: dv("java"), favorite: true },
  { name: "Spring Boot", icon: dv("spring"), favorite: true },
  { name: "Maven", icon: dv("maven") },
  { name: "Oracle", icon: dv("oracle") },
  { name: "OpenShift", icon: si("redhatopenshift") },
  { name: "XLDeploy", icon: pub("xldeploy.png") },
  { name: "XLRelease" },
  { name: "Git", icon: dv("git") },
  { name: "GitLab", icon: dv("gitlab") },
  { name: "IntelliJ", icon: dv("intellij"), favorite: true },
  { name: "Jira", icon: dv("jira") },
  { name: "Confluence", icon: dv("confluence") },
  { name: "Bruno", icon: si("bruno") },
  { name: "DBeaver", icon: pub("dbeaver.svg") },
];

const personalSkills: { name: string; icon?: string; favorite?: boolean }[] = [
  { name: "JavaScript", icon: dv("javascript") },
  { name: "TypeScript", icon: dv("typescript"), favorite: true },
  { name: "React", icon: dv("react"), favorite: true },
  { name: "Tailwind", icon: dv("tailwindcss"), favorite: true },
  { name: "HTML / CSS", icon: dv("html5") },
  { name: "Vite", icon: dv("vitejs"), favorite: true },
  { name: "Node.js", icon: dv("nodejs") },
  { name: "VS Code", icon: dv("vscode"), favorite: true },
  { name: "GitHub", icon: si("github", "ffffff") },
  { name: "Postman", icon: dv("postman") },
  { name: "Claude Code", icon: si("claude") },
];

function SkillItem({
  name,
  icon,
  compact = false,
  favorite = false,
}: {
  name: string;
  icon?: string;
  compact?: boolean;
  favorite?: boolean;
}) {
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
