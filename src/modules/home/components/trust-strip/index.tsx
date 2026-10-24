import { Text } from "@modules/common/components/ui"

const perks = [
  {
    icon: "📦",
    title: "All-in-One Kits",
    desc: "Every single tool, canvas, and paint included. No extra trips to craft stores.",
    bg: "bg-whimsy-rose/10 text-whimsy-rose",
  },
  {
    icon: "🎥",
    title: "Step-by-Step Guidance",
    desc: "Scan the box QR code for easy video tutorials made for absolute beginners.",
    bg: "bg-whimsy-yellow/30 text-whimsy-ink",
  },
  {
    icon: "💛",
    title: "Mindful & Relaxing",
    desc: "Screen-free creative downtime to unwind and make something tangible with your hands.",
    bg: "bg-whimsy-sage/20 text-whimsy-sage",
  },
] as const

export default function TrustStrip() {
  return (
    <section className="py-12 sm:py-16 bg-white border-y border-grey-20">
      <div className="content-container max-w-store-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 text-center">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="flex flex-col items-center p-2 sm:p-4"
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 select-none ${perk.bg}`}
                aria-hidden="true"
              >
                <span>{perk.icon}</span>
              </div>

              <Text className="text-base font-bold text-whimsy-ink">
                {perk.title}
              </Text>

              <Text className="mt-1.5 text-sm text-grey-50 max-w-xs leading-relaxed">
                {perk.desc}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}