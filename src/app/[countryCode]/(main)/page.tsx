import { Metadata } from "next"
import { notFound } from "next/navigation"

import Hero from "@modules/home/components/hero"
import TrendingKits from "@modules/home/components/trending-kits"
import FeaturedProducts from "@modules/home/components/featured-products"
import TrustStrip from "@modules/home/components/trust-strip"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Best DIY Art Kits & Workshops | Whimsy & Wonder",
  description:
    "Mindful DIY craft & art kits, beginner workshops, and creative experiences by Whimsy & Wonder.",
}

interface HomePageProps {
  params: Promise<{ countryCode: string }>
}

export default async function Home(props: HomePageProps) {
  const { countryCode } = await props.params

  const region = await getRegion(countryCode)
  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  // Fail gracefully into the not-found handler rather than an empty blank screen
  if (!collections || !region) {
    notFound()
  }

  return (
    <main className="bg-whimsy-cream min-h-screen flex flex-col">
      <Hero />
      <TrendingKits
        collections={collections}
        region={region}
        countryCode={countryCode}
      />
    </main>
  )
}