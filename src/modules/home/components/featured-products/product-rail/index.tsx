import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ProductPreview from "@modules/products/components/product-preview"

export default async function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const {
    response: { products: pricedProducts },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      collection_id: collection.id,
      fields: "*variants.calculated_price",
    },
  })

  if (!pricedProducts || pricedProducts.length === 0) {
    return null
  }

  return (
    <section className="bg-whimsy-cream py-12 sm:py-16 border-b border-[#EADFCB]">
      <div className="content-container mx-auto px-4">
        {/* Collection Section Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-whimsy-rose">
              Curated Craft Kits
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-whimsy-ink mt-1">
              {collection.title}
            </h2>
          </div>

          <LocalizedClientLink
            href={`/collections/${collection.handle}`}
            className="inline-flex items-center text-sm font-semibold text-whimsy-rose hover:text-whimsy-teal transition-colors group"
          >
            <span>View All in {collection.title}</span>
            <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </LocalizedClientLink>
        </div>

        {/* 2-col on Mobile, 4-col on Desktop */}
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {pricedProducts.map((product) => (
            <li key={product.id}>
              <ProductPreview product={product} region={region} isFeatured />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}