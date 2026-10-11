import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function AnnouncementBar() {
  return (
    <aside
      aria-label="Announcement"
      className="bg-[#2D3B36] text-[#F9F6F0] py-2 px-4 text-center text-xs sm:text-sm font-medium tracking-wide transition-colors"
    >
      <div className="flex items-center justify-center gap-2">
        <span aria-hidden="true">✨</span>
        <p>
          Free Shipping Across India on Orders Above ₹699!{" "}
          <LocalizedClientLink
            href="/store"
            className="underline underline-offset-4 font-semibold hover:text-[#E8927C] transition-colors ml-1"
          >
            Explore Kits
          </LocalizedClientLink>
        </p>
        <span aria-hidden="true">✨</span>
      </div>
    </aside>
  )
}