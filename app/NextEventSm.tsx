import Image from 'next/image'
import maru from 'public/maru.webp'

export default function NextEvent() {
  return (
        <div className="w-screen border-y-4 border-l-4 border-blue-500 flex flex-col align-center text-xl space-y-3 p-2">
            <div className="font-medium">
                <p className='text-cyan-200'>MOLECULAR.DANCE/BUTOH.WORKSHOP</p>
                <p className='text-blue-500'>/MARUSKA.RONCHI</p>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex space-x-4 text-neutral-400 font-medium text-lg">
                    <p>/02-06/2023</p>
                    <p>/03-06/2023</p>
                    <p>/04-06/2023</p>
                </div>
                <Image
                    className=''
                    src={maru}
                    height={500}
                    width={400}
                    alt="logo"
                    />
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