import {
  ArrowUpRightIcon,
  BuildingOffice2Icon,
  HomeModernIcon,
  WrenchScrewdriverIcon,
  PaintBrushIcon,
  Square3Stack3DIcon,
  SwatchIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    id: 1,
    title: 'Ремонт на апартаменти',
    description:
      'Цялостни и частични ремонти с прецизно изпълнение и внимание към всеки детайл.',
    image: '/images/services/apartment.jpg',
    icon: HomeModernIcon,
    href: '/services/remont-na-apartamenti',
  },
  {
    id: 2,
    title: 'Ремонт на бани',
    description:
      'Модерни и функционални бани – от подготовката и хидроизолацията до последния детайл.',
    image: '/images/services/bathroom.jpg',
    icon: WrenchScrewdriverIcon,
    href: '/services/remont-na-bani',
  },
  {
    id: 3,
    title: 'Строителство',
    description:
      'Изграждане и реализиране на строителни проекти с професионален подход.',
    image: '/images/services/construction.jpg',
    icon: BuildingOffice2Icon,
    href: '/services/stroitelstvo',
  },
  {
    id: 4,
    title: 'Интериорни решения',
    description:
      'Създаваме пространства, които съчетават функционалност, комфорт и модерен дизайн.',
    image: '/images/services/interior.jpg',
    icon: PaintBrushIcon,
    href: '/services/interior',
  },
  {
    id: 5,
    title: 'Настилки и облицовки',
    description:
      'Професионален монтаж на плочки, настилки и облицовки с прецизен завършек.',
    image: '/images/services/tiles.jpg',
    icon: Square3Stack3DIcon,
    href: '/services/nastilki',
  },
  {
    id: 6,
    title: 'Боядисване и завършителни работи',
    description:
      'Финални детайли, които превръщат ремонта в завършен и качествен проект.',
    image: '/images/services/painting.jpg',
    icon: SwatchIcon,
    href: '/services/boyadisvane',
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-24 sm:py-32">
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
          rounded-full
          bg-amber-500/5
          blur-3xl
        "
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
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
                Дейности и услуги
              </span>
            </div>

            <h2
              className="
                text-4xl
                font-bold
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              Всичко необходимо
              <br />
              <span className="text-amber-500">
                за Вашия проект.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
              От малки ремонти до цялостни строителни проекти —
              поемаме всеки етап с професионализъм и отговорност.
            </p>
          </div>

          <a
            href="/services"
            className="
              group
              inline-flex
              shrink-0
              items-center
              gap-2
              text-sm
              font-bold
              text-amber-500
              transition-colors
              hover:text-amber-400
            "
          >
            Виж всички услуги

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

        {/* Services grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <a
                key={service.id}
                href={service.href}
                className="
                  group
                  relative
                  min-h-[420px]
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-gray-900
                "
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    absolute
                    inset-0
                    size-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-gray-950
                    via-gray-950/70
                    to-gray-950/10
                  "
                />

                {/* Hover overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-amber-500/0
                    transition-colors
                    duration-500
                    group-hover:bg-amber-500/5
                  "
                />

                {/* Number */}
                <span
                  className="
                    absolute
                    right-6
                    top-5
                    text-5xl
                    font-black
                    text-white/10
                    transition-colors
                    duration-300
                    group-hover:text-amber-500/30
                  "
                >
                  {String(service.id).padStart(2, '0')}
                </span>

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-7">
                  {/* Icon */}
                  <div
                    className="
                      mb-5
                      flex
                      size-11
                      items-center
                      justify-center
                      rounded-xl
                      bg-amber-500
                      text-gray-950
                      shadow-lg
                      shadow-black/20
                    "
                  >
                    <Icon className="size-5" />
                  </div>

                  <h3
                    className="
                      text-2xl
                      font-bold
                      tracking-tight
                      text-white
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-sm
                      text-sm
                      leading-6
                      text-gray-300
                    "
                  >
                    {service.description}
                  </p>

                  {/* Link */}
                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      text-amber-500
                      transition-all
                      duration-300
                    "
                  >
                    Научи повече

                    <ArrowUpRightIcon
                      className="
                        size-4
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
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
                    h-1
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

        {/* Bottom statement */}
        <div
          className="
            mt-12
            flex
            flex-col
            gap-5
            border-t
            border-white/10
            pt-8
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-sm text-gray-500">
            Не намирате това, което търсите?
          </p>

          <a
            href="/contacts"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-sm
              font-bold
              text-white
              hover:text-amber-500
            "
          >
            Свържете се с нас

            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}