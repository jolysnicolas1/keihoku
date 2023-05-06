import { Raleway } from 'next/font/google'



const raleway = Raleway({ subsets: ['latin'] });


export default function Emilia1() {
  return (
    <div className='flex flex-col lg:flex-row justify-end hover:border-b-2 border-blue-500 hover:border-dotted ease-in-out'>
        <p className='text-cyan-200'>ÇA.SE.FAIT #3/ATELIER.DE.DANSE/ÉMILIA.GIUDICELLI</p>
        <p className='text-neutral-400'>/11-06/2023</p>
    </div>
  )
}