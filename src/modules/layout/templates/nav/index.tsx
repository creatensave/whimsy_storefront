import { Suspense } from "react"
import Image from "next/image"

import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import AnnouncementBar from "@modules/layout/components/announcement-bar"

const navLinks = [
  { label: "Hot Stuff 🔥", href: "/store?sort=created_at" },
  { label: "Categories", href: "/store" },
  { label: "Workshops", href: "/categories/workshops" },
  { label: "Gift Card", href: "/products/gift-card" },
  { label: "All Products", href: "/store" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
]

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
  ])

  return (
    <div className="sticky top-0 inset-x-0 z-50">
      {/* Announcement Bar */}
      <AnnouncementBar />

      <header className="relative bg-white border-b border-[#EADFCB] shadow-sm">
        <nav className="content-container mx-auto px-4 h-16 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Left: Mobile SideMenu & Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="lg:hidden flex items-center">
              <SideMenu
                regions={regions}
                locales={locales}
                currentLocale={currentLocale}
              />
            </div>
            <LocalizedClientLink
              href="/"
              className="flex items-center transition-transform duration-200 hover:scale-105"
              data-testid="nav-store-link"
            >
              <Image
                src="/logo.png"
                alt="Whimsy & Wonder"
                width={140}
                height={50}
                className="h-9 sm:h-12 w-auto object-contain"
                priority
              />
            </LocalizedClientLink>
          </div>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <LocalizedClientLink
                key={link.label}
                href={link.href}
                className="text-xs xl:text-sm font-semibold text-whimsy-ink hover:text-whimsy-rose transition-colors whitespace-nowrap"
              >
                {link.label}
              </LocalizedClientLink>
            ))}
          </div>

          {/* Right: Quick Action Icons */}
          <div className="flex items-center gap-4 sm:gap-5 text-whimsy-ink">
            {/* Search Icon */}
            <LocalizedClientLink
              href="/search"
              aria-label="Search"
              className="hover:text-whimsy-rose transition-colors p-1"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35"
                />
              </svg>
            </LocalizedClientLink>

            {/* Wishlist Icon */}
            <LocalizedClientLink
              href="/wishlist"
              aria-label="Wishlist"
              className="hidden sm:inline-flex hover:text-whimsy-rose transition-colors p-1"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                />
              </svg>
            </LocalizedClientLink>

            {/* Account Icon */}
            <LocalizedClientLink
              href="/account"
              aria-label="Account"
              className="hover:text-whimsy-rose transition-colors p-1"
              data-testid="nav-account-link"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </LocalizedClientLink>

            {/* Medusa Cart Button */}
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-whimsy-rose flex gap-2 p-1"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18m-5 4a4 4 0 1 1-8 0"
                    />
                  </svg>
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>

        </nav>
      </header>
    </div>
  )
}