import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation("global");
  const isEnglish = i18n.resolvedLanguage === "en";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#skills", label: t("navbar.skills") },
    { href: "#projects", label: t("navbar.projects") },
    { href: "#connect", label: t("navbar.contact") },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 border-b ${
        scrolled
          ? "bg-space/90 backdrop-blur-md border-white/5"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <a
          href="#home"
          className="font-display font-bold text-orange-400 tracking-wide"
        >
          Amaroke
        </a>

        <div className="flex items-center gap-5 sm:gap-8">
          <ul className="flex items-center gap-5 sm:gap-8">
            {links.map((link, i) => (
              <li key={link.href} className={i < 2 ? "hidden sm:block" : ""}>
                <a
                  href={link.href}
                  className="text-sm text-slate-300 hover:text-orange-400 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => i18n.changeLanguage(isEnglish ? "fr" : "en")}
            aria-label={t("navbar.language")}
            className="text-white/50 hover:text-orange-400 transition-colors duration-200 text-sm font-semibold font-display"
          >
            <span className={isEnglish ? "" : "text-white"}>FR</span>
            {" / "}
            <span className={isEnglish ? "text-white" : ""}>EN</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
