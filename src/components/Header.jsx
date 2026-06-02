export default function HeroSection() {
  return (
    <section className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-start lg:gap-14 mb-16">
      <div className="space-y-8">
        <span className="inline-flex rounded-full bg-violet-500/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.26em] text-violet-300">
          Full-stack portfolio
        </span>
        <div className="space-y-6">
          <h1 className="text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">
            Hi I'm Owen.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            I am a 
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-violet-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
          >
            View projects
          </a>
          <a
            href="#experience"
            className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/90 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-violet-400 hover:text-white"
          >
            See experience
          </a>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="w-full rounded-[2rem] border border-slate-700/80 bg-slate-900/80 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.28)] backdrop-blur-xl">
          <span className="inline-flex rounded-full bg-violet-500/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-violet-300">
            Available for freelance
          </span>
          <h2 className="mt-6 text-2xl font-semibold text-white">
            Product design meets strong engineering.
          </h2>
          <p className="mt-4 text-slate-300 leading-7">
            Example portfolio sections include projects, experience, and skills.
            Replace these cards with your real work and accomplishments.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Role</p>
              <p className="text-base font-semibold text-white">Front-end Developer</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.2em] text-violet-300">Focus</p>
              <p className="text-base font-semibold text-white">React / Tailwind / UI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
