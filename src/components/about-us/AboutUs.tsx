
import { ArrowRight, CheckIcon, Phone, ShieldCheck, Ruler, Users, Hammer } from "lucide-react";
import { Link } from "react-router-dom";
import { CLOUDINARY_BASE_URL } from "../../utils/url";
import { OptimizedImage } from "../image/OptimizedImage";
import Layout from "../../Layout";

const advantages = [
  {
    icon: ShieldCheck,
    title: "Качество без компромиси",
    text: "Използваме качествени материали и изпълняваме всеки проект с внимание към детайла.",
  },
  {
    icon: Users,
    title: "Индивидуален подход",
    text: "Всеки клиент и всеки проект са различни. Затова търсим най-подходящото решение за вас.",
  },
  {
    icon: Ruler,
    title: "Прецизно изпълнение",
    text: "Планираме внимателно всеки етап и следим за качественото изпълнение на работата.",
  },
];

const steps = [
  {
    number: "01",
    title: "Разговор",
    text: "Споделяте ни вашата идея, нужди и очаквания.",
  },
  {
    number: "02",
    title: "Планиране",
    text: "Обсъждаме решенията, материалите и необходимите дейности.",
  },
  {
    number: "03",
    title: "Изпълнение",
    text: "Нашият екип реализира проекта с внимание към всеки детайл.",
  },
  {
    number: "04",
    title: "Завършен проект",
    text: "Предаваме завършен резултат, съобразен с вашите очаквания.",
  },
];

const AboutUs = () => {
  return (
    <Layout>
      <main className="overflow-hidden bg-gray-950 text-white">

        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative isolate min-h-[680px] overflow-hidden sm:min-h-[720px] lg:min-h-[780px]">

          {/* Background image */}
          <div className="absolute inset-0 -z-20">
            <OptimizedImage
              url={`${CLOUDINARY_BASE_URL}/v1787400733/bathroom-7.jpg`}
              alt="Завършен проект на IvanStroi"
              className="size-full object-cover"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/30" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/20" />

          <div className="mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-24 sm:min-h-[720px] lg:min-h-[780px] lg:px-8">

            <div className="max-w-3xl">

            

              <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Създаваме пространства,
                <span className="block text-amber-500">
                  в които си струва да живееш.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
                IvanStroi превръща идеите за вашия дом в реалност.
                От малки ремонти до цялостни строителни проекти —
                работим с внимание към качеството и всеки детайл.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/contact-us"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-bold text-gray-950 transition hover:bg-amber-400"
                >
                  Направи запитване
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href="tel:+359888000000"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
                >
                  <Phone className="size-4" />
                  Обади се
                </a>
              </div>

              <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/10 pt-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <CheckIcon className="size-4 text-amber-500" />
                  Качествени материали
                </div>

                <div className="flex items-center gap-2">
                  <CheckIcon className="size-4 text-amber-500" />
                  Коректност
                </div>

                <div className="flex items-center gap-2">
                  <CheckIcon className="size-4 text-amber-500" />
                  Индивидуален подход
                </div>
              </div>
            </div>
          </div>

          {/* Floating info card */}
          <div className="absolute bottom-6 right-6 hidden w-64 rounded-2xl border border-white/10 bg-gray-950/80 p-5 shadow-2xl backdrop-blur-xl lg:block lg:right-8">
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500">
                <Hammer className="size-5" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  Нашият принцип
                </p>
                <p className="mt-1 font-semibold text-white">
                  Качеството остава.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            INTRO / ABOUT
        ========================================================== */}
        <section className="relative py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">

              {/* Images */}
              <div className="relative mx-auto w-full max-w-xl lg:mx-0">

                {/* Main image */}
                <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10">
                  <OptimizedImage
                    url={`${CLOUDINARY_BASE_URL}/v1787867342/service-img-13.jpg`}
                    alt="Интериорен строителен проект"
                    className="size-full object-cover transition duration-700 hover:scale-105"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-950/80 to-transparent p-6 pt-20">
                    <p className="text-sm font-medium text-gray-300">
                      Прецизност във всеки детайл
                    </p>
                  </div>
                </div>

                {/* Second image */}
                <div className="absolute -bottom-10 -right-5 z-20 hidden w-44 overflow-hidden rounded-2xl border-8 border-gray-950 shadow-2xl sm:block sm:w-52 md:-right-8 lg:-right-12">
                  <div className="aspect-[3/4]">
                    <OptimizedImage
                      url={`${CLOUDINARY_BASE_URL}/v1787400733/bathroom-7.jpg`}
                      alt="Детайл от строителен проект"
                      className="size-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
                  Създаваме място за вашия живот.
                </p>

                <p className="mt-7 text-base leading-8 text-gray-400 sm:text-lg">
                  За нас всеки проект е възможност да направим нещо,
                  което ще остане за години напред.
                </p>

                <p className="mt-5 text-base leading-7 text-gray-500">
                  Затова подхождаме индивидуално към всеки клиент —
                  от първоначалната идея и планирането до последния
                  завършен детайл.
                </p>

              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            WHY US
        ========================================================== */}
        <section className="border-y border-white/10 bg-white/[0.025] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="max-w-2xl">

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Разликата е в детайлите.
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-500">
                Добрата работа започва с правилния подход и завършва
                с резултат, с който клиентът може да бъде горд.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
              {advantages.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group rounded-3xl border border-white/10 bg-gray-950 p-7 transition duration-300 hover:-translate-y-1 hover:border-amber-500/30"
                  >
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 ring-1 ring-amber-500/20">
                      <Icon className="size-5" />
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-gray-500">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================================================
            PROCESS
        ========================================================== */}
        <section className="py-20 sm:py-28 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
                  Нашият процес
                </p>

                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                  От идеята до готовия резултат.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-7 text-gray-500">
                Ясен процес, директна комуникация и внимание към
                всеки етап от проекта.
              </p>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-amber-500">
                      {step.number}
                    </span>

                    {index < steps.length - 1 && (
                      <ArrowRight className="hidden size-4 text-gray-700 lg:block" />
                    )}
                  </div>

                  <h3 className="mt-8 text-lg font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            CTA
        ========================================================== */}

