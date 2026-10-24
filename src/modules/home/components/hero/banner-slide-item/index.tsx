import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { BannerSlide } from "../index"

interface BannerSlideItemProps {
  slide?: BannerSlide
  isFirstSlide: boolean
  isActive: boolean
}

export default function BannerSlideItem({
  slide,
  isFirstSlide,
  isActive,
}: BannerSlideItemProps) {
  if (!slide) {
    return null
  }

  const targetHref = slide.cta?.href || slide.link || "/store"

  return (
    <LocalizedClientLink
      href={targetHref}
      tabIndex={isActive ? 0 : -1}
      className="block relative w-full h-full cursor-pointer select-none"
      aria-label={slide.title || "Banner link"}
    >
      {/* Mobile Artwork */}
      {slide.mobileImageSrc && (
        <div className="block md:hidden relative w-full h-full">
          <Image
            src={slide.mobileImageSrc}
            alt={slide.title || "Store banner"}
            fill
            priority={isFirstSlide}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      )}

      {/* Desktop Artwork */}
      {slide.desktopImageSrc && (
        <div className="hidden md:block relative w-full h-full">
          <Image
            src={slide.desktopImageSrc}
            alt={slide.title || "Store banner"}
            fill
            priority={isFirstSlide}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      )}
    </LocalizedClientLink>
  )
}