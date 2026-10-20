import LocalizedClientLink from "@modules/common/components/localized-client-link"

const categories = [
  {
    title: "Pottery & Clay",
    href: "/store?category=pottery",
    color: "bg-whimsy-rose/20 text-whimsy-rose border-whimsy-rose/40",
    emoji: "🏺",
    tag: "Trending",
  },
  {
    title: "Painting Kits",
    href: "/store?category=painting",
    color: "bg-whimsy-yellow/30 text-whimsy-ink border-whimsy-yellow",
    emoji: "🎨",
    tag: "Popular",
  },
  {
    title: "Crochet & Yarn",
    href: "/store?category=crochet",
    color: "bg-whimsy-sage/20 text-whimsy-sage border-whimsy-sage/40",
    emoji: "🧶",
    tag: "Cozy",
  },
  {
    title: "Tote Bag Painting",
    href: "/store?category=tote-bags",
    color: "bg-whimsy-teal/20 text-whimsy-teal border-whimsy-teal/40",
    emoji: "👜",
    tag: "DIY Must",
  },
  {
    title: "Live Workshops",
    href: "/categories/workshops",
    color: "bg-whimsy-rose/15 text-whimsy-rose border-whimsy-rose/30",
    emoji: "✨",
    tag: "Weekend",
  },
]

export default function CategoryBubbles() {
  return (
    <section className="py-12 bg-whimsy-cream border-b border-[#EADFCB]">
      <div className="content-container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-8">
          <span className="text-xs font-semibold tracking-wider uppercase text-whimsy-rose">
            Explore By Craft
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-whimsy-ink mt-1">
            Pick Your Creative Outlet
          </h2>
        </div>

        <div className="flex items-center justify-start sm:justify-center gap-4 overflow-x-auto pb-4 no-scrollbar">
          {categories.map((cat) => (
            <LocalizedClientLink
              key={cat.title}
              href={cat.href}
              className="flex flex-col items-center min-w-[110px] sm:min-w-[130px] group transition-transform duration-200 hover:-translate-y-1.5"
            >
              <div
                className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-3xl sm:text-4xl shadow-sm border-2 transition-all duration-300 group-hover:shadow-md group-hover:scale-105 ${cat.color}`}
              >
                <span>{cat.emoji}</span>
              </div>
              <span className="mt-3 text-xs sm:text-sm font-semibold text-whimsy-ink group-hover:text-whimsy-rose transition-colors text-center">
                {cat.title}
              </span>
              <span className="text-[10px] font-medium text-whimsy-ink/60 mt-0.5">
                {cat.tag}
              </span>
            </LocalizedClientLink>
          ))}
        </div>
      </div>
    </section>
  )
}