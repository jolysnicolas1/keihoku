const navigation = {
  solutions: [
    { name: 'Aunkaï', date: '15 mars 2024', href: '/manabu/aunkai/03-2024' },
    { name: 'Danse contemporaine & technique Alexander', date: '20/21/22/23 février 2024', href: '/antonia-pons-capo/stage-2024' },
  ],
  teachers: [
    { name: 'Manabu Watanabe & Alain Tauch', href: '/manabu' },
    { name: 'Antonia Pons Capo', href: '/antonia-pons-capo' },
    { name: 'Maruska Ronchi', href: '/butoh' },
    { name: 'Émilia Giudicelli', href: '/ca-se-fait' },
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
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Les intervenants</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.teachers.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white duration-500">
                        {item.name}
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
          <p className="text-xs leading-5 text-gray-400">&copy; 2024 Keihoku Studio, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
