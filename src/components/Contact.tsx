import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";
import { EnvelopeIcon } from "./icons";

export default function Contact() {
  const { t } = useTranslation("global");
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [state, handleSubmit] = useForm("mknaeopp");

  const update = (field: keyof typeof formDetails, value: string) =>
    setFormDetails((prev) => ({ ...prev, [field]: value }));

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-600 focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.07] transition-all duration-300 text-sm";

  return (
    <section
      id="connect"
      className="section-animate py-14 md:py-24 md:min-h-screen md:flex md:flex-col md:justify-center bg-space relative overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-orange-500/40 to-transparent" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="hidden md:flex flex-col items-center justify-center gap-8">
          <div className="relative w-56 h-56">
            <div className="absolute inset-0 rounded-full border border-orange-500/20" />
            <div
              className="absolute inset-6 rounded-full border border-cyan-500/15"
              style={{ animation: "spin 15s linear infinite reverse" }}
            />
            <div className="absolute inset-12 rounded-full bg-linear-to-br from-orange-500/15 to-cyan-500/10 blur-lg" />
            <div className="absolute inset-16 rounded-full bg-space-light flex items-center justify-center">
              <EnvelopeIcon className="w-12 h-12 text-orange-400/50" />
            </div>
            <div
              className="absolute inset-0"
              style={{ animation: "spin 10s linear infinite" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-orange-400 shadow-[0_0_8px_2px_rgba(251,146,60,0.6)]" />
            </div>
            <div
              className="absolute inset-0"
              style={{ animation: "spin 7s linear infinite reverse" }}
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]" />
            </div>
          </div>

          <h2 className="text-3xl font-bold font-orbitron text-center text-white">
            {t("contact.title")}
          </h2>
        </div>

        <div>
          <h2 className="text-3xl font-bold font-orbitron mb-8 md:hidden text-white">
            {t("contact.title")}
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  id="prenom"
                  name="prenom"
                  type="text"
                  value={formDetails.firstName}
                  placeholder={t("contact.firstname")}
                  onChange={(e) => update("firstName", e.target.value)}
                  className={inputClass}
                />
                <ValidationError
                  prefix="prenom"
                  field="prenom"
                  errors={state.errors}
                  className="text-red-400 text-xs mt-1"
                />
              </div>
              <div>
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  value={formDetails.lastName}
                  placeholder={t("contact.lastname")}
                  onChange={(e) => update("lastName", e.target.value)}
                  className={inputClass}
                />
                <ValidationError
                  prefix="nom"
                  field="nom"
                  errors={state.errors}
                  className="text-red-400 text-xs mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formDetails.email}
                  placeholder={t("contact.email")}
                  onChange={(e) => update("email", e.target.value)}
                  className={inputClass}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-red-400 text-xs mt-1"
                />
              </div>
              <div>
                <input
                  id="tel"
                  name="tel"
                  type="tel"
                  value={formDetails.phone}
                  placeholder={t("contact.phone")}
                  onChange={(e) => update("phone", e.target.value)}
                  className={inputClass}
                />
                <ValidationError
                  prefix="Tel"
                  field="tel"
                  errors={state.errors}
                  className="text-red-400 text-xs mt-1"
                />
              </div>
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formDetails.message}
                placeholder={t("contact.message")}
                onChange={(e) => update("message", e.target.value)}
                className={`${inputClass} resize-none`}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-400 text-xs mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting || state.succeeded}
              className="w-full py-4 bg-linear-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl hover:from-orange-400 hover:to-orange-500 transition-all duration-300 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/35 font-orbitron tracking-widest text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.succeeded
                ? t("contact.sent")
                : state.submitting
                  ? t("contact.sending")
                  : t("contact.send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
