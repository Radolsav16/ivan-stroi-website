import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import {images} from '../../data/images'



export default function Slider() {
  return (
    <section className="overflow-hidden bg-gray-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-amber-500" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">
                Нашите проекти
              </span>
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Проекти, които
              <span className="text-amber-500"> говорят сами.</span>
            </h2>

            <p className="mt-4 max-w-2xl text-gray-400">
              Разгледайте част от проектите, които сме реализирали
              с внимание към всеки детайл.
            </p>
          </div>

          <a
            href="/gallery"
            className="
              group
              hidden
              shrink-0
              items-center
              gap-2
              text-sm
              font-bold
              text-amber-500
              sm:inline-flex
            "
          >
            Виж всички проекти

            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          loop
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          className="imagess-swiper"
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <article
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-gray-900
                "
              >
                {/* Image */}
                <img
                  src={image.image}
                  alt={image.title}
                  className="
                    aspect-[16/10]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-gray-950
                    via-gray-950/20
                    to-transparent
                  "
                />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
                    {image.location}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                    {image.title}
                  </h3>

                  <span
                    className="
                      mt-4
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-white
                      opacity-0
                      transition-opacity
                      duration-300
                      group-hover:opacity-100
                    "
                  >
                    Виж проекта →
                  </span>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Mobile gallery link */}
        <div className="mt-8 sm:hidden">
          <a
            href="/gallery"
            className="text-sm font-bold text-amber-500"
          >
            Виж всички проекти →
          </a>
        </div>
      </div>
    </section>
  );
}