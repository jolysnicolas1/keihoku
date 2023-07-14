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
            <div className="lg:max-w-lg space-y-5">

              <p className="text-base font-semibold leading-7 text-indigo-600">Manabu Watanabe & Alain Tauch</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shiatsu</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Manabu Watanabe et Alain Tauch pratiquent et enseignent le Shiatsu et L&lsquo;Aunkai
              </p>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Plus d&lsquo;information sur leur site 
                <Link href='https://sushiatsu.fr/' target="blank" className="font-bold hover:text-gray-500 duration-500"> sushiatsu.fr
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
              {/* <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Stage Shiatsu & Aunkai  <span className="text-gray-400" >- 01/02 juillet 2023</span> </h2>
              <div className="pt-5">
                <Link target="blank" className="bg-blue-500 text-white font-bold rounded-md p-3 my-5 hover:bg-blue-400 duration-500" href="https://notionforms.io/forms/inscription-stage-shiatsu-aunkai-juillet-2023-jfgfs0">
                  Sincrire au stage de Shiatsu & Aunkai
                </Link>
              </div>
              <p className="font-bold mt-6">
                Bunka (文化)
              </p>
                <em>Éléments de culture japonaise pour mieux appréhender la pratique du shiatsu et des arts martiaux traditionnels japonais.</em>
              <p className="mt-6 font-bold">
                Stage de découverte du Shiatsu et Aunkai.
              </p>
              <p className="mt-6">
              Pour ce stage nous vous proposons d’explorer la culture japonaise (bunka) afin de mieux comprendre les valeurs et principes dont se nourrissent les pratiques martiales et de santé venant du Japon. Ceci vous permettra de prendre conscience du rôle symbolique et éducatif de ces éléments culturels, et de les mettre à profit pour enrichir votre pratique.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600 pb-3">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">Samedi 01 juillet et Dimanche 02 juillet</strong> De 10:00 à 17:30
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">100 euros</strong> (tarif réduit 80 euros)
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">à la Dérive</strong> Pont Menou (29620)
                  </span>
                </li>
              </ul> */}
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Formation Shiatsu</h2>
              <div className="py-5">
                <Link target="blank" className="bg-blue-500 text-white font-bold rounded-md p-3 my-5 hover:bg-blue-400 duration-500" href="https://notionforms.io/forms/pre-inscriptions-formation-shiatsu-20232024-a99d2n">
                  <span className="text-indigo-300" >Inscription à la formation Shiatsu 2023/2024</span> - liste d attente
                </Link>
              </div>
              <p className="mt-6">
                Formation de Shiatsu. Cycle de 3 années
              </p>
              <div className="flex justify-between">
                <div className="border-red-100 rounded-lg drop-shadow-sm border-2 py-1 md:px-3 bg-red-50 my-5">
                  <p>1ère année</p>
                  <p>2023-2024</p>
                </div>
                <div className="border-red-100 rounded-lg drop-shadow-sm border-2 py-1 px-3 bg-red-50 my-5">
                  <p>2ème année</p>
                  <p>2024-2025</p>
                </div>
                <div className="border-red-100 rounded-lg drop-shadow-sm border-2 py-1 px-3 bg-red-50 my-5">
                  <p>3ème année</p>
                  <p>2025-2026</p>
                </div>
              </div>
              <ul role="list" className="bg-gray-50 p-5 mt-8 space-y-8 text-gray-600 drop-shadow-md rounded-lg">
                <li>
                  En bref...
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">Première année, 12 jours de septembre 2023 à mai 2024</strong> 
                    <div className="flex w-full py-5 md:pr-8 justify-between">
                      <div className="flex flex-col">
                        <p>Séminaire 1</p>
                        <p>Séminaire 2</p>
                        <p>Séminaire 3</p>
                        <p>Séminaire 4</p>
                        <p>Séminaire 5&6</p>
                      </div>
                      <div className="flex flex-col font-semibold">
                        <p className="
                        text-red-700 ">30 sept/01 oct 2023</p>
                        <p>25-26 novembre 2023</p>
                        <p>20-21 janvier 2024</p>
                        <p>16-17 mars 2024</p>
                        <p>23-26 mai 2024</p>
                      </div>
                      <div className="flex flex-col">
                        <p>2j</p>
                        <p>2j</p>
                        <p>2j</p>
                        <p>2j</p>
                        <p>4j</p>
                      </div>
                    </div>
                    <em>En cas d&lsquo;indisponibilité sur certains séminaires. Il y a la possibilité de rejoindre le groupe qui suit la formation à Paris.</em>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">1200 euros par année (12 journées)</strong> Engagement sur l&lsquo;année (si nécessaire tarif réduit sur demande)
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">à la Dérive</strong> Pont Menou (29620)
                  </span>
                </li>
              </ul>
              <div className="py-12 space-y-12">
                <h2 className="text-xl font-bold" >Organisation des cours</h2>
                <p className="mt-8">
                  6 séminaires avec 12h de cours par week-end (4 fois 2 jours + dernier séminaire de 4 jours), soit 72 heures de formation. Formations conduites à la Dérive (Pont-Menou 29620), dispensées par Manabu Watanabe en anglais et traduites en francais par Alain Tauch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}