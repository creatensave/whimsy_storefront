"use client"

import Image from "next/image"
import { Playfair_Display } from "next/font/google"

const expressiveSerif = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
})

export default function ComingSoon() {
  return (
    <div className="h-dvh w-screen flex flex-col overflow-hidden bg-[#d7eef7] select-none">
      {/* 1. Top Announcement Bar */}
      <aside
        aria-label="Announcement"
        className="w-full shrink-0 bg-[#FF6B6B] text-white text-[11px] sm:text-xs md:text-sm font-semibold py-1.5 sm:py-2 px-4 text-center tracking-wide"
      >
        🎉 Enjoy 10% off on your first order! 
      </aside>

      {/* 2. Header with logo.jpeg */}
      <header className="w-full shrink-0 bg-white/95 backdrop-blur-sm border-b border-black/5 py-2.5 sm:py-3.5 px-4 sm:px-10">
        <div className="w-full grid grid-cols-3 items-center">
          {/* Left: Brand Logo */}
          <div className="flex justify-start items-center">
            <Image
              src="/logo.jpeg"
              alt="Whimsy & Wonder"
              width={260}
              height={70}
              priority
              className="h-10 sm:h-12 md:h-14 w-auto object-contain"
            />
          </div>

          {/* Center: Expressive Serif Heading */}
          <div className="flex justify-center items-center text-center">
            <h1
              className={`${expressiveSerif.className} text-lg sm:text-2xl md:text-3xl font-extrabold tracking-wide text-[#FF6B6B] whitespace-nowrap`}
            >
              Art DIY Kits
            </h1>
          </div>

          {/* Right Spacer */}
          <div className="flex justify-end" />
        </div>
      </header>

      {/* 3. Seamless Video Stage (No border, no rounded corners, no drop shadow) */}
      <main className="flex-1 min-h-0 w-full flex items-center justify-center overflow-hidden bg-[#d7eef7]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="h-full w-auto max-w-full object-contain pointer-events-none"
        >
          <source src="/coming_soon.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </main>
    </div>
  )
}