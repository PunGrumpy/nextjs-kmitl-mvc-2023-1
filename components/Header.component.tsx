import Link from 'next/link'
import './Header.component.css'

export default function Header() {
  return (
    <header className="fixed w-full p-2 z-20 backdrop-blur-lg shadow-2xl bg-slate-50 bg-opacity-5">
      <div className="mx-auto max-w-3xl">
        <nav className="flex items-center justify-between text-base">
          <Link href="/" className="group">
            <h2 className="text-3xl font-semibold tracking-tighter p-2 font-mplus coloring-text">
              Monix Simulator
            </h2>
          </Link>
          <div className="hidden md:flex">
            <Link
              href="/api"
              className="inline-flex items-center gap-1 hover:text-transparent coloring-text-hover"
            >
              <span className="font-medium text-lg tracking-wide">
                API Documentation
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
