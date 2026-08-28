import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { images } from "../../data/images";
import { CLOUDINARY_BASE_URL } from "../../utils/url";
import { OptimizedImage } from "../image/OptimizedImage";
import { Link } from "react-router-dom";

export default function Slider() {
  return (
<section className="overflow-hidden bg-gray-950 py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-amber-500" />

          <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">
            Нашата работа
          </span>
        </div>

        <p className="mt-4 max-w-2xl text-gray-400">
          Разгледайте част от работата ни с внимание към всеки детайл.
        </p>
      </div>

      <Link
        to="/gallery"
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
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </div>
  </div>

  {/* Slider */}
  <div className="relative px-4 sm:px-16">
  <Swiper
    modules={[Navigation, Autoplay]}
    navigation
    autoplay={{
      delay: 4500,
      disableOnInteraction: false,
    }}
    loop
    spaceBetween={16}
    slidesPerView={1}
    breakpoints={{
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1.2,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    }}
    className="imagess-swiper"
  >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <div className="relative h-[260px] overflow-hidden rounded-2xl sm:h-[380px] lg:h-[440px]">
            <OptimizedImage
              url={`${CLOUDINARY_BASE_URL}${image.image}`}
              alt="Снимка на част от работата"
              className="
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-[1.03]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-gray-950/40
                via-transparent
                to-transparent
              "
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>
  );
}
