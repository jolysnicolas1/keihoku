import Image from 'next/image'
import maru from 'public/maru.webp'

export default function NextEvent() {
  return (
        <div className="border-y-4 border-l-4 border-blue-500 flex flex-col md:flex-row align-center text-xl md:justify-between lg:ml-12 xl:ml-24 2xl:ml-72">
            <div className="grow p-2 flex md:justify-center">
                <div className="font-medium md:hidden">
                    <p className='text-cyan-200'>MOLECULAR.DANCE/BUTOH</p>
                    <p className='text-blue-500'>.WORKSHOP/MARUSKA.RONCHI</p>
                </div>
                <div className="font-medium hidden md:flex md:flex-col md:justify-center lg:hidden">
                    <p className='text-cyan-200'>MOLECULAR.DANCE</p>
                    <p className='text-cyan-200'>/BUTOH.WORKSHOP</p>
                    <p className='text-blue-500'>/MARUSKA.RONCHI</p>
                    <p className='text-neutral-400'>/02-06/2023</p>
                    <p className='text-neutral-400'>/03-06/2023</p>
                    <p className='text-neutral-400'>/0-06/2023</p>
                </div>
                <div className="font-medium hidden lg:flex lg:flex-col lg:justify-center xl:hidden">
                    <p className='text-cyan-200'>MOLECULAR.DANCE/BUTOH.WORKSHOP</p>
                    <p className='text-blue-500'>/MARUSKA.RONCHI</p>
                    <p className='text-neutral-400'>/02-06/2023/03-06/2023/0-06/2023</p>
                </div>
                <div className="font-medium hidden xl:flex xl:flex-col xl:justify-center 2xl:hidden">
                    <p className='text-cyan-200'>MOLECULAR.DANCE/BUTOH.WORKSHOP</p>
                    <div className="flex">
                        <p className='text-blue-500'>/MARUSKA.RONCHI</p>
                        <p className='text-neutral-400'>/02-06/2023/03-06/2023/0-06/2023</p>
                    </div>
                </div>
                <div className="font-medium hidden 2xl:flex justify-center flex-col">
                    <div className="flex">
                        <p className='text-cyan-200'>MOLECULAR.DANCE/BUTOH.WORKSHOP</p>
                        <p className='text-blue-500'>/MARUSKA.RONCHI</p>
                        <p className='text-neutral-400'>/02-06/2023</p>
                    </div>
                    <div className="flex">
                        <p className='text-cyan-200'>MOLECULAR.DANCE/BUTOH.WORKSHOP</p>
                        <p className='text-blue-500'>/MARUSKA.RONCHI</p>
                        <p className='text-neutral-400'>/03-06/2023</p>
                    </div>
                    <div className="flex">
                        <p className='text-cyan-200'>MOLECULAR.DANCE/BUTOH.WORKSHOP</p>
                        <p className='text-blue-500'>/MARUSKA.RONCHI</p>
                        <p className='text-neutral-400'>/04-06/2023</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex space-x-2 sm:space-x-4 text-neutral-400 font-medium text-lg md:hidden">
                    <p>/02-06/2023</p>
                    <p>/03-06/2023</p>
                    <p>/04-06/2023</p>
                </div>
                <Image
                    className='md:border-l-4 md:border-blue-500'
                    src={maru}
                    height={500}
                    width={500}
                    alt="maru"
                    />
            </div>
        </div>
  )
}