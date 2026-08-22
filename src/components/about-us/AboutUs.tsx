import {
  CheckIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline';

const advantages = [
  'Професионално изпълнение',
  'Прозрачни условия и цени',
  'Качествени материали',
  'Спазване на договорените срокове',
];

const stats = [
  {
    value: '10+',
    label: 'години опит',
  },
  {
    value: '100+',
    label: 'завършени проекта',
  },
  {
    value: '100%',
    label: 'ангажираност',
  },
];

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-24 sm:py-32">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="
          absolute
          right-0
          top-1/3
          -z-10
          size-[500px]
          translate-x-1/2
          rounded-full
          bg-amber-500/5
          blur-3xl
        "
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Image */}
          <div className="relative">
            {/* Decorative border */}
            <div
              aria-hidden="true"
              className="
                absolute
                -bottom-5
                -left-5
                -z-10
                h-40
                w-40
                rounded-2xl
                border
                border-amber-500/20
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                -right-4
                -top-4
                -z-10
                h-32
                w-32
                rounded-full
                bg-amber-500/10
                blur-2xl
              "
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
              <img
                src="/images/about-us.jpg"
                alt="Екипът на Ivan Stroi по време на работа"
                className="
                  size-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-105
                "
              />

              {/* Image overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-gray-950/70
                  via-transparent
                  to-transparent
                "
              />

              {/* Experience badge */}
              <div
                className="
                  absolute
                  bottom-6
                  left-6
                  rounded-2xl
                  border
                  border-white/10
                  bg-gray-950/80
                  px-5
                  py-4
                  backdrop-blur-md
                "
              >
                <p className="text-3xl font-black text-amber-500">
                  10+
                </p>

                <p className="mt-1 text-xs font-medium text-gray-400">
                  години опит
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            {/* Eyebrow */}
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
                Повече за нас
              </span>
            </div>

            {/* Heading */}
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
              Създаваме повече от
              <span className="text-amber-500">
                {' '}
                пространства.
              </span>
            </h2>

            <p className="mt-7 text-lg leading-8 text-gray-400">
              За нас всеки проект е повече от поредната задача.
              Това е възможност да създадем място, в което хората
              ще живеят, работят и създават спомени.
            </p>

            <p className="mt-5 text-base leading-7 text-gray-500">
              Работим с внимание към детайлите, използваме
              качествени материали и подхождаме индивидуално към
              всеки клиент — от първия разговор до завършването
              на проекта.
            </p>

            {/* Advantages */}
            <ul className="mt-8 space-y-4">
              {advantages.map((advantage) => (
                <li
                  key={advantage}
                  className="flex items-center gap-3"
                >
                  <span
                    className="
                      flex
                      size-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-amber-500/10
                      text-amber-500
                      ring-1
                      ring-amber-500/20
                    "
                  >
                    <CheckIcon className="size-4" />
                  </span>

                  <span className="text-sm font-medium text-gray-300">
                    {advantage}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="/about"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-white/[0.05]
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                  ring-1
                  ring-white/10
                  transition-all
                  duration-200
                  hover:bg-amber-500
                  hover:text-gray-950
                  hover:ring-amber-500
                "
              >
                Научете повече за нас

                <ArrowUpRightIcon
                  className="
                    size-4
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className="
            mt-20
            grid
            grid-cols-1
            divide-y
            divide-white/10
            border-y
            border-white/10
            sm:grid-cols-3
            sm:divide-x
            sm:divide-y-0
          "
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="
                px-6
                py-8
                text-center
                sm:py-10
              "
            >
              <p
                className="
                  text-4xl
                  font-black
                  tracking-tight
                  text-white
                  sm:text-5xl
                "
              >
                {stat.value}
              </p>

              <p className="mt-2 text-sm text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}