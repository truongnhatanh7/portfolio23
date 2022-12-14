import Link from 'next/link'
import React from 'react'

type Project = {
  title: string,
  description: string,
  link: string,
}

export const ProjectsLayout = () => {
  const [projects, setProjects] = React.useState<Project[]>([
    {
      title: "AMY BAC NINH",
      description: "Role: Frontend Developer | Online Tiles Catalogue",
      link: "https://tamson.vercel.app/",
    },
    {
      title: "NANHJS Base UI",
      description: "Role: Developer | Components UI Library",
      link: "https://6386f99eb5b46043a586054a-bzaadqeskp.chromatic.com/",
    },
    {
      title: "NCT Landing Page",
      description: "Role: Frontend Developer | Student's club landing page",
      link: "",
    },
    {
      title: "FFD",
      description: "Role: Backend Developer | Charity's organization landing page",
      link: "https://ffd-nct.netlify.app/",
    },
  ])

  return (
    <div className='w-screen h-screen grid place-items-center overflow-hidden'>
      <div className="flex flex-col gap-2 w-full animate-[enterFromRight_0.3s_ease-in-out]">
        {
          projects.map((project, index) => (
            <Link key={index + project.title} href={project.link}>
              <div className="group transition-all mx-auto w-1/2 py-4 px-4 flex flex-col gap-1 border-solid border-gray-900 border-2 rounded-lg relative hover:-skew-x-3">
                <div className="absolute transition-all right-2 top-2 bottom-2 w-2 rounded-full bg-indigo-400 group-hover:w-4"></div>
                <h1 className="font-semibold transition-all text-xl group-hover:text-indigo-400 group-hover:tracking-wider">
                  {project.title}
                </h1>
                <p className="text-gray-700">
                  {project.description}
                </p>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default ProjectsLayout;
