import Image from 'next/image'
import maru from 'public/maru.webp'

export default function NextEvent() {
  return (
        <div className="w-screen border-y-4 border-l-4 border-blue-500">
            <div className="text-blue-500">
                <p>MOLECULAR.DANCE/BUTOH.</p>
                <p>WORKSHOP/MARUSKA.RONCHI</p>
            </div>
        </div>
  )
}
            // <div className='flex border-blue-500 border-8 py-5 px-3  group relative duration-500'>
            //   <div className="flex">
            //     <p className='self-center text-cyan-200'>MOLECULAR DANCE/BUTOH.WORKSHOP</p>
            //   </div>
            //   <p className='self-center text-blue-500'>/MARUSKA.RONCHI</p>
            //   <p className='self-center text-neutral-400'>/07-05/2023</p>
            // </div>
            // <Image
            //   className='border-blue-500 border-y-8 bottom-0 right-0'
            //   src={maru}
            //   height={500}
            //   width={350}
            //   alt="logo"
            //   />