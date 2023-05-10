import { Raleway } from 'next/font/google'
import NextEvent from './NextEvent'
import Studio from './Studio'
import InitiationShiatsu from './InitiationShiatsu'
import FormationShiatsu from './FormationShiatsu'
import Butoh from './Butoh'
import Emilia3 from './Emilia3'
import Emilia1 from './Emilia1'
import Antonia from './Antonia'
import Footer from './Footer'
import NextEventSm from './NextEventSm'
import Link from 'next/link';

const raleway = Raleway({ subsets: ['latin'] });


export default function Home() {
  return (
    <main className="min-h-screen pt-12 flex flex-col space-y-12">
      {/* <div className="flex flex-col justify-center font-medium">
        <Studio></Studio>
        <div className='agenda text-right my-5'>

          <div className="sm:pr-16 md:pr-24 lg:pr-52 xl:pr-80 2xl:pr-96 text-xl border-black px-5 space-y-1">
            <FormationShiatsu></FormationShiatsu>
            <InitiationShiatsu></InitiationShiatsu>
            <Emilia3></Emilia3>
            <Butoh></Butoh>
          </div>

          <NextEvent></NextEvent>

          <div className="sm:pr-16 md:pr-24 lg:pr-52 xl:pr-80 2xl:pr-96 text-xl border-black px-5">
            <Emilia1></Emilia1>
            <Antonia></Antonia>
          </div>

        </div>
      </div>

      <Footer></Footer> */}

      <div className="flex flex-col items-end p-1 sm:p-4 space-y-5 font-light sm:text-xl lg:px-12 xl:px-24">
        <div className='flex flex-col items-end'>
          <p className=''> <strong className='text-red-600'>FORMATION.SHIATSU</strong><strong className='text-cyan-200'>/ALAIN.TAUSH</strong></p>
          <p className=''><strong className='text-cyan-200'>/MANABU.WATANABE</strong><strong className='text-neutral-400'>/09/2023-05/2024</strong></p>
        </div>
        <div className='flex flex-col items-end'>
          <p className=''> <strong className='text-cyan-200'>INITIATION.SHIATSU</strong><strong className='text-blue-500'>/ALAIN.TAUSH</strong></p>
          <p className=''><strong className='text-blue-500'>/MANABU.WATANABE</strong><strong className='text-neutral-400'>/01-07/023/02-07/023</strong></p>
        </div>
        <div className='flex flex-col items-end'>
          <p className=''> <strong className='text-red-600'>ÇA.SE.FAIT #3</strong><strong className='text-cyan-200'>/ATELIER.DE.DANSE</strong></p>
          <p className=''><strong className='text-blue-500'>/ÉMILIA.GIUDICELLI</strong><strong className='text-neutral-400'>/11-06/2023</strong></p>
        </div>
      </div>
      <Link href="/butoh">
        <NextEventSm/>
      </Link>

    </main>
  )
}
