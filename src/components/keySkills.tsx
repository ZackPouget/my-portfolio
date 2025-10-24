export default function KeySkills({skills}: {skills: string[]}) {
    return <>
        <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-600 mb-3">Key Skills</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {skills.map((skill, index) => <li key={index}>{skill}</li>)}
        </ul>
      </section>
    </>
}