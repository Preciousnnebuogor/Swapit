import "@/styles/globals.css"
import { Metadata } from "next"
import { TailwindIndicator, ThemeProvider } from "@/comps"
import { siteConfig } from "@/lib"
import { Provider } from "ethers"

import Footer from "./components/footer"
import Navbar from "./components/narbav"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={
          "min-h-screen bg-background font-sans antialiased"
          //fontSans.variable
        }
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            {/* <SiteHeader /> */}
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
          {/* <TailwindIndicator /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
