export const metadata = {
  title: "TypeScript | Zack Pouget",
  description: "Experience using TypeScript",
};

export default function TypeScriptPage() {
  return (
    <main className="max-w-3xl md:mx-auto px-6 py-16 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">TypeScript</h1>
      <p className="text-lg text-gray-700 mb-10">
        TypeScript has become an essential part of my development process.
        It enhances JavaScript with strong typing, interfaces, and modern
        tooling support, making my codebase more predictable, scalable, and
        easier to maintain. Whether working in React or Svelte, TypeScript
        helps me catch errors early and write clearer, more reliable code.
      </p>

      {/* Key Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-600 mb-3">Key Skills</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Designing and implementing complex types and interfaces</li>
          <li>Using generics for reusable, type-safe code</li>
          <li>Integrating TypeScript with React and Svelte projects</li>
          <li>Leveraging utility types for flexible and maintainable code</li>
        </ul>
      </section>

      {/* Example Code */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-600 mb-3">Example Code</h2>
        <p className="text-gray-700 mb-4">
          Here’s an example of how TypeScript’s type system can help enforce
          structure and improve reliability while maintaining flexibility.
        </p>

        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed shadow-inner">
          <code>{
`type User = {
  id: number;
  name: string;
  email?: string; // Optional property
};

function greetUser(user: User): string {
  return \`Hello, \${user.name}!\`;
}

// Example usage
const zack: User = { id: 1, name: "Zack Pouget" };
console.log(greetUser(zack));`  
          }</code>
        </pre>
      </section>
    </main>
  );
}