<section className="relative isolate overflow-hidden border-t border-white/10 py-20 sm:py-28 lg:py-36">

  {/* Background image */}
  <div className="absolute inset-0 -z-20">
    <OptimizedImage
      url={`${CLOUDINARY_BASE_URL}/v1787864650/service-img-12.jpg`}
      alt="Завършен строителен проект на IvanStroi"
      className="size-full object-cover"
    />
  </div>

  {/* Dark overlays */}
  <div className="absolute inset-0 -z-10 bg-gray-950/85" />

  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950 via-gray-950/75 to-gray-950/60" />

  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/70" />

  {/* Amber glow */}
  <div
    aria-hidden="true"
    className="absolute left-1/2 top-1/2 -z-10 size-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[120px] sm:size-[600px]"
  />

  <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

    {/* Icon */}
    <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-amber-500/20 bg-gray-950/60 text-amber-500 shadow-2xl backdrop-blur-md sm:size-16">
      <Hammer className="size-6 sm:size-7" />
    </div>

    {/* Label */}
    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-amber-500 sm:text-sm">
      Вашият проект започва тук
    </p>

    {/* Heading */}
    <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
      Готови ли сте да започнем?
    </h2>

    {/* Description */}
    <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
      Разкажете ни за вашата идея и нека заедно превърнем
      пространството ви в нещо, с което ще се гордеете.
    </p>

    {/* Buttons */}
    <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">

      <Link
        to="/contact-us"
        className="
          group
          inline-flex
          min-h-12
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-amber-500
          px-7
          py-3.5
          text-sm
          font-bold
          text-gray-950
          shadow-xl
          shadow-amber-500/10
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-amber-400
          hover:shadow-amber-500/20
        "
      >
        Направи запитване

        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>

      <a
        href="tel:+359888000000"
        className="
          inline-flex
          min-h-12
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          border-white/15
          bg-gray-950/60
          px-7
          py-3.5
          text-sm
          font-semibold
          text-white
          shadow-xl
          backdrop-blur-md
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-white/10
        "
      >
        <Phone className="size-4" />
        +359 888 000 000
      </a>

    </div>

    {/* Trust line */}
    <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-gray-400 sm:text-sm">

      <span className="flex items-center gap-2">
        <CheckIcon className="size-4 text-amber-500" />
        Коректност
      </span>

      <span className="hidden h-4 w-px bg-white/10 sm:block" />

      <span className="flex items-center gap-2">
        <CheckIcon className="size-4 text-amber-500" />
        Качествено изпълнение
      </span>

      <span className="hidden h-4 w-px bg-white/10 sm:block" />

      <span className="flex items-center gap-2">
        <CheckIcon className="size-4 text-amber-500" />
        Индивидуален подход
      </span>

    </div>
  </div>
</section>
      </main>
    </Layout>
  );
};

export default AboutUs;

