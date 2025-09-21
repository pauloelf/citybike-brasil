import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { ScrollToTop } from "@/components/shared/scroll-to-top"
import { QueryProvider } from "@/providers/query-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "CityBike Brasil",
  description: "Encontre bicicletas compartilhadas em todo o Brasil",
  keywords: [
    "bicicleta",
    "bike sharing",
    "mobilidade urbana",
    "brasil",
    "sustentabilidade",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <QueryProvider>
          <Header />
          <ScrollToTop />
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  )
}
