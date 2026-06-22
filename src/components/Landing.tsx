import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import ArrowRightIcon from "~icons/lucide/arrow-right";

const PERIOD = 1500;
const toRotate = ["Hugo", "Amaroke"];

export default function Hero() {
  const { t } = useTranslation("global");
  const names = useMemo(() => toRotate, []);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(120);

  useEffect(() => {
    const ticker = setInterval(() => {
      const i = loopNum % names.length;
      const fullText = names[i] as string;
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(PERIOD);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum((n) => n + 1);
        setDelta(500);
      } else {
        setDelta(isDeleting ? 50 : 120);
      }
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, loopNum, isDeleting, names]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-space"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="stars" />
        <div className="stars2" />
        <div className="stars3" />
      </div>

      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-24 pb-16 md:py-16 w-full">
        <div>
          <span
            className="animate-fade-up inline-block px-4 py-2 mb-4 text-xs font-semibold tracking-widest border border-white/15 bg-linear-to-r from-orange-500/15 to-cyan-500/15 text-white/80 uppercase font-orbitron rounded"
            style={{ animationDelay: "0.05s" }}
          >
            {t("hero.welcome")}
          </span>

          <h1
            className="animate-fade-up text-5xl md:text-6xl font-bold font-orbitron mb-5"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-white leading-tight">
              {t("hero.greeting")} {t("hero.hi")}
            </span>
            <span className="block text-orange-400 leading-tight">
              {text}
              <span className="border-r-[3px] border-orange-400 ml-1 animate-pulse" />
            </span>
          </h1>

          <p
            className="animate-fade-up text-slate-400 text-base leading-relaxed mb-8 max-w-lg"
            style={{ animationDelay: "0.3s" }}
          >
            {t("hero.presentation")}
          </p>

          <a
            href="#connect"
            className="animate-fade-up inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:from-orange-400 hover:to-orange-500 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:gap-5 font-orbitron text-sm tracking-wider"
            style={{ animationDelay: "0.4s" }}
          >
            {t("hero.connect")}
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="animate-float relative w-80 h-80">
            <div className="absolute inset-0 scale-125 rounded-full bg-linear-to-br from-orange-500/20 to-cyan-500/10 blur-3xl pointer-events-none" />

            <div
              className="absolute inset-0 rounded-full border border-dashed border-orange-500/25"
              style={{ animation: "spin 30s linear infinite" }}
            />

            <div
              className="absolute inset-6 rounded-full border border-dashed border-cyan-500/20"
              style={{ animation: "spin 20s linear infinite reverse" }}
            />

            <div className="absolute top-10 left-10 w-5 h-5 border-t-2 border-l-2 border-orange-400/50" />
            <div className="absolute top-10 right-10 w-5 h-5 border-t-2 border-r-2 border-orange-400/50" />
            <div className="absolute bottom-10 left-10 w-5 h-5 border-b-2 border-l-2 border-cyan-400/50" />
            <div className="absolute bottom-10 right-10 w-5 h-5 border-b-2 border-r-2 border-cyan-400/50" />

            <div className="absolute inset-10 rounded-full p-0.5 bg-linear-to-br from-orange-400 via-orange-500/60 to-cyan-400 shadow-2xl shadow-orange-500/30">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}profile.png`}
                  alt="Hugo Mathieu-Steinbach"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.04)_0px,rgba(0,0,0,0.04)_1px,transparent_1px,transparent_4px)] pointer-events-none" />
                <div className="absolute inset-0 bg-linear-to-tl from-transparent via-white/5 to-white/15 pointer-events-none" />
              </div>
            </div>

            <div
              className="absolute inset-0"
              style={{ animation: "spin 8s linear infinite" }}
            >
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_3px_rgba(34,211,238,0.6)]" />
            </div>

            <div
              className="absolute inset-4"
              style={{ animation: "spin 13s linear infinite reverse" }}
            >
              <div className="absolute bottom-0 right-2 w-2 h-2 rounded-full bg-orange-300 shadow-[0_0_8px_2px_rgba(253,186,116,0.7)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
