import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx } from "@modules/common/components/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"
import Image from "next/image"

export default async function Footer() {
  const tickerItems = [
    "Shipping PAN India",
    "COD across India",
    "Secure Checkout",
    "Handcrafted with Love",
    "Free Video Tutorials Included",
  ]

  const topKits = [
    { name: "Lippan Art Kits", href: "/store?category=lippan" },
    { name: "Tray Painting Kits", href: "/store?category=tray-painting" },
    { name: "Coaster Painting Kits", href: "/store?category=coaster-painting" },
    { name: "Resin Jewellery Kits", href: "/store?category=resin" },
    { name: "Fridge Magnet Kits", href: "/store?category=magnets" },
    { name: "Keychain Kits", href: "/store?category=keychains" },
  ]

  const policies = [
    { name: "Privacy Policies", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Shipping & Cancellation", href: "/shipping" },
    { name: "Returns & Refund", href: "/returns" },
  ]

  const infoLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Blogs", href: "/blogs" },
    { name: "Corporate", href: "/corporate" },
  ]

  return (
    <footer className="w-full bg-whimsy-cream text-whimsy-ink border-t border-[#EADFCB]">
      {/* 1. Continuous Rolling Marquee Strip */}
      <div className="bg-whimsy-teal text-white text-xs sm:text-sm font-semibold tracking-wide py-3 overflow-hidden shadow-inner relative flex">
        <div className="flex shrink-0 items-center justify-around gap-10 min-w-full animate-marquee whitespace-nowrap">
          {tickerItems.concat(tickerItems).map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-6">
              <span>{item}</span>
              <span className="text-whimsy-yellow text-base">•</span>
            </span>
          ))}
        </div>
        <div 
          aria-hidden="true" 
          className="flex shrink-0 items-center justify-around gap-10 min-w-full animate-marquee whitespace-nowrap"
        >
          {tickerItems.concat(tickerItems).map((item, idx) => (
            <span key={`dup-${idx}`} className="inline-flex items-center gap-6">
              <span>{item}</span>
              <span className="text-whimsy-yellow text-base">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* 2. Main 4-Column Directory */}
      <div className="content-container mx-auto px-6 py-14 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Large Visible Logo + Social Circles in Brand Rose */}
          <div className="flex flex-col items-start gap-6">
            <LocalizedClientLink href="/" className="inline-block transition-transform duration-200 hover:scale-105">
              <Image
                src="/logo.png"
                alt="Whimsy & Wonder"
                width={280}
                height={100}
                className="h-16 sm:h-20 w-auto object-contain drop-shadow-sm"
                priority
              />
            </LocalizedClientLink>

            <p className="text-xs text-whimsy-ink/75 leading-relaxed max-w-xs">
              Curated DIY art kits and mindful creative workshops designed to bring the joy of slow crafting into your home.
            </p>

            {/* Social Icons in Whimsy-Rose */}
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-whimsy-rose text-white flex items-center justify-center hover:bg-whimsy-rose/90 transition-all hover:scale-105 shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-full bg-whimsy-rose text-white flex items-center justify-center hover:bg-whimsy-rose/90 transition-all hover:scale-105 shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-whimsy-rose text-white flex items-center justify-center hover:bg-whimsy-rose/90 transition-all hover:scale-105 shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: TOP DIY KITS */}
          <div>
            <h3 className="text-xs tracking-wider text-whimsy-rose uppercase font-bold mb-4 font-mono">
              TOP DIY KITS
            </h3>
            <ul className="space-y-2.5 text-sm text-whimsy-ink/80">
              {topKits.map((item) => (
                <li key={item.name}>
                  <LocalizedClientLink
                    href={item.href}
                    className="hover:text-whimsy-rose transition-colors"
                  >
                    {item.name}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: POLICIES */}
          <div>
            <h3 className="text-xs tracking-wider text-whimsy-rose uppercase font-bold mb-4 font-mono">
              POLICIES
            </h3>
            <ul className="space-y-2.5 text-sm text-whimsy-ink/80">
              {policies.map((item) => (
                <li key={item.name}>
                  <LocalizedClientLink
                    href={item.href}
                    className="hover:text-whimsy-rose transition-colors"
                  >
                    {item.name}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: INFO */}
          <div>
            <h3 className="text-xs tracking-wider text-whimsy-rose uppercase font-bold mb-4 font-mono">
              INFO
            </h3>
            <ul className="space-y-2.5 text-sm text-whimsy-ink/80">
              {infoLinks.map((item) => (
                <li key={item.name}>
                  <LocalizedClientLink
                    href={item.href}
                    className="hover:text-whimsy-rose transition-colors"
                  >
                    {item.name}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 3. Bottom Centered Copyright */}
        <div className="mt-14 pt-6 border-t border-[#EADFCB] text-center text-xs text-whimsy-ink/60">
          <p>© {new Date().getFullYear()}, Whimsy &amp; Wonder Creations Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}