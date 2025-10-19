// app/page.tsx
import Card from "@/components/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-6">
        <h1 className="text-5xl font-bold mb-4">Hi, I&apos;m Zack Pouget</h1>
        <h2 className="text-2xl text-gray-600 mb-6">Software Developer</h2>
        <p className="max-w-2xl text-lg text-gray-500">
          I build modern, performant web applications using{" "}
          <strong>React</strong>, <strong>Svelte</strong>, and{" "}
          <strong>TypeScript</strong>. I love clean code, accessible design, and
          creating delightful user experiences.
        </p>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white text-center">
        <h3 className="text-3xl font-semibold mb-8">My Tech Stack</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <Card
            title={"React"} 
            content={"Component-driven UI with hooks & state."}
          />
          <Card
            title={"Svelte"} 
            content={"Reactive UI with minimal overhead."}
          />
          <Card
            title={"TypeScript"} 
            content={"Type-safe and maintainable codebase."}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-grey-50 text-center">
        <h3 className="text-3xl font-semibold mb-8">Get In Touch</h3>
        <p className="text-gray-600 mb-4">
          Interested in collaborating or learning more?
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="mailto:zackpouget@gmail.com"
            className="text-blue-600 hover:underline"
          >
            Email: zackpouget@gmail.com
          </a>
          <a
            href="https://github.com/ZackPouget"
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}