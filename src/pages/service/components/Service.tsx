import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  MessageCircle,
  Ruler,
} from "lucide-react";
import { Link } from "react-router-dom";
import { OptimizedImage } from "../../../components/image/OptimizedImage";
import { CLOUDINARY_BASE_URL } from "../../../utils/url";
import type { ServiceData } from "../data";
import ServiceHero from "./ServiceHero";

const processSteps = [
  {
    number: "01",
    title: "Разговор и оглед",
    description: "Уточняваме обхвата, нуждите на обекта и желания резултат.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Ясен план",
    description: "Подреждаме работата и уточняваме важните детайли преди старта.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Прецизно изпълнение",
    description: "Работим последователно и държим на чистия завършек на всеки етап.",
    icon: Ruler,
  },
];

export default function Service({ service }: { service: ServiceData }) {
  return (
    <>
      <ServiceHero service={service} />

      <section className="relative overflow-hidden bg-gray-950 py-20 sm:py-28 lg:py-32">
        <div aria-hidden="true" className="absolute -left-40 top-1/2 -z-10 size-[500px] -translate-y-1/2 rounded-full bg-amber-500/5 blur-3xl" />
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-amber-500" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-amber-500">Какво получавате</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Подход, съобразен с <span className="text-amber-500">вашето пространство.</span>
            </h2>
            <p className="mt-7 text-base leading-8 text-gray-300 sm:text-lg">{service.overview}</p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {service.includes.map((item, index) => (
              <article key={item} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-500/35 hover:bg-white/[0.05] sm:p-7">
                <span className="absolute right-5 top-3 text-6xl font-black text-white/[0.04] transition-colors group-hover:text-amber-500/10">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <CheckCircle2 className="size-7 text-amber-500" />
                <h3 className="mt-7 max-w-xs text-xl font-bold text-white sm:text-2xl">{item}</h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-gray-400 sm:text-base">
                  Качествено изпълнение, съобразено с конкретните условия и детайли на вашия обект.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-y border-white/10 py-20 sm:py-28">
        <div aria-hidden="true" className="absolute inset-0 -z-20">
          <OptimizedImage
            url={`${CLOUDINARY_BASE_URL}${service.detailImage}`}
            alt=""
            width={1920}
            sizes="100vw"
            className="size-full object-cover object-center"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gray-950/90" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950/95 via-gray-950/80 to-gray-950/65" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-500">Как работим</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">Ясен процес. Спокоен резултат.</h2>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <article key={step.number} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gray-950/80 p-7 shadow-2xl shadow-black/20 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-amber-500/30 sm:p-8">
                  <span className="absolute right-6 top-4 text-6xl font-black tracking-tight text-white/[0.06] transition-colors group-hover:text-amber-500/15">{step.number}</span>
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 ring-1 ring-amber-500/20 transition group-hover:bg-amber-500 group-hover:text-gray-950">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="mt-7 text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-gray-300">{step.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-20 sm:py-28 lg:py-32">
        <div aria-hidden="true" className="absolute inset-0 -z-20">
          <OptimizedImage
            url={`${CLOUDINARY_BASE_URL}${service.ctaImage}`}
            alt=""
            width={1920}
            sizes="100vw"
            className="size-full object-cover object-center"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gray-950/85" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-950/75 via-gray-950/80 to-gray-950/95" />
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-amber-500/20 bg-gray-950/50 text-amber-500 backdrop-blur-sm">
            <ClipboardList className="size-6" />
          </div>
          <h2 className="mt-7 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Имате проект за <span className="text-amber-500">{service.title.toLowerCase()}?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg">
            Разкажете ни накратко какво планирате. Ще обсъдим възможностите и следващите стъпки за вашия обект.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/contact-us" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-amber-500 px-7 py-3.5 text-sm font-bold text-gray-950 shadow-lg shadow-amber-500/20 transition hover:-translate-y-0.5 hover:bg-amber-400">
              Поискайте оферта
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="tel:+359876884517" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-gray-950/50 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/25 hover:bg-white/[0.1]">
              +359 876 884 517
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
