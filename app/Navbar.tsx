import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gray-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="group hidden lg:flex lg:flex-1 lg:justify-end">
          <p className="text-md font-thin uppercase leading-6 bg-clip-text text-transparent bg-gradient-to-br from-blue-300 to-blue-700 group-hover:text-blue-500 duration-1000">
            Pratiques du mouvement à la Dérive
          </p>
        </div>
        <div className="group hidden lg:flex lg:flex-1 lg:justify-end">
          <p className="text-4xl font-thin uppercase leading-6 bg-clip-text text-transparent bg-gradient-to-br from-blue-300 to-blue-700 group-hover:text-blue-500 duration-1000">
            Keihoku Studio
          </p>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <p className="text-4xl font-thin uppercase leading-6 text-blue-500">
                Keihoku Studio
            </p>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
