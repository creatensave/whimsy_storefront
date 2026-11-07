"use client"

import { useState, useEffect, useCallback } from "react"
import { IconButton } from "@modules/common/components/ui"
import BannerSlideItem from "./banner-slide-item"

import { Heading, Text } from "@modules/common/components/ui"

export default function ChristmasComingSoon() {
  return (
    <section className="relative w-full bg-christmas-green text-white py-16 px-6 text-center overflow-hidden border-b border-grey-20">
      {/* Decorative Garlands & Corner Motifs */}
      <div className="absolute top-0 inset-x-0 h-4 bg-repeat-x" style={{ backgroundImage: "url('/decorations/foliage.png')" }} />
      
      <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
        <span className="text-3xl sm:text-4xl mb-4 animate-gentle-float" aria-hidden="true">🎄✨🎅🏼</span>
        
        <Heading level="h2" className="font-serif text-3xl sm:text-5xl text-festive-gold tracking-tight mb-4 drop-shadow-md">
          Christmas Festive Magic
        </Heading>
        
        <Heading level="h3" className="text-xl sm:text-2xl text-whimsy-cream font-medium tracking-wide uppercase mb-6">
          Creative DIY Art Kits • Coming Soon!
        </Heading>
        
        <Text className="text-base sm:text-lg text-white/95 max-w-xl mb-8 leading-relaxed">
          We’re busy baking, packing, and sorting our magical, screen-free holiday craft boxes to bring festive cheer straight to your hands. Stay tuned—our Santa’s workshop drops very soon! 🎨❄️
        </Text>
        
        {/* Playful seasonal newsletter placeholder or countdown timer could go here */}
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-christmas-red text-white font-bold rounded-full text-xs sm:text-sm uppercase tracking-widest shadow-md">
          <span>Sign up for the pre-launch drop</span>
          <span aria-hidden="true">🔔</span>
        </div>
      </div>
      
      {/* Gentle winter overlay decoration */}
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 pointer-events-none" style={{ backgroundImage: "url('/decorations/snow-mound.svg')" }} />
    </section>
  )
}
