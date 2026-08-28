import { ChevronRight, ArrowRight, Phone } from "lucide-react";
import { OptimizedImage } from "../../../components/image/OptimizedImage";
import { CLOUDINARY_BASE_URL } from "../../../utils/url";
import { Link } from "react-router-dom";
import type { ServiceData } from "../data";

export default function ServiceHero({service}:{service?:ServiceData}){
  return(
     <section className="relative isolate min-h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <OptimizedImage
            url={`${CLOUDINARY_BASE_URL}/${service?.heroImage}`}
            alt={service?.title || ''}
            priority
            sizes="100vw"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gray-950/70" />

          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/70 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/30" />
        </div>

        <div className="relative mx-auto flex min-h-[700px] max-w-7xl items-end px-6 pb-20 pt-32 lg:px-8">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="mb-8 flex items-center gap-2 text-sm text-gray-400">
              <Link
                to="/"
                className="transition-colors hover:text-amber-500"
              >
                Начало
              </Link>

              <ChevronRight className="size-4" />

              <span className="text-gray-300">{service?.title}</span>
            </div>

            {/* Label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-amber-500" />

              <span className="text-xs font-bold uppercase tracking-[0.25em] text-amber-500">
                {service?.label}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              {service?.title}
              <span className="text-amber-500">.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-xl leading-8 text-gray-300">
              {service?.subtitle}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400">
              {service?.description}
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact-us"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-amber-500
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-amber-400
                  hover:shadow-lg
                  hover:shadow-amber-500/20
                "
              >
                Поискайте оферта

                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:+359000000000"
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
                  font-bold
                  text-white
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-amber-500/50
                  hover:bg-white/10
                "
              >
                <Phone className="size-4 text-amber-500" />
                Обадете се
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}
