import { Link } from "react-router-dom";
import { CLOUDINARY_BASE_URL } from "../../utils/url";
import { OptimizedImage } from "../image/OptimizedImage";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gray-950">
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        <OptimizedImage
          url={`${CLOUDINARY_BASE_URL}/v1690000000/hero-img.jpg`}
          alt=""
          width={1920}
          priority
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

      <div
        aria-hidden="true"
        className="
      absolute
      inset-0
      -z-10
      bg-gradient-to-r
      from-gray-950
      via-gray-950/80
      to-gray-950/25
    "
      />
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

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex min-h-[calc(100vh-120px)] items-center py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1
              className="
            max-w-4xl
            text-5xl
            font-bold
            tracking-tight
            text-white
            sm:text-7xl
            lg:text-7xl
            animate-fade-up
          "
            >
              Вашият дом
              <br />
              <span className="text-amber-500">Нашата отговорност</span>
            </h1>
            <p
              className="
            mt-8
            max-w-2xl
            text-lg
            leading-8
            text-gray-300
            sm:text-xl
            animate-fade-up-delay
          "
            >
              Качествено строителство, прецизност и отношение към всеки детайл.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3.5 text-sm font-semibold text-gray-950 shadow-lg shadow-amber-500/20 transition-all duration-200 hover:bg-amber-400 hover:shadow-amber-500/30"
              >
                Направи запитване
              </Link>
              <Link
                to="/gallery"
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
              </Link>
            </div>

            <div className="mt-14 border-t border-white/10 pt-8">
              <div className="flex flex-wrap gap-x-10 gap-y-6">
                <div>
                  <p className="text-2xl font-bold text-white">10+</p>

                  <p className="mt-1 text-sm text-gray-400">години опит</p>
                </div>

                <div className="hidden h-12 w-px bg-white/10 sm:block" />

                <div>
                  <p className="text-2xl font-bold text-white">24/7</p>

                  <p className="mt-1 text-sm text-gray-400">ангажираност</p>
                </div>

                <div className="hidden h-12 w-px bg-white/10 sm:block" />

                <div>
                  <p className="text-2xl font-bold text-white">100%</p>

                  <p className="mt-1 text-sm text-gray-400">
                    отношение към детайла
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
