import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

import { navigation, services } from './data';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-950">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="
          absolute
          left-1/2
          top-0
          -z-10
          size-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-amber-500/5
          blur-3xl
        "
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main footer */}
        <div
          className="
            grid
            gap-12
            py-16
            sm:grid-cols-2
            lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]
            lg:gap-16
          "
        >
          {/* Brand */}
          <div>
            <a
              href="/"
              className="
                inline-block
                text-xl
                font-bold
                tracking-tight
                text-white
                transition-colors
                hover:text-amber-500
              "
            >
              IVAN<span className="text-amber-500"> STROI</span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500">
              Качествени строителни и ремонтни услуги с внимание
              към всеки детайл. Превръщаме вашите идеи в пространства,
              които остават.
            </p>

            <a
              href="/kontakti"
              className="
                group
                mt-7
                inline-flex
                items-center
                gap-2
                text-sm
                font-semibold
                text-white
                transition-colors
                hover:text-amber-500
              "
            >
              Направи запитване

              <ArrowRightIcon
                className="
                  size-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Навигация
            </h3>

            <ul className="mt-6 space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="
                      inline-block
                      text-sm
                      text-gray-500
                      transition-all
                      duration-200
                      hover:translate-x-1
                      hover:text-amber-500
                    "
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Услуги
            </h3>

            <ul className="mt-6 space-y-4">
              {services.map((service) => (
                <li key={service.title}>
                  <a
                    href={service.href}
                    className="
                      inline-block
                      text-sm
                      text-gray-500
                      transition-all
                      duration-200
                      hover:translate-x-1
                      hover:text-amber-500
                    "
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Контакти
            </h3>

            <div className="mt-6 space-y-5">
              {/* Phone */}
              <a
                href="tel:+359000000000"
                className="group flex gap-3"
              >
                <PhoneIcon
                  className="
                    mt-0.5
                    size-5
                    shrink-0
                    text-amber-500
                  "
                />

                <div>
                  <p className="text-xs text-gray-600">
                    Телефон
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-semibold
                      text-white
                      transition-colors
                      group-hover:text-amber-500
                    "
                  >
                    +359 000 000 000
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:office@ivan-stroi.bg"
                className="group flex gap-3"
              >
                <EnvelopeIcon
                  className="
                    mt-0.5
                    size-5
                    shrink-0
                    text-amber-500
                  "
                />

                <div>
                  <p className="text-xs text-gray-600">
                    Email
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-semibold
                      text-white
                      transition-colors
                      group-hover:text-amber-500
                    "
                  >
                    office@ivan-stroi.bg
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex gap-3">
                <MapPinIcon
                  className="
                    mt-0.5
                    size-5
                    shrink-0
                    text-amber-500
                  "
                />

                <div>
                  <p className="text-xs text-gray-600">
                    Район на работа
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    София и околностите
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            py-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Ivan Stroi. Всички права запазени.
          </p>

          <p className="text-xs text-gray-600">
            Качество. Коректност. Доверие.
          </p>
        </div>
      </div>
    </footer>
  );
}