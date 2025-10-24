import ExampleCode from "@/components/exampleCode";
import KeySkills from "@/components/keySkills";

// app/react/page.tsx
export const metadata = {
  title: "React | Zack Pouget",
  description: "Experience using React",
};

const code = `import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded-md shadow-sm text-center">
      <h2 className="text-xl font-semibold mb-2">React Counter Example</h2>
      <p className="text-gray-700 mb-4">Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Increment
      </button>
    </div>
  );
}`  

export default function ReactPage() {
  return (
    <main className="max-w-3xl md:mx-auto px-6 py-16 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">React</h1>
      <p className="text-lg text-gray-700 mb-10">
        As one of the most popular UI frameworks, React was one of the first tools
        I used to create websites. Even this website is built using React! While
        my preference is now to use Svelte for my own projects, I feel perfectly
        comfortable using React for UI.
      </p>

      <KeySkills skills={[
        "React Hooks and functional components",
        "Context API and state management (Redux, Immer)",
        "Server Components and Next.js integration",
        "Optimizing rendering and bundle performance"
      ]}/>

      {/* Example Code */}
      <ExampleCode description="Here&apos;s an example component that simply increments a count whenever a button is clicked" code={code}/>
    </main>
  );
}
