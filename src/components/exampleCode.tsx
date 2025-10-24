export default function ExampleCode({description, code}: {description: string, code: string}) {
    return <section>
        <h2 className="text-2xl font-semibold text-gray-600 mb-3">Example Code</h2>
        <p className="text-gray-700 mb-4">{description}</p>

        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed shadow-inner">
          <code>{code}</code>
        </pre>
    </section>
}