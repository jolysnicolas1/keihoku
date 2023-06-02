import Image from 'next/image'
import corea from 'public/corea.webp'

export default function NextEvent() {
  return (
        <div className="border-y-4 border-l-4 border-blue-500 flex flex-col md:flex-row align-center text-xl md:justify-between lg:ml-12 xl:ml-24 2xl:ml-96">
            <div className="grow p-2 flex md:justify-center">
                <div className="font-medium md:hidden">
                    <p className='text-cyan-400'>ÇA.SE.FAIT#3/ATELIER</p>
                    <p className='text-blue-500'>.DE.DANSE/ÉMILIA.GIUDICELLI</p>
                </div>
                <div className="font-medium hidden md:flex md:flex-col md:justify-center lg:hidden">
                    <p className='text-cyan-400'>ÇA.SE.FAIT#3</p>
                    <p className='text-cyan-400'>/ATELIER.DE.DANSE</p>
                    <p className='text-blue-500'>/ÉMILIA.GIUDICELLI</p>
                    <p className='text-neutral-400'>/11-06/2023</p>
                </div>
                <div className="font-medium hidden lg:flex lg:flex-col lg:justify-center xl:hidden">
                    <p className='text-cyan-400'>ÇA.SE.FAIT#3/ATELIER.DE.DANSE</p>
                    <p className='text-blue-500'>/ÉMILIA.GIUDICELLI</p>
                    <p className='text-neutral-400'>/11-06/2023</p>
                </div>
                <div className="font-medium hidden xl:flex xl:flex-col xl:justify-center 2xl:hidden">
                    <p className='text-cyan-400'>ÇA.SE.FAIT#3//ATELIER.DE.DANSE</p>
                    <div className="flex">
                        <p className='text-blue-500'>/ÉMILIA.GIUDICELLI</p>
                        <p className='text-neutral-400'>/11-06/2023</p>
                    </div>
                </div>
                <div className="font-medium hidden 2xl:flex justify-center flex-col">
                    <div className="flex">
                        <p className='text-red-500'>ÇA.SE.FAIT#3</p>
                        <p className=''>/ATELIER.DE.DANSE</p>
                        <p className='text-blue-500'>/ÉMILIA.GIUDICELLI</p>
                        <p className='text-neutral-400'>/11-06/2023</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <div className="flex space-x-2 sm:space-x-4 text-neutral-400 font-medium text-lg md:hidden">
                    <p>/11-06/2023</p>
                </div>
                <Image
                    className='md:border-l-4 md:border-blue-500'
                    src={corea}
                    height={300}
                    width={300}
                    alt="corea"
                    />
            </div>
        </div>
  )
}