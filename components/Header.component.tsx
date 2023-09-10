import Link from 'next/link'
import DropdownMenu from './DropdownMenu.component'

export default function Header() {
  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'API Documentation', href: '/api' }
  ]

  return (
    <header className="fixed w-full p-2 z-20 backdrop-blur-lg shadow-2xl bg-zinc-50 bg-opacity-5">
      <div className="mx-auto max-w-3xl">
        <nav className="flex items-center justify-between text-base">
          <Link href="/" className="group">
            <h2 className="text-3xl font-semibold tracking-tighter p-2 font-mplus coloring-text">
              Monix Simulator
            </h2>
          </Link>
          <div className="hidden md:flex gap-4 items-center">
            {menuItems.map((menuItem, index) => (
              <Link
                key={index}
                href={menuItem.href}
                className="inline-flex items-center gap-1 hover:text-transparent coloring-text-hover"
              >
                <span className="font-medium text-lg tracking-wide">
                  {menuItem.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <DropdownMenu menuItems={menuItems} />
          </div>
        </nav>
      </div>
    </header>
  )
}
