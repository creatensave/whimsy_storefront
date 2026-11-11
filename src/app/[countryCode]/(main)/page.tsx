import { Metadata } from "next"
import ComingSoon from "@modules/home/components/coming-soon"

// Preserved imports for when you re-enable the full storefront:
// import Hero from "@modules/home/components/hero"
// import TrendingKits from "@modules/home/components/trending-kits"
// import FeaturedProducts from "@modules/home/components/featured-products"
// import TrustStrip from "@modules/home/components/trust-strip"
// import { listCollections } from "@lib/data/collections"
// import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Best DIY Art Kits & Workshops | Whimsy & Wonder",
  description:
    "Mindful DIY craft & art kits, beginner workshops, and creative experiences by Whimsy & Wonder.",
}

interface HomePageProps {
  params: Promise<{ countryCode: string }>
}

export default async function Home(props: HomePageProps) {
  // Await params to comply with Next.js 15+ dynamic route standards
  await props.params

  return (
    <main className="bg-[#d7eef7] min-h-screen flex flex-col justify-center">
      <ComingSoon />
    </main>
  )
}