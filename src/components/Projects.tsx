import { useTranslation } from "react-i18next";
import GitHubIcon from "~icons/simple-icons/github";
import ExternalLinkIcon from "~icons/lucide/external-link";
import LockIcon from "~icons/lucide/lock";

interface Project {
  key: string;
  name: string;
  stack: string[];
  github: string;
  demo: string;
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
    stack: ["JavaScript", "React", "CSS"],
    github: "https://github.com/Amaroke/Charadle",
    demo: "https://amaroke.github.io/Charadle/",
  },
];

const gradients = [
  "conic-gradient(from 0deg, transparent 0%, #f97316 20%, #22d3ee 40%, transparent 60%, transparent 100%)",
  "conic-gradient(from 120deg, transparent 0%, #22d3ee 20%, #f97316 40%, transparent 60%, transparent 100%)",
  "conic-gradient(from 240deg, transparent 0%, #f97316 20%, #22d3ee 40%, transparent 60%, transparent 100%)",
];

export default function Projects() {
  const { t } = useTranslation("global");

  return (
    <section
      id="projects"
      className="section-animate py-14 md:py-24 bg-space-light relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 text-white">
            {t("projects.title")}
          </h2>
          <div className="title-line mt-5 mb-6" />
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            {t("projects.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.key}
              className="project-card relative rounded-2xl p-px overflow-hidden"
            >
              <div
                className="pointer-events-none absolute top-1/2 left-1/2 aspect-square w-[200%]"
                style={{ transform: "translate(-50%, -50%)" }}
              >
                <div
                  className="card-spin w-full h-full"
                  style={{ background: gradients[index] }}
                />
              </div>

              <div className="relative rounded-2xl bg-space-card flex flex-col overflow-hidden h-full">
                <div className="absolute top-4 right-4 font-orbitron text-xs text-white/10 font-bold">
                  0{index + 1}
                </div>

                <div className="flex flex-col flex-1 p-6 gap-4">
                  <h3 className="text-xl font-bold font-orbitron text-white">
                    {project.name}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed flex-1">
                    {t(`projects.items.${project.key}.description`)}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-md border border-white/10 bg-white/5 text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/15 text-sm text-slate-300 hover:bg-orange-500/15 hover:border-orange-500/50 hover:text-orange-400 transition-all duration-200"
                    >
                      <GitHubIcon className="w-4 h-4" />
                      {t("projects.code")}
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-sm text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/55 transition-all duration-200"
                    >
                      <ExternalLinkIcon className="w-4 h-4" />
                      {t("projects.demo")}
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="inline-flex items-center gap-2 text-slate-500 text-sm border border-white/8 rounded-full px-5 py-2.5 bg-white/2">
            <LockIcon className="w-4 h-4 text-orange-400/60 shrink-0" />
            {t("projects.privateNote")}
          </p>
        </div>
      </div>
    </section>
  );
}
