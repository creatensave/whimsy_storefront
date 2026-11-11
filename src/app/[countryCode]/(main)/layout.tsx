import { Metadata } from "next"

import { getBaseURL } from "@lib/util/env"
import WhatsAppButton from "@modules/common/components/whatsapp-button"

// Preserved imports for when you re-enable full store mode:
// import { listCartOptions, retrieveCart } from "@lib/data/cart"
// import { retrieveCustomer } from "@lib/data/customer"
// import { StoreCartShippingOption } from "@medusajs/types"
// import CartMismatchBanner from "@modules/layout/components/cart-mismatch-banner"
// import Footer from "@modules/layout/templates/footer"
// import Nav from "@modules/layout/templates/nav"
// import FreeShippingPriceNudge from "@modules/shipping/components/free-shipping-price-nudge"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: "Coming Soon | Whimsy & Wonder",
  description: "Curated DIY craft and art kits, beginner workshops, and mindful creative experiences.",
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      {/* Main page content (renders your exact GIF) */}
      {props.children}

      {/* Global WhatsApp Floating Assistant */}
      <WhatsAppButton 
        phoneNumber="916303529505" 
        defaultMessage="Hi Whimsy Wonder! I'd love to know more about your upcoming holiday DIY kits!"
      />
    </>
  )
}