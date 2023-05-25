import Image from "next/image"
import corea from 'public/corea.webp'
import Link from "next/link"
import TwCaSeFait from "./TwCaSeFait"


export default function Home() {
    return (
      <main className="min-h-screen pt-12 flex flex-col space-y-12 sm:ml-12 md:ml-24">
        <TwCaSeFait></TwCaSeFait>
      </main>
    )
  }