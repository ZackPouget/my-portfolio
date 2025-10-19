export const metadata = {
  title: "Svelte | Zack Pouget",
  description: "Experience using Svelte",
};

export default function SveltePage() {
  return (
    <main className="max-w-3xl md:mx-auto px-6 py-16 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Svelte</h1>
      <p className="text-lg text-gray-700 mb-10">
        Svelte is an easy to use alternative to React that I've grown to love.
        I personally find it to be easier to use, but I also find it to be more
        performant. Both of these are due to Svelte's compiler, which not only 
        allow Svelte to add to and modify vanilla Javascript and Typescript,
        but also removes the need for a virtual DOM like React
      </p>

      {/* Key Skills */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-600 mb-3">Key Skills</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Creating reactive components using Svelte’s reactivity model</li>
          <li>Using stores for global state management</li>
          <li>Transition and animation handling with built-in Svelte features</li>
          <li>Building performant single-page and static applications with SvelteKit</li>
          <li>Integrating TypeScript for strong typing in Svelte components</li>
        </ul>
      </section>

      {/* Example Code */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-600 mb-3">Example Code</h2>
        <p className="text-gray-700 mb-4">
          Here’s an example Svelte component that increments a counter whenever
          a button is clicked. Notice how Svelte’s reactivity allows direct
          variable updates without hooks or a virtual DOM.
        </p>

        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed shadow-inner">
          <code>{
`<script lang="ts">
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
          }</code>
        </pre>
      </section>
    </main>
  );
}
