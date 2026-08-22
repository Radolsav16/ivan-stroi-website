import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    id: 1,
    name: 'Иван Петров',
    project: 'Цялостен ремонт на апартамент',
    review:
      'Изключително доволни сме от резултата. Екипът беше коректен, организиран и изпълни всичко точно както го бяхме обсъдили.',
  },
  {
    id: 2,
    name: 'Мария Георгиева',
    project: 'Ремонт на баня',
    review:
      'Още от първия оглед получихме професионално отношение. Всичко беше обяснено подробно и ремонтът приключи в уговорения срок.',
  },
  {
    id: 3,
    name: 'Николай Димитров',
    project: 'Ремонт на къща',
    review:
      'Много добро качество и внимание към детайлите. Най-много оценихме комуникацията и това, че винаги знаехме какво се случва.',
  },
  {
    id: 4,
    name: 'Елена Иванова',
    project: 'Интериорен ремонт',
    review:
      'Получихме точно това, което си представяхме. Препоръчвам Ivan Stroi на всеки, който търси коректен и професионален екип.',
  },
];

export default function Reviews() {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-24 sm:py-32">
      {/* Ambient glow */}
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
        {/* Header */}
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

        {/* Reviews slider */}
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
                  {/* Quote */}
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

                  {/* Divider */}
                  <div className="my-6 h-px bg-white/10" />

                  {/* Customer */}
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    <div
                      className="
                        flex
                        size-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-amber-500/10
                        text-sm
                        font-bold
                        text-amber-500
                        ring-1
                        ring-amber-500/20
                      "
                    >
                      {review.name
                        .split(' ')
                        .map((name) => name[0])
                        .join('')
                        .slice(0, 2)}
                    </div>

                    <div>
                      <p className="text-sm font-bold text-white">
                        {review.name}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {review.project}
                      </p>
                    </div>
                  </div>

                  {/* Bottom accent */}
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

        {/* Trust indicator */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold text-white">5.0</span>

            <div className="ml-2 flex gap-0.5">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="text-amber-500">
                  ★
                </span>
              ))}
            </div>
          </div>

          <span className="hidden h-5 w-px bg-white/10 sm:block" />

          <p className="text-sm text-gray-500">
            Доверие, изградено с реална работа.
          </p>
        </div>
      </div>
    </section>
  );
}