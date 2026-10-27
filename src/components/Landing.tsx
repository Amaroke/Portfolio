import { useTranslation } from "react-i18next";
import ArrowDownIcon from "~icons/lucide/arrow-down";

const passions = ["finance", "games", "ai"];

export default function Hero() {
  const { t } = useTranslation("global");

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-space"
    >
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="stars" />
        <div className="stars2" />
        <div className="stars3" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center pt-28 pb-16 md:py-16 w-full">
        <div className="max-w-3xl">
          <h1
            className="animate-fade-up text-4xl sm:text-5xl md:text-6xl font-bold font-display text-white leading-tight mb-4"
            style={{ animationDelay: "0.05s" }}
          >
            Hugo Mathieu&#8209;Steinbach
          </h1>

          <p
            className="animate-fade-up text-xl md:text-2xl text-orange-400 font-display font-medium mb-6"
            style={{ animationDelay: "0.15s" }}
          >
            {t("hero.tagline")}
          </p>

          <div
            className="animate-fade-up text-slate-300 text-base md:text-lg leading-relaxed mb-10 max-w-xl"
            style={{ animationDelay: "0.25s" }}
          >
            <p className="mb-4 whitespace-pre-line">{t("hero.presentation")}</p>
            <ul className="flex flex-col gap-2">
              {passions.map((key) => (
                <li key={key} className="flex gap-3">
                  <span className="text-orange-400" aria-hidden="true">
                    ›
                  </span>
                  <span>
                    <strong className="text-white font-semibold">
                      {t(`hero.passions.${key}.label`)}
                    </strong>
                    {t("hero.separator")}
                    {t(`hero.passions.${key}.text`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#projects"
            className="animate-fade-up inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-400 transition-colors duration-200 font-display"
            style={{ animationDelay: "0.35s" }}
          >
            {t("hero.cta")}
            <ArrowDownIcon className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        <div className="hidden md:block">
          <img
            src={`${import.meta.env.BASE_URL}profile.png`}
            alt=""
            className="w-72 h-72 rounded-full object-cover border border-white/10"
          />
        </div>
      </div>
    </section>
  );
}
