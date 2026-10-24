"use client"

import { useState, useEffect, useCallback } from "react"
import { IconButton } from "@modules/common/components/ui"
import BannerSlideItem from "./banner-slide-item"

export interface BannerSlide {
  id: string
  title: string
  desktopImageSrc: string
  mobileImageSrc: string
  link: string
  cta?: {
    label: string
    href: string
  }
}

const slides: BannerSlide[] = [
  {
    id: "diwali-festive-magic",
    title: "Diwali Festive Magic Art Kits",
    desktopImageSrc: "/banners/diwali-banner.svg",
    mobileImageSrc: "/banners/diwali-banner-mobile.svg",
    link: "/store?collection=diwali-kits",
  },
  {
    id: "banner-2-art-kits",
    title: "Hands-on Art Kits",
    desktopImageSrc: "/banners/diwali-banner.svg",
    mobileImageSrc: "/banners/diwali-banner-mobile.svg",
    link: "/store",
  },
  {
    id: "banner-3-mindful-crafting",
    title: "Messy Hands Happy Hearts",
    desktopImageSrc: "/banners/diwali-banner.svg",
    mobileImageSrc: "/banners/diwali-banner-mobile.svg",
    link: "/store",
  },
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    if (slides.length <= 1) return
    const timer = setInterval(nextSlide, 5500)
    return () => clearInterval(timer)
  }, [nextSlide])

  if (!slides || slides.length === 0) {
    return null
  }

  return (
    <section className="relative w-full bg-whimsy-cream overflow-hidden">
      <div className="relative w-full aspect-[4/5] sm:aspect-[16/9] md:aspect-[21/8] lg:aspect-[24/9] max-h-[620px] flex items-center justify-center">
        {slides.map((slide, index) => {
          if (!slide) return null
          const isActive = index === currentIndex

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
              }`}
            >
              <BannerSlideItem
                slide={slide}
                isFirstSlide={index === 0}
                isActive={isActive}
              />
            </div>
          )
        })}

        {/* Carousel controls render only when there is more than 1 slide */}
        {slides.length > 1 && (
          <>
            <IconButton
              type="button"
              aria-label="Previous slide"
              onClick={(e) => {
                e.preventDefault()
                prevSlide()
              }}
              className="absolute left-2.5 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 hover:bg-white text-black/80 hover:text-black shadow-sm backdrop-blur-sm flex items-center justify-center transition-all active:scale-90"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </IconButton>

            <IconButton
              type="button"
              aria-label="Next slide"
              onClick={(e) => {
                e.preventDefault()
                nextSlide()
              }}
              className="absolute right-2.5 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/80 hover:bg-white text-black/80 hover:text-black shadow-sm backdrop-blur-sm flex items-center justify-center transition-all active:scale-90"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </IconButton>

            <div className="absolute bottom-3 sm:bottom-5 inset-x-0 z-20 flex justify-center items-center gap-1.5 sm:gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentIndex(i)
                  }}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-[2.5px] sm:h-[3px] rounded-full transition-all duration-300 ${
                    currentIndex === i
                      ? "w-7 sm:w-11 bg-black/80"
                      : "w-3 sm:w-5 bg-black/20 hover:bg-black/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}