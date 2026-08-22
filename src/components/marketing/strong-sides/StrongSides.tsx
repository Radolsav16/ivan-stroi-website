import { ShieldCheckIcon, WrenchScrewdriverIcon, BuildingOffice2Icon, HandRaisedIcon } from "@heroicons/react/24/outline";


const features = [
  {
    name: 'Безкомпромисно качество',
    description:
      'Използваме доказани материали и следим всеки етап от изпълнението, за да постигнем резултат, който остава във времето.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Прецизно изпълнение',
    description:
      'Работим с внимание към всеки детайл — от подготовката до финалното изпълнение на проекта.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Коректност и прозрачност',
    description:
      'Ясна комуникация, реалистични срокове и прозрачност през целия процес на работа.',
    icon: HandRaisedIcon,
  },
  {
    name: 'От идея до завършен проект',
    description:
      'Поемаме проекта цялостно и Ви спестяваме времето и усилията от координирането на различни изпълнители.',
    icon: BuildingOffice2Icon,
  },
];

export default function StrongSides() {
  return (
    <section className="relative isolate overflow-hidden bg-gray-950 py-24 sm:py-32">
      {/* Ambient amber glow */}
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
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

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
                Защо Ivan Stroi
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
              Строим с мисъл за
              <span className="text-amber-500"> бъдещето.</span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-xl
                text-lg
                leading-8
                text-gray-400
              "
            >
              За нас качеството не е просто обещание.
              То е стандарт, който следваме във всеки проект —
              от първата идея до последния детайл.
            </p>

            {/* Features */}
            <div className="mt-10 space-y-3">
              {features.map((feature, index) => (
                <div
                  key={feature.name}
                  className="
                    group
                    flex
                    items-start
                    gap-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    p-5
                    transition-all
                    duration-300
                    hover:border-amber-500/30
                    hover:bg-white/[0.04]
                  "
                >
                  {/* Number */}
                  <div
                    className="
                      flex
                      size-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      bg-amber-500/10
                      text-xs
                      font-bold
                      text-amber-500
                      ring-1
                      ring-amber-500/20
                      transition-all
                      duration-300
                      group-hover:bg-amber-500
                      group-hover:text-gray-950
                    "
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Icon */}
                  <div className="pt-1">
                    <feature.icon
                      aria-hidden="true"
                      className="
                        size-5
                        text-gray-500
                        transition-colors
                        duration-300
                        group-hover:text-amber-500
                      "
                    />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {feature.name}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom link */}
            <div className="mt-10">
              <a
                href="/about"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-bold
                  text-amber-500
                  transition-colors
                  hover:text-amber-400
                "
              >
                Научете повече за нас

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
            </div>
          </div>

          {/* RIGHT - Image */}
          <div className="relative">
            {/* Image glow */}
            <div
              aria-hidden="true"
              className="
                absolute
                -inset-4
                rounded-[2rem]
                bg-amber-500/10
                blur-2xl
              "
            />

            {/* Image wrapper */}
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
                src="src/assets/hero-2.jpg"
                alt="Строителен проект на Ivan Stroi"
                className="
                  aspect-[4/5]
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-1000
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
                  via-gray-950/10
                  to-transparent
                "
              />

              {/* Image label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
                      Ivan Stroi
                    </p>

                    <p className="mt-2 text-xl font-bold text-white">
                      Качество, което се вижда.
                    </p>
                  </div>

                  <div
                    className="
                      hidden
                      size-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-white/10
                      backdrop-blur-md
                      sm:flex
                    "
                  >
                    →
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat */}
            <div
              className="
                absolute
                -bottom-6
                -left-6
                hidden
                rounded-2xl
                border
                border-white/10
                bg-gray-900/90
                px-6
                py-5
                shadow-2xl
                shadow-black/40
                backdrop-blur-xl
                sm:block
              "
            >
              <p className="text-3xl font-bold text-white">
                100%
              </p>

              <p className="mt-1 text-xs font-medium text-gray-400">
                Отговорност към проекта
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
