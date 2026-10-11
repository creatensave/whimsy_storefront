import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
 title: {
    default: "Whimsy & Wonder | Best DIY Art Kits & Workshops",
    template: "%s | Whimsy & Wonder",
  },
  description: "Mindful DIY art kits, beginner workshops, and creative experiences.", icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
