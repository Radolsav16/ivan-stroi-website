import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline';

const contactInfo = [
  {
    title: 'Телефон',
    value: '+359 000 000 000',
    description: 'Понеделник – Петък, 08:00 – 18:00',
    href: 'tel:+359000000000',
    icon: PhoneIcon,
  },
  {
    title: 'Email',
    value: 'office@ivan-stroi.bg',
    description: 'Отговаряме в рамките на работния ден',
    href: 'mailto:office@ivan-stroi.bg',
    icon: EnvelopeIcon,
  },
  {
    title: 'Район на работа',
    value: 'София и околностите',
    description: 'Свържете се с нас за конкретен адрес',
    icon: MapPinIcon,
  },
];

const workingHours = [
  ['Понеделник – Петък', '08:00 – 18:00'],
  ['Събота', '09:00 – 14:00'],
  ['Неделя', 'Почивен ден'],
];

export default function Contacts() {
  return (
    <main className="bg-gray-950">
      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative isolate overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/contact-hero.jpg"
            alt="Ivan Stroi строителни дейности"
            className="size-full object-cover object-center"
          />
        </div>

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            -z-10
            bg-gradient-to-r
            from-gray-950
            via-gray-950/90
            to-gray-950/50
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

        <div className="mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
          <div className="max-w-3xl">
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
                Контакти
              </span>
            </div>

            <h1
              className="
                text-5xl
                font-black
                tracking-tight
                text-white
                sm:text-6xl
                lg:text-7xl
              "
            >
              Нека поговорим
              <br />
              за Вашия
              <span className="text-amber-500">
                {' '}
                проект.
              </span>
            </h1>

            <p
              className="
                mt-8
                max-w-2xl
                text-lg
                leading-8
                text-gray-300
                sm:text-xl
              "
            >
              Имате идея за ремонт, строителство или обновяване?
              Разкажете ни за нея и ще се свържем с Вас, за да
              обсъдим най-доброто решение.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact-form"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-amber-500
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-gray-950
                  shadow-xl
                  shadow-amber-500/10
                  transition-all
                  hover:bg-amber-400
                "
              >
                Направете запитване

                <ArrowUpRightIcon
                  className="
                    size-5
                    transition-transform
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>

              <a
                href="tel:+359000000000"
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/15
                  bg-white/5
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  hover:bg-white/10
                "
              >
                <PhoneIcon className="size-5 text-amber-500" />

                Обади се сега
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* CONTACT INFO */}
      {/* ================================================= */}

      <section className="relative bg-gray-950 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {contactInfo.map((item) => {
              const Icon = item.icon;

              const content = (
                <div
                  className="
                    group
                    h-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-amber-500/30
                    hover:bg-white/[0.04]
                  "
                >
                  <div
                    className="
                      flex
                      size-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-amber-500/10
                      text-amber-500
                      ring-1
                      ring-amber-500/20
                      transition-all
                      group-hover:bg-amber-500
                      group-hover:text-gray-950
                    "
                  >
                    <Icon className="size-6" />
                  </div>

                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-gray-500">
                    {item.title}
                  </p>

                  <p className="mt-2 text-xl font-bold text-white">
                    {item.value}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>
                </div>
              );

              return item.href ? (
                <a key={item.title} href={item.href}>
                  {content}
                </a>
              ) : (
                <div key={item.title}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* FORM + HOURS */}
      {/* ================================================= */}

      <section
        id="contact-form"
        className="relative overflow-hidden bg-gray-900 py-24 sm:py-32"
      >
        {/* Glow */}
        <div
          aria-hidden="true"
          className="
            absolute
            left-1/2
            top-0
            -z-10
            size-[500px]
            -translate-x-1/2
            rounded-full
            bg-amber-500/5
            blur-3xl
          "
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-24">
            {/* Form */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-amber-500" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">
                  Направете запитване
                </span>
              </div>

              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Разкажете ни
                <br />
                за Вашия проект.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-gray-400">
                Попълнете формата и ни изпратете основна информация
                за проекта. Ще се свържем с Вас възможно най-скоро.
              </p>

              <form className="mt-10 space-y-6">
                {/* Name + Phone */}
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-semibold text-gray-300"
                    >
                      Име
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Вашето име"
                      className="
                        mt-2
                        block
                        w-full
                        rounded-xl
                        border
                        border-white/10
                        bg-gray-950
                        px-4
                        py-3.5
                        text-sm
                        text-white
                        outline-none
                        placeholder:text-gray-600
                        transition
                        focus:border-amber-500/50
                        focus:ring-1
                        focus:ring-amber-500/50
                      "
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-semibold text-gray-300"
                    >
                      Телефон
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+359 ..."
                      className="
                        mt-2
                        block
                        w-full
                        rounded-xl
                        border
                        border-white/10
                        bg-gray-950
                        px-4
                        py-3.5
                        text-sm
                        text-white
                        outline-none
                        placeholder:text-gray-600
                        transition
                        focus:border-amber-500/50
                        focus:ring-1
                        focus:ring-amber-500/50
                      "
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-300"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="
                      mt-2
                      block
                      w-full
                      rounded-xl
                      border
                      border-white/10
                      bg-gray-950
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-gray-600
                      transition
                      focus:border-amber-500/50
                      focus:ring-1
                      focus:ring-amber-500/50
                    "
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="text-sm font-semibold text-gray-300"
                  >
                    Каква услуга Ви интересува?
                  </label>

                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    className="
                      mt-2
                      block
                      w-full
                      rounded-xl
                      border
                      border-white/10
                      bg-gray-950
                      px-4
                      py-3.5
                      text-sm
                      text-gray-300
                      outline-none
                      transition
                      focus:border-amber-500/50
                      focus:ring-1
                      focus:ring-amber-500/50
                    "
                  >
                    <option value="" disabled>
                      Изберете услуга
                    </option>

                    <option value="bathroom">
                      Ремонт на баня
                    </option>

                    <option value="apartment">
                      Ремонт на апартамент
                    </option>

                    <option value="house">
                      Ремонт на къща
                    </option>

                    <option value="construction">
                      Строителство
                    </option>

                    <option value="other">
                      Друго
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-gray-300"
                  >
                    Допълнителна информация
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Разкажете ни накратко за Вашия проект..."
                    className="
                      mt-2
                      block
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-white/10
                      bg-gray-950
                      px-4
                      py-3.5
                      text-sm
                      text-white
                      outline-none
                      placeholder:text-gray-600
                      transition
                      focus:border-amber-500/50
                      focus:ring-1
                      focus:ring-amber-500/50
                    "
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="
                    group
                    inline-flex
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
                    shadow-lg
                    shadow-amber-500/10
                    transition-all
                    hover:bg-amber-400
                    hover:shadow-amber-500/20
                    active:scale-[0.99]
                    sm:w-auto
                  "
                >
                  Изпрати запитване

                  <ArrowUpRightIcon
                    className="
                      size-5
                      transition-transform
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </button>

                <p className="text-xs leading-5 text-gray-600">
                  С изпращането на формата се съгласявате с
                  политиката ни за поверителност.
                </p>
              </form>
            </div>

            {/* Right side */}
            <aside>
              <div
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-gray-950
                  p-7
                  sm:p-8
                "
              >
                <div
                  className="
                    flex
                    size-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-amber-500/10
                    text-amber-500
                    ring-1
                    ring-amber-500/20
                  "
                >
                  <ClockIcon className="size-6" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  Работно време
                </h3>

                <div className="mt-6 divide-y divide-white/10">
                  {workingHours.map(([day, hours]) => (
                    <div
                      key={day}
                      className="flex justify-between gap-4 py-4 text-sm"
                    >
                      <span className="text-gray-500">
                        {day}
                      </span>

                      <span
                        className={
                          hours === 'Почивен ден'
                            ? 'text-gray-600'
                            : 'font-semibold text-white'
                        }
                      >
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Phone CTA */}
              <div
                className="
                  mt-5
                  rounded-3xl
                  border
                  border-amber-500/20
                  bg-amber-500/[0.05]
                  p-7
                "
              >
                <p className="text-sm text-gray-400">
                  Предпочитате директен разговор?
                </p>

                <a
                  href="tel:+359000000000"
                  className="
                    mt-3
                    block
                    text-2xl
                    font-black
                    text-white
                    transition-colors
                    hover:text-amber-500
                  "
                >
                  +359 000 000 000
                </a>

                <p className="mt-2 text-sm text-gray-500">
                  Обадете ни се за безплатна консултация.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* MAP */}
      {/* ================================================= */}

      <section className="bg-gray-950 pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <div className="relative h-[400px] bg-gray-900">
              {/* Replace this with Google Maps / Leaflet */}
              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08),transparent_50%)]
                "
              >
                <div className="text-center">
                  <MapPinIcon className="mx-auto size-10 text-amber-500" />

                  <p className="mt-4 text-lg font-bold text-white">
                    София и околностите
                  </p>

                  <p className="mt-1 text-sm text-gray-500">
                    Свържете се с нас за посещение на обекта
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}