import type { Metadata } from "next"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { PrivyClientProvider } from '@/components/privy-client-provider'

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
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <PrivyClientProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </PrivyClientProvider>
      </body>
    </html>
  )
}
