import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";
import LinkedInIcon from "~icons/simple-icons/linkedin";
import GitHubIcon from "~icons/simple-icons/github";
import MailIcon from "~icons/lucide/mail";

const EMAIL = "hugo.amaroke@gmail.com";

const socials = [
  {
    href: `mailto:${EMAIL}`,
    label: EMAIL,
    Icon: MailIcon,
  },
  {
    href: "https://www.linkedin.com/in/hugo-mathieu-steinbach/",
    label: "LinkedIn",
    Icon: LinkedInIcon,
  },
  {
    href: "https://github.com/Amaroke",
    label: "GitHub",
    Icon: GitHubIcon,
  },
];

export default function Contact() {
  const { t } = useTranslation("global");
  const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_ID);

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500/60 transition-colors duration-200 text-sm";
  const labelClass = "block text-sm text-slate-300 mb-2";

  return (
    <section id="connect" className="section-animate py-16 md:py-24 bg-space">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8 whitespace-pre-line">
            {t("contact.intro")}
          </p>

          <ul className="flex flex-col gap-3">
            {socials.map(({ href, label, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 text-slate-300 hover:text-orange-400 transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label htmlFor="email" className={labelClass}>
              {t("contact.email")}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={inputClass}
            />
            <ValidationError
              field="email"
              errors={state.errors}
              className="text-red-400 text-xs mt-1"
            />
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>
              {t("contact.message")}
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              required
              className={`${inputClass} resize-none`}
            />
            <ValidationError
              field="message"
              errors={state.errors}
              className="text-red-400 text-xs mt-1"
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting || state.succeeded}
            className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-400 transition-colors duration-200 font-display disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.succeeded
              ? t("contact.sent")
              : state.submitting
                ? t("contact.sending")
                : t("contact.send")}
          </button>
        </form>
      </div>
    </section>
  );
}
