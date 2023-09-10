'use client'

import React, { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { IoMenu, IoClose } from 'react-icons/io5/index.js'
import DropdownMenuItem from './DropdownMenuItem.component'

interface MenuItem {
  name: string
  href: string
}

interface Props {
  menuItems: MenuItem[]
}

export default function DropdownMenu({ menuItems }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className="inline-flex justify-center rounded-md border border-zinc-700 px-2 py-2 text-sm font-medium shadow-sm bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 transition-all"
          aria-label="menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <IoClose className="h-5 w-5" />
          ) : (
            <IoMenu className="h-5 w-5" />
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        show={menuOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md border border-zinc-700 bg-zinc-800 shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-nonedivide-zinc-700">
          <div className="py-1">
            <div className="px-3 py-2 uppercase font-bold text-xs">Menu</div>
            {menuItems.map((menuItem, index) => (
              <DropdownMenuItem key={index} href={menuItem.href}>
                {menuItem.name}
              </DropdownMenuItem>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
