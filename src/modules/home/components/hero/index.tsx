"use client"

import { useState, useEffect, useCallback } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface BannerSlide {
  id: string
  title: string
  imageSrc: string
  link: string
}

const slides: BannerSlide[] = [
  {
    id: "diwali-festive-magic",
    title: "Diwali Festive Magic",
    imageSrc: "/banners/diwali-banner.svg",
    link: "/store",
  },
  {
    id: "banner-2-placeholder",
    title: "Hands-on Art Kits",
    imageSrc: "/banners/diwali-banner.svg",
    link: "/store",
  },
  {
    id: "banner-3-placeholder",
    title: "Messy Hands Happy Hearts",
    imageSrc: "/banners/diwali-banner.svg",
    link: "/store",
  },
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5500)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="relative w-full bg-[#FDFBF7] overflow-hidden">
      {/* 
        Responsive Container:
        - Mobile: aspect-[16/9] to fit entire horizontal composition without cropping
        - Tablet: aspect-[21/9]
        - Desktop: aspect-[24/9]
      */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[24/9] max-h-[600px] flex items-center justify-center">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
              }`}
            >
              <LocalizedClientLink
                href={slide.link}
                className="block relative w-full h-full cursor-pointer"
                tabIndex={isActive ? 0 : -1}
              >
                {/* 
                  object-contain on mobile ensures zero text or diya cuts off,
                  object-cover on md+ fills the editorial desktop viewport 
                */}
                <img
                  src={slide.imageSrc}
                  alt={slide.title}
                  className="w-full h-full object-contain md:object-cover object-center select-none"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </LocalizedClientLink>
            </div>
          )
        })}

        {/* Left Arrow (scaled down on mobile so it doesn't obstruct banner art) */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            prevSlide()
          }}
          aria-label="Previous slide"
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/80 hover:bg-white text-black/80 hover:text-black shadow-sm flex items-center justify-center backdrop-blur-sm transition-all active:scale-90"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            nextSlide()
          }}
          aria-label="Next slide"
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-white/80 hover:bg-white text-black/80 hover:text-black shadow-sm flex items-center justify-center backdrop-blur-sm transition-all active:scale-90"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Minimal Progress Lines */}
        <div className="absolute bottom-2 sm:bottom-4 inset-x-0 z-20 flex justify-center items-center gap-1.5 sm:gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.preventDefault()
                setCurrentIndex(i)
              }}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-[2px] sm:h-[3px] rounded-full transition-all duration-300 ${
                currentIndex === i
                  ? "w-6 sm:w-10 bg-black/80"
                  : "w-3 sm:w-5 bg-black/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}