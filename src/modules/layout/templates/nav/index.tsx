import { Suspense } from "react"
import Image from "next/image"

import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { listRegions } from "@lib/data/regions"
import { MAIN_NAV_ITEMS } from "@lib/config"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import AnnouncementBar from "@modules/layout/components/announcement-bar"

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions(),
    listLocales(),
    getLocale(),
  ])

  return (
    <div className="sticky top-0 inset-x-0 z-50 bg-white">
      {/* Announcement Bar */}
      <AnnouncementBar />

      <header className="relative bg-white border-b border-grey-20 shadow-xs">
        <nav className="content-container max-w-store-container mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 grid grid-cols-3 items-center lg:flex lg:justify-between lg:gap-6">
          
          {/* 1. Left: Mobile Hamburger & Desktop Logo */}
          <div className="flex items-center justify-start">
            <div className="lg:hidden flex items-center">
              <SideMenu
                regions={regions}
                locales={locales}
                currentLocale={currentLocale}
              />
            </div>

            {/* Desktop Brand Logo */}
            <div className="hidden lg:block">
              <LocalizedClientLink
                href="/"
                className="flex items-center transition-transform duration-200 hover:scale-102"
                data-testid="nav-store-link"
              >
                <Image
                  src="/WW_logo_01.jpeg"
                  alt="Whimsy & Wonder"
                  width={140}
                  height={80}
                  priority
                  className="h-12 xl:h-14 w-auto object-contain py-0.5"
                />
              </LocalizedClientLink>
            </div>
          </div>

          {/* 2. Center: Mobile Centered Logo & Desktop Nav Links */}
          <div className="flex items-center justify-center">
            {/* Mobile Brand Logo */}
            <div className="lg:hidden flex items-center justify-center">
              <LocalizedClientLink
                href="/"
                className="flex items-center"
                data-testid="nav-store-link-mobile"
              >
                <Image
                  src="/WW_logo_01.jpeg"
                  alt="Whimsy & Wonder"
                  width={120}
                  height={70}
                  priority
                  className="h-11 sm:h-12 w-auto object-contain max-w-[130px] py-0.5"
                />
              </LocalizedClientLink>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-8">
              {MAIN_NAV_ITEMS.map((link) => (
                <LocalizedClientLink
                  key={link.label}
                  href={link.href}
                  className="text-xs xl:text-sm font-semibold text-whimsy-ink hover:text-whimsy-rose transition-colors whitespace-nowrap"
                >
                  {link.label}
                </LocalizedClientLink>
              ))}
            </div>
          </div>

          {/* 3. Right: Quick Action Controls */}
          <div className="flex items-center justify-end gap-2.5 sm:gap-4 md:gap-5 text-whimsy-ink">
            {/* Search */}
            <LocalizedClientLink
              href="/search"
              aria-label="Search"
              className="hover:text-whimsy-rose transition-colors p-1.5 touch-manipulation"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35"
                />
              </svg>
            </LocalizedClientLink>

            {/* Wishlist */}
            <LocalizedClientLink
              href="/wishlist"
              aria-label="Wishlist"
              className="hidden sm:inline-flex hover:text-whimsy-rose transition-colors p-1.5 touch-manipulation"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                />
              </svg>
            </LocalizedClientLink>

            {/* Account */}
            <LocalizedClientLink
              href="/account"
              aria-label="Account"
              className="hover:text-whimsy-rose transition-colors p-1.5 touch-manipulation"
              data-testid="nav-account-link"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </LocalizedClientLink>

            {/* Cart Button with Suspense Fallback */}
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-whimsy-rose flex items-center p-1.5 touch-manipulation"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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