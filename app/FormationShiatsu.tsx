import Image from 'next/image'
import manabu from 'public/manabu.webp'

export default function FormationShiatsu() {
  return (
    <div className="hover:border-l-8 border-neutral-200 group relative duration-500 hover:cursor-pointer">
        <div className="right-0 hidden group-hover:inline absolute start-0 ease-in-out w-fit bg-white z-50">
            <Image
                className=''
                src={manabu}
                height={500}
                width={350}
                alt="logo"
                />
            <div className="flex flex-col text-left py-12">
                <p className='text-sm text-neutral-400'>De septembre 2023 à Mai 2024</p>
                <p>Formation Shiatsu</p>
                <p className='text-neutral-600'>avec Manabu Watanabe et Alain Tauch</p> 
            </div>
        </div>
        <div className='flex justify-end hover:border-b-2 border-blue-500 ease-in-out'>
            <p className='text-red-600'>FORMATION</p>
            <p className='text-cyan-400'>.SHIATSU/ALAIN.TAUCH/MANABU.WATANABE</p>
            <p className='text-neutral-400'>/2023/2024</p>
        </div>
    </div>
  )
}