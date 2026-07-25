import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { cookies } from 'next/headers'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/lib/i18n'
import { LANGUAGE_COOKIE_NAME, resolveLanguage } from '@/lib/translations'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Abby\'s Portfolio',
    template: '%s  Abby Dahlan Havizh',
  },
  description:
    'Mobile and backend developer passionate about building digital applications and growing in tech.',
  keywords: ['portfolio', 'mobile', 'backend', 'developer', 'smk', 'rpl'],
  authors: [{ name: 'Abby Dahlan Havizh' }],
  creator: 'Abby Dahlan Havizh',
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const initialLanguage = resolveLanguage(cookieStore.get(LANGUAGE_COOKIE_NAME)?.value)

  return (
    <html lang={initialLanguage} className={`${inter.variable}`} suppressHydrationWarning>
      <body className="antialiased font-sans min-h-screen flex flex-col bg-background text-foreground">
        <ThemeProvider>
          <LanguageProvider initialLanguage={initialLanguage}>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            {process.env.NODE_ENV === 'production' && <Analytics />}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
