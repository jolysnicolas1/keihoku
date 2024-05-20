import raji from "/public/raji1.png";
import Image from 'next/image';

export default function Example() {
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

              <a href="/#" className="flex uppercase space-x-5 hover:text-neutral-700 text-base font-semibold leading-7 text-indigo-600 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                <span>AGENDA</span>
              </a>
              <p className="mt-4 text-base text-red-500 border border-red-600 p-2 font-semibold w-fit px-8 mb-5">
              <span className="p-3" aria-hidden="true">&rarr;</span>
              Inscriptions ouvertes
            </p>
            <div className="bg-sky-50 p-5 rounded border drop-shadow my-5">
            <h2 className="text-2xl font-bold tracking-tight text-red-500">Solo Chorésophique</h2>
              <p className="">
                À l&apos;issue de la journée de stage, Michel RAJI nous proposera un solo 
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-netral-700">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>
                  <div>
                    Samedi 06 juillet <strong className="font-semibold text-neutral-700">à 18:30</strong>
                  </div>
                </div>
                </li>
              </ul>
              </div>
              <p className="text-base font-semibold leading-7 text-neutral-700">Prochain Stage 06 & 07 juillet 2024</p>
              <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">Stage du souffle et du mouvement</h1>
              <h2 className="text-gray-500 font-bold text-3xl my-3 tracking-wider">avec Michel RAJI</h2>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Nous avons le plaisir d’accueillir à la Dérive Michel Raji pour le partage de sa puissante Pratique du Souffle. Souffle Régénérateur. Souffle Créateur. Souffle Alchimique. Souffle Vivant.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Image
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={raji}
              height={300}
              width={300}
              alt="Antonia"
            />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Le stage s&apos;adresse à toute personne désireuse de découvrir ou d&apos;approfondir la pratique du souffle en mouvement.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">Inscriptions par email à </strong>
                    <a href="mailto:keihoku.studio@gmail.com" className="  hover:text-blue-500 duration-300">keihoku.studio@gmail.com</a>
                  </span>
                </li>
                <li className="flex gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-netral-700">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <div>
                  <div>
                    Samedi 06 juillet <strong className="font-semibold text-neutral-700">de 10:00 à 17:30</strong>
                  </div>
                  <div>
                    Dimanche 07 juillet <strong className="font-semibold text-neutral-700">de 10:00 à 17:30</strong>
                  </div>
                </div>
                </li>
                <li className="flex gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-neutral-700">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                  <span>
                    <strong className="font-semibold text-neutral-700">Stage de 2 jours - 100 euros</strong> (tarif réduit 80 euros)
                  </span>
                </li>
                <li className="flex gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
                  <span>
                    <strong className="font-semibold text-neutral-700">Limitée à 30 participants</strong>
                  </span>
                </li>
                <li className="flex gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                  <span>
                    <strong className="font-semibold text-neutral-700">À la Dérive</strong>, Pont-Menou (29620)
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-red-500">Michel RAJI - Biographie</h2>
              <p className="mt-6 italic">
              Danseur et chorégraphe formé aux techniques classiques et contemporaines. Venant d&apos;une tradition qui lui permet de tisser des relations profondes avec la danse, le chant et la musique. Michel Raji fonde en 1985 sa propre voie, qu’il nomme « Chorésophie », une synthèse qui relie la danse à sa dimension « Intemporaine », matérielle et spirituelle.
              Explorant l&apos;essence du geste, son travail de recherche s&apos;ancre dans un souffle vital qui s&apos;affine, s&apos;accorde, tel un instrument, puis se déploie dans une pulsation de la respiration en mouvement.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-red-500">Stage - sensorium</h2>
              <p className="mt-6">
                Ce week-end des 6 et 7 juillet prochain, Michel RAJI nous invite à entrer en Sensorium, espace d&apos;expériences et d&apos;explorations, temps de pratique du Souffle en Mouvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

