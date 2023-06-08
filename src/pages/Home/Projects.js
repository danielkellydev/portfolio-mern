import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { projects } from '../../resources/projects'

function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0)
  return (
    <div>
        <SectionTitle title="Projects"/>

        <div className='flex py-20 gap-20 flex-col lg:flex-row'>
            <div className='flex flex-row lg:flex-col gap-8 border-l-2 border-tertiary-light lg:w-1/3 overflow-x-scroll'>
            {projects.map((projects, index) => 
                <div onClick={()=> {
                    setSelectedItemIndex(index)
                }}
                className='cursor-pointer'>
                    <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[1px] bg-tertiary bg-opacity-10 '  : 'text-white'}`}>{projects.title}</h1>
                </div>
            )}
            </div>

                <div className='flex flex-col lg:flex-row items-center justify-center gap-10'>
                <img src= {projects[selectedItemIndex].image} alt='' className='w-72'/>
                </div>
            <div className='flex flex-col gap-5'>
                <h1 className= 'text-secondary text-xl'>{projects[selectedItemIndex].title}</h1>
                <p className= 'text-white text-lg'>{projects[selectedItemIndex].description}</p>
        </div>
        </div>
    </div>
  )
}

export default Projects