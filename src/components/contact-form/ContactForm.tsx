import {
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const services = [
  'Ремонт на баня',
  'Ремонт на апартамент',
  'Ремонт на къща',
  'Строителство',
  'Друг',
];

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gray-950 py-24 sm:py-32"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="
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

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="
            overflow-hidden
            rounded-[2rem]
            border
            border-white/10
            bg-white/[0.02]
            shadow-2xl
            shadow-black/30
          "
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            
            {/* Left side */}
            <div
              className="
                relative
                overflow-hidden
                border-b
                border-white/10
                bg-gray-900
                p-8
                sm:p-12
                lg:border-b-0
                lg:border-r
                lg:p-14
              "
            >
              {/* Glow */}
              <div
                aria-hidden="true"
                className="
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
                {/* Eyebrow */}
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-10 bg-amber-500" />

                  <span
                    className="
                      text-xs
                      font-bold
                      uppercase
                      tracking-[0.25em]
                      text-amber-500
                    "
                  >
                    Направете запитване
                  </span>
                </div>

                <h2
                  className="
                    text-4xl
                    font-bold
                    tracking-tight
                    text-white
                    sm:text-5xl
                  "
                >
                  Нека поговорим
                  <span className="text-amber-500"> за Вашия проект.</span>
                </h2>

                <p className="mt-6 text-base leading-7 text-gray-400">
                  Опишете накратко какво планирате и ние ще се свържем
                  с Вас, за да обсъдим проекта и следващите стъпки.
                </p>

                {/* Contact info */}
                <div className="mt-12 space-y-6">
                  <a
                    href="tel:+359000000000"
                    className="group flex items-center gap-4"
                  >
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
                        transition-colors
                        group-hover:bg-amber-500
                        group-hover:text-gray-950
                      "
                    >
                      <PhoneIcon className="size-5" />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Обадете ни се
                      </p>

                      <p className="mt-1 font-semibold text-white">
                        +359 000 000 000
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:office@ivan-stroi.bg"
                    className="group flex items-center gap-4"
                  >
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
                        transition-colors
                        group-hover:bg-amber-500
                        group-hover:text-gray-950
                      "
                    >
                      <EnvelopeIcon className="size-5" />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500">
                        Пишете ни
                      </p>

                      <p className="mt-1 font-semibold text-white">
                        office@ivan-stroi.bg
                      </p>
                    </div>
                  </a>
                </div>

                {/* Bottom message */}
                <div
                  className="
                    mt-12
                    border-t
                    border-white/10
                    pt-8
                  "
                >
                  <p className="text-sm font-medium text-gray-500">
                    Нашият подход
                  </p>

                  <p className="mt-2 text-lg font-semibold text-white">
                    Коректност. Качество. Отговорност.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="p-8 sm:p-12 lg:p-14">
              <form className="space-y-6">
                
                {/* Name + Phone */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
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
                        className="
                          w-full
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

                  <div>
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
                        className="
                          w-full
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

                {/* Email */}
                <div>
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
                      className="
                        w-full
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

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="text-sm font-semibold text-white"
                  >
                    Какво Ви е необходимо?
                  </label>

                  <div className="relative mt-2">
                    <WrenchScrewdriverIcon
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

                    <select
                      id="service"
                      name="service"
                      defaultValue=""
                      className="
                        w-full
                        appearance-none
                        rounded-xl
                        border
                        border-white/10
                        bg-gray-900
                        py-3.5
                        pl-12
                        pr-4
                        text-sm
                        text-gray-300
                        outline-none
                        transition
                        focus:border-amber-500/50
                        focus:ring-2
                        focus:ring-amber-500/10
                      "
                    >
                      <option value="" disabled>
                        Изберете услуга
                      </option>

                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
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
                    className="
                      mt-2
                      w-full
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
                  "
                >
                  Изпрати запитване

                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </button>

                <p className="text-center text-xs text-gray-600">
                  Ще се свържем с Вас възможно най-скоро.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}