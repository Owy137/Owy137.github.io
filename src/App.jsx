import { useState } from 'react'
import ExperienceCard from './components/ExperienceCard'
import ProjectCard from './components/ProjectCard'

const projects = [
  {
    title: 'Document Intelligence',
    description:
      'An advanced file management system built for RAG applications, supports file uploading and removal, versioning, and user based access control.',
    points: [
      'File management system supporting versioning using React TypeScript',
      'Built out endpoints for sanitizing returns on API calls',
      'Implementing standard file management system functionalities',
      'Managed access based on user permissions',],
      tags: ['React', 'Typescript', 'Tailwind', 'Git', 'Agile'],
  },
  {
    title: 'Statement Scrapers',
    description:
      'Simple web application for scraping credit statements using OCR model and displaying info using React.js.',
    points: [
      'Simple UI for users to upload statements using React JavaScript',
      'Implementing file conversions to support both image and pdf file types for OCR model',
      'API calls to manage uploaded data and files using Python Flask',
    ],
    tags: ['React', 'JavaScript', 'Python Flask', 'Python OCR', 'API', 'GIT'],
    link: 'https://github.com/Owy137/Finance-App',
  },
  {
    title: 'Warehouse Manager Bot',
    description:
      'Self-driving mini robot car to manage inventory, moving items around and deliverying orders.',
    points: [
      'Created web-UI for creating orders hosted on campus servers in PHP',
      'Built out backend SQL database and APIs to manage and archive order history',
      'Automated robot car movement via QR codes as visual checkpoints',
    ],
    tags: ['PHP', 'Python', 'SQL', 'GIT'],
    link: 'https://github.com/Jim-Hutchinson/Robot-Demo-Team',
  },
]

const experience = [
  {
    company: 'Nearly Human AI',
    title: 'Intern Software Engineer',
    period: 'Aug 2025 - May 2026',
    details:
      'Working with team of students under mentor to develop evolving UI.',
    points: [
      'Working with Students Interns in Agile focused development of web-application.',
      'Drafting and creating user interfaces onto environment for intuitive file managing, uploading, and viewing.',
      'Ensuring proper function under edge cases in real use scenarios',
      'Meeting with team leaders weekly to ensure progress and direction in product development',
    ],
  },
  {
    company: 'Elizabethtown College',
    title: 'Student Software Engineer',
    period: 'Aug 2024 - Dec 2024',
    details:
      'Developing applications for college used facilities and students.',
    points: [
      'Contributing in team to variety of projects under ECS domain.',
      'Working with other teams in creating APIs for managing game scores in database.',
      'Managing ordering form page for warehouse inventory and MySQL database for order logging.',
      'Programming self-moving robot to react and move to visual checkpoints.',
    ],
  },
]

function App() {
  const [projectsOpen, setProjectsOpen] = useState(true)
  const [experienceOpen, setExperienceOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:px-10">
        <header className="mb-12 text-center">
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Hi. I'm Owen
          </h1>
          <p className="text-lg leading-8 text-slate-300">
            <a href="https://github.com/Owy137" target="_blank" rel="noreferrer" className="text-violet-300 hover:text-violet-400">
              GitHub
            </a>
            <span className="mx-2">|</span>
            <a href="https://www.linkedin.com/in/owyang137" target="_blank" rel="noreferrer" className="text-violet-300 hover:text-violet-400">
              LinkedIn
            </a>
          </p>
        </header>

        <section id="introduction" className="mb-10 rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-8 shadow-[0_28px_80px_rgba(15,23,42,0.45)] backdrop-blur-xl">
          <div className="space-y-4">
            <div>
              <p className="text-sm uppercase tracking-[0.26em] text-violet-300">
                About Me
              </p>
              <p className="mt-3 max-w-3xl text-slate-300 leading-7">
                Software developer specializing in frontend development. 
                I like to create simple designs that make sense but are also effective.
                Also knowledgable in many other fields such as databases, networking, and information systems.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  Education
                </p>
                <p className="mt-2 text-white">B.S. Computer Science</p>
                <p className="text-slate-400">Elizabethtown College</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  Skills
                </p>
                <p className="mt-2 text-white">
                  React, 
                  Tailwind CSS, 
                  Java/TypeScript,
                  Python, 
                  Java,
                  C/C++,
                  SQL
                  </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  Interests
                </p>
                <p className="mt-2 text-white">Frontend development, Information systems, Scripting/Automation</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="space-y-6">
          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-6 shadow-[0_28px_80px_rgba(15,23,42,0.45)] backdrop-blur-xl">
            <button
              type="button"
              onClick={() => setProjectsOpen((value) => !value)}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <div>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Projects
                </h2>
                <p className="mt-2 text-slate-400">
                  What I've worked on, personal or educational.
                </p>
              </div>
              <span className="text-2xl font-semibold text-violet-300" aria-hidden="true">
                {projectsOpen ? '⋀' : '⋁'}
              </span>
            </button>
          </div>

          {projectsOpen && (
            <div className="space-y-6">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          )}
        </section>

        <section id="experience" className="mt-12 space-y-6">
          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-900/80 p-6 shadow-[0_28px_80px_rgba(15,23,42,0.45)] backdrop-blur-xl">
            <button
              type="button"
              onClick={() => setExperienceOpen((value) => !value)}
              className="flex w-full items-center justify-between gap-4 text-left"
            >
              <div>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                  Experience
                </h2>
                <p className="mt-2 text-slate-400">
                  {experience.length} roles available. Tap to {experienceOpen ? 'collapse' : 'expand'}.
                </p>
              </div>
              <span className="text-2xl font-semibold text-violet-300" aria-hidden="true">
                {experienceOpen ? '⋀' : '⋁'}
              </span>
            </button>
          </div>

          {experienceOpen && (
            <div className="space-y-6">
              {experience.map((item) => (
                <ExperienceCard key={item.company} {...item} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default App
