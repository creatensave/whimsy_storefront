import { listCollections } from "@lib/data/collections"
import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Button, Heading, Text } from "@modules/common/components/ui"
import Image from "next/image"

interface TrendingKitsProps {
  collections?: HttpTypes.StoreCollection[]
  region: HttpTypes.StoreRegion
  countryCode: string
}

export default async function TrendingKits({
  collections: initialCollections,
  region,
  countryCode,
}: TrendingKitsProps) {
  // 1. Fetch fresh collections with high limit to ensure "Trending Kits" is included
  let allCollections = initialCollections

  if (!allCollections || allCollections.length === 0) {
    const res = await listCollections({
      limit: 50,
      fields: "id,handle,title",
    }).catch(() => ({ collections: [] }))
    allCollections = res.collections
  }

  // 2. Locate the collection by handle (ignoring slashes) or by title match
  const targetCollection = allCollections?.find((c) => {
    const rawHandle = c.handle?.replace(/^\/+|\/+$/g, "").trim().toLowerCase() || ""
    const rawTitle = c.title?.trim().toLowerCase() || ""
    return (
      rawHandle === "trending-kits" ||
      rawTitle === "trending kits" ||
      rawHandle.includes("trending") ||
      rawTitle.includes("trending")
    )
  })

  // Log in your Next.js terminal for instant verification
  if (!targetCollection) {
    console.warn(
      "[TrendingKits Debug] Collection 'Trending Kits' not found. Available collections:",
      allCollections?.map((c) => ({ id: c.id, handle: c.handle, title: c.title }))
    )
    return null
  }

  // 3. Query products using array format for collection_id
  const {
    response: { products },
  } = await listProducts({
    countryCode,
    regionId: region.id,
    queryParams: {
      collection_id: [targetCollection.id],
      limit: 12,
      fields: "*variants.calculated_price,+thumbnail",
    },
  }).catch((err) => {
    console.error("[TrendingKits Debug] Error fetching products:", err)
    return { response: { products: [] } }
  })

  if (!products || products.length === 0) {
    console.warn(
      `[TrendingKits Debug] Found collection '${targetCollection.title}' (${targetCollection.id}), but it returned 0 products.`
    )
    return null
  }

  return (
    <section className="w-full bg-whimsy-cream py-10 sm:py-16 border-b border-grey-20 overflow-hidden">
      <div className="max-w-store-container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <Heading
            level="h2"
            className="text-2xl sm:text-3xl lg:text-4xl text-whimsy-ink font-medium tracking-tight"
          >
            Trending Kits
          </Heading>
          <div className="w-12 h-[2px] bg-whimsy-rose/60 mx-auto mt-2" />
        </div>

        {/* Single-row horizontal scroll track */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 pt-1 scroll-smooth snap-x snap-mandatory no-scrollbar [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {products.map((product: HttpTypes.StoreProduct) => {
            const { cheapestPrice } = getProductPrice({ product })

            return (
              <div
                key={product.id}
                className="flex-none w-[220px] sm:w-[260px] md:w-[280px] snap-start flex flex-col justify-between group"
              >
                <LocalizedClientLink
                  href={`/products/${product.handle}`}
                  className="block relative w-full"
                >
                  {/* Square Card Container */}
                  <div className="relative w-full aspect-square rounded-large overflow-hidden bg-white border border-grey-20 shadow-soft-card transition-transform duration-300 group-hover:shadow-md">
                    {product.thumbnail ? (
                      <Image
                        src={product.thumbnail}
                        alt={product.title}
                        fill
                        sizes="(max-width: 640px) 220px, 280px"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-whimsy-cream/50 text-whimsy-ink/40 text-xs sm:text-sm">
                        No image available
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <Text className="text-xs sm:text-base font-semibold text-whimsy-ink mt-3 sm:mt-4 line-clamp-1 group-hover:text-whimsy-rose transition-colors">
                    {product.title}
                  </Text>

                  {/* Clean Price Display */}
                  <div className="flex items-center gap-2 mt-1 mb-3 sm:mb-4">
                    {cheapestPrice ? (
                      <Text className="text-sm sm:text-lg font-bold text-whimsy-ink">
                        {cheapestPrice.calculated_price}
                      </Text>
                    ) : (
                      <Text className="text-sm text-grey-40">View Price</Text>
                    )}
                  </div>
                </LocalizedClientLink>

                {/* View Kit CTA */}
                <LocalizedClientLink
                  href={`/products/${product.handle}`}
                  className="w-full"
                >
                  <Button
                    variant="primary"
                    size="medium"
                    className="w-full bg-whimsy-yellow hover:bg-[#ebd074] text-whimsy-ink rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm shadow-xs border-none transition-transform duration-150 active:scale-[0.98]"
                  >
                    View Kit
                  </Button>
                </LocalizedClientLink>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}