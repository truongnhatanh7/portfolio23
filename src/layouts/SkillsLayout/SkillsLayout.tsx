import React from 'react'



const SkillsLayout = () => {
  const [skills, setSkills] = React.useState([
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "ReactJS",
    "NextJS",
    "StitchesCSS",
    "TailwindCSS",
    "Figma",
    "Storybook",
    "Photoshop",
    "AstroJS",
    "NodeJS",
    "Java",
    "C/C++",
    "Android",
    "SwiftUI",
    "SQL",
    "PHP",
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
    <div className='w-screen h-screen grid place-items-center overflow-hidden'>
      <video autoPlay muted loop className="fixed min-w-full min-h-full -z-20 inset-0 animate-[enterFade_0.2s]">
        <source src="/video.mp4" type="video/mp4"/>
      </video>
      <div className="flex flex-wrap gap-4 w-1/2 justify-center animate-[enterFromLeft_0.3s_ease-in-out]">
        {
          skills.map((skill, index) => (
            <div key={skill} className={`px-6 py-3 rounded-md transition-all bg-slate-900 w-fit 
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
