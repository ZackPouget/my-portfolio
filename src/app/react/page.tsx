// app/react/page.tsx
export const metadata = {
  title: "React | Zack Pouget",
  description: "Projects and experience using React",
};

export default function ReactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">React</h1>
      <p className="text-lg text-gray-700 mb-10">
        React is my primary front-end framework, and I’ve used it extensively to
        build responsive, component-based web applications. I enjoy structuring
        reusable UI systems, optimizing rendering performance, and working with
        TypeScript for type-safe, scalable codebases.
      </p>

      {/* Key Skills */}
      <section className="mb-12 text-gray-600">
        <h2 className="text-2xl font-semibold mb-3">Key Skills</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>React Hooks and functional components</li>
          <li>Context API and state management (Redux, Zustand)</li>
          <li>Server Components and Next.js integration</li>
          <li>Custom hooks and reusable component design</li>
          <li>Optimizing rendering and bundle performance</li>
        </ul>
      </section>
    </main>
  );
}
