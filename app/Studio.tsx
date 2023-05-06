
import { Raleway } from 'next/font/google'

const raleway = Raleway({ subsets: ['latin'] });


export default function Studio() {
  return (
    // <div className={`flex justify-end ${raleway.className}`}>
    //   <div className='flex w-fit border-b-8 border-blue-500 items-end'>
    //     <h1 className='text-5xl pl-96 text-neutral-600 font-thin -mb-2'>KEIHOKU STUDIO</h1>
    //     <p className='px-16 text-neutral-400 inline-block -mb-1 text-lg'>La Dérive</p>
    //   </div>
    // </div>
    <div className={`flex justify-end flex-col lg:flex-row items-end ${raleway.className}`}>
      <div className='flex w-fit border-b-8 border-blue-500 items-end'>
        <h1 className='text-5xl text-neutral-600 font-thin -mb-2 sm-pl-20 md:pl-64 lg:pl-72 xl:pl-80 2xl:pl-96'>KEIHOKU STUDIO</h1>
        <p className='px-4 md:px-6 md:px-10 lg:px-12 xl:px-14  2xl:px-16 text-neutral-400 inline-block -mb-1 text-lg'>La Dérive</p>
      </div>
    </div>
  )
}