import Image from "next/image"
import corea from 'public/corea.webp'
import Link from "next/link"


export default function Home() {
    return (
      <main className="min-h-screen pt-12 flex flex-col space-y-12 sm:ml-12 md:ml-24">
        <div className="flex flex-col md:flex-row border-blue-500 border-t-4 border-l-4  justify-between sm:p-5 md:p-0 xl:ml-60">
            <div className="flex flex-col align-center text-xl space-y-3 p-4 md:pl-12 md:justify-center md:w-fit md:grow">
                <div className="font-medium lg:hidden">
                    <p className='text-cyan-200'>ÇA.SE.FAIT.#3/ATELIER</p>
                    <p className='text-blue-500'>.DE.DANSE/ÉMILIA.GIUDICELLI</p>
                </div>
                <div className="font-medium hidden lg:flex">
                    <p className='text-cyan-200'>ÇA.SE.FAIT.#3/ATELIER</p>
                    <p className='text-blue-500'>.DE.DANSE/ÉMILIA.GIUDICELLI</p>
                </div>
                <div className="text-sm pl-6 -space-y-1">
                    <p>Vendredi 11 juin de <strong className="font-medium text-blue-500">10:00 À 18:00</strong></p>
                </div>
                <div className="text-sm -space-y-2">
                    <p className="text-red-500">tarif</p>
                    <p className="pl-2">40 euros (si nécessaire, réduit 30e)</p>
                </div>
                <div className="text-sm -space-y-2 pb-2 sm:pb-4">
                    <p className="text-red-500">inscriptions</p>
                    <p className="pl-2">keihoku.studio@gmail.com</p>
                </div>
            </div>
            <div className="flex flex-col items-center min-w-[300px]">
                <Image
                    className=''
                    src={corea}
                    height={500}
                    width={500}
                    alt="maru"
                    />
                <Link className="text-sm underline" href="https://www.emiliagiudicelli.org">www.emiliagiudicelli.org</Link>;
            </div>
        </div>

        <div className="p-5 md:pr-12 xl:px-44 2xl:px-60">
            <h2>ÇA SE FAIT #1</h2>
            <p className="font-bold">Être mu.e, être dansé.e, être vu.e</p>
            <p>Biodynamique d&apos;un corps qui respire. Voir ce qui est à l&apos;  œuvre dans mon
corps, ici-et-maintenant.</p>
            <p>Entrevoir les multiples ressources dont je suis constitué.e, qu&apos;elles
soient tissulaires, mémorielles, neuronales, organiques, ou imaginales.
Je me contacte, j&apos;écoute, je rentre en mouvement, ça informe mon corps
spontané, ça danse.</p>
            <p>Rejoindre alors un état où la danse devance mon mental d&apos;une fraction de
seconde.</p>
            <p>Se tenir là, en contemplation active de ce fil-ci qui se poursuit en
relation à du regard, du son ou des silences.</p>
            <p>S&apos;y préparer avec soin et plaisir.</p>
            <p>Nous travaillerons la présence à soi.
</p>
            <p>Je me tiens debout. Je respire, je suis verticalisé.e. par la gravité,
et là, à un moment, il va se passer quelque chose. Ma tête me gratte.
Alors que mes doigts s&apos;approchent de mon cuir chevelu, une myriade de
petites chaînes musculaires se mobilise. Laisser ce fil se dérouler.
Puis le cœur prend le relais dans ce qu&apos;il a de pulse, de joies et de
chagrin. Mon récit intérieur se fait gestes et images, loi et
déconstruction, plaisir et contretemps, contrepoids et envol, harmonieux
ou illisible.</p>
            <p>Je me tiens debout. Je respire, je suis verticalisé.e. par la gravité,
et là, à un moment, il va se passer quelque chose. Ma tête me gratte.
Alors que mes doigts s&apos;approchent de mon cuir chevelu, une myriade de
petites chaînes musculaires se mobilise. Laisser ce fil se dérouler.
Puis le cœur prend le relais dans ce qu&apos;il a de pulse, de joies et de
chagrin. Mon récit intérieur se fait gestes et images, loi et
déconstruction, plaisir et contretemps, contrepoids et envol, harmonieux
ou illisible.</p>
            <p>Prendre son temps dans l&apos;improvisation tout en pratiquant l&apos;écoute
active. Le présent toujours le présent.</p>
            <p>La disponibilité à soi se prépare, se teste, s&apos;expérience, se rétracte
ou s&apos;agrandit.</p>
            <p>Ne pas avoir à produire de danse. Ne pas avoir à réfléchir sa danse.
Rien à inventer.</p>
            <p>Un endroit risqué et confortable, parfois émouvant.</p>
        </div>
      </main>
    )
  }