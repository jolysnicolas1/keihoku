import Element from "./Element"

export default function Agenda() {
  return (
    <div className='z-20 
                    grid 
                    grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-4 
                    gap-5 m-5'
                    >
        <Element></Element>
        <Element></Element>
        <Element></Element>
        <Element></Element>
    </div>
  )
}
