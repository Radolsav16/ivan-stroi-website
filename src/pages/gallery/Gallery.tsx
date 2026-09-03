import { ArrowRight, ClipboardList } from "lucide-react";
import { Link } from "react-router-dom";
import { OptimizedImage } from "../../components/image/OptimizedImage";
import Reviews from "../../components/reviews/Reviews";
import { CLOUDINARY_BASE_URL } from "../../utils/url";

import { steps } from "./data";
import Layout from "../../Layout";
import Slider from "../../components/slider/Slider";
import Seo from "../../components/seo/Seo";

export default function Gallery() {
  return (
    <Layout>
      <main className="overflow-hidden bg-gray-950 text-white">
        <Seo
          title="Реализирани строителни и ремонтни проекти"
          description="Разгледайте част от реализираните проекти на IVANOV STROI в София."
          path="/gallery"
        />
        <section className="relative isolate overflow-hidden bg-gray-950">
          <div aria-hidden="true" className="absolute inset-0 -z-20">
            <OptimizedImage
              url={`${CLOUDINARY_BASE_URL}/v1787399641/bathroom-2.jpg`}
              alt=""
              width={1920}
              sizes="100vw"
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-950 via-gray-950/80 to-gray-950/25" />
          <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-gray-950 to-transparent" />
          <div aria-hidden="true" className="absolute -left-32 top-1/3 -z-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex min-h-[calc(100vh-120px)] items-center py-24 sm:py-32 lg:py-40">
              <div className="max-w-3xl">
                <h1 className="animate-fade-up max-w-4xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Реализирани проекти
                  <br />
                  <span className="text-amber-500">Създадени с внимание</span>
                </h1>

                <p className="animate-fade-up-delay mt-8 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
                  Разгледайте част от нашите снимки от проекти и вижте качеството,
                  прецизността и вниманието към всеки детайл.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="relative overflow-hidden sm:pb-36">
          <div className="absolute inset-0 -z-10 bg-gray-950/95" />
          <Slider showGalleryLink={false} />
        </div>

        <section className="relative isolate overflow-hidden py-28 sm:py-36">
          <div aria-hidden="true" className="absolute inset-0 -z-20">
            <OptimizedImage
              url={`${CLOUDINARY_BASE_URL}/v1787401298/bathroom-3.jpg`}
              alt=""
              width={1920}
              sizes="100vw"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-950/75 via-gray-950/65 to-gray-950/80" />

          <div aria-hidden="true" className="absolute left-1/2 top-1/2 -z-10 size-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/10 blur-[120px]" />

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

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-200">
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
                        bg-gray-950/75
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

                      <h3 className="mt-8 text-xl font-bold">{step.title}</h3>

                      <p className="mt-4 text-sm leading-7 text-gray-300">
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

        <Reviews />

        <section className="relative isolate overflow-hidden pb-16 pt-20 sm:pb-36 sm:pt-28">
          <div aria-hidden="true" className="absolute inset-0 -z-20">
            <OptimizedImage
              url={`${CLOUDINARY_BASE_URL}/v1787401304/bathroom-6.jpg`}
              alt=""
              width={1920}
              sizes="100vw"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gray-950/80" />
          <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-gray-950 to-transparent" />


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
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
