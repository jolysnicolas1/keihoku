import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import manabu from "/public/manabu-care.webp";
import Image from 'next/image';
import Link from 'next/link';

interface Seminaire {
    number: string;
    date: string;
    title: string;
    contents: string[];
  }

const DisplaySeminaires = ({seminaires}: {seminaires: Seminaire[]}) => {
    return (
        <>
        {seminaires.map(seminaire => (
            <div 
            key={seminaire.date}
            className="mt-6 pl-3 border-l border-gray-300 rounded-md"
            >
                <div className="flex justify-between">
                    <p className="text-blue-700 font-semibold" >{seminaire.number}</p>
                    <p className="text-gray-500 rounded-l-lg font-medium bg-gray-50 px-3 mb-3">{seminaire.date}</p>

                </div>
                <p className="font-semibold">{seminaire.title}</p>
                <ul className="py-3 space-y-2"> {seminaire.contents.map(content =>
                    <li key={content}>{content}</li>
                    )} </ul>
            </div>
            ))}
        </>
    )
}

const seminaires = [
    {
      number: "Séminaire #1",
      date: "30 sept/01 oct 2023",
      title: "Position debout & point zéro, marcher (en utilisant le centre de gravité)",
      contents:[
        "Que connaissons nous de la structure du corps humain ?",
        "Se tenir debout, assis, marcher...je sais déjà faire ! Et bien en fait, ce n’est pas si simple que ça... C’est pour cela qu’on commence par étudier ce qu’est le mouvement.",
      ] 
    },
    {
      number: "Séminaire #2",
      date: "25/26 novembre 2023",
      title: "Position du corps (corps unifié), réaction en chaîne",
      contents:[
        "La posture correcte et les flux d’énergie",
        "Nos corps sont connectés ? Est ce une évidence ? Peut être pas tant que cela... !",
        "Un super-pouvoir peu connu mais qu’on a tous et qu’on appelle la “réaction en chaîne”, ou le mouvement ordonné",
      ] 
    },
    {
      number: "Séminaire #3",
      date: "20/21 janvier 2024",
      title: "Réaction en chaîne ② (inversée), extension de l’énergie (par les doigts)",
      contents:[
        "Self-control: est ce que je me maîtrise vraiment ?",
        "Qu’est-ce que la puissance ? On peut aussi la transmettre et faire des trucs cool avec.",
        "Nous maintenir en forme: le stretching est un jeu d’enfants.",
      ] 
    },
    {
      number: "Séminaire #4",
      date: "16/17 mars 2024",
      title: "Tanden (丹田) et respiration",
      contents:[
        "Donc c’est quoi exactement le Tanden ? Et cette énergie qui est sensée en sortir ?",
        "Respirez... sans gâcher votre souffle ! Accédez à votre potentiel latent.",
        "La méditation est un exercice difficle .. mais on le sait déjà !",
      ] 
    },
    {
      number: "Séminaire #5",
      date: "23/24 mai 2024",
      title: "Relaxation & spirales",
      contents:[
        "Connaisez vous votre poids ? Pouvez vous le sentir ?",
        "Où sont mes os, mes muscles, mes organes ?",
        "La spirale, symbole des temps anciens … il y a du sens",
      ] 
    },
    {
      number: "Séminaire #6",
      date: "25/26 mai 2024",
      title: "Révision générale, test final (étude de cas)",
      contents:[
        "Compilation de nos trouvailles",
        "Questions & Réponses",
        "Test final et obtention du certificat !",
      ] 
    },
  ];

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

              <a href="/manabu" className="flex uppercase space-x-5 hover:text-neutral-700 text-base font-semibold leading-7 text-indigo-600 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                </svg>
                <span>Manabu Watanabe & Alain Tauch</span>
              </a>
              <p className="mt-4 text-base text-red-500 border border-red-600 p-2 font-semibold w-fit pr-5 mb-5">
              <span className="p-3" aria-hidden="true">&rarr;</span>
                 Cycle 1 - Formation complète
            </p>
              <p className="text-base font-semibold leading-7 text-neutral-700">Cycle 1 - 09/2023-05/2024</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shyuyou Shiatsu</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Formation sur 3 ans élaborée par Manabu Watanabe et Alain Tauch.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Image
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={manabu}
              height={300}
              width={300}
              alt="Antonia"
            />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Plus d&lsquo;information sur leur site 
                <Link href='https://sushiatsu.fr/' target="blank" className="font-bold hover:text-gray-500 duration-500"> sushiatsu.fr
                </Link>
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
                <div>
                  <div>
                    De septembre 2023 à mai 2024
                  </div>
                </div>
                </li>
                <li className="flex gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-neutral-700">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                  <span>
                    <strong className="font-semibold text-neutral-700">Cycle 1 - 12 jours</strong> 1200 euros (tarif réduit 990 euros)
                  </span>
                </li>
                <li className="flex gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
                  <span>
                    <strong className="font-semibold text-neutral-700">Limitée à 25 participants</strong>
                  </span>
                </li>
                <li className="flex gap-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                  <span>
                    <strong className="font-semibold text-neutral-700">À la Dérive</strong>, Pont-Menou (29620)
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-red-500">Shyuyou Shiatsu - Cycle 1</h2>
              <div className="max-w-xl">
                    <DisplaySeminaires seminaires={seminaires} />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
