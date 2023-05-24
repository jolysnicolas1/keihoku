
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] });


export default function Footer() {
  return (
    <footer className='flex justify-center space-x-5 p-5 text-neutral-500'>
        <p>keihoku.studio@gmail.com</p>
        <p>07.56.98.00.85</p>
    </footer>
  )
}