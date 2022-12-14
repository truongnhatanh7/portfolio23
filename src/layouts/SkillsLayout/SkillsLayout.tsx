import React from 'react'



const SkillsLayout = () => {
  const [skills, setSkills] = React.useState([
    "HTML",
    "CSS",
    "JS",
    "ReactJS",
    "NextJS",
    "Figma",
    "Astro",
    "StitchesCSS",
    "TailwindCSS",
    "NodeJS",
    "C/C++",
    "Java",
    "Android",
    "SwiftUI",
    "SQL",
    "DSA",

  ])

  const [currentTag, setCurrentTag] = React.useState<number>(0)

  React.useEffect(() => {
    const id = setInterval(() => {
      setCurrentTag(prev => ((prev + 1) % skills.length))
    }, 500)
    return () => clearInterval(id);
  }, [skills.length])

  return (
    <div className='w-screen h-screen grid place-items-center'>
      <div className="flex flex-wrap gap-4 w-1/2 justify-center">
        {
          skills.map((skill, index) => (
            <div key={skill} className={`px-4 py-2 rounded-md transition-all bg-slate-900 w-fit 
                ${index === currentTag ? "scale-110 bg-indigo-600 shadow-2xl -translate-y-1" : ""}`}
            >
              <p className="text-white">
                {skill}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default SkillsLayout;
