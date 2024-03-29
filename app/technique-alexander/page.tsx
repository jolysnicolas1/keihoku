import Image from "next/image";
import antonia from "/public/antonia.jpeg";
import anton from "/public/anton.png";

export default function Home() {
  return (
    <main className="min-h-screen pt-12 flex flex-col space-y-12 sm:ml-12 md:ml-24">
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="w-full lg:max-w-lg lg:flex-auto">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            STAGE DANSE CONTEMPORAINE & TECHNIQUE F.M. ALEXANDER
            </h2>
            <p className="mt-6 text-2xl leading-8 text-gray-400 font-bold">
              Avec Antonia Pons Capo
            </p>
            <p className="mt-4 text-base text-red-500 border border-red-600 p-2 font-semibold">
              <span className="p-3" aria-hidden="true">&rarr;</span>
              Prochain stage du 20 au 23 février 2024
            </p>
            <p className="mt-6 text-xl leading-8 text-neutral-500 font-bold">
            Antonia Pons nous vient pour la troisième année de Toulouse pour nous proposer une traversée de sa méthode alliant danse, technique Alexander et Natura Respira. 
            </p>
            <p className="mt-4 text-base font-semibold leading-7 text-gray-900">
              à la Dérive, PONT-MENOU (29620)
            </p>
            <p className="mt-4 text-base font-semibold leading-7 text-gray-900">
              Stage de 4 jours - 155 euros <span className="font-normal">(réduit 135 euros)</span>
            </p>
            <p className="mt-2 text-base leading-7 text-gray-600">
              Mardi 20 février - de 14:30 à 18:30
            </p>
            <p className="text-base leading-7 text-gray-600">
              Mercredi 21 & jeudi 22 février - de 10:00 à 18:30
            </p>
            <p className="text-base leading-7 text-gray-600">
              Vendredi 23 février - de 10:00 à 17:30
            </p>
            <p className="text-base leading-7 text-gray-600 flex justify-between mb-5 mt-5">
              <span className="font-bold text-red-500">Inscriptions par mail </span>
              <span className="font-semibold text-bleu-500">keihoku.studio@gmail.com</span>
            </p>






            <Image
              className="hidden lg:inline bg-mt-16 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
              src={anton}
              height={300}
              width={300}
              alt="corea"
            />
          </div>
          <div className="w-full lg:max-w-xl lg:flex-auto">
            <Image
              className="bg-mt-16 aspect-[6/5] w-2/3  rounded-2xl bg-gray-50 object-contain lg:aspect-auto lg:h-[34.5rem]"
              src={antonia}
              height={300}
              width={300}
              alt="corea"
            />
            <ul className="-my-8 divide-y divide-gray-100">
              <li className="py-8">
                <h4 className="text-lg font-semibold tracking-tight text-gray-900 mt-5">
                  Formation, parcours
                </h4>
                <p className="mt-4 text-base font-semibold leading-7 text-gray-900">
                  Formée à l&apos;Instituto de Teatro de Barcelone en danse classique, puis en danse contemporaine au CNDC d&apos;Angers, Antonia est interprète pour Bernard Menaut, Jean-Pascal Gilly, Loïc Touzé/Fabienne Compet et, pendant plusieèle Rust et Cathy Vergne/Pierre-Charles Durouchoux, Anne Hivert, et pendant 12 ans avec Patricia Ferrara. Elle travaille également avec Christine Jouve/Patrick André, et participe aux projets de Ulrich Funke. Certifiée depuis 2019 en tant qu&apos;enseignante en technique F.M. Alexander, elle partage avec Ulrich Funke une recherche sur l&apos;influence des outils de cette technique sur la danse depuis 1998, dans le domaine de l&apos;enseignement et de la création. Professeur de la Méthode de Natura Respira (éducation posturale et respiration).
                </p>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  Antonia enseigne au Théâtre du Hangar, à l&apos;Espace st Cyprien, à la MJC Pont des Demoiselles, au CDC de Toulouse, pour l&apos;Association Dansité et l&apos;espace Pluriels à Pau, au CNFPT en tant que formatrice et transmet pour divers publics ; danseurs, comédiens, amateurs, professionnelles, séniors, enfants, personnes porteuses d&apos;handicap.
                </p>
                <p className="mt-4 flex items-center gap-x-3 text-base leading-7 text-gray-500">
                  <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-300" aria-hidden="true">
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
