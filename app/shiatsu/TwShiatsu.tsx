import Image from "next/image"
import manabu from 'public/manabu.webp'
import Link from "next/link"

export default function TwShiatsu() {
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
              <p className="text-base font-semibold leading-7 text-indigo-600">Manabu Watanabe & Alain Tauch</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shiatsu</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Manabu Watanabe et Alain Tauch pratiquent et enseignent le Shiatsu et L'aunkai
              </p>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Plus d'information sur leur site 
                <Link href='https://sushiatsu.fr/' className="font-bold hover:text-gray-500 duration-500"> sushiatsu.fr
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Image
                className='object-cover w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]'
                src={manabu}
                height={500}
                width={350}
                alt="logo"
                />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Stage Shiatsu & Aunkai</h2>
              <p className="font-bold mt-6">
                Bunka (文化)
              </p>
                <em>Éléments de culture japonaise pour mieux appréhender la pratique du shiatsu et des arts martiaux traditionnels japonais.</em>
              <p className="mt-6">
                Stage de découverte du Shiatsu et Aunkai.
              </p>
              <p className="mt-6">
              Pour ce stage nous vous proposons d’explorer la culture japonaise (bunka) afin de mieux comprendre les valeurs et principes dont se nourrissent les pratiques martiales et de santé venant du Japon. Ceci vous permettra de prendre conscience du rôle symbolique et éducatif de ces éléments culturels, et de les mettre à profit pour enrichir votre pratique.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">Samedi 01 juillet et Dimanche 02 juillet</strong> De 10:00 à 17:30
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">100 euros</strong> (Si nécessaire tarif réduit 80 euros)
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">à la Dérive</strong> Pont Menou (29620)
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Formation Shiatsu</h2>
              <p className="mt-6">
                Formation de Shiatsu. Cycle de 3 années
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">Première année, 12 jours de septembre 2023 à mai 2024</strong> 
                    <p>23-14 septembre 2023</p>
                    <p>25-26 novembre 2023</p>
                    <p>20-21 janvier 2024</p>
                    <p>16-17 mars 2024</p>
                    <p>23-26 mai 2024</p>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">1200 euros par année (12 journées)</strong> Engagement sur l'année (si nécessaire tarif réduit sur demande)
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">à la Dérive</strong> Pont Menou (29620)
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}