import { useTranslation } from "react-i18next";
import LinkedInIcon from "~icons/simple-icons/linkedin";
import GitHubIcon from "~icons/simple-icons/github";
import MailIcon from "~icons/lucide/mail";

export default function Footer() {
  const { t } = useTranslation("global");

  return (
    <footer className="bg-[#030308] border-t border-white/5 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-orbitron font-bold text-sm tracking-wider">
          <span className="text-orange-400">Amaroke</span>
        </div>

        <p className="text-slate-400 text-xs">{t("footer.copyright")}</p>

        <div className="flex items-center gap-2">
          <a
            href="https://www.linkedin.com/in/hugo-mathieu-steinbach/"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-3 h-3 fill-slate-500 group-hover:fill-orange-400 transition-colors" />
          </a>

          <a
            href="https://github.com/Amaroke"
            target="_blank"
            rel="noreferrer"
            className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-3 h-3 fill-slate-500 group-hover:fill-orange-400 transition-colors" />
          </a>

          <a
            href="mailto:hugo.amaroke@gmail.com"
            className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/40 transition-all duration-300 group"
            aria-label="Email"
          >
            <MailIcon className="w-3 h-3 stroke-slate-500 group-hover:stroke-orange-400 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}
