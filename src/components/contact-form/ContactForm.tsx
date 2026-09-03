import { type FormEvent, useState } from "react";
import {
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

import { services } from "./data";
import { submitContactRequest } from "../../utils/contact";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) {
      return;
    }

    setErrorMessage("");
    setStatus("submitting");

    try {
      const result = await submitContactRequest(form);
      form.reset();
      setStatus(result === "sent" ? "success" : "idle");
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Запитването не беше изпратено. Моля, опитайте отново.",
      );
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gray-950 py-20 sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-0
          top-1/2
          -z-10
          size-[500px]
          -translate-y-1/2
          translate-x-1/3
          rounded-full
          bg-amber-500/10
          blur-3xl
        "
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.02]
            shadow-2xl
            shadow-black/30
            sm:rounded-[2rem]
          "
        >
          <div className="grid overflow-hidden rounded-3xl lg:grid-cols-[0.8fr_1.2fr] lg:rounded-[2rem]">
            <div
              className="
                relative
                overflow-hidden
                border-b
                border-white/10
                bg-gray-900
                p-6
                sm:p-10
                lg:border-b-0
                lg:border-r
                lg:p-14
              "
            >
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-32
                  -top-32
                  size-72
                  rounded-full
                  bg-amber-500/10
                  blur-3xl
                "
              />

              <div className="relative">
                <div className="mb-5 flex items-center gap-3 sm:mb-6">
                  <span className="h-px w-8 bg-amber-500 sm:w-10" />

                  <span
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-amber-500
                      sm:text-xs
                      sm:tracking-[0.25em]
                    "
                  >
                    Направете запитване
                  </span>
                </div>

                <h2
                  className="
                    text-3xl
                    font-bold
                    tracking-tight
                    text-white
                    sm:text-4xl
                  "
                >
                  Нека обсъдим вашия проект.
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-400 sm:mt-6 sm:text-base">
                  Опишете накратко какво планирате и ние ще се свържем с Вас, за
                  да обсъдим проекта и следващите стъпки.
                </p>

                <div className="mt-9 space-y-5 sm:mt-12 sm:space-y-6">
                  <a
                    href="tel:+359876884517"
                    className="group flex min-w-0 items-center gap-3 sm:gap-4"
                  >
                    <div
                      className="
                        flex
                        size-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-amber-500/10
                        text-amber-500
                        ring-1
                        ring-amber-500/20
                        transition-colors
                        group-hover:bg-amber-500
                        group-hover:text-gray-950
                        sm:size-11
                      "
                    >
                      <PhoneIcon className="size-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-gray-500">Обадете ни се</p>

                      <p className="mt-1 truncate text-sm font-semibold text-white transition-colors group-hover:text-amber-500 sm:text-base">
                        +359 876 884 517
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:krasenivanov21@gmail.com"
                    className="group flex min-w-0 items-center gap-3 sm:gap-4"
                  >
                    <div
                      className="
                        flex
                        size-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        bg-amber-500/10
                        text-amber-500
                        ring-1
                        ring-amber-500/20
                        transition-colors
                        group-hover:bg-amber-500
                        group-hover:text-gray-950
                        sm:size-11
                      "
                    >
                      <EnvelopeIcon className="size-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-gray-500">Пишете ни</p>

                      <p className="mt-1 truncate text-sm font-semibold text-white transition-colors group-hover:text-amber-500 sm:text-base">
                        krasenivanov21@gmail.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="min-w-0 p-6 sm:p-10 lg:p-14">
              <form
                onSubmit={handleSubmit}
                className="space-y-5 sm:space-y-6"
              >
                <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
                  <input name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                  <div className="min-w-0">
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-white"
                    >
                      Име
                    </label>

                    <div className="relative mt-2">
                      <UserIcon
                        className="
                          pointer-events-none
                          absolute
                          left-4
                          top-1/2
                          size-5
                          -translate-y-1/2
                          text-gray-600
                        "
                      />

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Вашето име"
                        autoComplete="name"
                        minLength={2}
                        maxLength={80}
                        required
                        className="
                          w-full
                          min-w-0
                          rounded-xl
                          border
                          border-white/10
                          bg-white/[0.03]
                          py-3.5
                          pl-12
                          pr-4
                          text-sm
                          text-white
                          outline-none
                          placeholder:text-gray-600
                          transition
                          focus:border-amber-500/50
                          focus:bg-white/[0.05]
                          focus:ring-2
                          focus:ring-amber-500/10
                        "
                      />
                    </div>
                  </div>

                  <div className="min-w-0">
                    <label
                      htmlFor="phone"
                      className="text-sm font-semibold text-white"
                    >
                      Телефон
                    </label>

                    <div className="relative mt-2">
                      <PhoneIcon
                        className="
                          pointer-events-none
                          absolute
                          left-4
                          top-1/2
                          size-5
                          -translate-y-1/2
                          text-gray-600
                        "
                      />

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+359 ..."
                        autoComplete="tel"
                        inputMode="tel"
                        minLength={10}
                        maxLength={20}
                        required
                        className="
                          w-full
                          min-w-0
                          rounded-xl
                          border
                          border-white/10
                          bg-white/[0.03]
                          py-3.5
                          pl-12
                          pr-4
                          text-sm
                          text-white
                          outline-none
                          placeholder:text-gray-600
                          transition
                          focus:border-amber-500/50
                          focus:bg-white/[0.05]
                          focus:ring-2
                          focus:ring-amber-500/10
                        "
                      />
                    </div>
                  </div>
                </div>
                <div className="min-w-0">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-white"
                  >
                    Email
                  </label>

                  <div className="relative mt-2">
                    <EnvelopeIcon
                      className="
                        pointer-events-none
                        absolute
                        left-4
                        top-1/2
                        size-5
                        -translate-y-1/2
                        text-gray-600
                      "
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        maxLength={254}
                        required
                      className="
                        w-full
                        min-w-0
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        py-3.5
                        pl-12
                        pr-4
                        text-sm
                        text-white
                        outline-none
                        placeholder:text-gray-600
                        transition
                        focus:border-amber-500/50
                        focus:bg-white/[0.05]
                        focus:ring-2
                        focus:ring-amber-500/10
                      "
                    />
                  </div>
                </div>

                <div className="relative z-30 min-w-0">
                  <label
                    htmlFor="service"
                    className="text-sm font-semibold text-white"
                  >
                    Какво Ви е необходимо?
                  </label>

                  <div className="relative mt-2">
                    <WrenchScrewdriverIcon
                      aria-hidden="true"
                      className="
                        pointer-events-none
                        absolute
                        left-4
                        top-1/2
                        z-10
                        size-5
                        -translate-y-1/2
                        text-gray-600
                      "
                    />

                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      required
                      className="
                        appearance-none
                        w-full
                        min-w-0
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.03]
                        py-3.5
                        pl-12
                        pr-12
                        text-left
                        text-sm
                        text-gray-300
                        outline-none
                        transition
                        focus:border-amber-500/50
                        focus:bg-white/[0.05]
                        focus:ring-2
                        focus:ring-amber-500/10
                      "
                    >
                      <option value="" disabled>
                        Изберете услуга
                      </option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-gray-900 text-white">
                          {service}
                        </option>
                      ))}
                    </select>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                    >
                      ▾
                    </span>
                  </div>
                </div>

                <div className="min-w-0">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-white"
                  >
                    Разкажете ни повече
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Опишете накратко проекта..."
                    minLength={20}
                    maxLength={2000}
                    required
                    className="
                      mt-2
                      w-full
                      min-w-0
                      resize-none
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-gray-600
                      transition
                      focus:border-amber-500/50
                      focus:bg-white/[0.05]
                      focus:ring-2
                      focus:ring-amber-500/10
                    "
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    bg-amber-500
                    px-6
                    py-4
                    text-sm
                    font-bold
                    text-gray-950
                    shadow-xl
                    shadow-amber-500/10
                    transition-all
                    duration-200
                    hover:bg-amber-400
                    hover:shadow-amber-500/20
                    active:scale-[0.99]
                    disabled:cursor-wait
                    disabled:opacity-70
                  "
                >
                  {status === "submitting" ? "Изпращане..." : "Изпрати запитване"}
                  <span
                    className="
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </button>

                {status === "success" && (
                  <p role="status" className="text-center text-xs text-emerald-400">
                    Благодарим! Запитването е изпратено успешно.
                  </p>
                )}
                {status === "error" && (
                  <p role="alert" className="text-center text-xs text-red-300">
                    {errorMessage}
                  </p>
                )}
                {status === "idle" && (
                  <p className="text-center text-xs text-gray-600">
                    Ако формата не е свързана със сървър, ще се отвори Вашето приложение за email.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
