import Image from "next/image"
import corea from 'public/corea.webp'
import Link from "next/link"

export default function TwCaSeFait() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Émilia Giudicelli</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Ça se fait</h1>
              <div className="py-8">
                <Link target="blank" className="bg-blue-500 text-white font-bold rounded-md p-3 my-5 hover:bg-blue-400 duration-500" href="https://notionforms.io/forms/inscription-ca-se-fait-3-mhqvjx">
                    S'inscrire à l'atelier de danse du 11 juin
                </Link>
              </div>
              <p className="mt-6 text-xl leading-8 text-gray-700 italic">
                <span className="font-bolt text-4xl">“</span> Je tente de transmettre l’approfondissement de l’improvisation dansée à travers la contemplation active, la relation au “regard” de l’autre, l’imaginal en mouvement.<span className="font-bolt text-2xl">”</span>
              </p>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                <Link href='https://www.emiliagiudicelli.org/' className="font-bold hover:text-gray-500 duration-500">www.emiliagiudicelli.org
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Image
                className='object-cover w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]'
                src={corea}
                height={500}
                width={350}
                alt="logo"
                />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Ça se fait #3</h2>
   
              <p className="mt-6">
                <span className="font-semibold">Atelier de danse</span><br/>
                Accompagnement guitare par Grégoire Paultre
              </p>
              <p className="mt-6">
                Contempler puis agir, ou la contemplation dans l’agir, ou l’agir au coeur de la contemplation.<br/>
                Qui est ce “je suis” qui gesticule, qui se meut, qui danse, qui tourbillonne ou qui s’asseoit?<br/>
                Quelles formes relationnelles m’agissent là, maintenant?</p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">Dimanche 11 juin</strong><br/> De 10:00 à 18:00
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">40 euros</strong><br/> (Si nécessaire tarif réduit 30 euros)
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">à la Dérive</strong><br/> Pont Menou (29620)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}