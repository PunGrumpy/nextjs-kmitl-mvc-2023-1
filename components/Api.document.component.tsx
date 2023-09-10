export default function ApiDocumentation() {
  return (
    <div className="min-h-screen flex items-center justify-center my-6">
      <div className=" text-gray-50 p-8 rounded-lg max-w-3xl w-full backdrop-blur-lg shadow-2xl bg-zinc-900 bg-opacity-75 md:px-16 md:py-12 mt-16">
        <h1 className="text-4xl font-semibold mb-6 text-center">
          API Documentation
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">
            GET <span className="coloring-text">/api/monix</span>
          </h2>
          <p className="text-zinc-400 mb-4">
            Retrieve data within the last hour. This endpoint provides
            information about...
          </p>
          <div className="border-t border-gray-400 pt-4">
            <h3 className="text-xl font-semibold mb-2">Response</h3>
            <pre
              className="p-4 rounded-lg text-white backdrop-blur-lg bg-opacity-0"
              lang="json"
            >
              {`{
  "average": 42,
  "percentile50": 50,
  "percentile90": 90,
  "percentile95": 95
}`}
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">
            POST <span className="coloring-text">/api/monix</span>
          </h2>
          <p className="text-zinc-400 mb-4">
            Create a new timeData entry. This endpoint allows you to submit data
            for...
          </p>
          <div className="border-t border-gray-400 pt-4">
            <h3 className="text-xl font-semibold mb-2">Request Body</h3>
            <pre
              className="p-4 rounded-lg text-white backdrop-blur-lg bg-opacity-0"
              lang="json"
            >
              {`{
  "time": "2023-09-10T12:00:00Z",
  "integerValue": 42
}`}
            </pre>
          </div>
          <div className="pt-4">
            <h3 className="text-xl font-semibold mb-2">Response</h3>
            <pre
              className="p-4 rounded-lg text-white backdrop-blur-lg bg-opacity-0"
              lang="json"
            >
              {`{
  "timeData": {
    "id": 1,
    "time": "2023-09-10T12:00:00Z",
    "integerValue": 42
  }
}`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  )
}
