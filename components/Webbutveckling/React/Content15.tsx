/* eslint-disable react/no-unescaped-entities */

import React from 'react'
import Image from 'next/image'

const content15 = () => {
  return (
    <section className="bg-white ">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-black sm:text-lg ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">We didn't reinvent the wheel</h2>
            <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
        </div>
        <div 
            className="grid grid-cols-2 gap-4 mt-8">
            <Image 
                className="w-full rounded-lg" 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
                alt="office content 1" 
                width={387}
                height={587}
            />
            <Image 
                className="mt-4 w-full lg:mt-10 rounded-lg" 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
                alt="office content 2" 
                width={387}
                height={587}
            />
        </div>
        </div>
    </section>
  )
}

export default content15