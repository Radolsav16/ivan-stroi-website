
const workSteps = [
  {
    number: '01',
    title: 'Безплатен оглед',
    description:
      'Посещаваме обекта, запознаваме се с Вашите идеи и обсъждаме възможностите.',
  },
  {
    number: '02',
    title: 'План и оферта',
    description:
      'Изготвяме ясен план за работа и подробна оферта според нуждите на проекта.',
  },
  {
    number: '03',
    title: 'Изпълнение',
    description:
      'Нашият екип започва работа и следи всеки етап за качествено и прецизно изпълнение.',
  },
  {
    number: '04',
    title: 'Завършен проект',
    description:
      'Предаваме завършения обект с внимание към всеки детайл и Вашето удовлетворение.',
  },
];


export default function HowWeWork() {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-24 sm:py-32">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="
          absolute
          -left-40
          top-1/2
          -z-10
          size-[500px]
          -translate-y-1/2
          rounded-full
          bg-amber-500/5
          blur-3xl
        "
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
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
              Как работим
            </span>

            <span className="h-px w-10 bg-amber-500" />
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
            От първата идея
            <br />
            <span className="text-amber-500">
              до готовия проект.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Работим по ясен и структуриран процес, за да знаете
            какво да очаквате на всеки етап от проекта.
          </p>
        </div>

        {/* Main content */}
        <div className="mt-20 grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          {/* Image */}
          <div className="relative">
            {/* Glow */}
            <div
              aria-hidden="true"
              className="
                absolute
                -inset-5
                rounded-[2rem]
                bg-amber-500/10
                blur-2xl
              "
            />

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-gray-900
                shadow-2xl
                shadow-black/40
              "
            >
              <img
                src="/images/how-we-work.jpg"
                alt="Екипът на Ivan Stroi по време на работа"
                className="
                  aspect-[4/5]
                  w-full
                  object-cover
                  transition-transform
                  duration-1000
                  group-hover:scale-105
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-gray-950/80
                  via-transparent
                  to-transparent
                "
              />

              {/* Image content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
                  Ivan Stroi
                </p>

                <p className="mt-2 text-2xl font-bold text-white">
                  Всеки детайл има значение.
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="
                absolute
                -bottom-6
                -right-6
                rounded-2xl
                border
                border-white/10
                bg-gray-900/95
                px-6
                py-5
                shadow-2xl
                shadow-black/50
                backdrop-blur-xl
              "
            >
              <p className="text-2xl font-bold text-amber-500">
                01 → 04
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Ясен процес
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Vertical line */}
            <div
              aria-hidden="true"
              className="
                absolute
                left-5
                top-5
                bottom-5
                w-px
                bg-gradient-to-b
                from-amber-500
                via-white/10
                to-transparent
              "
            />

            <div className="space-y-8">
              {workSteps.map((step, index) => (
                <div
                  key={step.number}
                  className="group relative flex gap-6"
                >
                  {/* Number */}
                  <div
                    className="
                      relative
                      z-10
                      flex
                      size-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-amber-500/30
                      bg-gray-950
                      text-xs
                      font-bold
                      text-amber-500
                      transition-all
                      duration-300
                      group-hover:border-amber-500
                      group-hover:bg-amber-500
                      group-hover:text-gray-950
                    "
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="pb-2">
                    <h3 className="text-xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 pl-16">
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
                  py-3
                  text-sm
                  font-bold
                  text-gray-950
                  transition-all
                  hover:bg-amber-400
                "
              >
                Започнете Вашия проект

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}