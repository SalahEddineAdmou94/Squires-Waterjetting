/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MenuIcon } from '@heroicons/react/outline'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-transparent pt-8">
      {({ open }) => (
        <>
          <div className="mx-36 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="hidden lg:block h-36 w-auto"
                    src="./logo.png"
                    alt="Workflow"
                  />
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="flex text-sm rounded-full focus:outline-none">
                      <MenuIcon className='text-white w-8' />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 font-medium focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="New-Estimation"
                            className={classNames(active ? '' : '', 'block px-4 py-2 text-sm text-white hover:text-gray-400')}
                          >
                            New Estimation
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="Our-Services"
                            className={classNames(active ? '' : '', 'block px-4 py-2 text-sm text-white hover:text-gray-400')}
                          >
                            Our services
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="About-us"
                            className={classNames(active ? '' : '', 'block px-4 py-2 text-sm text-white hover:text-gray-400')}
                          >
                            About Us
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/Contact-Us"
                            className={classNames(active ? '' : '', 'block px-4 py-2 text-sm text-white hover:text-gray-400')}
                          >
                            Contact Us
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
