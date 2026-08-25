
import { ArrowRight, CheckIcon, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { CLOUDINARY_BASE_URL } from "../../utils/url";
import { OptimizedImage } from "../image/OptimizedImage";
import Layout from "../../Layout";

const advantages = [
  "Качествено изпълнение",
  "Индивидуален подход към всеки проект",
  "Коректност и ясна комуникация",
  "Внимание към всеки детайл",
  "Използване на качествени материали",
];

const AboutUs = () => {
  return (
    <Layout>
    <main className="bg-gray-950">
      {/* HERO */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="
            absolute
            left-0
            top-1/2
            -z-10
            size-[500px]
            -translate-x-1/2
            rounded-full
            bg-amber-500/5
            blur-3xl
          "
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
              За нас
            </p>

            <h1
              className="
                mt-4
                text-4xl
                font-bold
                tracking-tight
                text-white
                sm:text-5xl
                lg:text-6xl
              "
            >
              Създаваме пространства,
              <span className="block text-amber-500">
                които остават.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
              За нас строителството не е просто работа. То е отговорност,
              внимание към детайла и възможност да превърнем идеите на нашите
              клиенти в реалност.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative overflow-hidden py-24 sm:py-32">
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

            {/* IMAGE */}
            <div className="relative">
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
                <OptimizedImage
                  url={`${CLOUDINARY_BASE_URL}/v1787400733/bathroom-7.jpg`}
                  alt="Завършен строителен проект"
                  className="
                    size-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />
              </div>
            </div>

            {/* CONTENT */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
                Кои сме ние
              </p>

              <h2
                className="
                  mt-4
                  text-3xl
                  font-bold
                  tracking-tight
                  text-white
                  sm:text-4xl
                "
              >
                Повече от строителство.
                <span className="block text-gray-400">
                  Създаваме бъдещето на вашия дом.
                </span>
              </h2>

              <p className="mt-7 text-lg leading-8 text-gray-400">
                За нас всеки проект е повече от поредната задача.
                Това е възможност да създадем място, в което хората
                ще живеят, работят и създават спомени.
              </p>

              <p className="mt-5 text-base leading-7 text-gray-500">
                Работим с внимание към детайлите, използваме качествени
                материали и подхождаме индивидуално към всеки клиент —
                от първия разговор до завършването на проекта.
              </p>

              <p className="mt-5 text-base leading-7 text-gray-500">
                Независимо дали става въпрос за цялостен ремонт на
                апартамент или къща, обновяване на баня или конкретна
                строителна дейност, нашата цел е една — качествен резултат,
                който отговаря на вашите очаквания.
              </p>

              {/* ADVANTAGES */}
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
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="border-y border-white/10 bg-white/[0.02] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
              Нашият подход
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              От първата идея до последния детайл.
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-500">
              Стремим се целият процес да бъде ясен, организиран и
              максимално спокоен за клиента.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Консултация",
                text: "Започваме с разговор, за да разберем вашите нужди, идеи и очаквания.",
              },
              {
                number: "02",
                title: "Планиране",
                text: "Изготвяме ясен план за работа и обсъждаме необходимите материали и решения.",
              },
              {
                number: "03",
                title: "Изпълнение",
                text: "Реализираме проекта с внимание към качеството, сроковете и всеки детайл.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-gray-950
                  p-7
                "
              >
                <span className="text-sm font-bold text-amber-500">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUEST */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div
          aria-hidden="true"
          className="
            absolute
            left-1/2
            top-1/2
            -z-10
            size-[600px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-amber-500/5
            blur-3xl
          "
        />

        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Вашият проект започва тук
          </p>

          <h2
            className="
              mt-4
              text-3xl
              font-bold
              tracking-tight
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            Имате идея за ремонт?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400">
            Разкажете ни повече за вашия проект. Свържете се с нас,
            за да обсъдим вашите идеи и да намерим най-подходящото
            решение за вас.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/kontakti"
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-amber-500
                px-6
                py-3.5
                text-sm
                font-semibold
                text-gray-950
                transition
                hover:bg-amber-400
              "
            >
              Направи запитване

              <ArrowRight
                className="
                  size-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

            <a
              href="tel:+359888000000"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
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
              <Phone className="size-4" />
              Обади се
            </a>
          </div>
        </div>
      </section>
    </main>
    </Layout>
  );
};

export default AboutUs;
