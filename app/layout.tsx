import './globals.css'
import { Raleway } from 'next/font/google'
import Studio from './Studio';
import Footer from './Footer';
import Link from 'next/link';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata = {
  title: 'Keihoku Studio',
  description: 'Pratiques de danse/corps et soin à la Dérive',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-white ${raleway.className} pt-12`}>
        <Link href="/"><Studio></Studio></Link>
        
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
