import { useState } from 'react';
import {
  ArrowUpRightIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

const categories = [
  'Всички',
  'Апартаменти',
  'Бани',
  'Къщи',
  'Строителство',
];

const projects = [
  {
    id: 1,
    title: 'Модерен апартамент',
    category: 'Апартаменти',
    location: 'София',
    description:
      'Цялостен ремонт и модернизиране на апартамент с внимание към всеки детайл.',
    image: '/images/gallery/apartment-1.jpg',
    size: '850px',
  },
  {
    id: 2,
    title: 'Луксозна баня',
    category: 'Бани',
    location: 'София',
    description:
      'Пълно обновяване на баня с модерни материали и минималистичен дизайн.',
    image: '/images/gallery/bathroom-1.jpg',
  },
  {
    id: 3,
    title: 'Семеен дом',
    category: 'Къщи',
    location: 'Банкя',
    description:
      'Цялостно обновяване на интериора и екстериора на семейна къща.',
    image: '/images/gallery/house-1.jpg',
  },
  {
    id: 4,
    title: 'Модерен интериор',
    category: 'Апартаменти',
    location: 'София',
    description:
      'Ремонт и интериорно изпълнение на модерен градски апартамент.',
    image: '/images/gallery/apartment-2.jpg',
  },
  {
    id: 5,
    title: 'Баня в минималистичен стил',
    category: 'Бани',
    location: 'София',
    description:
      'Премиум облицовки и санитария с изчистен модерен дизайн.',
    image: '/images/gallery/bathroom-2.jpg',
  },
  {
    id: 6,
    title: 'Ново строителство',
    category: 'Строителство',
    location: 'София',
    description:
      'Изпълнение на строителни дейности от основата до завършения проект.',
    image: '/images/gallery/construction-1.jpg',
  },
];

const stats = [
  {
    value: '100+',
    label: 'завършени проекта',
  },
  {
    value: '10+',
    label: 'години опит',
  },
  {
    value: '100%',
    label: 'ангажираност',
  },
  {
    value: '5★',
    label: 'доволни клиенти',
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('Всички');

  const filteredProjects =
    activeCategory === 'Всички'
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <main className="bg-gray-950">
      {/* ===================================================== */}
      {/* HERO */}
      {/* ===================================================== */}

      <section className="relative isolate overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/gallery/gallery-hero.jpg"
            alt="Проекти на Ivan Stroi"
            className="size-full object-cover"
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
            to-gray-950/40
          "
        />

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

        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-44">
          <div className="max-w-3xl">
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
                Нашите проекти
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
              Работата ни
              <br />
              <span className="text-amber-500">
                говори сама.
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
              Разгледайте част от реализираните от нас проекти —
              от цялостни ремонти до строителство и завършени
              интериорни пространства.
            </p>

            <div className="mt-10">
              <a
                href="/contacts"
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
                  transition-all
                  hover:bg-amber-400
                "
              >
                Имате собствен проект?

                <ArrowUpRightIcon
                  className="
                    size-5
                    transition-transform
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* STATS */}
      {/* ===================================================== */}

      <section className="border-b border-white/10 bg-gray-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-white/10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="px-5 py-8 text-center sm:py-10"
              >
                <p className="text-3xl font-black text-white sm:text-4xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-xs text-gray-500 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* FEATURED PROJECT */}
      {/* ===================================================== */}

      <section className="bg-gray-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-amber-500" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">
                  Акцент
                </span>
              </div>

              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Избран проект
              </h2>
            </div>
          </div>

          <a
            href="/gallery/moderen-apartament"
            className="
              group
              relative
              block
              overflow-hidden
              rounded-3xl
              border
              border-white/10
            "
          >
            <div className="relative aspect-[16/8]">
              <img
                src="/images/gallery/featured.jpg"
                alt="Модерен апартамент"
                className="
                  size-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-gray-950
                  via-gray-950/40
                  to-transparent
                "
              />

              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
                      Апартамент · София
                    </p>

                    <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                      Модерен градски дом
                    </h3>

                    <p className="mt-3 max-w-xl text-sm leading-6 text-gray-300">
                      Цялостен ремонт, нови настилки, баня,
                      осветление и интериорни решения.
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      size-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-amber-500
                      text-gray-950
                      transition-transform
                      group-hover:scale-110
                    "
                  >
                    <ArrowUpRightIcon className="size-5" />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* ===================================================== */}
      {/* PROJECTS */}
      {/* ===================================================== */}

      <section className="bg-gray-950 pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Heading */}
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-amber-500" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">
                Галерия
              </span>
            </div>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Реализирани проекти
            </h2>

            <p className="mt-4 text-gray-500">
              Разгледайте нашите проекти по категории.
            </p>
          </div>

          {/* Filters */}
          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`
                    rounded-full
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? 'bg-amber-500 text-gray-950'
                        : 'border border-white/10 bg-white/[0.03] text-gray-400 hover:border-amber-500/30 hover:text-white'
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <a
                key={project.id}
                href={`/gallery/${project.id}`}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-gray-900
                  ${
                    index === 0
                      ? 'sm:col-span-2 lg:col-span-2'
                      : ''
                  }
                `}
              >
                <div
                  className={`
                    relative
                    ${
                      index === 0
                        ? 'aspect-[16/9]'
                        : 'aspect-[4/5]'
                    }
                  `}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      size-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-gray-950
                      via-gray-950/30
                      to-transparent
                    "
                  />

                  {/* Number */}
                  <span className="absolute right-5 top-4 text-4xl font-black text-white/10">
                    {String(project.id).padStart(2, '0')}
                  </span>

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-amber-500">
                      {project.category}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      {project.location}
                    </p>

                    <div
                      className="
                        mt-4
                        flex
                        items-center
                        gap-2
                        text-sm
                        font-semibold
                        text-white
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:translate-y-0
                        group-hover:opacity-100
                      "
                    >
                      Виж проекта
                      <ArrowRightIcon className="size-4" />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================== */}
      {/* CTA */}
      {/* ===================================================== */}

      <section className="relative overflow-hidden border-t border-white/10 bg-gray-900 py-20">
        <div
          aria-hidden="true"
          className="
            absolute
            left-1/2
            top-1/2
            -z-10
            size-[400px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-amber-500/5
            blur-3xl
          "
        />

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">
            Вашият проект
          </span>

          <h2 className="mt-5 text-4xl font-bold text-white sm:text-5xl">
            Искате да видите
            <br />
            <span className="text-amber-500">
              Вашата идея реализирана?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Свържете се с нас и нека обсъдим Вашия проект,
            необходимите дейности и възможностите за реализация.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="/contacts"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-amber-500
                px-6
                py-3.5
                text-sm
                font-bold
                text-gray-950
                transition-colors
                hover:bg-amber-400
              "
            >
              Направете запитване
              <ArrowUpRightIcon className="size-5" />
            </a>

            <a
              href="/prices"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                px-6
                py-3.5
                text-sm
                font-bold
                text-white
                transition-all
                hover:border-amber-500/30
                hover:bg-white/[0.06]
              "
            >
              Вижте цените
              <ArrowRightIcon className="size-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}