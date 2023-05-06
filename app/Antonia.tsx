import { Raleway } from 'next/font/google'



const raleway = Raleway({ subsets: ['latin'] });


export default function Antonia() {
  return (
    <div className="hover:border-l-8 border-neutral-200">
        <div className='flex flex-col xl:flex-row justify-end hover:border-b-2 border-neutral-400 hover:border-dotted duration-300 ease-in-out'>
            <p className='text-cyan-200'>TECHNIQUE.ALEXANDER/DANSE.COMPTEMPORAINE/ANTONIA.PONS.CAPO</p>
            <p className='text-neutral-400'>/18-02/2023</p>
        </div>
        <div className='flex flex-col xl:flex-row justify-end hover:border-b-2 border-neutral-400 hover:border-dotted duration-300 ease-in-out'>
        <p className='text-cyan-200'>TECHNIQUE.ALEXANDER/DANSE.COMPTEMPORAINE/ANTONIA.PONS.CAPO</p>
        <p className='text-neutral-400'>/17-02/2023</p>
        </div>
        <div className='flex flex-col xl:flex-row justify-end hover:border-b-2 border-neutral-400 hover:border-dotted duration-300 ease-in-out'>
        <p className='text-cyan-200'>TECHNIQUE.ALEXANDER/DANSE.COMPTEMPORAINE/ANTONIA.PONS.CAPO</p>
        <p className='text-neutral-400'>/16-02/2023</p>
        </div>
        <div className='flex flex-col xl:flex-row justify-end hover:border-b-2 border-neutral-400 hover:border-dotted duration-300 ease-in-out'>
        <p className='text-cyan-200'>TECHNIQUE.ALEXANDER/DANSE.COMPTEMPORAINE</p>
        <p className='text-neutral-400'>/ANTONIA.PONS.CAPO</p>
        <p className='text-neutral-400'>/15-02/2023</p>
        </div>
    </div>
  )
}