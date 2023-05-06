import Image from 'next/image'
import { Raleway } from 'next/font/google'
import corea from 'public/corea.webp'



const raleway = Raleway({ subsets: ['latin'] });


export default function NextEvent() {
  return (
    <>
        <div className="text-xl flex justify-end my-2">
            <div className='flex border-blue-500 border-8 py-5 px-3  group relative duration-500'>
              <div className="flex">
                <p className='self-center text-cyan-200'>ÇA.SE.FAIT #2/ATELIER.DE.DANSE</p>
              </div>
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
    </>
  )
}