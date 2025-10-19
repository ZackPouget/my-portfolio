export default function Card({title, content}:{title: string, content: string}) {
    return <div className="bg-gray-100 p-6 rounded-2xl shadow-sm w-64">
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-600">{content}</p>
    </div>
}