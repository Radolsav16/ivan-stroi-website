import { type FormEvent, useState } from "react";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

import Layout from "../../Layout";
import { OptimizedImage } from "../../components/image/OptimizedImage";
import Reviews from "../../components/reviews/Reviews";
import Seo from "../../components/seo/Seo";
import { CLOUDINARY_BASE_URL } from "../../utils/url";
import { submitContactRequest } from "../../utils/contact";
import { services as serviceCards } from "../../components/services/data";

const services = serviceCards.map(({ title }) => title);

export default function Contacts() {
  const [selectedService, setSelectedService] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!selectedService) {
      setFormError("Моля, изберете услуга.");
      setFormStatus("error");
      return;
    }

    if (!form.reportValidity()) {
      return;
    }

    setFormError("");
    setFormStatus("submitting");

    try {
      const result = await submitContactRequest(form);
      form.reset();
      setSelectedService("");
      setFormStatus(result === "sent" ? "success" : "idle");
    } catch (error) {
      setFormError(
        error instanceof Error
          ? error.message
          : "Запитването не беше изпратено. Моля, опитайте отново.",
      );
      setFormStatus("error");
    }
  };

  return (
    <Layout>
      <main className="min-h-screen overflow-hidden bg-gray-950 text-white">
        <Seo
          title="Контакти"
          description="Свържете се с IVANOV STROI за оглед и оферта за строителство или ремонт в София и околностите."
          path="/contact-us"
        />
        <section
          className="
            relative isolate overflow-hidden
            min-h-[520px]
            py-24
            sm:min-h-[560px]
            sm:py-32
            lg:min-h-[600px]
            lg:py-36
          "
        >
          <div aria-hidden="true" className="absolute inset-0 -z-20">
            <OptimizedImage
              url={`${CLOUDINARY_BASE_URL}/v1788383386/working-img-46.jpg`}
              alt=""
              width={1920}
              priority
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div
            className="
              absolute inset-0 -z-10
              bg-gradient-to-b
              from-gray-950/90
              via-gray-950/65
              to-gray-950
              sm:bg-gradient-to-r
              sm:from-gray-950/90
              sm:via-gray-950/65
              sm:to-gray-950/20
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              -right-40
              top-1/2
              -z-10
              hidden
              size-[450px]
              -translate-y-1/2
              rounded-full
              bg-amber-500/10
              blur-[100px]
              sm:block
              lg:size-[600px]
              lg:blur-[140px]
            "
          />

          <div
            className="
              mx-auto
              flex
              min-h-[360px]
              max-w-7xl
              items-center
              px-5
              sm:min-h-[400px]
              sm:px-6
              lg:min-h-[440px]
              lg:px-8
            "
          >
            <div className="w-full max-w-3xl">
              <div className="mb-4 flex items-center gap-3 sm:mb-5">
                <span className="h-px w-8 bg-amber-500 sm:w-10" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500 sm:text-xs sm:tracking-[0.25em]">
                  Свържете се с нас
                </span>
              </div>

              <h1
                className="
                  animate-fade-up
                  text-4xl
                  font-black
                  leading-[1.05]
                  tracking-tight
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                "
              >
                Нека обсъдим{" "}
                <span className="text-amber-500">вашия проект.</span>
              </h1>

              <p
                className="
                  animate-fade-up-delay
                  mt-5
                  max-w-2xl
                  text-sm
                  leading-7
                  text-gray-400
                  sm:mt-6
                  sm:text-base
                  sm:leading-8
                  lg:text-lg
                "
              >
                Имате нужда от ремонт или строителна услуга? Свържете се с нас и
                ще обсъдим вашия проект, срокове и възможните решения.
              </p>
            </div>
          </div>
        </section>

        <section
          className="
            relative
            isolate
            overflow-visible
            pb-20
            pt-4
            sm:pb-28
            sm:pt-10
            lg:pb-32
            lg:pt-16
          "
        >
          <div aria-hidden="true" className="absolute inset-0 -z-20">
            <OptimizedImage
              url={`${CLOUDINARY_BASE_URL}/v1788383386/working-img-45.jpg`}
              alt=""
              width={1920}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute inset-0 -z-10 bg-gray-950/88" />

          <div
            className="
              absolute
              inset-0
              -z-10
              bg-gradient-to-b
              from-gray-950
              via-gray-950/90
              to-gray-950
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              -left-60
              top-1/3
              -z-10
              size-[450px]
              rounded-full
              bg-amber-500/5
              blur-[120px]
              sm:size-[600px]
            "
          />

          <div
            className="
              absolute
              -right-60
              bottom-0
              -z-10
              size-[450px]
              rounded-full
              bg-amber-500/5
              blur-[120px]
              sm:size-[600px]
            "
          />

          <div
            className="
              relative
              mx-auto
              max-w-7xl
              px-5
              sm:px-6
              lg:px-8
            "
          >
            <div
              className="
                grid
                grid-cols-1
                items-start
                gap-6
                md:gap-8
                lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]
                lg:gap-10
                xl:gap-14
              "
            >
              <div
                className="
                  relative
                  min-w-0
                  rounded-2xl
                  border
                  border-white/10
                  bg-gray-950/85
                  p-5
                  shadow-2xl
                  shadow-black/30
                  backdrop-blur-xl
                  sm:rounded-3xl
                  sm:p-7
                  md:p-8
                  lg:mt-8
                  lg:p-10
                "
              >
                <div
                  className="
                    absolute
                    left-6
                    right-6
                    top-0
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-amber-500
                    to-transparent
                    opacity-70
                    sm:left-8
                    sm:right-8
                  "
                />

                <div className="mb-7 sm:mb-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-500 sm:text-xs">
                    Запитване
                  </p>

                  <h2
                    className="
                      mt-2
                      text-2xl
                      font-black
                      leading-tight
                      text-white
                      sm:text-3xl
                    "
                  >
                    Разкажете ни за вашия проект
                  </h2>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
                    Опишете накратко какво искате да направим и ще се свържем с
                    вас.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 sm:space-y-6"
                >
                  <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
                    <input name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </div>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                    <div className="min-w-0">
                      <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold text-gray-300">
                        Име
                      </label>

                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        placeholder="Вашето име"
                        autoComplete="name"
                        minLength={2}
                        maxLength={80}
                        required
                        className="
                          block
                          w-full
                          min-w-0
                          rounded-xl
                          border
                          border-white/10
                          bg-white/[0.04]
                          px-4
                          py-3.5
                          text-sm
                          text-white
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

                    <div className="min-w-0">
                      <label htmlFor="contact-phone" className="mb-2 block text-sm font-semibold text-gray-300">
                        Телефон
                      </label>

                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        placeholder="088 335 689"
                        autoComplete="tel"
                        inputMode="tel"
                        minLength={10}
                        maxLength={20}
                        required
                        className="
                          block
                          w-full
                          min-w-0
                          rounded-xl
                          border
                          border-white/10
                          bg-white/[0.04]
                          px-4
                          py-3.5
                          text-sm
                          text-white
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
                  <div className="min-w-0">
                    <label htmlFor="contact-email" className="mb-2 block text-sm font-semibold text-gray-300">
                      Email
                    </label>

                    <div className="relative">
                      <EnvelopeIcon
                        aria-hidden="true"
                        className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-gray-600"
                      />
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        maxLength={254}
                        required
                        className="
                          block
                          w-full
                          min-w-0
                          rounded-xl
                          border
                          border-white/10
                          bg-white/[0.04]
                          py-3.5
                          pl-12
                          pr-4
                          text-sm
                          text-white
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
                  <div className="relative">
                      <label id="contact-service-label" className="mb-2 block text-sm font-semibold text-gray-300">
                      Услуга
                    </label>

                    <button
                      type="button"
                      aria-labelledby="contact-service-label"
                      aria-expanded={isOpen}
                      onClick={() => setIsOpen((prev) => !prev)}
                      className="
                        flex
                        min-h-[52px]
                        w-full
                        items-center
                        justify-between
                        gap-3
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.04]
                        px-4
                        py-3.5
                        text-left
                        text-sm
                        outline-none
                        transition
                        hover:border-white/20
                        focus:border-amber-500/60
                        focus:ring-2
                        focus:ring-amber-500/10
                      "
                    >
                      <span
                        className={`
                          min-w-0
                          flex-1
                          truncate
                          ${selectedService ? "text-white" : "text-gray-600"}
                        `}
                      >
                        {selectedService || "Изберете услуга"}
                      </span>

                      <svg
                        className={`
                          size-5
                          shrink-0
                          text-gray-500
                          transition-transform
                          duration-200
                          ${isOpen ? "rotate-180" : ""}
                        `}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <input type="hidden" name="service" value={selectedService} />

                    {isOpen && (
                      <>
                        {/* Mobile backdrop */}
                        <button
                          type="button"
                          aria-label="Затвори менюто"
                          onClick={() => setIsOpen(false)}
                          className="fixed inset-0 z-30 cursor-default sm:hidden"
                        />

                        <div
                          className="
                            absolute
                            left-0
                            right-0
                            top-full
                            z-50
                            mt-2
                            overflow-hidden
                            rounded-2xl
                            border
                            border-white/10
                            bg-gray-900
                            shadow-2xl
                            shadow-black/50
                          "
                        >
                          <div
                            className="
                              max-h-[min(280px,45vh)]
                              overflow-y-auto
                              overscroll-contain
                              p-1.5
                            "
                          >
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
                                    flex
                                    min-h-[46px]
                                    w-full
                                    items-center
                                    justify-between
                                    gap-3
                                    rounded-xl
                                    px-3
                                    py-3
                                    text-left
                                    text-sm
                                    transition-colors
                                    ${
                                      active
                                        ? "bg-amber-500/10 text-amber-500"
                                        : "text-gray-300 hover:bg-white/[0.05] hover:text-white"
                                    }
                                  `}
                                >
                                  <span className="min-w-0">{service}</span>

                                  {active && (
                                    <CheckIcon className="size-4 shrink-0" />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label htmlFor="contact-message" className="mb-2 block text-sm font-semibold text-gray-300">
                      Съобщение
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Разкажете ни накратко за вашия проект..."
                      minLength={20}
                      maxLength={2000}
                      required
                      className="
                        block
                        min-h-[140px]
                        w-full
                        resize-y
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.04]
                        px-4
                        py-3.5
                        text-sm
                        leading-6
                        text-white
                        outline-none
                        transition
                        placeholder:text-gray-600
                        hover:border-white/20
                        focus:border-amber-500/60
                        focus:bg-white/[0.06]
                        focus:ring-2
                        focus:ring-amber-500/10
                        sm:min-h-[150px]
                      "
                    />
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="
                      group
                      flex
                      min-h-[54px]
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-xl
                      bg-amber-500
                      px-6
                      py-4
                      text-sm
                      font-black
                      text-gray-950
                      transition-all
                      duration-300
                      hover:bg-amber-400
                      hover:shadow-xl
                      hover:shadow-amber-500/20
                      active:scale-[0.99]
                      disabled:cursor-wait
                      disabled:opacity-70
                    "
                  >
                    {formStatus === "submitting" ? "Изпращане..." : "Изпрати запитване"}
                    <ArrowRightIcon className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  {formStatus === "success" && (
                    <p role="status" className="text-center text-sm text-emerald-400">
                      Благодарим! Запитването е изпратено успешно.
                    </p>
                  )}
                  {formStatus === "error" && (
                    <p role="alert" className="text-center text-sm text-red-300">
                      {formError}
                    </p>
                  )}
                  {formStatus === "idle" && (
                    <p className="text-center text-xs text-gray-600">
                      Ако формата не е свързана със сървър, ще се отвори Вашето приложение за email.
                    </p>
                  )}
                </form>
              </div>

              <div className="flex min-w-0 flex-col gap-5 lg:pt-8">
                <a
                  href="tel:+359876884517"
                  className="
                    group
                    block
                    rounded-2xl
                    border
                    border-white/10
                    bg-gray-950/80
                    p-6
                    shadow-xl
                    shadow-black/20
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-amber-500/30
                    hover:bg-gray-950/95
                    sm:rounded-3xl
                    sm:p-8
                  "
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="
                        flex
                        size-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-amber-500/10
                        text-amber-500
                        ring-1
                        ring-amber-500/20
                        sm:size-12
                      "
                    >
                      <PhoneIcon className="size-5 sm:size-6" />
                    </div>

                    <ArrowUpRightIcon
                      className="
                        size-5
                        shrink-0
                        text-gray-600
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-amber-500
                      "
                    />
                  </div>

                  <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500 sm:mt-6 sm:text-xs">
                    Обадете ни се
                  </p>

                  <p className="mt-2 break-words text-2xl font-black text-white sm:text-3xl">
                    +359 876 884 517
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Понеделник – Петък · 08:00 – 18:00
                  </p>
                </a>

                <div
                  className="
                    group
                    min-w-0
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-gray-950/80
                    shadow-xl
                    shadow-black/20
                    backdrop-blur-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-amber-500/30
                    sm:rounded-3xl
                  "
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className="
                          flex
                          size-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          bg-amber-500/10
                          text-amber-500
                          ring-1
                          ring-amber-500/20
                          sm:size-12
                        "
                      >
                        <MapPinIcon className="size-5 sm:size-6" />
                      </div>

                      <ArrowUpRightIcon className="size-5 shrink-0 text-gray-600" />
                    </div>

                    <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.15em] text-gray-500 sm:mt-6 sm:text-xs">
                      Нашата локация
                    </p>

                    <h3 className="mt-2 text-xl font-black text-white sm:text-2xl">
                      София, България
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      Работим в София и околностите.
                    </p>
                  </div>

                  <div className="relative aspect-[16/9] min-h-[220px] overflow-hidden border-t border-white/10 sm:min-h-[250px]">
                    <iframe
                      title="Ivan Stroi - София"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93836.37954469488!2d23.241374288250867!3d42.695528666755244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8682cb317bf5%3A0x400a01269bf5e60!2sSofia!5e0!3m2!1sen!2sbg!4v1787930044869!5m2!1sen!2sbg"
                      className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        border-0
                        grayscale-[0.7]
                        opacity-75
                        transition-all
                        duration-500
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
                      flex
                      min-h-[52px]
                      items-center
                      justify-between
                      gap-4
                      border-t
                      border-white/10
                      px-6
                      py-4
                      text-sm
                      font-bold
                      text-amber-500
                      transition-colors
                      hover:bg-white/[0.03]
                      sm:px-8
                    "
                  >
                    <span>Виж в Google Maps</span>

                    <ArrowUpRightIcon className="size-5 shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Reviews />
      </main>
    </Layout>
  );
}
