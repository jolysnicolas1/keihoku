import Image from 'next/image'
import { Raleway } from 'next/font/google'
import corea from 'public/corea.webp'



const raleway = Raleway({ subsets: ['latin'] });


export default function InitiationShiatsu() {
  return (
    <div className="hover:border-l-8 border-neutral-200">
    <div className='flex justify-end hover:border-b-2 border-blue-500 hover:border-dotted ease-in-out'>
      <p className='text-cyan-200'>INITIATION</p>
      <p className='text-red-600'>.SHIATSU</p>
      <p className='text-cyan-200'>/ALAIN.TAUCH</p>
      <p className='text-red-600'>/MANABU.WATANABE</p>
      <p className='text-neutral-400'>/02-07/2023</p>
    </div>
    <div className='flex justify-end hover:border-b-2 border-blue-500 hover:border-dotted ease-in-out'>
      <p className='text-cyan-200'>INITIATION.SHIATSU</p>
      <p className='text-red-600'>/ALAIN.TAUCH</p>
      <p className='text-cyan-200'>/MANABU.WATANABE</p>
      <p className='text-neutral-400'>/01-07/2023</p>
    </div>
  </div>
  )
}