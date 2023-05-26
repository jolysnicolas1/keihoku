
import Link from "next/link"

export default function Studio() {
  return (
    <div className="flex justify-end flex-col items-end relative">
      <div className='flex w-fit border-b-8 border-blue-500 items-end'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl text-neutral-600 font-thin -mb-2 sm-pl-20 md:pl-64 lg:pl-72 xl:pl-80 2xl:pl-96 pr-4'>KEIHOKU STUDIO</h1>
      </div>
      <div className="flex flex-col sm:flex-row">
        <p className='px-4 md:px-6 md:px-10 lg:px-12 xl:px-14  2xl:px-16 text-neutral-400 inline-block -mb-1 text-lg'>Pratiques de CORPS/DANSE/SHIATSU/</p>
        <p className='px-4 md:px-6 md:px-10 lg:px-12 xl:px-14  2xl:px-16 text-neutral-400 inline-block -mb-1 text-lg'>à La Dérive</p>
      </div>
      <div className="flex flex-row space-x-5 px-24 lg:px-96">
        <Link href="/shiatsu"><div className=" relative before:absolute lg:before:bg-blue-500 before:hover:top-0 before:h-4 before:w-4 before:border-t-4 before:border-blue-300 lg:text-neutral-100 hover:text-neutral-400 hover:font-semibold duration-500 before:hover:h-1 before:border before:duration-500 p-1">SHIATSU</div></Link>
        <Link href="/ca-se-fait"><div className=" relative before:absolute lg:before:bg-blue-500 before:hover:top-0 before:h-4 before:w-4 before:border-t-4 before:border-blue-300 lg:text-neutral-100 hover:text-neutral-400 hover:font-semibold duration-500 before:hover:h-1 before:border before:duration-500 p-1">ÇA.SE.FAIT</div></Link>
        <Link href="/butoh"><div className=" relative before:absolute lg:before:bg-blue-500 before:hover:top-0 before:h-4 before:w-4 before:border-t-4 before:border-blue-300 lg:text-neutral-100 hover:text-neutral-400 hover:font-semibold duration-500 before:hover:h-1 before:border before:duration-500 p-1">BUTOH</div></Link>
      </div>
    </div>
  )
}