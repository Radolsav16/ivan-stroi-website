import {
  ArrowRightIcon,
  CurrencyDollarIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const actions = [
  {
    title: 'Всички услуги',
    description:
      'Разгледайте всички дейности, които предлагаме.',
    href: '/services',
    icon: WrenchScrewdriverIcon,
  },
  {
    title: 'Актуални цени',
    description:
      'Вижте ориентировъчните цени за нашите услуги.',
    href: '/prices',
    icon: CurrencyDollarIcon,
  },
];

export default function QuickActions() {
  return (
    <section className="bg-gray-950 py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {actions.map((action) => {
            const Icon = action.icon;

            return (
              <a
                key={action.title}
                href={action.href}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.02]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-amber-500/30
                  hover:bg-white/[0.04]
                "
              >
                {/* Glow */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    -right-20
                    -top-20
                    size-40
                    rounded-full
                    bg-amber-500/0
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover:bg-amber-500/10
                  "
                />

                <div className="relative flex items-center gap-5">
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
                      duration-300
                      group-hover:bg-amber-500
                      group-hover:text-gray-950
                    "
                  >
                    <Icon className="size-6" />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold text-white">
                      {action.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      {action.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    className="
                      flex
                      size-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      text-gray-500
                      transition-all
                      duration-300
                      group-hover:border-amber-500/30
                      group-hover:bg-amber-500
                      group-hover:text-gray-950
                    "
                  >
                    <ArrowRightIcon
                      className="
                        size-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                      "
                    />
                  </div>
                </div>

                {/* Bottom accent */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-0.5
                    w-0
                    bg-amber-500
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}