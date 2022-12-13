import React from 'react'

const Navbar = () => {
  const [items, setItems] = React.useState<string[]>([
    "NANH",
    "SKILLS",
    "PROJECTS",
  ])

  return (
    <div className="w-screen h-16 bg-orange-100 fixed top-0 left-0 pl-12 pr-12 flex items-center">
      <h1 className="font-bold mr-auto text-2xl transition-all hover:text-3xl">
        NANH
      </h1>
      <ul className="flex w-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-2">
        {
          items.map(item => (
            <li key={item} className="flex-1 text-center">
              <a className="block p-4 transition-all hover:translate-y-1 hover:shadow-lg hover:h-fit hover:cursor-pointer hover:text-shadow-lg hover:bg-slate-900 hover:text-white hover:rounded-full">{item}</a>
            </li>
          ))
        }
      </ul>
      <button className="group px-6 py-2 translate-z-0 font-semibold bg-slate-900 relative overflow-hidden rounded-3xl h-fit text-white transition-all">
        <div className="absolute block h-full top-0 left-0 bottom-0 right-0 w-0 transition-all group-hover:w-full bg-indigo-600 -skew-x-12 scale-150"></div>
        <h1 className='relative'>
          CONTACT
        </h1>
      </button>
    </div>
  )
}

export default Navbar;
