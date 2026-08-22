'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const callsToAction = [
  { title: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { title: 'Contact sales', href: '#', icon: PhoneIcon },
];

const  services = [
  {
    id: "remont-na-banya",
    title: "РЕМОНТ НА БАНЯ",
    slug: "remont-na-banya",
    shortDescription:
      "Цялостен и частичен ремонт на бани, хидроизолация и монтаж на санитария.",
    priceFrom: 1200,
    unit: "проект",
    icon: "bath",
    featured: true,
  },
  {
    id: "remont-na-apartamenti",
    title: "РЕМОНТ НА АПАРТАМЕНТИ",
    slug: "remont-na-apartamenti",
    shortDescription:
      "Основен и довършителен ремонт на жилища, до ключ.",
    priceFrom: 80,
    unit: "кв.м",
    icon: "home",
    featured: true,
  },
  {
    id: "remont-na-kashti",
    title: "РЕМОНТ НА КЪЩИ",
    slug: "remont-na-kashti",
    shortDescription:
      "Реконструкция, груб строеж и довършителни работи за къщи.",
    priceFrom: 100,
    unit: "кв.м",
    icon: "building",
    featured: false,
  },
  {
    id: "mazilki",
    title: "МАЗИЛКИ",
    slug: "mazilki",
    shortDescription:
      "Машинни и декоративни мазилки с високо качество.",
    priceFrom: 18,
    unit: "кв.м",
    icon: "layers",
    featured: false,
  },
  {
    id: "stalbishta-dvorno-stroitelstvo",
    title: "СТЪЛБИЩА - ДВОРНО СТРОИТЕЛСТВО",
    slug: "stalbishta-dvorno-stroitelstvo",
    shortDescription:
      "Изграждане на външни стълбища, алеи, подпорни стени и дворни настилки.",
    priceFrom: 45,
    unit: "кв.м / л.м",
    icon: "steps",
    featured: false,
  },
  {
    id: "vik-instalatsii",
    title: "ВиК ИНСТАЛАЦИИ",
    slug: "vik-instalatsii",
    shortDescription:
      "Проектиране, подмяна и изграждане на водопроводни и канализационни мрежи.",
    priceFrom: 35,
    unit: "точка",
    icon: "droplet",
    featured: true,
  },
  {
    id: "boyadjijski-uslugi",
    title: "БОЯДЖИЙСКИ УСЛУГИ",
    slug: "boyadjijski-uslugi",
    shortDescription:
      "Боядисване с латекс, фасаген и блажна боя, лепене на тапети.",
    priceFrom: 6,
    unit: "кв.м",
    icon: "paint-bucket",
    featured: false,
  },
  {
    id: "polirane-na-estestven-kamak",
    title: "ПОЛИРАНЕ НА ЕСТЕСТВЕН КАМЪК",
    slug: "polirane-na-estestven-kamak",
    shortDescription:
      "Кристализация, шлайфане и полиране на мрамор, гранит и мозайка.",
    priceFrom: 25,
    unit: "кв.м",
    icon: "sparkles",
    featured: false,
  },
  {
    id: "el-instalatsii",
    title: "Ел. ИНСТАЛАЦИИ",
    slug: "el-instalatsii",
    shortDescription:
      "Изграждане и ремонт на електрически табла, окабеляване и осветителни тела.",
    priceFrom: 30,
    unit: "точка",
    icon: "zap",
    featured: true,
  },
  {
    id: "lepene-na-estestven-kamak",
    title: "ЛЕПЕНЕ НА ЕСТЕСТВЕН КАМЪК",
    slug: "lepene-na-estestven-kamak",
    shortDescription:
      "Монтаж на гнайс, мрамор, гранит и цокъл за фасади и интериор.",
    priceFrom: 35,
    unit: "кв.м",
    icon: "grid",
    featured: false,
  },
  {
    id: "lepene-na-plochki",
    title: "ЛЕПЕНЕ НА ПЛОЧКИ",
    slug: "lepene-na-plochki",
    shortDescription:
      "Полагане на фаянс, теракота, гранитогрес и мозаечни плочки.",
    priceFrom: 30,
    unit: "кв.м",
    icon: "layout-grid",
    featured: true,
  },
  {
    id: "shpaklovane",
    title: "ШПАКЛОВАНЕ",
    slug: "shpaklovane",
    shortDescription:
      "Гипсова, финишна и колор шпакловка с мрежа за перфектно гладки стени.",
    priceFrom: 12,
    unit: "кв.м",
    icon: "square",
    featured: false,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
  <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/90 shadow-2xl shadow-black/20 backdrop-blur-xl">
  <nav
    aria-label="Global"
    className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
  >
    {/* Logo */}
    <div className="flex lg:flex-1">
      <a
        href="/"
        className="group -m-1.5 flex items-center gap-3 p-1.5"
      >
        <span className="sr-only">Ivan Stroi</span>

        <img
          alt="Ivan Stroi Logo"
          src="src/assets/ivan-stroi-logo.png"
          className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
        />

        <div className="hidden h-8 w-px bg-white/10 sm:block" />

        <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-gray-400 sm:block">
          Строителство
        </span>
      </a>
    </div>

    {/* Mobile menu button */}
    <div className="flex lg:hidden">
      <button
        type="button"
        onClick={() => setMobileMenuOpen(true)}
        className="
          -m-2.5
          inline-flex
          items-center
          justify-center
          rounded-xl
          p-2.5
          text-gray-300
          transition
          hover:bg-white/5
          hover:text-white
        "
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon aria-hidden="true" className="size-6" />
      </button>
    </div>

    {/* Desktop navigation */}
    <PopoverGroup className="hidden items-center lg:flex lg:gap-x-2">
      {/* Services */}
      <Popover className="relative">
        <PopoverButton
          className="
            group
            flex
            items-center
            gap-x-2
            rounded-xl
            px-4
            py-2.5
            text-sm
            font-semibold
            text-gray-300
            transition-all
            duration-200
            hover:bg-white/5
            hover:text-white
          "
        >
          Услуги

          <ChevronDownIcon
            aria-hidden="true"
            className="
              size-4
              text-gray-500
              transition-transform
              duration-200
              group-data-open:rotate-180
              group-hover:text-amber-500
            "
          />
        </PopoverButton>

        <PopoverPanel
          transition
          className="
            absolute
            left-1/2
            z-50
            mt-4
            w-screen
            max-w-xl
            -translate-x-1/2
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-gray-900/95
            shadow-2xl
            shadow-black/50
            backdrop-blur-xl

            transition
            data-closed:translate-y-2
            data-closed:opacity-0
            data-enter:duration-200
            data-enter:ease-out
            data-leave:duration-150
            data-leave:ease-in
          "
        >
          {/* Dropdown header */}
          <div className="border-b border-white/10 px-6 py-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500">
              Нашите услуги
            </p>

            <p className="mt-1 text-sm text-gray-400">
              Професионални строителни решения от идея до реализация.
            </p>
          </div>

          {/* Services */}
          <div className="p-3">
            {services.map((item) => (
              <div
                key={item.title}
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-x-4
                  rounded-xl
                  p-4
                  transition-all
                  duration-200
                  hover:bg-white/5
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    size-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-amber-500/10
                    text-amber-500
                    ring-1
                    ring-amber-500/20
                    transition-all
                    duration-200
                    group-hover:bg-amber-500
                    group-hover:text-gray-950
                    group-hover:ring-amber-500
                  "
                >
                  <item.icon
                    aria-hidden="true"
                    className="size-6"
                  />
                </div>

                {/* Content */}
                <div className="flex-auto">
                  <a
                    href={item.slug}
                    className="block text-sm font-semibold text-white"
                  >
                    {item.title}

                    <span className="absolute inset-0" />
                  </a>

                  <p className="mt-1 line-clamp-2 text-sm leading-5 text-gray-400">
                    {item.shortDescription}
                  </p>
                </div>

                {/* Arrow */}
                <div
                  className="
                    hidden
                    text-gray-600
                    transition-all
                    duration-200
                    group-hover:translate-x-1
                    group-hover:text-amber-500
                    sm:block
                  "
                >
                  →
                </div>
              </div>
            ))}
          </div>

          {/* Bottom actions */}
          <div className="grid grid-cols-2 border-t border-white/10 bg-white/[0.02]">
            {callsToAction.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2.5
                  px-4
                  py-4
                  text-sm
                  font-semibold
                  text-gray-300
                  transition-all
                  duration-200
                  first:border-r
                  first:border-white/10
                  hover:bg-white/5
                  hover:text-white
                "
              >
                <item.icon
                  aria-hidden="true"
                  className="size-5 text-amber-500"
                />

                {item.title}
              </a>
            ))}
          </div>
        </PopoverPanel>
      </Popover>

      {/* Navigation links */}
      {[
        { title: 'Галерия', href: '/gallery' },
        { title: 'За нас', href: '/about' },
        { title: 'Контакти', href: '/contacts' },
      ].map((item) => (
        <a
          key={item.title}
          href={item.href}
          className="
            relative
            rounded-xl
            px-4
            py-2.5
            text-sm
            font-semibold
            text-gray-300
            transition-all
            duration-200
            hover:bg-white/5
            hover:text-white
          "
        >
          {item.title}

          <span
            className="
              absolute
              bottom-1
              left-1/2
              h-0.5
              w-0
              -translate-x-1/2
              rounded-full
              bg-amber-500
              transition-all
              duration-300
              group-hover:w-1/2
            "
          />
        </a>
      ))}
    </PopoverGroup>

    {/* CTA */}
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
      <a
        href="/contacts"
        className="
          group
          inline-flex
          items-center
          gap-2
          rounded-xl
          bg-amber-500
          px-5
          py-2.5
          text-sm
          font-bold
          text-gray-950
          shadow-lg
          shadow-amber-500/20
          transition-all
          duration-200
          hover:bg-amber-400
          hover:shadow-xl
          hover:shadow-amber-500/30
          active:scale-95
        "
      >
        Поискай оферта

        <span
          className="
            transition-transform
            duration-200
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </a>
    </div>
  </nav>

  {/* Mobile menu */}
  <Dialog
    open={mobileMenuOpen}
    onClose={setMobileMenuOpen}
    className="lg:hidden"
  >
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />

    <DialogPanel
      className="
        fixed
        inset-y-0
        right-0
        z-50
        w-full
        overflow-y-auto
        border-l
        border-white/10
        bg-gray-950
        p-6
        shadow-2xl
        sm:max-w-sm
      "
    >
      {/* Mobile header */}
      <div className="flex items-center justify-between">
        <a
          href="/"
          className="-m-1.5 p-1.5"
        >
          <span className="sr-only">Ivan Stroi</span>

          <img
            alt="Ivan Stroi Logo"
            src="src/assets/-stroi-logo.png"
            className="h-9 w-auto"
          />
        </a>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(false)}
          className="
            -m-2.5
            rounded-xl
            p-2.5
            text-gray-400
            transition
            hover:bg-white/5
            hover:text-white
          "
        >
          <span className="sr-only">Close menu</span>

          <XMarkIcon
            aria-hidden="true"
            className="size-6"
          />
        </button>
      </div>

      {/* Mobile navigation */}
      <div className="mt-8 flow-root">
        <div className="divide-y divide-white/10">
          <div className="space-y-2 py-6">
            {/* Services */}
            <Disclosure as="div">
              <DisclosureButton
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  px-4
                  py-3
                  text-base
                  font-semibold
                  text-white
                  transition
                  hover:bg-white/5
                "
              >
                Услуги

                <ChevronDownIcon
                  aria-hidden="true"
                  className="
                    size-5
                    text-gray-500
                    transition-transform
                    group-data-open:rotate-180
                    group-data-open:text-amber-500
                  "
                />
              </DisclosureButton>

              <DisclosurePanel className="mt-2 space-y-1">
                {services.map((item) => (
                  <DisclosureButton
                    key={item.title}
                    as="a"
                    href={item.slug}
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      px-4
                      py-3
                      pl-6
                      text-sm
                      font-medium
                      text-gray-400
                      transition
                      hover:bg-white/5
                      hover:text-white
                    "
                  >
                    <item.icon
                      aria-hidden="true"
                      className="
                        size-5
                        text-amber-500
                        transition
                        group-hover:scale-110
                      "
                    />

                    {item.title}
                  </DisclosureButton>
                ))}
              </DisclosurePanel>
            </Disclosure>

            {/* Mobile links */}
            <a
              href="/gallery"
              className="
                block
                rounded-xl
                px-4
                py-3
                text-base
                font-semibold
                text-white
                transition
                hover:bg-white/5
              "
            >
              Галерия
            </a>

            <a
              href="/about"
              className="
                block
                rounded-xl
                px-4
                py-3
                text-base
                font-semibold
                text-white
                transition
                hover:bg-white/5
              "
            >
              За нас
            </a>

            <a
              href="/contacts"
              className="
                block
                rounded-xl
                px-4
                py-3
                text-base
                font-semibold
                text-white
                transition
                hover:bg-white/5
              "
            >
              Контакти
            </a>
          </div>

          {/* Mobile CTA */}
          <div className="py-6">
            <a
              href="/contacts"
              className="
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-amber-500
                px-5
                py-3.5
                text-sm
                font-bold
                text-gray-950
                shadow-lg
                shadow-amber-500/20
                transition
                hover:bg-amber-400
                active:scale-[0.98]
              "
            >
              Поискай оферта

              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </DialogPanel>
  </Dialog>
</header>
  )
}
