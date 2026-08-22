import {
  ArrowRightIcon,
  CheckIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const values = [
  {
    title: 'Качество без компромис',
    description:
      'Използваме качествени материали и подхождаме внимателно към всеки детайл от проекта.',
    icon: ShieldCheckIcon,
  },
  {
    title: 'Коректност',
    description:
      'Спазваме поетите ангажименти, комуникираме открито и държим клиентът да знае какво се случва.',
    icon: UserGroupIcon,
  },
  {
    title: 'Професионален подход',
    description:
      'Планираме, организираме и изпълняваме всеки проект с ясна последователност.',
    icon: WrenchScrewdriverIcon,
  },
  {
    title: 'Внимание към детайла',
    description:
      'За нас добрият резултат се крие именно в малките детайли.',
    icon: SparklesIcon,
  },
];

const numbers = [
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
    value: '24/7',
    label: 'комуникация с клиента',
  },
];

const process = [
  {
    number: '01',
    title: 'Запознаване',
    description:
      'Разбираме Вашата идея, нужди и очаквания.',
  },
  {
    number: '02',
    title: 'Оглед и планиране',
    description:
      'Правим оглед и обсъждаме най-подходящото решение.',
  },
  {
    number: '03',
    title: 'Изпълнение',
    description:
      'Работим организирано и следим всеки етап от проекта.',
  },
  {
    number: '04',
    title: 'Предаване',
    description:
      'Предаваме завършения проект с внимание към всеки детайл.',
  },
];

