import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

export default function ServiceNavigationDropdown({ services, callsToAction }:{services:any[], callsToAction:any[]}) {
  return (
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
          {services.map((i) => (
            <div
              key={i.title}
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
                {i.icon}
              </div>
              <div className="flex-auto">
                <Link
                  to={`/services/${i.id}`}
                  className="block text-sm font-semibold text-white"
                >
                  {i.title}

                  <span className="absolute inset-0" />
                </Link>
              </div>
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
      </PopoverPanel>
    </Popover>
  );
}
