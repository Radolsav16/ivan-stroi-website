import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import { ArrowRight, ClipboardList, Sparkles } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";

import Layout from "../../Layout";
import { OptimizedImage } from "../../components/image/OptimizedImage";
import { CLOUDINARY_BASE_URL } from "../../utils/url";
import { galleryItems, steps } from "./data";

export default function Gallery() {
  return (
    <Layout>
      <main className="bg-gray-950 text-white">
        <section className="relative overflow-hidden py-28 sm:py-36">
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
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 flex items-center justify-center gap-3">
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

                <span className="h-px w-10 bg-amber-500" />
              </div>

              <h1
                className="
                text-5xl
                font-bold
                tracking-tight
                sm:text-6xl
                lg:text-7xl
              "
              >
                Галерия
                <span className="text-amber-500"> от проекти.</span>
              </h1>

              <p
                className="
                mx-auto
                mt-7
                max-w-2xl
                text-lg
                leading-8
                text-gray-400
                sm:text-xl
              "
              >
                Разгледайте част от проектите, които сме реализирали, и вижте
                вниманието към детайла, качеството и начина, по който работим.
              </p>
            </div>
          </div>
        </section>

        <section className="pb-28 sm:pb-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                  Последните ни проекти
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-gray-500">
                Всеки проект е различен. Нашата цел е да превърнем вашата идея в
                качествено завършено пространство.
              </p>
            </div>

            <div className="gallery-swiper overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
              <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect="fade"
                fadeEffect={{
                  crossFade: true,
                }}
                navigation
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                }}
                loop
                className="h-[500px] sm:h-[600px] lg:h-[700px]"
              >
                {galleryItems.map((item) => (
                  <SwiperSlide key={item.id}>
                    <OptimizedImage
                      url={`${CLOUDINARY_BASE_URL}${item.image}`}
                      alt={item.title}
                      className="
          max-h-full
          max-w-full
          object-contain
          transition-transform
          duration-[3000ms]
          group-hover:scale-105
        "
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.02] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              className="
              relative
              overflow-hidden
              rounded-3xl
              px-8
              py-14
              sm:px-14
              sm:py-16
            "
            >
              <Sparkles
                className="
                absolute
                right-10
                top-10
                size-24
                text-amber-500/10
              "
              />

              <div className="relative max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-widest text-amber-500">
                  Имате идея?
                </p>

                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Нека я превърнем в реалност.
                </h2>

                <p className="mt-5 leading-7 text-gray-400">
                  Разкажете ни какво искате да промените и ще ви помогнем да
                  превърнете идеята си в реален проект.
                </p>

                <a
                  href="/contact-us"
                  className="
                  mt-8
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  bg-amber-500
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-gray-950
                  transition-all
                  duration-300
                  hover:bg-amber-400
                  hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]
                "
                >
                  Свържете се с нас
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="py-28 sm:py-36">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
                sm:text-5xl
              "
              >
                Само <span className="text-amber-500">3 стъпки.</span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                От първия разговор до завършения проект – правим процеса
                максимално лесен и ясен.
              </p>
            </div>

            <div className="relative mt-16">
              <div
                className="
                absolute
                left-[16.66%]
                right-[16.66%]
                top-14
                hidden
                h-px
                bg-gradient-to-r
                from-transparent
                via-amber-500/30
                to-transparent
                lg:block
              "
              />

              <div className="grid gap-6 lg:grid-cols-3">
                {steps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <article
                      key={step.number}
                      className="
                      group
                      relative
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-8
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:border-amber-500/30
                      hover:bg-white/[0.05]
                    "
                    >
                      <div className="flex items-center justify-between">
                        <span
                          className="
                          text-5xl
                          font-black
                          tracking-tight
                          text-white/10
                          transition-colors
                          duration-300
                          group-hover:text-amber-500/20
                        "
                        >
                          {step.number}
                        </span>

                        <div
                          className="
                          flex
                          size-14
                          items-center
                          justify-center
                          rounded-2xl
                          border
                          border-amber-500/20
                          bg-amber-500/10
                          text-amber-500
                          transition-all
                          duration-300
                          group-hover:scale-110
                          group-hover:bg-amber-500
                          group-hover:text-gray-950
                        "
                        >
                          <Icon className="size-6" />
                        </div>
                      </div>

                      <h3 className="mt-8 text-xl font-bold">{step.title}</h3>

                      <p className="mt-4 text-sm leading-7 text-gray-400">
                        {step.description}
                      </p>
                      <div
                        className="
                        absolute
                        bottom-0
                        left-8
                        right-8
                        h-0.5
                        origin-left
                        scale-x-0
                        bg-amber-500
                        transition-transform
                        duration-500
                        group-hover:scale-x-100
                      "
                      />
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-28 sm:pb-36">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500">
              <ClipboardList className="size-7" />
            </div>

            <h2
              className="
              mt-7
              text-3xl
              font-bold
              sm:text-4xl
              lg:text-5xl
            "
            >
              Готови ли сте за следващия си проект?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              Свържете се с нас и нека обсъдим как можем да превърнем вашето
              пространство в място, с което да се гордеете.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/contact-us"
                className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-full
                bg-amber-500
                px-7
                py-3.5
                text-sm
                font-bold
                text-gray-950
                transition
                hover:bg-amber-400
              "
              >
                Направи запитване
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
