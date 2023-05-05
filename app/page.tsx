import Image from 'next/image'
import corea from 'public/corea.webp'
import { Raleway } from 'next/font/google'
import { Footer } from 'flowbite-react';


const raleway = Raleway({ subsets: ['latin'] });


export default function Home() {
  return (
    <main className="h-screen pt-12 flex flex-col justify-between">
      <div className="flex flex-col justify-center font-medium">
        <div className={`flex justify-end ${raleway.className}`}>
          <div className='flex w-fit border-b-8 border-blue-500 items-end'>
            <h1 className='text-5xl pl-96 text-neutral-600 font-thin -mb-2'>KEIHOKU STUDIO</h1>
            <p className='px-16 text-neutral-400 inline-block -mb-1 text-lg'>La Dérive</p>
          </div>
        </div>
        <div className='agenda text-right my-5'>
          <div className="px-96 text-xl border-black px-5 space-y-1">
            <div className='flex justify-end hover:border-b-2 border-blue-500 hover:border-dotted duration-300 ease-in-out'>
              <p className='text-red-600'>FORMATION</p>
              <p className='text-cyan-200'>.SHIATSU/ALAIN.TAUSH/MANABU.WATANABE</p>
              <p className='text-neutral-400'>/2023/2024</p>
            </div>
            <div className="hover:border-l-8 border-neutral-200">
              <div className='flex justify-end hover:border-b-2 border-blue-500 hover:border-dotted duration-300 ease-in-out'>
                <p className='text-cyan-200'>INITIATION</p>
                <p className='text-red-600'>.SHIATSU</p>
                <p className='text-cyan-200'>/ALAIN.TAUSH</p>
                <p className='text-red-600'>/MANABU.WATANABE</p>
                <p className='text-neutral-400'>/02-07/2023</p>
              </div>
              <div className='flex justify-end hover:border-b-2 border-blue-500 hover:border-dotted duration-300 ease-in-out'>
                <p className='text-cyan-200'>INITIATION.SHIATSU</p>
                <p className='text-red-600'>/ALAIN.TAUSH</p>
                <p className='text-cyan-200'>/MANABU.WATANABE</p>
                <p className='text-neutral-400'>/01-07/2023</p>
              </div>
            </div>
            <div className='flex justify-end hover:border-b-2 border-blue-500 hover:border-dotted duration-300 ease-in-out'>
              <p className='text-cyan-200'>ÇA.SE.FAIT #3/ATELIER.DE.DANSE/ÉMILIA.GIUDICELLI</p>
              <p className='text-neutral-400'>/11-06/2023</p>
            </div>
            <div className="hover:border-l-8 border-neutral-200">
              <div className='flex justify-end hover:border-b-2 border-blue-500 hover:border-dotted duration-300 ease-in-out'>
                <p className='text-cyan-200'>MOLECULAR.DANCE/BUTOH.WORKSHOP/MARUSKA.RONCHI</p>
                <p className='text-neutral-400'>/04-06/2023</p>
              </div>
              <div className='flex justify-end hover:border-b-2 border-blue-500 hover:border-dotted duration-300 ease-in-out'>
                <p className='text-cyan-200'>MOLECULAR.DANCE/BUTOH.WORKSHOP/MARUSKA.RONCHI</p>
                <p className='text-neutral-400'>/03-06/2023</p>
              </div>
              <div className='flex justify-end hover:border-b-2 border-blue-500 hover:border-dotted duration-300 ease-in-out'>
                <p className='text-cyan-200'>MOLECULAR.DANCE/BUTOH.WORKSHOP</p>
                <p className='text-neutral-400'>/MARUSKA.RONCHI/02-06/2023</p>
              </div>
            </div>

          </div>
          <div className="text-xl flex justify-end my-2">
            <div className='flex border-blue-500 border-8 py-5 px-3'>
              <p className='self-center text-cyan-200'>ÇA.SE.FAIT #2/ATELIER.DE.DANSE</p>
              <p className='self-center text-blue-500'>/ÉMILIA.GIUDICELLI</p>
              <p className='self-center text-neutral-400'>/07-05/2023</p>
            </div>
            <Image
              className='border-blue-500 border-y-8 bottom-0 right-0'
              src={corea}
              height={500}
              width={350}
              alt="logo"
              />
          </div>
          <div className="px-96 text-xl border-black px-5">
            <div className='flex justify-end  hover:border-b-2 border-neutral-400 hover:border-dotted duration-300 ease-in-out'>
              <p className='text-cyan-200'>ÇA.SE.FAIT.#1/ATELIER.DE.DANSE/ÉMILIA.GIUDICELLI</p>
              <p className='text-neutral-400'>/26-03/2023</p>
            </div>
            <div className="hover:border-l-8 border-neutral-200">
              <div className='flex justify-end hover:border-b-2 border-neutral-400 hover:border-dotted duration-300 ease-in-out'>
                <p className='text-cyan-200'>TECHNIQUE.ALEXANDER/DANSE.COMPTEMPORAINE/ANTONIA.PONS.CAPO</p>
                <p className='text-neutral-400'>/18-02/2023</p>
              </div>
              <div className='flex justify-end hover:border-b-2 border-neutral-400 hover:border-dotted duration-300 ease-in-out'>
                <p className='text-cyan-200'>TECHNIQUE.ALEXANDER/DANSE.COMPTEMPORAINE/ANTONIA.PONS.CAPO</p>
                <p className='text-neutral-400'>/17-02/2023</p>
              </div>
              <div className='flex justify-end hover:border-b-2 border-neutral-400 hover:border-dotted duration-300 ease-in-out'>
                <p className='text-cyan-200'>TECHNIQUE.ALEXANDER/DANSE.COMPTEMPORAINE/ANTONIA.PONS.CAPO</p>
                <p className='text-neutral-400'>/16-02/2023</p>
              </div>
              <div className='flex justify-end hover:border-b-2 border-neutral-400 hover:border-dotted duration-300 ease-in-out'>
                <p className='text-cyan-200'>TECHNIQUE.ALEXANDER/DANSE.COMPTEMPORAINE</p>
                <p className='text-neutral-400'>/ANTONIA.PONS.CAPO</p>
                <p className='text-neutral-400'>/15-02/2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className='flex justify-center space-x-5 p-5 text-neutral-500'>
        <p>keyhoku.studio@gmail.com</p>
        <p>07.56.98.00.85</p>
      </footer>
    </main>
  )
}
