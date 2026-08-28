
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Layout from "../../Layout";
import { OptimizedImage } from "../../components/image/OptimizedImage";
import { CLOUDINARY_BASE_URL } from "../../utils/url";

const services = [
  "Ремонт на баня",
  "Ремонт на апартаменти и къщи",
  "Мазилки",
  "Гипсокартон",
  "Стълбища и дворни дейности",
  "ВиК инсталации",
  "Бояджийски услуги",
  "Полиране на естествен камък",
  "Електроинсталации",
  "Лепене на естествен камък",
  "Лепене на плочки",
  "Шпакловане",
];

export default function Contacts() {
    const [selectedService, setSelectedService] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Layout>
         <main className="overflow-hidden bg-gray-950 text-white">
      {/* HERO */}
      <section className="relative isolate overflow-hidden py-24 sm:py-32">
          <div className="absolute inset-0 -z-20">
          <OptimizedImage
            url={`${CLOUDINARY_BASE_URL}/v1787399749/hero-img-2.jpg`}
            alt="Ivan Stroi строителни дейности"
            className="size-full object-cover object-center"
          />
        </div>
        <div
          className="
            absolute
            inset-0
            -z-10
            bg-gradient-to-r
            from-gray-950/95
            via-gray-950/75
            to-gray-950/35
          "
        />

        {/* Amber glow */}
        <div
          aria-hidden="true"
          className="
            absolute
            -right-40
            top-1/2
            -z-10
            size-[500px]
            -translate-y-1/2
            rounded-full
            bg-amber-500/10
            blur-3xl
          "
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-amber-500" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">
                Свържете се с нас
              </span>
            </div>

            <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
              Нека обсъдим{" "}
              <span className="text-amber-500">вашия проект.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
              Имате нужда от ремонт или строителна услуга? Свържете се с нас и
              ще обсъдим вашия проект, срокове и възможните решения.
            </p>
          </div>
        </div>
      </section>

  <section
  className="
    relative isolate overflow-hidden
    pb-24 pt-8
    sm:pb-32 sm:pt-14
    lg:pt-20
  "
>
  {/* Background image */}
  <div className="absolute inset-0 -z-20">
    <OptimizedImage
      url={`${CLOUDINARY_BASE_URL}/v1787399749/hero-img-2.jpg`}
      alt=""
      className="h-full w-full object-cover"
    />
  </div>

  {/* Dark overlays */}
  <div className="absolute inset-0 -z-10 bg-gray-950/90" />

  <div
    className="
      absolute inset-0 -z-10
      bg-gradient-to-b
      from-gray-950
      via-gray-950/85
      to-gray-950
    "
  />

  {/* Amber glow */}
  <div
    className="
      absolute -left-40 top-1/3 -z-10
      h-[500px] w-[500px]
      rounded-full
      bg-amber-500/10
      blur-[140px]
    "
  />

  <div
    className="
      absolute -right-40 bottom-0 -z-10
      h-[450px] w-[450px]
      rounded-full
      bg-amber-500/5
      blur-[120px]
    "
  />

  <div
    className="
      relative mx-auto
      max-w-7xl
      px-6
      lg:px-8
    "
  >
    <div
      className="
        grid
        items-start
        gap-8
        lg:grid-cols-[1fr_0.8fr]
        lg:gap-12
      "
    >
      {/* FORM WRAPPER */}
      <div
        className="
          relative
          rounded-3xl
          border border-white/10
          bg-gray-950/80
          p-6
          shadow-2xl shadow-black/30
          backdrop-blur-xl
          sm:p-8
          lg:mt-8
          lg:p-10
        "
      >
        {/* top accent */}
        <div
          className="
            absolute left-8 right-8 top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-amber-500
            to-transparent
            opacity-70
          "
        />

        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
            Запитване
          </p>

          <h2 className="mt-2 text-2xl font-black text-white sm:text-3xl">
            Разкажете ни за вашия проект
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
            Опишете накратко какво искате да направим и ще се свържем с вас.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-300">
                Име
              </label>

              <input
                type="text"
                placeholder="Вашето име"
                className="
                  w-full rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  px-4 py-3.5
                  text-sm text-white
                  outline-none
                  transition
                  placeholder:text-gray-600
                  hover:border-white/20
                  focus:border-amber-500/60
                  focus:bg-white/[0.06]
                  focus:ring-2
                  focus:ring-amber-500/10
                "
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-300">
                Телефон
              </label>

              <input
                type="tel"
                placeholder="08xx xxx xxx"
                className="
                  w-full rounded-xl
                  border border-white/10
                  bg-white/[0.04]
                  px-4 py-3.5
                  text-sm text-white
                  outline-none
                  transition
                  placeholder:text-gray-600
                  hover:border-white/20
                  focus:border-amber-500/60
                  focus:bg-white/[0.06]
                  focus:ring-2
                  focus:ring-amber-500/10
                "
              />
            </div>
          </div>

          {/* SERVICE DROPDOWN */}
          <div className="relative">
            <label className="mb-2 block text-sm font-semibold text-gray-300">
              Услуга
            </label>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="
                flex w-full items-center justify-between
                rounded-xl
                border border-white/10
                bg-white/[0.04]
                px-4 py-3.5
                text-left text-sm
                outline-none
                transition
                hover:border-white/20
                focus:border-amber-500/60
                focus:ring-2
                focus:ring-amber-500/10
              "
            >
              <span
                className={
                  selectedService ? "text-white" : "text-gray-600"
                }
              >
                {selectedService || "Изберете услуга"}
              </span>

              <svg
                className={`size-5 text-gray-500 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 111.08 1.04l-4.25-4.51a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isOpen && (
              <>
                <button
                  type="button"
                  aria-label="Затвори менюто"
                  onClick={() => setIsOpen(false)}
                  className="fixed inset-0 z-30 sm:hidden"
                />

                <div
                  className="
                    absolute left-0 right-0 top-full z-50 mt-2
                    overflow-hidden rounded-2xl
                    border border-white/10
                    bg-gray-900
                    shadow-2xl shadow-black/50
                  "
                >
                  <div className="max-h-[280px] overflow-y-auto p-1.5">
                    {services.map((service) => {
                      const active = selectedService === service;

                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => {
                            setSelectedService(service);
                            setIsOpen(false);
                          }}
                          className={`
                            flex w-full items-center justify-between
                            rounded-xl px-3 py-3
                            text-left text-sm
                            transition-colors
                            ${
                              active
                                ? "bg-amber-500/10 text-amber-500"
                                : "text-gray-300 hover:bg-white/[0.05] hover:text-white"
                            }
                          `}
                        >
                          <span>{service}</span>

                          {active && (
                            <CheckIcon className="ml-3 size-4 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-300">
              Съобщение
            </label>

            <textarea
              rows={5}
              placeholder="Разкажете ни накратко за вашия проект..."
              className="
                w-full resize-none rounded-xl
                border border-white/10
                bg-white/[0.04]
                px-4 py-3.5
                text-sm text-white
                outline-none
                transition
                placeholder:text-gray-600
                hover:border-white/20
                focus:border-amber-500/60
                focus:bg-white/[0.06]
                focus:ring-2
                focus:ring-amber-500/10
              "
            />
          </div>

          <button
            type="submit"
            className="
              group flex w-full items-center justify-center gap-3
              rounded-xl
              bg-amber-500
              px-6 py-4
              text-sm font-black
              text-gray-950
              transition-all duration-300
              hover:bg-amber-400
              hover:shadow-xl
              hover:shadow-amber-500/20
              active:scale-[0.99]
            "
          >
            Изпрати запитване

            <ArrowRightIcon className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </form>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col lg:pt-8">
        {/* PHONE */}
        <a
          href="tel:+359888123456"
          className="
            group rounded-3xl
            border border-white/10
            bg-gray-950/75
            p-7
            shadow-xl shadow-black/20
            backdrop-blur-xl
            transition-all duration-300
            hover:-translate-y-1
            hover:border-amber-500/30
            hover:bg-gray-950/90
            sm:p-8
          "
        >
          <div className="flex items-start justify-between">
            <div
              className="
                flex size-12 items-center justify-center
                rounded-xl
                bg-amber-500/10
                text-amber-500
                ring-1 ring-amber-500/20
              "
            >
              <PhoneIcon className="size-6" />
            </div>

            <ArrowUpRightIcon
              className="
                size-5 text-gray-600
                transition-all duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
                group-hover:text-amber-500
              "
            />
          </div>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
            Обадете ни се
          </p>

          <p className="mt-2 text-2xl font-black text-white">
            0888 123 456
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Понеделник – Петък · 08:00 – 18:00
          </p>
        </a>

        {/* LOCATION */}
        <div
          className="
            group mt-5 overflow-hidden
            rounded-3xl
            border border-white/10
            bg-gray-950/80
            shadow-xl shadow-black/20
            backdrop-blur-xl
            transition-all duration-300
            hover:-translate-y-1
            hover:border-amber-500/30
          "
        >
          <div className="p-7 sm:p-8">
            <div className="flex items-start justify-between">
              <div
                className="
                  flex size-12 items-center justify-center
                  rounded-xl
                  bg-amber-500/10
                  text-amber-500
                  ring-1 ring-amber-500/20
                "
              >
                <MapPinIcon className="size-6" />
              </div>

              <ArrowUpRightIcon className="size-5 text-gray-600" />
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
              Нашата локация
            </p>

            <h3 className="mt-2 text-xl font-black text-white">
              София, България
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Работим в София и околностите.
            </p>
          </div>

          <div className="relative h-52 overflow-hidden border-t border-white/10 sm:h-60">
            <iframe
              title="Ivan Stroi - София"
              src="https://www.google.com/maps?q=Sofia,Bulgaria&output=embed"
              className="
                h-full w-full border-0
                grayscale-[0.7]
                opacity-70
                transition-all duration-500
                group-hover:grayscale-0
                group-hover:opacity-100
              "
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Sofia,Bulgaria"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-between
              border-t border-white/10
              px-7 py-4
              text-sm font-bold text-amber-500
              transition-colors
              hover:bg-white/[0.03]
              sm:px-8
            "
          >
            <span>Виж в Google Maps</span>
            <ArrowUpRightIcon className="size-5" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
    </Layout>
  );
}