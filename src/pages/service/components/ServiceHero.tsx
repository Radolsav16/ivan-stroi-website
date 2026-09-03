import { ChevronRight, ArrowRight, Phone } from "lucide-react";
import { OptimizedImage } from "../../../components/image/OptimizedImage";
import { CLOUDINARY_BASE_URL } from "../../../utils/url";
import { Link } from "react-router-dom";
import type { ServiceData } from "../data";

export default function ServiceHero({ service }: { service?: ServiceData }) {
return ( <section
   className="
     relative
     isolate
     min-h-[620px]
     overflow-hidden
     sm:min-h-[680px]
     lg:min-h-[760px]
   "
 >
{/* Background */} <div className="absolute inset-0 -z-20">
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
    {/* Light overall overlay */}
    <div className="absolute inset-0 bg-gray-950/25" />

    {/* Text readability gradient */}
    <div
      className="
        absolute
        inset-0
        bg-gradient-to-r
        from-gray-950/90
        via-gray-950/60
        to-transparent
      "
    />

    {/* Bottom fade */}
    <div
      className="
        absolute
        inset-x-0
        bottom-0
        h-1/2
        bg-gradient-to-t
        from-gray-950
        via-gray-950/30
        to-transparent
      "
    />

    {/* Top subtle fade */}
    <div
      className="
        absolute
        inset-x-0
        top-0
        h-32
        bg-gradient-to-b
        from-gray-950/50
        to-transparent
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
      lg:min-h-[760px]
      lg:px-8
      lg:pb-20
      lg:pt-36
    "
  >
    <div className="w-full max-w-4xl">

      {/* Breadcrumb */}
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
            text-gray-300
            transition-colors
            duration-200
            hover:text-amber-400
          "
        >
          Начало
        </Link>

        <ChevronRight
          className="
            size-4
            shrink-0
            text-gray-500
          "
        />

        <span
          className="
            min-w-0
            truncate
            font-bold
            text-white
          "
        >
          {service?.title}
        </span>
      </div>

      {/* Title */}
      <h1
        className="
          max-w-4xl
          text-4xl
          font-black
          leading-[0.98]
          tracking-[-0.03em]
          text-white
          drop-shadow-2xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl
          xl:text-7xl
          animate-fade-up
        "
      >
        {service?.title}
      </h1>

      {/* Subtitle */}
      <p
        className="
          mt-5
          max-w-3xl
          text-lg
          font-semibold
          leading-7
          text-white
          drop-shadow-lg
          sm:mt-6
          sm:text-xl
          sm:leading-8
          lg:text-2xl
          lg:leading-9
          animate-fade-up-delay
        "
      >
        {service?.subtitle}
      </p>

      {/* Description */}
      <div
        className="
          relative
          mt-7
          max-w-3xl
          border-l-2
          border-amber-500
          pl-5
          sm:mt-8
          sm:pl-6
          lg:mt-9
          lg:pl-7
        "
      >
        <p
          className="
            text-base
            font-normal
            leading-7
            text-gray-200
            drop-shadow-lg
            sm:text-lg
            sm:leading-8
            lg:text-xl
            lg:leading-9
          "
        >
          {service?.description}
        </p>
      </div>

      {/* Actions */}
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
            min-h-[54px]
            w-full
            items-center
            justify-center
            gap-3
            rounded-xl
            bg-amber-500
            px-7
            py-4
            text-sm
            font-bold
            text-gray-950
            shadow-xl
            shadow-black/20
            transition-all
            duration-300
            hover:bg-amber-400
            hover:shadow-2xl
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
          href="tel:+359876884517"
          className="
            inline-flex
            min-h-[54px]
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-white/20
            bg-black/20
            px-7
            py-4
            text-sm
            font-bold
            text-white
            shadow-xl
            shadow-black/10
            backdrop-blur-md
            transition-all
            duration-300
            hover:border-amber-500/50
            hover:bg-black/30
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
</section>


);
}
