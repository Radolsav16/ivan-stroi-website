import { CLOUDINARY_BASE_URL } from "../../utils/url";
import { OptimizedImage } from "../image/OptimizedImage";
import { workSteps } from "./data";

export default function HowWeWork() {
  return (
    <section className="relative overflow-hidden bg-gray-950 py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="
          absolute
          -left-40
          top-1/2
          -z-10
          size-[500px]
          -translate-y-1/2
          rounded-full
          bg-amber-500/5
          blur-3xl
        "
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.25em]
                text-amber-500
              "
            >
              Как работим
            </span>
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
            От първата идея
            <br />
            <span className="text-amber-500">до готовия проект.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Работим по ясен и структуриран процес, за да знаете какво да
            очаквате на всеки етап от проекта.
          </p>
        </div>
        <div className="mt-20 grid items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <div className="relative">
            <div
              aria-hidden="true"
              className="
                absolute
                left-5
                top-5
                bottom-5
                w-px
                bg-gradient-to-b
                from-amber-500
                via-white/10
                to-transparent
              "
            />

            <div className="space-y-8">
              {workSteps.map((step) => (
                <div key={step.number} className="group relative flex gap-6">
                  <div
                    className="
                      relative
                      z-10
                      flex
                      size-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-amber-500/30
                      bg-gray-950
                      text-xs
                      font-bold
                      text-amber-500
                      transition-all
                      duration-300
                      group-hover:border-amber-500
                      group-hover:bg-amber-500
                      group-hover:text-gray-950
                    "
                  >
                    {step.number}
                  </div>
                  <div className="pb-2">
                    <h3 className="text-xl font-bold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div
              aria-hidden="true"
              className="
                absolute
                -inset-5
                rounded-[2rem]
                bg-amber-500/10
                blur-2xl
              "
            />

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-white/10
                bg-gray-900
                shadow-2xl
                shadow-black/40
              "
            >
              <OptimizedImage
                url={`${CLOUDINARY_BASE_URL}/v1787399614/bathroom-1.jpg`}
                alt="Проект на IVAN STROI баня"
                className="
                  aspect-[4/5]
                  w-full
                  object-cover
                  transition-transform
                  duration-1000
                  group-hover:scale-105
                "
              />
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-gray-950/80
                  via-transparent
                  to-transparent
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
