import NextEventSm from './NextEventSm'
import Shiatsu from './Shiatsu'
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen pt-12 flex flex-col space-y-12">
      <div className="flex flex-col items-end p-1 sm:p-4 space-y-5 font-light sm:text-xl lg:px-12 xl:px-24">
        <Link href="/shiatsu">
          <div className='flex flex-col items-end'>
            <p className=''> <strong className='text-red-600'>FORMATION.SHIATSU</strong><strong className='text-cyan-200'>/ALAIN.TAUSH</strong></p>
            <p className=''><strong className='text-cyan-200'>/MANABU.WATANABE</strong><strong className='text-neutral-400'>/09/2023-05/2024</strong></p>
          </div>
        </Link>
        <Link href="/shiatsu">
          <div className='flex flex-col items-end'>
            <p className=''> <strong className='text-cyan-200'>INITIATION.SHIATSU</strong><strong className='text-blue-500'>/ALAIN.TAUSH</strong></p>
            <p className=''><strong className='text-blue-500'>/MANABU.WATANABE</strong><strong className='text-neutral-400'>/01-07/023/02-07/023</strong></p>
          </div>
        </Link>
        <Link href="/ca-se-fait3">
          <div className='flex flex-col items-end'>
            <p className=''> <strong className='text-red-600'>ÇA.SE.FAIT #3</strong><strong className='text-cyan-200'>/ATELIER.DE.DANSE</strong></p>
            <p className=''><strong className='text-blue-500'>/ÉMILIA.GIUDICELLI</strong><strong className='text-neutral-400'>/11-06/2023</strong></p>
          </div>
        </Link>
      </div>
      <Link href="/butoh">
        <NextEventSm/>
      </Link>
    </main>
  )
}
