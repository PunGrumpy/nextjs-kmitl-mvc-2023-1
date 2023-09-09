import { getApiDocs } from '@/lib/swagger'
import ReactSwagger from './monix/react-swagger'

export default async function Page() {
  const spec = await getApiDocs()

  return (
    <div className="bg-[url('/images/wallpaper.png')] min-h-screen text-white">
      <section>
        <div className="container mx-auto py-16">
          <header className="text-center">
            <h1 className="text-4xl font-extrabold mb-8">API Documentation</h1>
          </header>
          <ReactSwagger spec={spec} />
        </div>
      </section>
    </div>
  )
}
