import Image from 'next/image'
import maru from 'public/maru.webp'

export default function Butoh() {
  return (
    <div className="hover:border-l-8 border-neutral-200 group relative duration-500">
    <div className="right-0 hidden group-hover:inline absolute start-0 ease-in-out w-fit bg-white">
      <Image
        className=''
        src={maru}
        height={500}
        width={350}
        alt="logo"
        />
        <div className="flex flex-col text-left">
          <p className='text-sm text-neutral-400'>Du vendredi 02 juin au dimanche 04 juin</p>
          <p>Butoh Workshop</p>
          <p className='text-neutral-600'>avec Maruska Ronchi</p> 
        </div>
    </div>
    <div className='flex justify-end hover:border-b-2 border-blue-500 border-dotted ease-in-out'>
      <p className='text-cyan-400'>MOLECULAR.DANCE/BUTOH.WORKSHOP/MARUSKA.RONCHI</p>
      <p className='text-neutral-400'>/04-06/2023</p>
    </div>
    <div className='flex justify-end hover:border-b-2 border-blue-500 hover:border-dotted ease-in-out'>
      <p className='text-cyan-400'>MOLECULAR.DANCE/BUTOH.WORKSHOP/MARUSKA.RONCHI</p>
      <p className='text-neutral-400'>/03-06/2023</p>
    </div>
    <div className='flex justify-end hover:border-b-2 border-blue-500 hover:border-dotted ease-in-out'>
      <p className='text-cyan-400'>MOLECULAR.DANCE/BUTOH.WORKSHOP</p>
      <p className='text-neutral-400'>/MARUSKA.RONCHI/02-06/2023</p>
    </div>
  </div>
  )
}