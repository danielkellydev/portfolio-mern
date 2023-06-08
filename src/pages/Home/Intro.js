import React from 'react'

function Intro() {
  return (
    <div className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
        <h1 className='text-white'>Hi, I am</h1>
        <h1 className='lg:text-7xl text-3xl text-secondary font-semibold'>Daniel Kelly</h1>
        <h1 className='lg:text-7xl text-3xl text-white font-semibold'>I build things for the web.</h1>
        <p className='text-white w-2/3'> I am a Junior Fullstack Web Developer. Currently I am working as a React Developer in Melbourne. I love working with people, and creating weird and beautiful things!</p>
        <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get Started</button>
    </div>
  )
}

export default Intro