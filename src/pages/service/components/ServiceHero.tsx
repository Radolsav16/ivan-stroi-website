import { ChevronRight, ArrowRight, Phone } from "lucide-react";
import { OptimizedImage } from "../../../components/image/OptimizedImage";
import { CLOUDINARY_BASE_URL } from "../../../utils/url";
import { Link } from "react-router-dom";
import type { ServiceData } from "../data";

export default function ServiceHero({service}:{service?:ServiceData}){
  return(
<section
  className="
    relative
    isolate
    min-h-[620px]
    overflow-hidden
    sm:min-h-[680px]
    lg:min-h-[720px]
  "
>
  {/* Background */}
  <div className="absolute inset-0 -z-20">
    <OptimizedImage
      url={`${CLOUDINARY_BASE_URL}/${service?.heroImage}`}
      alt={service?.title || ""}
      priority
      sizes="100vw"
      className="
        h-full
        w-full
        object-cover
        object-center
      "
    />

    {/* Main overlay */}
    <div className="absolute inset-0 bg-gray-950/65" />

    {/* Left gradient */}
    <div
      className="
        absolute
        inset-0
        bg-gradient-to-b
        from-gray-950/90
        via-gray-950/65
        to-gray-950
        sm:bg-gradient-to-r
        sm:from-gray-950
        sm:via-gray-950/75
        sm:to-transparent
      "
    />

    {/* Bottom gradient */}
    <div
      className="
        absolute
        inset-0
        bg-gradient-to-t
        from-gray-950
        via-transparent
        to-gray-950/20
      "
    />
  </div>

  {/* Content */}
  <div
    className="
      relative
      mx-auto
      flex
      min-h-[620px]
      max-w-7xl
      items-end
      px-5
      pb-12
      pt-28
      sm:min-h-[680px]
      sm:px-6
      sm:pb-16
      sm:pt-32
      lg:min-h-[720px]
      lg:px-8
      lg:pb-20
      lg:pt-36
    "
  >
    <div className="w-full max-w-3xl">
      {/* =====================================================
          BREADCRUMB
      ====================================================== */}
      <div
        className="
          mb-6
          flex
          min-w-0
          items-center
          gap-2
          overflow-hidden
          text-xs
          font-bold
          sm:mb-8
          sm:text-sm
        "
      >
        <Link
          to="/"
          className="
            shrink-0
            text-gray-400
            transition-colors
            duration-200
            hover:text-amber-500
          "
        >
          Начало
        </Link>

        <ChevronRight
          className="
            size-4
            shrink-0
            text-gray-600
          "
        />

        <span
          className="
            min-w-0
            truncate
            font-bold
            text-gray-300
          "
        >
          {service?.title}
        </span>
      </div>

      {/* =====================================================
          HEADING
      ====================================================== */}
      <h1
        className="
          max-w-3xl
          text-4xl
          font-black
          leading-[1.05]
          tracking-tight
          text-white
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          xl:text-8xl
        "
      >
        {service?.title}
      </h1>

      <p
        className="
          mt-5
          max-w-2xl
          text-base
          font-medium
          leading-7
          text-gray-300
          sm:mt-6
          sm:text-lg
          sm:leading-8
          lg:text-xl
        "
      >
        {service?.subtitle}
      </p>

      <p
        className="
          mt-4
          max-w-2xl
          text-sm
          leading-6
          text-gray-400
          sm:mt-5
          sm:text-base
          sm:leading-7
        "
      >
        {service?.description}
      </p>
      <div
        className="
          mt-8
          flex
          w-full
          flex-col
          gap-3
          sm:mt-10
          sm:flex-row
          sm:flex-wrap
          sm:items-center
          sm:gap-4
        "
      >
        {/* Quote */}
        <Link
          to="/contact-us"
          className="
            group
            inline-flex
            min-h-[52px]
            w-full
            items-center
            justify-center
            gap-3
            rounded-xl
            bg-amber-500
            px-6
            py-3.5
            text-sm
            font-bold
            text-gray-950
            transition-all
            duration-300
            hover:bg-amber-400
            hover:shadow-lg
            hover:shadow-amber-500/20
            active:scale-[0.98]
            sm:w-auto
          "
        >
          Поискайте оферта

          <ArrowRight
            className="
              size-4
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </Link>

        {/* Phone */}
        <a
          href="tel:+359000000000"
          className="
            inline-flex
            min-h-[52px]
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-white/15
            bg-white/5
            px-6
            py-3.5
            text-sm
            font-bold
            text-white
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-amber-500/50
            hover:bg-white/10
            active:scale-[0.98]
            sm:w-auto
          "
        >
          <Phone className="size-4 shrink-0 text-amber-500" />

          Обадете се
        </a>
      </div>
    </div>
  </div>
</section>)
}
