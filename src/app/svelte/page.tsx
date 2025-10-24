import ExampleCode from "@/components/exampleCode";
import KeySkills from "@/components/keySkills";

export const metadata = {
  title: "Svelte | Zack Pouget",
  description: "Experience using Svelte",
};

const code = `<script lang="ts">
  let count = 0;

  function increment() {
    count += 1;
  }
</script>

<div class="p-4 border rounded-md shadow-sm text-center">
  <h2 class="text-xl font-semibold mb-2">Svelte Counter Example</h2>
  <p class="text-gray-700 mb-4">Count: {count}</p>
  <button
    on:click={increment}
    class="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition"
  >
    Increment
  </button>
</div>`

export default function SveltePage() {
  return (
    <main className="max-w-3xl md:mx-auto px-6 py-16 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Svelte</h1>
      <p className="text-lg text-gray-700 mb-10">
        Svelte is an easy to use alternative to React that I&apos;ve grown to love.
        I personally find it to be easier to use, but I also find it to be more
        performant. Both of these are due to Svelte&apos;s compiler, which not only 
        allow Svelte to add to and modify vanilla Javascript and Typescript,
        but also removes the need for a virtual DOM like React
      </p>

      {/* Key Skills */}
      <KeySkills skills={[
        "Creating reactive components using Svelte&apos;s reactivity model",
        "Using stores for global state management",
        "Transition and animation handling with built-in Svelte features",
        "Building performant single-page and static applications with SvelteKit",
        "Integrating TypeScript for strong typing in Svelte components"
      ]}/>

      {/* Example Code */}
      <ExampleCode 
        description="Here&apos;s an example Svelte component that increments a counter whenever
        a button is clicked. Notice how Svelte&apos;s reactivity allows direct
        variable updates without hooks or a virtual DOM."
        code={code}
      />
    </main>
  );
}
