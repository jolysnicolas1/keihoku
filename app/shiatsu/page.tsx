import Image from "next/image"
import maru from 'public/maru.webp'
import Footer from "../Footer"
import Link from "next/link"


export default function Home() {
    return (
      <main className="min-h-screen pt-12 flex flex-col space-y-12 sm:ml-12 md:ml-24">
        <div className="flex flex-col md:flex-row border-blue-500 border-t-4 border-l-4  justify-between sm:p-5 md:p-0 xl:ml-60">
            <div className="flex flex-col align-center text-xl space-y-3 p-4 md:pl-12 md:justify-center md:w-fit md:grow">
                <div className="font-medium lg:hidden">
                    <p className='text-cyan-200'>MOLECULAR.DANCE/BUTOH</p>
                    <p className='text-blue-500'>.WORKSHOP/MARUSKA.RONCHI</p>
                </div>
                <div className="font-medium hidden lg:flex">
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
                <div className="text-sm -space-y-2 pb-2 sm:pb-4">
                    <p className="text-red-500">inscriptions</p>
                    <p className="pl-2">keihuko.studio@gmail.com</p>
                </div>
            </div>
            <div className="flex flex-col items-center min-w-[300px]">
                <Image
                    className=''
                    src={maru}
                    height={500}
                    width={500}
                    alt="maru"
                    />
                <Link className="text-sm underline" href="https://maruskaronchi.com">maruskaronchi.com</Link>;
            </div>
        </div>

        <div className="p-5 md:pr-12 xl:px-44 2xl:px-60">
            <p>
            All cells in our body are made up of molecules, which are themselves made up of atoms, that are bonded together. These molecules are composing and recomposing theirselves, by breaking and changing the way the atoms are bound together, in an eternal dance, which is becoming possible through the space and energy inbetween each particle. As human beings, we can perceive this empty space and energy inside us. At the same time life its a continuous exchange of giving and receiving. As the atoms are connected
into the form of a molecule, bonds with other people are important and vital for our human life. To recognize and realize this bonding we also need space (big or small as it is) and silence. In the stillness we can feel this eternal dance of life. In this workshop we like to experiment with new ways of creation of our personal movement, exploring our body as matter and feeling the empty space and moments of silence between movements. Guided explorations with concrete and abstract images will help us to find new ways and new interaction with the space and other people. The silence inbetween movements is the door opener of new possibilities. Each one of us is a beautiful form of life. In the nature there are so many expressions of life, each one different, each one so unique and beautiful. Lets find our form, our unique quality and movement and bring this as a gift to the others. Lets feel the ties that bind us.
            </p>
        </div>
        <div className="p-5 md:pr-12 xl:px-44 2xl:px-60">
            <p>
                Maruska Ronchi is an independent butoh dancer, choreographer, performer and teacher. Graduated in Contemporary dance, she discovered butoh in 2009 with Atsushi Takenouchi and, since then, researching in butoh under his guidance, becoming his assistant in JINEN butoh school in Italy where she had the possibility to dive deeply into butoh practice for 12 years. Besides that, she met many other important teachers, among others, Yoshito Ohno, Masaki Iwana, Yumiko Yoshioka, Minako Seki, Carlotta Ikeda, Seisaku, Sankai Yuku. She is developing her own approach to the creative process as an alchemical process of transmutation; she is collaborating with international artists, founding HAIKUMU (with Ursula Pehlke and William Lopes), Butoh_Pan Group, participating to Sense-Ability a collaborative online experiment with 14 artists initiated by Gio -Hyunju Shin), and Hafjor-Oceanus artistic residesidency and festival in Iceland, to make and developing original way for new creations. She danced under the direction of Atsushi Takenouchi, Joan Laage, and Seisaku. Besides her dance activities as a performer, she is deeply engaged in teaching through classes and workshops all over the world.
            </p>
        </div>
      </main>
    )
  }