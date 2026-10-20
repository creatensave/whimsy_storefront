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
      <div className="relative w-full aspect-[16/7] sm:aspect-[21/8] md:aspect-[24/9] min-h-[300px] max-h-[640px]">
        {/* Slides Track */}
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
                <img
                  src={slide.imageSrc}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </LocalizedClientLink>
            </div>
          )
        })}

        {/* Left Arrow */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            prevSlide()
          }}
          aria-label="Previous slide"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/70 hover:bg-white text-black/80 hover:text-black backdrop-blur-sm shadow-sm flex items-center justify-center transition-all hover:scale-105 active:scale-95"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
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
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/70 hover:bg-white text-black/80 hover:text-black backdrop-blur-sm shadow-sm flex items-center justify-center transition-all hover:scale-105 active:scale-95"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Bottom Line Indicators */}
        <div className="absolute bottom-5 inset-x-0 z-20 flex justify-center items-center gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.preventDefault()
                setCurrentIndex(i)
              }}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-[3px] rounded-full transition-all duration-300 ${
                currentIndex === i
                  ? "w-8 sm:w-12 bg-black/80"
                  : "w-4 sm:w-6 bg-black/20 hover:bg-black/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}