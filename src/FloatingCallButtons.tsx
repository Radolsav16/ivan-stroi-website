import { Phone, PhoneCall } from "lucide-react";

const PHONE_NUMBER = "+359 888 123 456";
const PHONE_LINK = "+359888123456";

export default function FloatingCallButtons() {
  return (
    <>
      <a
        href={`tel:${PHONE_LINK}`}
        aria-label={`Позвънете на ${PHONE_NUMBER}`}
        className="
          fixed
          bottom-5
          left-5
          z-[9999]
          flex
          items-center
          gap-2.5
          rounded-full
          border
          border-white/10
          bg-gray-900/90
          px-4
          py-3
          text-sm
          font-semibold
          text-white
          shadow-2xl
          shadow-black/30
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-orange-500/40
          hover:bg-gray-900
          animate-call-bounce
          sm:bottom-8
          sm:left-8
          sm:px-5
          sm:py-3.5
        "
      >
        <span
          className="
            flex
            size-9
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-orange-500
            text-white
            shadow-lg
            shadow-orange-500/20
          "
        >
          <PhoneCall className="size-4.5" />
        </span>

        <span className="whitespace-nowrap">
          {PHONE_NUMBER}
        </span>
      </a>

      <a
        href={`tel:${PHONE_LINK}`}
        aria-label={`Позвънете на ${PHONE_NUMBER}`}
        className="
          group
          fixed
          bottom-5
          right-5
          z-[9999]
          flex
          size-14
          items-center
          justify-center
          rounded-full
          bg-orange-500
          text-white
          shadow-xl
          shadow-orange-500/30
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-orange-400
          hover:shadow-orange-500/40
          animate-call-float
          sm:bottom-8
          sm:right-8
          sm:size-16
        "
      >
        <span
          className="
            absolute
            inset-0
            -z-10
            animate-ping
            rounded-full
            bg-orange-500/30
          "
        />

        <Phone className="size-5 transition-transform duration-300 group-hover:rotate-12 sm:size-6" />
      </a>
    </>
  );
}