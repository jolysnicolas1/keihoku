import Image from 'next/image'
import logo from 'public/vector.png'
import Agenda from './Agenda'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <Image
      className='absolute z-0'
      src={logo}
      width={1100}
      height={1100}
      alt="logo"
      />
      <Agenda></Agenda>
    </main>
  )
}
