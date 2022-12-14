import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Main = () => {
  return (
    <div className="p-12 grid grid-cols-2 h-screen items-center overflow-hidden">
      <div className="flex flex-col gap-2 transform-gpu animate-[enterFromLeft_0.3s_ease-in-out]">
        <h1 className="text-8xl text-left uppercase text-black">
          NHAT ANH
        </h1>
        <h1 className="text-8xl text-left uppercase text-black">
          Frontend Dev
        </h1>
        <p className='pl-2 text-xl text-slate-600'>
          RMIT-VN Software Engineering Student (Honours)
        </p>
        <button className="group shadow-lg w-fit px-6 py-3 translate-z-0 font-semibold bg-gray-900 relative overflow-hidden rounded-3xl h-fit text-white transition-all hover:translate-x-1">
          <div className="absolute block h-full top-0 left-0 bottom-0 right-0 w-0 transition-all group-hover:w-full bg-indigo-600 skew-x-12 scale-150"></div>
          <Link href="https://github.com/truongnhatanh7" className='relative'>
            <h1>
              GITHUB
            </h1>
          </Link>
        </button>
      </div>
      <div className="relative col-start-2 col-end-3 row-start-1 ml-auto transform-gpu animate-[enterFromRight_0.3s_ease-in-out]">
        <Image
          src="/avatar.jpg"
          width={400}
          height={400}
          alt="avatar"
          className="rounded-full object-cover shadow-lg"
        />
      </div>
      <div className="fixed -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-r from-transparent to-gray-600 animate-[shapeShifting_5s_ease-in-out_infinite_alternate]">
      </div>
      <div className="fixed -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-r from-transparent to-gray-900 animate-[shapeShifting_7s_ease-in-out_infinite_alternate] scale-90">
      </div>
    </div>
  )
}

export default Main;