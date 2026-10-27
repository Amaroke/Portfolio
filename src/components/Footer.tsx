import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("global");

  return (
    <footer className="bg-[#030308] border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        <a
          href="https://github.com/Amaroke/Portfolio"
          target="_blank"
          rel="noreferrer"
          className="hover:text-orange-400 transition-colors duration-200"
        >
          {t("footer.source")}
        </a>
      </div>
    </footer>
  );
}
