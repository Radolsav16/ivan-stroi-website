import { useRef, useState } from 'react';

import {
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  WrenchScrewdriverIcon,
  ChevronDownIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';

import { services } from './data';

export default function ContactForm() {
  const [selectedService, setSelectedService] = useState('');
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const serviceDropdownRef = useRef(null);

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent | TouchEvent) => {
  //     if (
  //       serviceDropdownRef.current &&
  //       !serviceDropdownRef.current.contains(event.target)
  //     ) {
  //       setIsServiceOpen(false);
  //     }
  //   };

  //   const handleEscape = (event) => {
  //     if (event.key === 'Escape') {
  //       setIsServiceOpen(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);
  //   document.addEventListener('keydown', handleEscape);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //     document.removeEventListener('keydown', handleEscape);
  //   };
  // }, []);

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
                  Опишете накратко какво планирате и ние ще се свържем
                  с Вас, за да обсъдим проекта и следващите стъпки.
                </p>

                <div className="mt-9 space-y-5 sm:mt-12 sm:space-y-6">
                  <a
                    href="tel:+359000000000"
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
                      <p className="text-xs text-gray-500">
                        Обадете ни се
                      </p>

                      <p className="mt-1 truncate text-sm font-semibold text-white transition-colors group-hover:text-amber-500 sm:text-base">
                        +359 000 000 000
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:office@ivan-stroi.bg"
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
                      <p className="text-xs text-gray-500">
                        Пишете ни
                      </p>

                      <p className="mt-1 truncate text-sm font-semibold text-white transition-colors group-hover:text-amber-500 sm:text-base">
                        office@ivan-stroi.bg
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="min-w-0 p-6 sm:p-10 lg:p-14">
              <form className="space-y-5 sm:space-y-6">

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

                  {/* Phone */}
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

                {/* Email */}
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

                {/* SERVICE DROPDOWN */}
                <div
                  ref={serviceDropdownRef}
                  className="relative z-30 min-w-0"
                >
                  <label
                    htmlFor="service"
                    className="text-sm font-semibold text-white"
                  >
                    Какво Ви е необходимо?
                  </label>

                  <div className="relative mt-2">
                    {/* Left icon */}
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

                    {/* Trigger */}
                    <button
                      id="service"
                      type="button"
                      aria-haspopup="listbox"
                      aria-expanded={isServiceOpen}
                      onClick={() =>
                        setIsServiceOpen((previous) => !previous)
                      }
                      className={`
                        flex
                        w-full
                        min-w-0
                        items-center
                        justify-between
                        rounded-xl
                        border
                        bg-white/[0.03]
                        py-3.5
                        pl-12
                        pr-4
                        text-left
                        text-sm
                        outline-none
                        transition
                        ${
                          isServiceOpen
                            ? 'border-amber-500/50 ring-2 ring-amber-500/10'
                            : 'border-white/10 hover:border-white/20'
                        }
                      `}
                    >
                      <span
                        className={
                          selectedService
                            ? 'min-w-0 truncate text-gray-300'
                            : 'min-w-0 truncate text-gray-600'
                        }
                      >
                        {selectedService || 'Изберете услуга'}
                      </span>

                      <ChevronDownIcon
                        aria-hidden="true"
                        className={`
                          ml-3
                          size-5
                          shrink-0
                          text-gray-500
                          transition-transform
                          duration-200
                          ${
                            isServiceOpen
                              ? 'rotate-180 text-amber-500'
                              : ''
                          }
                        `}
                      />
                    </button>

                    {/* Dropdown */}
                    {isServiceOpen && (
                      <div
                        role="listbox"
                        aria-label="Изберете услуга"
                        className="
                          absolute
                          left-0
                          right-0
                          top-[calc(100%+0.5rem)]
                          z-50
                          max-h-64
                          overflow-y-auto
                          overscroll-contain
                          rounded-xl
                          border
                          border-white/10
                          bg-gray-900
                          p-1.5
                          shadow-2xl
                          shadow-black/40
                          ring-1
                          ring-black/20
                        "
                      >
                        {services.map((service) => {
                          const isSelected =
                            selectedService === service;

                          return (
                            <button
                              key={service}
                              type="button"
                              role="option"
                              aria-selected={isSelected}
                              onClick={() => {
                                setSelectedService(service);
                                setIsServiceOpen(false);
                              }}
                              className={`
                                flex
                                w-full
                                items-center
                                justify-between
                                gap-3
                                rounded-lg
                                px-3
                                py-3
                                text-left
                                text-sm
                                transition-colors
                                ${
                                  isSelected
                                    ? 'bg-amber-500/10 text-amber-500'
                                    : 'text-gray-300 hover:bg-white/[0.06] hover:text-white'
                                }
                              `}
                            >
                              <span className="min-w-0 truncate">
                                {service}
                              </span>

                              {isSelected && (
                                <CheckIcon className="size-4 shrink-0 text-amber-500" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Form value */}
                  <input
                    type="hidden"
                    name="service"
                    value={selectedService}
                  />
                </div>

                {/* Message */}
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