const navigation = {
  solutions: [
    { name: 'Skinner Realesing Technique & Composition Instantanée', date: '28/29 septembre 2024', href: '/skinner-realesing-technique' },
    { name: 'Aunkaï', date: '04 octobre 2024', href: '/manabu' },
    { name: 'Danse contemporaine & technique Alexander', date: '20/21/22/23 février 2025', href: '/antonia-pons-capo/stage-2024' },
  ],
  company: [
    { name: 'La Dérive', href: 'https://pontmenou.jimdofree.com/' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-24" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 group">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <p className="text-5xl leading-6 uppercase font-thin bg-clip-text text-transparent bg-gradient-to-br from-blue-300 to-blue-700 group-hover:text-blue-500 duration-1000">
              Keihoku Studio
            </p>
            <p className="text-sm leading-6 text-gray-300">
              Pratiques de corps, danse et soin. À la Dérive
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Agenda</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name} className="text-gray-300">
                      <a href={item.href} className="text-sm leading-6">
                        <p className="font-bold">{item.date}</p>
                        <p className="hover:text-white duration-500">{item.name}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Le lieu</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} target="blank" className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">2024 Keihoku Studio</p>
        </div>
      </div>
    </footer>
  )
}
