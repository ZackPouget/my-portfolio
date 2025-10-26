import ExampleCode from "@/components/exampleCode";
import KeySkills from "@/components/keySkills";

export const metadata = {
  title: "TypeScript | Zack Pouget",
  description: "Experience using TypeScript",
};

const code = `type User = {
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

export default function TypeScriptPage() {
  return (
    <main className="max-w-3xl md:mx-auto px-6 py-16 bg-gray-50 dark:bg-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">TypeScript</h1>
      <p className="text-lg text-gray-700 dark:text-gray-200 mb-10">
        TypeScript has become an essential part of my development process.
        It enhances JavaScript with strong typing, interfaces, and modern
        tooling support, making my codebase more predictable, scalable, and
        easier to maintain. Whether working in React or Svelte, TypeScript
        helps me catch errors early and write clearer, more reliable code.
      </p>

      {/* Key Skills */}
      <KeySkills skills={[
        "Designing and implementing complex types and interfaces",
        "Using generics for reusable, type-safe code",
        "Integrating TypeScript with React and Svelte projects",
        "Leveraging utility types for flexible and maintainable code"
      ]}/>

      {/* Example Code */}
      <ExampleCode 
        description="Here&apos;s an example of how &apos;s type system can help enforce
          structure and improve reliability while maintaining flexibility."
        code={code}
      />
    </main>
  );
}