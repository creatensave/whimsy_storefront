"use client"

import React, { useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface ProductItem {
  id: string
  title: string
  handle: string
  price: string
  originalPrice: string
  discountBadge: string
  imageSrc: string
}

const trendingProducts: ProductItem[] = [
  {
    id: "indian-art-coasters",
    title: "Indian Art Coasters Kit",
    handle: "indian-art-coasters-kit",
    price: "₹699",
    originalPrice: "₹999",
    discountBadge: "30% OFF",
    imageSrc: "/images/products/indian-art-coasters.jpg",
  },
  {
    id: "sculpted-mandala-coasters",
    title: "Sculpted Mandala Coasters Kit",
    handle: "sculpted-mandala-coasters-kit",
    price: "₹699",
    originalPrice: "₹999",
    discountBadge: "30% OFF",
    imageSrc: "/images/products/sculpted-mandala-coasters.jpg",
  },
  {
    id: "round-mandala-coasters",
    title: "Round Mandala Coasters Kit",
    handle: "round-mandala-coasters-kit",
    price: "₹699",
    originalPrice: "₹999",
    discountBadge: "30% OFF",
    imageSrc: "/images/products/round-mandala-coasters.jpg",
  },
  {
    id: "rajasthani-heritage-coasters",
    title: "Rajasthani Heritage Coasters Kit",
    handle: "rajasthani-heritage-coasters-kit",
    price: "₹699",
    originalPrice: "₹999",
    discountBadge: "30% OFF",
    imageSrc: "/images/products/rajasthani-heritage-coasters.jpg",
  },
]

export default function TrendingKits() {
  const [addingId, setAddingId] = useState<string | null>(null)

  const handleAddToCart = (id: string, e: React.MouseEvent) => {
    e.preventDefault()
    setAddingId(id)
    // Quick feedback transition
    setTimeout(() => {
      setAddingId(null)
    }, 1000)
  }

  return (
    <section className="w-full bg-[#FAF8F5] py-10 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#EADFCB]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#2B231D] tracking-tight font-medium">
            Trending DIY Kits
          </h2>
          <div className="w-12 h-[2px] bg-[#B26B4A]/40 mx-auto mt-2" />
        </div>

        {/* Responsive Grid: 2 columns on mobile, 4 columns on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {trendingProducts.map((product) => {
            const isAdding = addingId === product.id

            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between bg-transparent transition-all duration-300"
              >
                <LocalizedClientLink
                  href={`/products/${product.handle}`}
                  className="block relative w-full"
                >
                  {/* Square Image Card */}
                  <div className="relative w-full aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-[#F4EFE6] border border-[#EADFCB]/60 shadow-sm transition-transform duration-300 group-hover:shadow-md">
                    <img
                      src={product.imageSrc}
                      alt={product.title}
                      onError={(e) => {
                        // Clean SVG fallback if custom picture isn't in public folder yet
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23F4EFE6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23B26B4A' font-family='sans-serif' font-size='16'%3EArt Kit Photo%3C/text%3E%3C/svg%3E"
                      }}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Discount Badge */}
                    <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-[#FCE881] text-[#2B231D] text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow-xs">
                      {product.discountBadge}
                    </span>
                  </div>

                  {/* Product Title */}
                  <h3 className="font-sans text-xs sm:text-base font-semibold text-[#2B231D] mt-3 sm:mt-4 line-clamp-1 group-hover:text-[#B26B4A] transition-colors">
                    {product.title}
                  </h3>

                  {/* Pricing Details */}
                  <div className="flex items-center gap-2 mt-1 mb-3 sm:mb-4">
                    <span className="text-sm sm:text-lg font-bold text-[#2B231D]">
                      {product.price}
                    </span>
                    <span className="text-xs sm:text-sm text-stone-400 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                </LocalizedClientLink>

                {/* Pill "ADD TO CART" Button */}
                <button
                  type="button"
                  onClick={(e) => handleAddToCart(product.id, e)}
                  disabled={isAdding}
                  className="w-full py-2 sm:py-2.5 px-3 rounded-full bg-[#FCE881] hover:bg-[#FADC5B] active:scale-[0.98] text-[#2B231D] text-xs sm:text-sm font-bold tracking-wider uppercase shadow-xs transition-all duration-150 flex items-center justify-center min-h-[38px] sm:min-h-[42px]"
                >
                  {isAdding ? "Adding..." : "Add to Cart"}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}