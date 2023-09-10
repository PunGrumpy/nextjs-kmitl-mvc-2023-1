import ApiDocumentation from '@/components/Api.document.component'
import Header from '@/components/Header.component'

export default function APIDocs() {
  return (
    <div>
      <Header />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ApiDocumentation />
      </div>
    </div>
  )
}
