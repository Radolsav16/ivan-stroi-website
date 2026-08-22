export default function Hero() {
  return (
<div className="relative isolate overflow-hidden bg-gray-950">
  {/* Background image */}
  <div className="absolute inset-0 -z-20">
    <img
      src="src/assets/hero-img.jpg"
      alt="Ivan Stroi строителен проект"
      className="
        h-full
        w-full
        object-cover
        object-center
        transition-transform
        duration-[2000ms]
        hover:scale-105
      "
    />
  </div>

  {/* Dark overlay */}
  <div
    aria-hidden="true"
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

  {/* Bottom gradient */}
  <div
    aria-hidden="true"
    className="
      absolute
      inset-x-0
      bottom-0
      -z-10
      h-48
      bg-gradient-to-t
      from-gray-950
      to-transparent
    "
  />

  {/* Amber ambient glow */}
  <div
    aria-hidden="true"
    className="
      absolute
      -left-32
      top-1/3
      -z-10
      h-96
      w-96
      rounded-full
      bg-amber-500/10
      blur-3xl
    "
  />

  {/* Hero content */}
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="flex min-h-[calc(100vh-120px)] items-center py-24 sm:py-32 lg:py-40">
      <div className="max-w-3xl">

        {/* Badge */}
        <div className="mb-8">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/5
              px-4
              py-2
              text-sm
              font-medium
              text-gray-300
              shadow-lg
              shadow-black/10
              backdrop-blur-md
            "
          >
            <span className="relative flex size-2">
              <span
                className="
                  absolute
                  inline-flex
                  size-full
                  animate-ping
                  rounded-full
                  bg-amber-400
                  opacity-75
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  size-2
                  rounded-full
                  bg-amber-500
                "
              />
            </span>

            Професионално строителство
          </div>
        </div>

        {/* Heading */}
        <h1
          className="
            max-w-4xl
            text-5xl
            font-bold
            tracking-tight
            text-white
            sm:text-7xl
            lg:text-8xl
          "
        >
          Вашият дом.
          <br />

          <span className="text-amber-500">
            Нашата отговорност.
          </span>
        </h1>

        {/* Description */}
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
          Изграждаме пространства, които остават.
          Качествено строителство, прецизност и отношение
          към всеки детайл.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap items-center gap-4">
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
            href="/gallery"
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              border
              border-white/15
              bg-white/5
              px-6
              py-3.5
              text-sm
              font-semibold
              text-white
              backdrop-blur-sm
              transition-all
              duration-200
              hover:border-white/25
              hover:bg-white/10
            "
          >
            Разгледай проектите
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-wrap gap-x-10 gap-y-6">
            <div>
              <p className="text-2xl font-bold text-white">
                10+
              </p>

              <p className="mt-1 text-sm text-gray-400">
                години опит
              </p>
            </div>

            <div className="hidden h-12 w-px bg-white/10 sm:block" />

            <div>
              <p className="text-2xl font-bold text-white">
                100+
              </p>

              <p className="mt-1 text-sm text-gray-400">
                реализирани проекта
              </p>
            </div>

            <div className="hidden h-12 w-px bg-white/10 sm:block" />

            <div>
              <p className="text-2xl font-bold text-white">
                100%
              </p>

              <p className="mt-1 text-sm text-gray-400">
                отношение към детайла
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Scroll indicator */}
  <div
    className="
      absolute
      bottom-8
      left-1/2
      hidden
      -translate-x-1/2
      flex-col
      items-center
      gap-2
      text-gray-500
      lg:flex
    "
  >
    <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
      Scroll
    </span>

    <div className="h-10 w-px bg-gradient-to-b from-amber-500 to-transparent" />
  </div>
</div>
  )
}
