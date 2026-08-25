import { useState } from "react";
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
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { callsToAction, navLinks, services } from "./data";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/90 shadow-2xl shadow-black/20 backdrop-blur-xl">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="group -m-1.5 flex items-center gap-3 p-1.5">
            <span className="text-xxl font-medium uppercase tracking-[0.2em] text-amber-500 sm:block">
               IVAN STROI
            </span>
          </a>
        </div>
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
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <PopoverGroup className="hidden items-center lg:flex lg:gap-x-2">
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
    w-[calc(100vw-2rem)]
    max-w-xl
    -translate-x-1/2
    overflow-y-auto
    overscroll-contain
    rounded-2xl
    border
    border-white/10
    bg-gray-900/95
    shadow-2xl
    shadow-black/50
    backdrop-blur-xl

    max-h-[calc(100vh-6rem)]
    sm:max-h-[calc(100vh-7rem)]

    transition
    data-closed:translate-y-2
    data-closed:opacity-0
    data-enter:duration-200
    data-enter:ease-out
    data-leave:duration-150
    data-leave:ease-in
  "
            >
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
                  p-3
                  transition-all
                  duration-200
                  hover:bg-white/5
                "
                  >
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
                      {item.icon}
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.id}
                        className="block text-sm font-semibold text-white"
                      >
                        {item.title}

                        <span className="absolute inset-0" />
                      </a>
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
                    {item.title}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>
          {navLinks.map((item) => (
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
            Заяви безплатен оглед
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
        pb-8
        shadow-2xl
        sm:max-w-sm
      "
        >
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="text-xxl font-medium uppercase tracking-[0.2em] text-amber-500 sm:block font-bold">
                IVAN STROI
              </span>
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
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-8 flow-root">
            <div className="divide-y divide-white/10">
              <div className="space-y-2 py-6">
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
                        href={item.id}
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
                    "
                      >
                        {item.title}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

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
              "
                >
                  Галерия
                </a>

                <a
                  href="/about-us"
                  className="
                block
                rounded-xl
                px-4
                py-3
                text-base
                font-semibold
                text-white
                transition
              "
                >
                  За нас
                </a>

                <a
                  href="/contact-us"
                  className="
                block
                rounded-xl
                px-4
                py-3
                text-base
                font-semibold
                text-white
                transition
              "
                >
                  Контакти
                </a>
              </div>
              <div className="py-6">
                <a
                  href="/contacts-us"
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
                text-gray-white
                shadow-lg
                shadow-amber-500/20
                transition
                hover:bg-amber-400
                active:scale-[0.98]
              "
                >
                  Заяви безплатен оглед
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
