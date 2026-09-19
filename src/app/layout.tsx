import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ThemeProvider } from "@/components/ThemeProvider"

const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SDC – Sieć Dostępności Cyfrowej",
  description: "Narzędzia do tworzenia dokumentów Sieci Dostępności Cyfrowej",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning className={roboto.variable}>
      <body>
        <ThemeProvider>
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
