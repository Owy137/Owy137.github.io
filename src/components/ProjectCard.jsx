export default function ProjectCard({ title, description, points, tags, link }) {
return (
    <article className="rounded-[1.75rem] border border-slate-700/80 bg-slate-900/80 p-6 shadow-[0_18px_42px_rgba(15,23,42,0.28)] backdrop-blur-xl">
    <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <span className="text-xl font-semibold uppercase tracking-[0.2em] text-violet-300">
        {title}
        </span>
    </div>
    <p className="mt-4 text-slate-300 leading-7">{description}</p>

    <div className="mt-5 list-disc space-y-3 pl-5 text-slate-300">
        {points.map((item, index) => (
        <li key={index}>{item}</li>
        ))}
    </div>

    <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
        <span
            key={tag}
            className="rounded-full bg-slate-800/80 px-3 py-1 text-sm text-slate-300"
        >
            {tag}
        </span>
        ))}
    </div>

    {link && (
        <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex rounded-full bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
        >
        View project
        </a>
    )}
    </article>
)
}
