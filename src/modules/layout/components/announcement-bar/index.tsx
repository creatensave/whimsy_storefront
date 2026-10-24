import { Text } from "@modules/common/components/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

interface AnnouncementBarProps {
  message?: string
  linkText?: string
  linkHref?: string
}

export default function AnnouncementBar({
  message = "Free Shipping Across India on Orders Above ₹899!",
  linkText = "Explore Kits",
  linkHref = "/store",
}: AnnouncementBarProps) {
  return (
    <aside
      aria-label="Announcement"
      className="bg-whimsy-rose text-white py-2 px-4 text-center text-xs sm:text-sm font-medium tracking-wide transition-colors min-h-[38px] flex items-center justify-center select-none"
    >
      <div className="flex items-center justify-center gap-2">
        <span aria-hidden="true" className="text-whimsy-yellow">
          ✨
        </span>

        <Text className="text-xs sm:text-sm font-medium text-white inline">
          {message}{" "}
          {linkText && linkHref && (
            <LocalizedClientLink
              href={linkHref}
              className="text-whimsy-yellow underline underline-offset-4 font-semibold hover:text-white transition-colors ml-1"
            >
              {linkText}
            </LocalizedClientLink>
          )}
        </Text>

        <span aria-hidden="true" className="text-whimsy-yellow">
          ✨
        </span>
      </div>
    </aside>
  )
}