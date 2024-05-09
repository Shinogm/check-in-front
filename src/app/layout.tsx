// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Inter, IBM_Plex_Serif } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})
// eslint-disable-next-line @typescript-eslint/naming-convention
const ibm_plex_serif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-ibm_plex_serif'
})

export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.variable + ' ' + ibm_plex_serif.variable}>
        {children}
      </body>
    </html>
  )
}
