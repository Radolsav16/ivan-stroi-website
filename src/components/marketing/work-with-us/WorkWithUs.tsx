const stats = [
  {
    value: '10+',
    name: 'години опит',
  },
  {
    value: '100+',
    name: 'завършени проекта',
  },
  {
    value: '100%',
    name: 'ангажираност',
  },
  {
    value: '24/7',
    name: 'комуникация',
  },
];

export default function WorkWithUs() {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-24 sm:py-32">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="
          absolute
          -right-40
          top-1/2
          size-[500px]
          -translate-y-1/2
          rounded-full
          bg-amber-500/5
          blur-3xl
        "
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-20
          "
        >
          {/* LEFT - Content */}
          <div>
            {/* Eyebrow */}
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
                Нека започнем
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                text-5xl
                font-bold
                tracking-tight
                text-white
                sm:text-6xl
                lg:text-7xl
              "
            >
              Имате идея?
              <br />

              <span className="text-amber-500">
                Нека я изградим.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-8
                max-w-xl
                text-lg
                leading-8
                text-gray-400
                sm:text-xl
              "
            >
              Независимо дали започвате ново строителство,
              ремонт или цялостно обновяване — ние сме тук,
              за да превърнем идеята Ви в реалност.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
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
                  shadow-xl
                  shadow-amber-500/20
                  transition-all
                  duration-200
                  hover:bg-amber-400
                  hover:shadow-2xl
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

              <a
                href="tel:+359000000000"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-200
                  hover:border-amber-500/30
                  hover:bg-white/[0.06]
                "
              >
                <span
                  className="
                    text-amber-500
                    transition-transform
                    duration-200
                    group-hover:scale-110
                  "
                >
                  ☎
                </span>

                Обади се сега
              </a>
            </div>

            {/* Trust */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="flex size-9 items-center justify-center rounded-full border-2 border-gray-950 bg-gray-800 text-xs text-gray-400">
                  ✓
                </div>

                <div className="flex size-9 items-center justify-center rounded-full border-2 border-gray-950 bg-gray-800 text-xs text-amber-500">
                  ★
                </div>

                <div className="flex size-9 items-center justify-center rounded-full border-2 border-gray-950 bg-gray-800 text-xs text-gray-400">
                  ✓
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-white">
                  От идея до завършен проект
                </p>

                <p className="text-xs text-gray-500">
                  С професионализъм на всеки етап
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT - Image */}
          <div className="relative">
            {/* Glow behind image */}
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

            {/* Image */}
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
                shadow-black/50
              "
            >
              <img
                src="src/assets/hero-3.jpg"
                alt="Завършен проект на Ivan Stroi"
                className="
                  aspect-[4/3]
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-[1200ms]
                  group-hover:scale-105
                "
              />

              {/* Image overlay */}
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

              {/* Image bottom content */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  p-6
                  sm:p-8
                "
              >
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p
                      className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-amber-500
                      "
                    >
                      Ivan Stroi
                    </p>

                    <p className="mt-2 text-xl font-bold text-white sm:text-2xl">
                      Качеството остава.
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
                      border
                      border-white/20
                      bg-white/10
                      text-white
                      backdrop-blur-md
                    "
                  >
                    →
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div
              className="
                absolute
                -bottom-6
                -left-6
                hidden
                rounded-2xl
                border
                border-white/10
                bg-gray-900/95
                px-6
                py-5
                shadow-2xl
                shadow-black/50
                backdrop-blur-xl
                sm:block
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    size-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-amber-500/10
                    text-amber-500
                    ring-1
                    ring-amber-500/20
                  "
                >
                  ✓
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Безплатен оглед
                  </p>

                  <p className="mt-0.5 text-xs text-gray-500">
                    Свържете се с нас
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 border-t border-white/10 pt-10 sm:mt-24">
          <div className="grid grid-cols-2 gap-y-8 lg:grid-cols-4 lg:gap-x-8">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="
                  border-l
                  border-white/10
                  pl-5
                  transition-colors
                  hover:border-amber-500
                "
              >
                <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {stat.value}
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  {stat.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
