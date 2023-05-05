import Image from "next/image"
import sea from 'public/keihoku.webp'

export default function Element() {
    return (
        <div className="z-100">
            <Image
            className='z-0'
            src={sea}
            alt="logo"
            />
            <p className="font-bold">Dimanche 07 mai 2023</p>
            <p>Atelier guidé par Émilia Giudicelli</p>
        </div>
    )
  }
  