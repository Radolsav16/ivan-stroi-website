import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  PopoverGroup,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { callsToAction, navLinks, services } from "./data";
import { Link } from "react-router-dom";
import HomeLink from "./components/HomeLink";
import { MobileHamburgerButton } from "./components/MobileHamburgerButton";
import ServiceNavigationDropdown from "./components/ServiceNavigationDropdown";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50  bg-gray-950 shadow-2xl shadow-black/20 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8"
      >
        <HomeLink />
        <MobileHamburgerButton onClick={() => setMobileMenuOpen(true)} />
       
        <PopoverGroup className="hidden items-center lg:flex lg:gap-x-2">
          <ServiceNavigationDropdown services={services} callsToAction={callsToAction}/>
          {navLinks.map((item) => (
            <Link
              key={item.title}
              to={item.href}
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
            </Link>
          ))}
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/contact-us"
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
          text-white
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
          </Link>
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
            <Link to="/" className="-m-1.5 p-1.5">
                <span className="text-2xl font-extrabold uppercase tracking-[0.15em] transition-transform duration-300 group-hover:scale-[1.03] sm:block">
              <span className="text-amber-500 transition-colors duration-300 group-hover:text-amber-400">
                IVAN
              </span>
              <span className="text-white transition-colors duration-300 group-hover:text-amber-500">
                STROI
              </span>
            </span>
            </Link>

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
                    {services.map((item,idx) => (
                      <DisclosureButton
                        key={idx}
                        as="a"
                        href={`/services/${item.id}`}
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

                <Link
                  to="/gallery"
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
                </Link>

                <Link
                  to="/about-us"
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
                </Link>

                <Link
                  to="/contact-us"
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
                </Link>
              </div>
              <div className="py-6">
                <Link
                  to="/contacts-us"
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
                text-white
                shadow-lg
                shadow-amber-500/20
                transition
                hover:bg-amber-400
                active:scale-[0.98]
              "
                >
                  Заяви безплатен оглед
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
