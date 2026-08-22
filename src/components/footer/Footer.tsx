import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Начало', href: '/' },
  { name: 'Услуги', href: '/services' },
  { name: 'Проекти', href: '/gallery' },
  { name: 'За нас', href: '/about' },
  { name: 'Контакти', href: '/contacts' },
];

const services = [
  { name: 'Ремонт на баня', href: '/services/remont-na-banya' },
  { name: 'Ремонт на апартамент', href: '/services/remont-na-apartament' },
  { name: 'Ремонт на къща', href: '/services/remont-na-kashta' },
  { name: 'Строителство', href: '/services/stroitelstvo' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-950">
      {/* Ambient glow */}
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
        {/* Big CTA */}
        <div className="border-b border-white/10 py-20 sm:py-24">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-3">
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
                  Ivan Stroi
                </span>
              </div>

              <h2
                className="
                  max-w-3xl
                  text-4xl
                  font-bold
                  tracking-tight
                  text-white
                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Вашата идея.
                <br />
                <span className="text-amber-500">
                  Нашата работа.
                </span>
              </h2>
            </div>

            <a
              href="/contacts"
              className="
                group
                inline-flex
                w-fit
                items-center
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
              "
            >
              Направете запитване

              <ArrowUpRightIcon
                className="
                  size-5
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </a>
          </div>
        </div>

        {/* Main footer */}
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <a href="/" className="inline-block">
              <img
                src="/images/ivan-stroi-logo.png"
                alt="Ivan Stroi"
                className="h-10 w-auto"
              />
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-500">
              Професионално строителство и ремонт с внимание
              към качеството, детайлите и Вашето доверие.
            </p>

            {/* Socials */}
            <div className="mt-7 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  size-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-sm
                  font-bold
                  text-gray-400
                  transition-all
                  hover:border-amber-500/40
                  hover:bg-amber-500
                  hover:text-gray-950
                "
              >
                f
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  size-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  text-sm
                  font-bold
                  text-gray-400
                  transition-all
                  hover:border-amber-500/40
                  hover:bg-amber-500
                  hover:text-gray-950
                "
              >
                ig
              </a>
            </div>
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
                      text-sm
                      text-gray-500
                      transition-colors
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
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="
                      text-sm
                      text-gray-500
                      transition-colors
                      hover:text-amber-500
                    "
                  >
                    {service.name}
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
              <a
                href="tel:+359000000000"
                className="group flex gap-3"
              >
                <PhoneIcon className="mt-0.5 size-5 shrink-0 text-amber-500" />

                <div>
                  <p className="text-sm text-gray-500">
                    Телефон
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white transition-colors group-hover:text-amber-500">
                    +359 000 000 000
                  </p>
                </div>
              </a>

              <a
                href="mailto:office@ivan-stroi.bg"
                className="group flex gap-3"
              >
                <EnvelopeIcon className="mt-0.5 size-5 shrink-0 text-amber-500" />

                <div>
                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white transition-colors group-hover:text-amber-500">
                    office@ivan-stroi.bg
                  </p>
                </div>
              </a>

              <div className="flex gap-3">
                <MapPinIcon className="mt-0.5 size-5 shrink-0 text-amber-500" />

                <div>
                  <p className="text-sm text-gray-500">
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
            text-xs
            text-gray-600
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} Ivan Stroi. Всички права
            запазени.
          </p>

          <div className="flex gap-6">
            <a
              href="/privacy"
              className="transition-colors hover:text-gray-400"
            >
              Политика за поверителност
            </a>

            <a
              href="/terms"
              className="transition-colors hover:text-gray-400"
            >
              Общи условия
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}