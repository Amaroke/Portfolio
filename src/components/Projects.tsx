import { useTranslation } from "react-i18next";
import GitHubIcon from "~icons/simple-icons/github";
import ExternalLinkIcon from "~icons/lucide/external-link";

interface Project {
  key: string;
  name: string;
  stack: string[];
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    key: "amarokeInsights",
    name: "AmarokeInsights",
    stack: ["TypeScript", "React", "Vite", "Tailwind"],
    github: "https://github.com/Amaroke/AmarokeInsights",
    demo: "https://amaroke.github.io/AmarokeInsights",
  },
  {
    key: "milkLinks",
    name: "MilkLinks",
    stack: ["TypeScript", "React", "Vite", "Tailwind"],
    github: "https://github.com/Amaroke/MilkLinks",
    demo: "https://amaroke.github.io/MilkLinks/",
  },
  {
    key: "charadle",
    name: "Charadle",
    stack: ["TypeScript", "Next.js", "React", "Tailwind"],
    github: "https://github.com/Amaroke/Charadle",
    demo: "https://charadle-v2.vercel.app/",
  },
  {
    key: "glUpgradePlanner",
    name: "GL Upgrade Planner",
    stack: ["TypeScript", "React", "Vite", "Tailwind"],
    github: "https://github.com/Amaroke/GL-Upgrade-Planner",
    demo: "https://amaroke.github.io/GL-Upgrade-Planner/",
  },
  {
    key: "jellybrarian",
    name: "Jellybrarian",
    stack: ["Python", "Claude Code"],
    github: "https://github.com/Amaroke/Jellybrarian",
  },
];

export default function Projects() {
  const { t } = useTranslation("global");

  return (
    <section
      id="projects"
      className="section-animate py-16 md:py-24 bg-space-light"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-3">
          {t("projects.title")}
        </h2>
        <p className="text-slate-400 mb-12">{t("projects.description")}</p>

        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project) => (
            <article
              key={project.key}
              className="flex flex-col gap-4 p-6 rounded-xl border border-white/10 bg-space-card hover:border-orange-500/40 transition-colors duration-200 w-full md:w-[calc((100%-3rem)/3)]"
            >
              <h3 className="text-xl font-bold font-display text-white">
                {project.name}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed flex-1">
                {t(`projects.items.${project.key}.description`)}
              </p>

              <ul className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-slate-400"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-5 pt-4 border-t border-white/5 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-orange-400 transition-colors duration-200"
                >
                  <GitHubIcon className="w-4 h-4" aria-hidden="true" />
                  {t("projects.code")}
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors duration-200"
                  >
                    <ExternalLinkIcon className="w-4 h-4" aria-hidden="true" />
                    {t("projects.demo")}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
