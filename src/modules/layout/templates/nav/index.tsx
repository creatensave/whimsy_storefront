import { Suspense } from "react"

import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import AnnouncementBar from "@modules/layout/components/announcement-bar"

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
  ])

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      {/* Announcement Bar */}
    <AnnouncementBar />

  
      <header className="relative h-20 sm:h-24 md:h-28 mx-auto border-b duration-200 bg-white border-ui-border-base">
        <nav className="content-container txt-xsmall-plus text-ui-fg-subtle flex items-center justify-between w-full h-full text-small-regular">
          
          {/* Left: Side Menu */}
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="h-full flex items-center">
              <SideMenu regions={regions} locales={locales} currentLocale={currentLocale} />
            </div>
          </div>

          {/* Center: Scaled Logo */}
          <div className="flex items-center justify-center h-full py-2">
            <LocalizedClientLink
              href="/"
              className="flex items-center justify-center transition-transform duration-200 hover:scale-105"
              data-testid="nav-store-link"
            >
              <Image
                src="/logo.png"
                alt="Whimsy Wonder"
                width={400}
                height={120}
                className="h-16 sm:h-20 md:h-24 w-auto object-contain drop-shadow-sm"
                priority
              />
            </LocalizedClientLink>
          </div>

          {/* Right: Account & Cart */}
          <div className="flex items-center gap-x-6 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              <LocalizedClientLink
                className="hover:text-ui-fg-base"
                href="/account"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>
            
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
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