import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function AnnouncementBar() {
  return (
    <aside
      aria-label="Announcement"
      className="bg-whimsy-rose text-white py-2 px-4 text-center text-xs sm:text-sm font-medium tracking-wide transition-colors"
    >
      <div className="flex items-center justify-center gap-2">
        <span aria-hidden="true" className="text-whimsy-yellow">✨</span>
        <p>
          Free Shipping Across India on Orders Above ₹599!{" "}
          <LocalizedClientLink
            href="/store"
            className="text-whimsy-yellow underline underline-offset-4 font-semibold hover:text-white transition-colors ml-1"
          >
            Explore Kits
          </LocalizedClientLink>
        </p>
        <span aria-hidden="true" className="text-whimsy-yellow">✨</span>
      </div>
    </aside>
  )
}