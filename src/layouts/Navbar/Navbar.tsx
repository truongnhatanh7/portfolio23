import React from 'react'
import Link from 'next/link'
import EnvelopeIcon from './EnvelopeIcon'

type NavItems = {
  title: string,
  link: string,
}

const Navbar = () => {
  const [items, setItems] = React.useState<NavItems[]>([
    {
      title: "NANH",
      link: "/"
    },
    {
      title: "SKILLS",
      link: "/skills"
    },
    {
      title: "WORKS",
      link: "/works"
    }
  ])

  return (
    <div className="w-screen h-16 bg-transparent fixed top-0 left-0 px-2 lg:pl-12 lg:pr-12 flex items-center">
      <Link href="/" className="mr-auto">
        <h1 className="font-bold hidden lg:block none text-2xl transition-all hover:text-3xl">
          NANH
        </h1>
      </Link>
      <ul className="flex w-3/4 lg:w-96 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-2">
        {
          items.map(item => (
            <li key={item.link} className="flex-1 text-center">
              <Link href={item.link} className="text-sm underline block transition-all lg:no-underline lg:py-4 lg:px-6 lg:w-fit lg:hover:translate-y-1 lg:hover:shadow-lg lg:hover:h-fit lg:hover:cursor-pointer lg:hover:text-shadow-lg lg:hover:bg-gray-900 lg:hover:text-white lg:hover:rounded-full">{item.title}</Link>
            </li>
          ))
        }
      </ul>
      <button className="group hidden lg:block shadow-lg px-6 py-2 translate-z-0 font-semibold bg-gray-900 relative overflow-hidden rounded-3xl h-fit text-white transition-all">
        <div className="absolute block h-full top-0 left-0 bottom-0 right-0 w-0 transition-all group-hover:w-full bg-indigo-600 -skew-x-12 scale-150"></div>
        <Link href="mailto:truongnhatanhw@gmail.com">
          <h1 className='relative flex items-center gap-2'>
            CONTACT <EnvelopeIcon />
          </h1>
        </Link>
      </button>
    </div>
  )
}

export default Navbar;
