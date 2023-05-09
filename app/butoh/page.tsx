import Image from "next/image"
import maru from 'public/maru.webp'


export default function Home() {
    return (
      <main className="min-h-screen pt-12 flex flex-col space-y-12">
          <h1>Butoh workshop</h1>
          <div className="w-screen border-t-4 border-l-4 border-blue-500 flex flex-col align-center text-xl space-y-3 p-2">
            <div className="font-medium">
                <p className='text-cyan-200'>MOLECULAR.DANCE/BUTOH</p>
                <p className='text-blue-500'>.WORKSHOP/MARUSKA.RONCHI</p>
            </div>
            <div className="text-sm pl-6 -space-y-1">
                <p>Vendredi 02 juin de <strong className="font-medium text-blue-500">18:00 à 21:00</strong></p>
                <p>Samedi 03 juin de 10:00 à 17:30</p>
                <p>Dimanche 04 juin de 10:00 à 17:30</p>
            </div>
            <div className="text-sm -space-y-2">
                <p className="text-red-500">tarif</p>
                <p className="pl-2">110 euros (si nécessaire, réduit 75e)</p>
            </div>
            <div className="text-sm -space-y-2">
                <p className="text-red-500">inscriptions</p>
                <p className="pl-2">keihuko.studio@gmail.com</p>
            </div>
            <div className="flex flex-col items-center">
                <Image
                    className=''
                    src={maru}
                    height={500}
                    width={400}
                    alt="maru"
                    />
            </div>
        </div>
      </main>
    )
  }