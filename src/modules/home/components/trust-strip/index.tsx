export default function TrustStrip() {
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
  ]

  return (
    <section className="py-14 bg-white border-y border-[#EADFCB]">
      <div className="content-container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {perks.map((perk) => (
            <div key={perk.title} className="flex flex-col items-center p-4">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 ${perk.bg}`}
              >
                <span>{perk.icon}</span>
              </div>
              <h3 className="text-base font-bold text-whimsy-ink">
                {perk.title}
              </h3>
              <p className="mt-1.5 text-sm text-whimsy-ink/70 max-w-xs leading-relaxed">
                {perk.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}