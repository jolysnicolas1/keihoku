import { Raleway } from 'next/font/google'
import NextEvent from './NextEvent'
import Studio from './Studio'
import InitiationShiatsu from './InitiationShiatsu'
import FormationShiatsu from './FormationShiatsu'
import Butoh from './Butoh'
import Emilia3 from './Emilia3'
import Emilia1 from './Emilia1'
import Antonia from './Antonia'
import Footer from './Footer'

const raleway = Raleway({ subsets: ['latin'] });


export default function Home() {
  return (
    <main className="min-h-screen pt-12 flex flex-col">
      {/* <div className="flex flex-col justify-center font-medium">
        <Studio></Studio>
        <div className='agenda text-right my-5'>

          <div className="sm:pr-16 md:pr-24 lg:pr-52 xl:pr-80 2xl:pr-96 text-xl border-black px-5 space-y-1">
            <FormationShiatsu></FormationShiatsu>
            <InitiationShiatsu></InitiationShiatsu>
            <Emilia3></Emilia3>
            <Butoh></Butoh>
          </div>

          <NextEvent></NextEvent>

          <div className="sm:pr-16 md:pr-24 lg:pr-52 xl:pr-80 2xl:pr-96 text-xl border-black px-5">
            <Emilia1></Emilia1>
            <Antonia></Antonia>
          </div>

        </div>
      </div>

      <Footer></Footer> */}

      <Studio></Studio>

    </main>
  )
}
