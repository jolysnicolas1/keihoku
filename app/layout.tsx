import './globals.css'
import { Raleway , Bitter } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] });
const bitter = Bitter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-slate-200 font-thin text-4xl ${raleway.className}`}>{children}</body>

    </html>
  )
}
