import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LinkedInIcon, GitHubIcon, MailIcon } from "./icons";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation("global");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-space/95 backdrop-blur-md shadow-lg shadow-orange-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div />

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/hugo-mathieu-steinbach/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4 fill-white/70 group-hover:fill-orange-400 transition-colors" />
            </a>

            <a
              href="https://github.com/Amaroke"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-4 h-4 fill-white/70 group-hover:fill-orange-400 transition-colors" />
            </a>

            <a
              href="mailto:hugo.amaroke@gmail.com"
              className="w-10 h-10 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/50 transition-all duration-300 group"
              aria-label="Email"
            >
              <MailIcon className="w-4 h-4 stroke-white/70 group-hover:stroke-orange-400 transition-colors" />
            </a>
          </div>

          <a
            href="#connect"
            className="px-5 py-2 border border-orange-500/60 text-orange-400 font-semibold rounded-lg hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 font-orbitron text-sm tracking-wider"
          >
            {t("navbar.contact")}
          </a>

          <button
            onClick={toggleLanguage}
            className="text-white/50 hover:text-orange-400 transition-colors duration-300 text-sm font-semibold tracking-wider font-orbitron"
          >
            {i18n.language === "en" ? (
              <span>
                FR / <strong className="text-white">EN</strong>
              </span>
            ) : (
              <span>
                <strong className="text-white">FR</strong> / EN
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
