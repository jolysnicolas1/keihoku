"use client"

import Image from 'next/image'
import logo from 'public/vector.png'
import Agenda from './Agenda'


export default function Home() {
  return (
    <main className="min-h-screen relative lg:mx-12 mx">
      <Image
      className='absolute z-0'
      src={logo}
      width={500}
      height={500}
      layout="fixed"
      alt="logo"
      />
      <h1 className='p-5 text-4xl font-thin'>Keihoku Studio</h1>
      {/* <Agenda></Agenda> */}
    </main>
  )
}
