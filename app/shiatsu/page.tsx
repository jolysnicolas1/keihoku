import Image from "next/image"
import manabu from 'public/manabu.webp'
import Footer from "../Footer"
import Link from "next/link"
import TwShiatsu from "./TwShiatsu"


export default function Home() {
    return (
      <main className="min-h-screen pt-12 flex flex-col space-y-12 sm:ml-12 md:ml-24">
        <TwShiatsu></TwShiatsu>
      </main>
    )
  }