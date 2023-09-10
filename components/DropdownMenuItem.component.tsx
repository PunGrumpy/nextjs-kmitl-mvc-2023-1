'use client'

import Link from 'next/link'

type DropdownMenuItemProps = {
  href: string
  children: React.ReactNode
}

export default function DropdownMenuItem({
  href,
  children
}: DropdownMenuItemProps) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 text-sm text-gray-200 hover:bg-zinc-700 hover:text-gray-100"
      role="menuitem"
    >
      {children}
    </Link>
  )
}
