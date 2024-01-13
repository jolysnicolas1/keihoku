import manabu from "/public/manabu-care.webp";
import Image from 'next/image';
import Link from 'next/link';

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
            <div className="flex justify-between py-12">
                <a href="/" className="flex uppercase space-x-5 hover:text-neutral-700 text-base font-semibold leading-7 text-indigo-600 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    <span>Agenda</span>
                </a>
                <div>
                    <a href="/formation-shiatsu" className="flex uppercase space-x-5 hover:text-neutral-700 text-base font-semibold leading-7 text-indigo-600 cursor-pointer justify-end">
                    <span>Formation Shyuyou shiatsu</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    </a>
                    <a href="/manabu/aunkai/01-2024" className="flex uppercase space-x-5 hover:text-neutral-700 text-base font-semibold leading-7 text-indigo-600 cursor-pointer justify-end">
                    <span>Aunkaï</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    </a>
                    <p className="flex uppercase space-x-5 text-base font-semibold leading-7 text-neutral-400 justify-end">
                    <span>Massage des pieds - 11/2023</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    </p>
                    <p className="flex uppercase space-x-5 text-base font-semibold leading-7 text-neutral-400 justify-end">
                    <span>Initiation Aunkaï & Shiatsu - 07/2024</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    </p>
                </div>

            </div>
              <p className="text-lg font-semibold leading-7 text-neutral-700">Manabu Watanabe & Alain Tauch</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shyuyou Shiatsu & Aunkaï</h1>
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
              className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src={manabu}
              height={300}
              width={300}
              alt="Manabu Watanabe"
            />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="mt-6 text-xl leading-8 text-neutral-400 font-bold uppercase">
                Manabu Watanabe
              </p>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Quand je vivais en tant que salarié, je me suis intéressé à la santé du corps à cause du stress physique et du stress de la société moderne. Je voulais en savoir plus sur mon corps et améliorer mon inconfort. C&apos;est mon point de départ pour explorer le corps et soigner les gens.
              </p>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                J’ai exploré le thème « connaître le corps humain » en expérimentant diverses pratiques corporelles telles que la Technique Alexander, le Rolfing, les arts martiaux (Aunkai, 阿 吽 会), les soins infirmiers et le shiatsu. Le shiatsu bénéficie de la connaissance de nos ancêtres permettant de libérer le corps du stress quotidien. C’est aussi le moyen de connecter les gens avec les doigts et les paumes et de redonner à la communauté et à la société. Mon voyage continuera encore longtemps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
