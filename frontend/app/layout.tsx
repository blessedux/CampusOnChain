import type { Metadata } from "next"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { PrivyClientProvider } from '@/components/privy-client-provider'
import { Toaster } from "@/components/ui/toaster"
import { BgradientAnim } from "@/components/ui/BgradientAnim"
import '@/styles/globals.css'
import '@/styles/spline.css'

const inter = Inter({ subsets: ["latin"] })

const privyAppId = process.env.NEXT_PUBLIC_PRIVY_APP_ID || "fallback-app-id";

export const metadata: Metadata = {
  title: "Campus on Chain",
  description: "El puente entre universidades y el mundo Web3",
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body 
        className={`${inter.className} relative min-h-screen`}
        style={{
          margin: 0,
          padding: 0,
          minHeight: '100vh',
          position: 'relative',
          overflow: 'auto',
          background: 'black'
        }}
      >
        <BgradientAnim />
        <main className="relative z-10">
        <PrivyClientProvider>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </PrivyClientProvider>
        <Toaster />
        </main>
      </body>
    </html>
  )
}
