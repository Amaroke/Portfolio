import { useTranslation } from "react-i18next";

const DV = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SI = "https://cdn.simpleicons.org";
const dv = (slug: string) => `${DV}/${slug}/${slug}-original.svg`;
const si = (slug: string, color?: string) =>
  color ? `${SI}/${slug}/${color}` : `${SI}/${slug}`;
const pub = (file: string) => `${import.meta.env.BASE_URL}icons/${file}`;

const workSkills: { name: string; icon?: string }[] = [
  { name: "Java", icon: dv("java") },
  { name: "Spring Boot", icon: dv("spring") },
  { name: "Maven", icon: dv("maven") },
  { name: "Oracle", icon: dv("oracle") },
  { name: "OpenShift", icon: si("redhatopenshift") },
  { name: "XLDeploy", icon: pub("xldeploy.png") },
  { name: "XLRelease" },
  { name: "Git", icon: dv("git") },
  { name: "IntelliJ", icon: dv("intellij") },
  { name: "Jira", icon: dv("jira") },
  { name: "Confluence", icon: dv("confluence") },
  { name: "MS Suite", icon: pub("microsoft.svg") },
  { name: "Bruno", icon: si("bruno") },
  { name: "DBeaver", icon: pub("dbeaver.svg") },
];

const personalSkills: { name: string; icon?: string }[] = [
  { name: "JavaScript", icon: dv("javascript") },
  { name: "TypeScript", icon: dv("typescript") },
  { name: "React", icon: dv("react") },
  { name: "Tailwind", icon: dv("tailwindcss") },
  { name: "HTML / CSS", icon: dv("html5") },
  { name: "Vite", icon: dv("vitejs") },
  { name: "Node.js", icon: dv("nodejs") },
  { name: "VS Code", icon: dv("vscode") },
  { name: "GitHub", icon: si("github", "ffffff") },
  { name: "Postman", icon: dv("postman") },
];

function SkillItem({
  name,
  icon,
  compact = false,
}: {
  name: string;
  icon?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center group cursor-default ${
        compact ? "gap-2" : "shrink-0 gap-3 mx-6"
      }`}
    >
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
            className={`text-white/50 font-bold font-orbitron text-center leading-tight ${
              compact ? "text-[8px]" : "text-[10px]"
            }`}
          >
            {name.length > 4
              ? name.slice(0, 3).toUpperCase()
              : name.toUpperCase()}
          </span>
        )}
      </div>
      <span
        className={`text-slate-500 font-medium group-hover:text-orange-400 transition-colors duration-300 text-center whitespace-nowrap ${
          compact ? "text-[9px]" : "text-xs"
        }`}
      >
        {name}
      </span>
    </div>
  );
}

export default function Skills() {
  const { t } = useTranslation("global");
  const doubledWork = [...workSkills, ...workSkills];
  const doubledPersonal = [...personalSkills, ...personalSkills];

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
            <p className="text-slate-500 text-xs font-orbitron tracking-widest uppercase mb-4 pl-1">
              {t("skills.work")}
            </p>

            <div className="md:hidden rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm p-4">
              <div className="grid grid-cols-4 gap-y-4 gap-x-2">
                {workSkills.map((skill, i) => (
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
            <p className="text-slate-500 text-xs font-orbitron tracking-widest uppercase mb-4 pl-1">
              {t("skills.personal")}
            </p>

            <div className="md:hidden rounded-2xl border border-white/8 bg-white/3 backdrop-blur-sm p-4">
              <div className="grid grid-cols-4 gap-y-4 gap-x-2 justify-items-center">
                {personalSkills.map((skill, i) => (
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
