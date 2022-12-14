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
    "Arduino",
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
      <video autoPlay playsInline muted poster='/vid-poster.png' loop className="fixed w-screen h-screen -z-20 top-0 left-0 object-cover animate-[enterFade_0.2s]">
        <source src="/video.mp4" type="video/mp4"/>
      </video>
      <div className="flex flex-wrap gap-2 lg:gap-4 px-2 lg:w-1/2 justify-center animate-[enterFromLeft_0.3s_ease-in-out]">
        {
          skills.map((skill, index) => (
            <div key={skill} className={`px-3 py-2 lg:px-6 lg:py-3 rounded-md transition-all w-fit bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200
                ${index === currentTag ? "scale-110 bg-indigo-600 shadow-2xl -translate-y-1" : ""}`}
            >
              <p className="text-white select-none">
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
