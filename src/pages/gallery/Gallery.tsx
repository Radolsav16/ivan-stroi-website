import {
  ArrowRight,
  ArrowUpRight,
  ClipboardList,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { OptimizedImage } from "../../components/image/OptimizedImage";
import { CLOUDINARY_BASE_URL } from "../../utils/url";

import { galleryItems, steps } from "./data";
import Layout from "../../Layout";

export default function Gallery() {
  return (
    <Layout>
      <main className="overflow-hidden bg-gray-950 text-white">
        <section className="relative isolate overflow-hidden py-28 sm:py-36">
          <div className="absolute inset-0 -z-20">
            <OptimizedImage
              url={`${CLOUDINARY_BASE_URL}/v1787399641/bathroom-2.jpg`}
              alt=""
               className="size-full object-cover object-center"
            />
          </div>


 <div
          className="
            absolute
            inset-0
            -z-10
            bg-gradient-to-r
            from-gray-950/95
            via-gray-950/75
            to-gray-950/35
          "
        />

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-amber-500" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">
                  Нашите проекти
                </span>

                <span className="h-px w-10 bg-amber-500" />
              </div>

              <h1
                className="
                  text-5xl
                  font-black
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

        {/* =========================================================
            GALLERY SLIDER
        ========================================================= */}
        <section className="relative overflow-hidden pb-28 sm:pb-36">

          <div className="absolute inset-0 -z-10 bg-gray-950/95" />

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Slider header */}
            <div className="m-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Последните ни{" "}
                  <span className="text-amber-500">проекти.</span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-gray-500">
                Всеки проект е различен. Нашата цел е да превърнем вашата идея
                в качествено завършено пространство.
              </p>
            </div>

            {/* Slider wrapper */}
            <div className="gallery-swiper relative overflow-hidden rounded-3xl border border-white/10 bg-gray-950/80 shadow-2xl shadow-black/30">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                navigation={{
                  prevEl: ".gallery-prev",
                  nextEl: ".gallery-next",
                }}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                }}
                loop
                slidesPerView={1}
                spaceBetween={0}
                className="h-[320px] sm:h-[480px] lg:h-[620px]"
              >
                {galleryItems.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="relative h-full w-full overflow-hidden">
                      <OptimizedImage
                        url={`${CLOUDINARY_BASE_URL}${item.image}`}
                        alt={item.title}
                        className="
                          h-full
                          w-full
                          object-cover
                          object-center
                          transition-transform
                          duration-[4000ms]
                        "
                      />

                      {/* Image overlay */}
                      <div
                        className="
                          pointer-events-none
                          absolute
                          inset-0
                          bg-gradient-to-t
                          from-gray-950/80
                          via-gray-950/10
                          to-transparent
                        "
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                type="button"
                aria-label="Предишна снимка"
                className="
                  gallery-prev
                  absolute
                  left-3
                  top-1/2
                  z-30
                  flex
                  size-10
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-amber-500/30
                  bg-gray-950/90
                  text-amber-500
                  shadow-xl
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:border-amber-500
                  hover:bg-amber-500
                  hover:text-gray-950
                  sm:left-5
                  sm:size-12
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="size-5 sm:size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 18l-6-6 6-6"
                  />
                </svg>
              </button>

              {/* =====================================================
                  NEXT
              ===================================================== */}
              <button
                type="button"
                aria-label="Следваща снимка"
                className="
                  gallery-next
                  absolute
                  right-3
                  top-1/2
                  z-30
                  flex
                  size-10
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-amber-500/30
                  bg-gray-950/90
                  text-amber-500
                  shadow-xl
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:border-amber-500
                  hover:bg-amber-500
                  hover:text-gray-950
                  sm:right-5
                  sm:size-12
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="size-5 sm:size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 18l6-6-6-6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* =========================================================
            CTA
        ========================================================= */}
        <section className="relative overflow-hidden border-y border-white/10 py-24">
          {/* Background */}
          <div className="absolute inset-0 -z-20">
            <OptimizedImage
              url={`${CLOUDINARY_BASE_URL}/v1787399614/bathroom-1.jpg`}
              alt=""
              className="h-full w-full object-cover opacity-20"
            />
          </div>

          <div className="absolute inset-0 -z-10 bg-gray-950/90" />

          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/60" />

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div
              className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-gray-950/50
                px-8
                py-14
                backdrop-blur-sm
                sm:px-14
                sm:py-16
              "
            >
              <Sparkles
                className="
                  absolute
                  right-8
                  top-8
                  size-24
                  text-amber-500/10
                  sm:right-10
                  sm:top-10
                "
              />

              <div className="relative max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-widest text-amber-500">
                  Имате идея?
                </p>

                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  Нека я превърнем в реалност.
                </h2>

                <p className="mt-5 leading-7 text-gray-400">
                  Разкажете ни какво искате да промените и ще ви помогнем да
                  превърнете идеята си в реален проект.
                </p>

                <Link
                  to="/contact-us"
                  className="
                    group
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

                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            HOW WE WORK
        ========================================================= */}
        <section className="relative overflow-hidden py-28 sm:py-36">
          {/* Background */}
          <div className="absolute inset-0 -z-20">
            <OptimizedImage
              url={`${CLOUDINARY_BASE_URL}/v1787591086/service-img-2.jpg`}
              alt=""
              className="h-full w-full object-cover opacity-[0.08]"
            />
          </div>

          <div className="absolute inset-0 -z-10 bg-gray-950/95" />

          <div className="absolute left-1/2 top-1/2 -z-10 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/5 blur-[120px]" />

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-5 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-amber-500" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">
                  Как работим
                </span>

                <span className="h-px w-10 bg-amber-500" />
              </div>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Само <span className="text-amber-500">3 стъпки.</span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                От първия разговор до завършения проект – правим процеса
                максимално лесен и ясен.
              </p>
            </div>

            <div className="relative mt-16">
              {/* Connecting line */}
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
                        overflow-hidden
                        rounded-3xl
                        border
                        border-white/10
                        bg-gray-950/70
                        p-8
                        backdrop-blur-md
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:border-amber-500/30
                        hover:bg-gray-950/90
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

                      <h3 className="mt-8 text-xl font-bold">
                        {step.title}
                      </h3>

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

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <section className="relative overflow-hidden pb-28 sm:pb-36">
          <div className="absolute inset-0 -z-20">
            <OptimizedImage
              url={`${CLOUDINARY_BASE_URL}/v1787591086/service-img-2.jpg`}
              alt=""
              className="h-full w-full object-cover opacity-[0.12]"
            />
          </div>

          <div className="absolute inset-0 -z-10 bg-gray-950/95" />

          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-500 ring-1 ring-amber-500/10">
              <ClipboardList className="size-7" />
            </div>

            <h2 className="mt-7 text-3xl font-black sm:text-4xl lg:text-5xl">
              Готови ли сте за следващия си проект?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              Свържете се с нас и нека обсъдим как можем да превърнем вашето
              пространство в място, с което да се гордеете.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/contact-us"
                className="
                  group
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
                  transition-all
                  duration-300
                  hover:bg-amber-400
                  hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]
                "
              >
                Направи запитване

                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/services"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:border-amber-500/30
                  hover:bg-white/[0.06]
                  hover:text-amber-500
                "
              >
                Разгледай услугите

                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
