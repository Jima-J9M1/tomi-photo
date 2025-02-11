import { Inter } from 'next/font/google'
import "./globals.css"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"
import { ThemeProvider } from '@/providers/theme-provider'
import { ClientProvider } from '@/components/providers/client-provider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: "Tomi Photo | Professional Photography Studio",
  description: "Capturing moments that last forever",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
          <ClientProvider />
        </ThemeProvider>
      </body>
    </html>
  )
} 