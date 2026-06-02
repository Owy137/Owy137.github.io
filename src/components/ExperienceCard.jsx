export default function ExperienceCard({ company, title, period, details, points }) {
  return (
    <article className="rounded-[1.75rem] border border-slate-700/80 bg-slate-900/80 p-6 shadow-[0_18px_42px_rgba(15,23,42,0.28)] backdrop-blur-xl">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-violet-300">{company}</p>
          <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
        </div>
        <span className="rounded-full bg-slate-800/80 px-3 py-1 text-sm text-slate-300">
          {period}
        </span>
      </div>

      <p className="text-slate-300 leading-7">{details}</p>
      <ul className="mt-5 list-disc space-y-3 pl-5 text-slate-300">
        {points.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  )
}