export default function AboutUs() {
  return (
    <main className="bg-gray-950">

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative isolate overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 -z-20">
          <img
            src="/images/about-hero.jpg"
            alt="Екипът на Ivan Stroi"
            className="size-full object-cover object-center"
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

        {/* Bottom fade */}
        <div
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

        <div className="mx-auto max-w-7xl px-6 py-32 lg:px-8 lg:py-44">

          <div className="max-w-3xl">

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
                За Ivan Stroi
              </span>
            </div>

            {/* Heading */}
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
              Не просто строим.
              <br />

              <span className="text-amber-500">
                Създаваме бъдеще.
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
              Ivan Stroi е строителна компания, която вярва,
              че добрият проект започва с доверие и завършва
              с резултат, с който всички можем да се гордеем.
            </p>

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
                  shadow-amber-500/10
                  transition-all
                  hover:bg-amber-400
                "
              >
                Свържете се с нас

                <ArrowRightIcon
                  className="
                    size-5
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
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
                  hover:bg-white/10
                "
              >
                Разгледайте проектите
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* ================================================= */}
      {/* NUMBERS */}
      {/* ================================================= */}

      <section className="border-y border-white/10 bg-gray-950">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid grid-cols-2 lg:grid-cols-4">

            {numbers.map((item, index) => (
              <div
                key={item.label}
                className={`
                  px-6
                  py-10
                  sm:py-12
                  lg:px-10
                  ${index !== 0 ? 'border-l border-white/10' : ''}
                `}
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
                  {item.value}
                </p>

                <p className="mt-2 text-sm text-gray-500">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* STORY */}
      {/* ================================================= */}

      <section className="overflow-hidden bg-gray-950 py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

            {/* Image */}
            <div className="relative">

              <div
                className="
                  absolute
                  -left-6
                  -top-6
                  size-32
                  rounded-full
                  bg-amber-500/10
                  blur-2xl
                "
              />

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                "
              >
                <img
                  src="/images/about-team.jpg"
                  alt="Екипът на Ivan Stroi"
                  className="
                    aspect-[4/5]
                    w-full
                    object-cover
                    transition
                    duration-700
                    hover:scale-105
                  "
                />

                {/* Image label */}
                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    rounded-xl
                    border
                    border-white/10
                    bg-gray-950/80
                    px-5
                    py-4
                    backdrop-blur-md
                  "
                >
                  <p className="text-xs uppercase tracking-widest text-amber-500">
                    Ivan Stroi
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    Качество, което остава.
                  </p>
                </div>

              </div>

            </div>


            {/* Text */}
            <div>

              <div className="mb-5 flex items-center gap-3">

                <span className="h-px w-10 bg-amber-500" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">
                  Нашата история
                </span>

              </div>

              <h2
                className="
                  text-4xl
                  font-bold
                  tracking-tight
                  text-white
                  sm:text-5xl
                "
              >
                Създаваме с мисъл
                <br />
                <span className="text-amber-500">
                  за хората.
                </span>
              </h2>

              <div className="mt-8 space-y-5 text-base leading-8 text-gray-400">

                <p>
                  Всеки строителен проект е различен.
                  Различни са хората, техните нужди,
                  бюджет и представи за крайния резултат.
                </p>

                <p>
                  Затова не вярваме в универсални решения.
                  Преди да започнем работа, отделяме време
                  да разберем какво наистина искате да постигнете.
                </p>

                <p>
                  След това превръщаме тази идея в ясен план
                  и я реализираме стъпка по стъпка.
                </p>

              </div>

              <div className="mt-8 space-y-4">

                {[
                  'Ясна комуникация',
                  'Прозрачно изпълнение',
                  'Качествени материали',
                  'Отговорност към всеки проект',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div
                      className="
                        flex
                        size-6
                        items-center
                        justify-center
                        rounded-full
                        bg-amber-500/10
                        text-amber-500
                      "
                    >
                      <CheckIcon className="size-4" />
                    </div>

                    <span className="text-sm font-semibold text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* VALUES */}
      {/* ================================================= */}

      <section className="bg-gray-900 py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">

              <span className="h-px w-10 bg-amber-500" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">
                Нашите принципи
              </span>

            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Това, което стои зад
              <span className="text-amber-500">
                {' '}всеки проект.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Доброто строителство не се измерва само с крайния
              резултат. То се усеща във всеки етап от процеса.
            </p>

          </div>


          <div className="mt-16 grid gap-5 md:grid-cols-2">

            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.02]
                    p-8
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-amber-500/30
                    hover:bg-white/[0.04]
                  "
                >

                  {/* Number */}
                  <span
                    className="
                      absolute
                      right-6
                      top-4
                      text-6xl
                      font-black
                      text-white/[0.03]
                      transition
                      group-hover:text-amber-500/[0.08]
                    "
                  >
                    0{index + 1}
                  </span>


                  <div
                    className="
                      flex
                      size-12
                      items-center
                      justify-center
                      rounded-xl
                      bg-amber-500/10
                      text-amber-500
                      ring-1
                      ring-amber-500/20
                      transition-all
                      group-hover:bg-amber-500
                      group-hover:text-gray-950
                    "
                  >
                    <Icon className="size-6" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {value.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-gray-400">
                    {value.description}
                  </p>

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

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* HOW WE WORK */}
      {/* ================================================= */}

      <section className="bg-gray-950 py-24 sm:py-32">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-5 flex items-center justify-center gap-3">

              <span className="h-px w-8 bg-amber-500" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">
                Как работим
              </span>

              <span className="h-px w-8 bg-amber-500" />

            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              От първата идея
              <br />
              до готовия резултат.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Прост и ясен процес, създаден така, че да знаете
              какво се случва във всеки един момент.
            </p>

          </div>


          <div className="relative mt-20">

            {/* Line */}
            <div
              className="
                absolute
                left-[12.5%]
                right-[12.5%]
                top-6
                hidden
                h-px
                bg-white/10
                lg:block
              "
            />

            <div className="grid gap-12 lg:grid-cols-4">

              {process.map((item) => (
                <div
                  key={item.number}
                  className="relative text-center"
                >

                  <div
                    className="
                      relative
                      mx-auto
                      flex
                      size-12
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-amber-500/30
                      bg-gray-950
                      text-sm
                      font-black
                      text-amber-500
                      ring-8
                      ring-gray-950
                    "
                  >
                    {item.number}
                  </div>

                  <h3 className="mt-7 text-lg font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* LARGE IMAGE */}
      {/* ================================================= */}

      <section className="relative overflow-hidden">

        <img
          src="/images/about-project.jpg"
          alt="Завършен проект на Ivan Stroi"
          className="
            h-[550px]
            w-full
            object-cover
            object-center
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

        <div className="absolute inset-x-0 bottom-0">

          <div className="mx-auto max-w-7xl px-6 pb-16 lg:px-8">

            <div className="max-w-2xl">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">
                Нашата работа
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Резултатът говори сам за себе си.
              </h2>

            </div>

          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* CTA */}
      {/* ================================================= */}

      <section className="bg-gray-950 py-24 sm:py-32">

        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-amber-500/20
              bg-amber-500/[0.04]
              px-6
              py-16
              text-center
              sm:px-12
              sm:py-20
            "
          >

            {/* Glow */}
            <div
              aria-hidden="true"
              className="
                absolute
                left-1/2
                top-0
                size-80
                -translate-x-1/2
                rounded-full
                bg-amber-500/10
                blur-3xl
              "
            />

            <div className="relative">

              <p className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">
                Вашият проект
              </p>

              <h2
                className="
                  mt-5
                  text-4xl
                  font-black
                  tracking-tight
                  text-white
                  sm:text-5xl
                "
              >
                Готови ли сте
                <br />
                да започнем?
              </h2>

              <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-400">
                Разкажете ни за Вашата идея. Ще я обсъдим,
                ще направим оглед и ще Ви предложим решение.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">

                <a
                  href="/contacts"
                  className="
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
                    transition
                    hover:bg-amber-400
                  "
                >
                  Заяви безплатен оглед

                  <ArrowRightIcon className="size-5" />
                </a>

                <a
                  href="/gallery"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-6
                    py-3.5
                    text-sm
                    font-semibold
                    text-white
                    transition
                    hover:bg-white/10
                  "
                >
                  Вижте нашите проекти
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}