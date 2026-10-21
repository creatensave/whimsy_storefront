import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import CategoryBubbles from "@modules/home/components/category-bubbles"
import TrustStrip from "@modules/home/components/trust-strip"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import TrendingKits from "@modules/home/components/trending-kits"

export const metadata: Metadata = {
  title: "Best DIY Art Kits & Workshops",
  description:
    "Mindful DIY craft & art kits, beginner workshops, and creative experiences by Whimsy & Wonder.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <main className="bg-whimsy-cream min-h-screen">
    <Hero />
    {/* 1. Trending DIY Kits Section */}
    <TrendingKits />
    <ul>
      <FeaturedProducts collections={collections} region={region} />
    </ul>
    <TrustStrip />
  </main>
  )
}
