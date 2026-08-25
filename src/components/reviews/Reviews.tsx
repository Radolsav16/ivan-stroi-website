import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { reviews } from './data';



export default function Reviews() {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="
          absolute
          left-1/2
          top-0
          -z-10
          size-[500px]
          -translate-x-1/2
          rounded-full
          bg-amber-500/5
          blur-3xl
        "
      />

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
              Отзиви от клиенти
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
            Думите на нашите
            <span className="text-amber-500"> клиенти.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Най-добрата оценка за нашата работа са доволните клиенти.
          </p>
        </div>

        <div className="mt-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="reviews-swiper !pb-14"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <article
                  className="
                    group
                    relative
                    flex
                    h-full
                    min-h-[340px]
                    flex-col
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-8
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-amber-500/30
                    hover:bg-white/[0.05]
                  "
                >
                  <div
                    className="
                      absolute
                      right-6
                      top-4
                      text-7xl
                      font-serif
                      leading-none
                      text-amber-500/10
                      transition-colors
                      duration-300
                      group-hover:text-amber-500/20
                    "
                  >
                    “
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className="text-lg text-amber-500"
                      >
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Review */}
                  <blockquote
                    className="
                      mt-6
                      flex-1
                      text-base
                      leading-7
                      text-gray-300
                    "
                  >
                    “{review.review}”
                  </blockquote>
                  <div className="my-6 h-px bg-white/10" />
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-sm font-bold text-white">
                        {review.name}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {review.project}
                      </p>
                    </div>
                  </div>
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
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}