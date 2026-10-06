import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function Hero() {
  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden">
      {/* 1. Full-Bleed Photographic Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/hero-watercolor.jpg')`,
        }}
      />

      {/* 2. Soft Tinted Overlay to make the white text pop */}
      <div className="absolute inset-0 bg-stone-900/35 backdrop-brightness-[0.88]" />

      {/* 3. Center Content: Headings, Squiggles, and Pill CTA */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center -mt-8">
        
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-normal leading-[1.15] tracking-tight drop-shadow-sm select-none">
          <span>Art to bring a smile to</span>
          <br />
          
          {/* "your face" with purple/lilac squiggle underneath */}
          <span className="relative inline-block mt-1 sm:mt-2">
            your face
            <svg 
              className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-[#D8B4E2] fill-none stroke-current"
              viewBox="0 0 100 20" 
              preserveAspectRatio="none"
              strokeWidth="4" 
              strokeLinecap="round"
            >
              <path d="M 2 10 Q 15 2, 28 10 T 54 10 T 80 10 T 98 10" />
            </svg>
          </span>
          
          <span className="mx-2 sm:mx-3 font-light text-white/90">+</span>
          
          <span>happiness</span>
          <br />
          
          {/* "to your heart" with soft rose squiggle underneath */}
          <span className="relative inline-block mt-1 sm:mt-2">
            to your heart
            <svg 
              className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 text-[#F4A7B9] fill-none stroke-current" 
              viewBox="0 0 120 20" 
              preserveAspectRatio="none"
              strokeWidth="4" 
              strokeLinecap="round"
            >
              <path d="M 2 10 Q 18 2, 34 10 T 66 10 T 98 10 T 118 10" />
            </svg>
          </span>
        </h1>

        {/* 4. Delicate Oval Outline Button */}
        <div className="mt-10 sm:mt-12">
          <LocalizedClientLink
            href="/store"
            className="inline-block px-8 sm:px-10 py-2.5 rounded-full border border-white/60 bg-white/10 backdrop-blur-sm text-white text-xs sm:text-sm tracking-[0.2em] uppercase font-medium hover:bg-white hover:text-stone-900 transition-all duration-300"
          >
            Explore DIY Kits
          </LocalizedClientLink>
        </div>
      </div>

      {/* 5. The Bottom Asymmetrical Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg 
          className="relative block w-full h-12 sm:h-20 md:h-28 text-white fill-current" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M0,0 C150,90 350,-40 600,60 C850,160 1050,40 1200,90 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}