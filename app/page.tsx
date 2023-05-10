"use client"


import NextEventSm from './NextEventSm'
import Shiatsu from './Shiatsu'
import Link from 'next/link';
// import CustomCursor from './Cursor';


export default function Home() {
  return (
    <main className="min-h-screen pt-12 flex flex-col text-cyan-200">
      {/* <CustomCursor /> */}
      <div className="flex flex-col items-end p-1 sm:p-4 space-y-5 md:space-y-0 font-light sm:text-xl lg:px-12 xl:px-24 2xl:px-44">
        <Link href="/formation-shiatsu">
          <div className='flex flex-col md:flex-row items-end'>
            <p className=''> <strong className='text-red-600'>FORMATION.SHIATSU</strong><strong className=''>/ALAIN.TAUSH</strong></p>
            <p className=''><strong className=''>/MANABU.WATANABE</strong><strong className='text-neutral-400'>/09/2023-05/2024</strong></p>
          </div>
        </Link>
        <Link href="/initiation-shiatsu">
          <div className='flex flex-col md:flex-row items-end'>
            <p className=''> <strong className=''>INITIATION.SHIATSU</strong><strong className=''>/ALAIN.TAUSH</strong></p>
            <p className=''><strong className='text-blue-500'>/MANABU.WATANABE</strong><strong className='text-neutral-400'>/01-07/023/02-07/023</strong></p>
          </div>
          <div className='flex flex-col md:flex-row items-end'>
            <p className=''> <strong className='text-neutral-400'>INITIATION.SHIATSU</strong><strong className='text-blue-500'>/ALAIN.TAUSH</strong></p>
            <p className=''><strong className=''>/MANABU.WATANABE</strong><strong className='text-neutral-400'>/02-07/023/02-07/023</strong></p>
          </div>
        </Link>
        <Link href="/ca-se-fait3">
          <div className='flex flex-col md:flex-row items-end'>
            <p className=''> <strong className='text-red-600'>ÇA.SE.FAIT #3</strong><strong className=''>/ATELIER.DE.DANSE</strong></p>
            <p className=''><strong className='text-blue-500'>/ÉMILIA.GIUDICELLI</strong><strong className='text-neutral-400'>/11-06/2023</strong></p>
          </div>
        </Link>
      </div>
      <Link href="/butoh">
        <NextEventSm/>
      </Link>
      <div className="flex flex-col items-end p-1 sm:p-4 space-y-5 md:space-y-0 font-light sm:text-xl lg:px-12 xl:px-24 2xl:px-44">
        <Link href="/ca-se-fait3">
          <div className='flex flex-col md:flex-row items-end'>
            <p className=''> <strong className=''>ÇA.SE.FAIT #2</strong><strong className=''>/ATELIER.DE.DANSE</strong></p>
            <p className=''><strong className=''>/ÉMILIA.GIUDICELLI</strong><strong className='text-neutral-400'>/07-05/2023</strong></p>
          </div>
        </Link>
        <Link href="/ca-se-fait3">
          <div className='flex flex-col md:flex-row items-end'>
            <p className=''> <strong className=''>ÇA.SE.FAIT #1</strong><strong className=''>/ATELIER.DE.DANSE</strong></p>
            <p className=''><strong className='text-blue-500'>/ÉMILIA.GIUDICELLI</strong><strong className='text-neutral-400'>/26-03/2023</strong></p>
          </div>
        </Link>
        <Link href="/formation-shiatsu">
          <div className='flex flex-col md:flex-row items-end'>
            <p className=''> <strong className=''>TECHNIQUE.ALEXANDER</strong><strong className=''>/DANSE.COMPTEMPORAINE</strong></p>
            <p className=''><strong className=''>/ANTONIA.PONS.CAPO</strong><strong className='text-neutral-400'>/21-02/2023</strong></p>
          </div>
          <div className='flex flex-col md:flex-row items-end'>
            <p className=''> <strong className='text-red-600'>TECHNIQUE.ALEXANDER</strong><strong className=''>/DANSE.COMPTEMPORAINE</strong></p>
            <p className=''><strong className=''>/ANTONIA.PONS.CAPO</strong><strong className='text-neutral-400'>/20-02/2023</strong></p>
          </div>
          <div className='flex flex-col md:flex-row items-end'>
            <p className=''> <strong className=''>TECHNIQUE.ALEXANDER</strong><strong className=''>/DANSE.COMPTEMPORAINE</strong></p>
            <p className=''><strong className='text-neutral-400'>/ANTONIA.PONS.CAPO</strong><strong className='text-neutral-400'>/19-02/2023</strong></p>
          </div>
          <div className='flex flex-col md:flex-row items-end'>
            <p className=''> <strong className=''>TECHNIQUE.ALEXANDER</strong><strong className=''>/DANSE.COMPTEMPORAINE</strong></p>
            <p className=''><strong className=''>/ANTONIA.PONS.CAPO</strong><strong className='text-neutral-400'>/18-02/2023</strong></p>
          </div>
        </Link>
      </div>
    </main>
  )
}
