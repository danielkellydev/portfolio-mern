import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { experience } from '../../resources/experience'

function Experience() {
const [selectedItemIndex, setSelectedItemIndex] = React.useState(0)
  return (
    <div>
        <SectionTitle title="Experience"/>

        <div className='flex py-20 gap-20 flex-col lg:flex-row'>
            <div className='flex flex-row lg:flex-col gap-8 border-l-2 border-tertiary-light lg:w-1/3 overflow-x-scroll'>
            {experience.map((experience, index) => 
                <div onClick={()=> {
                    setSelectedItemIndex(index)
                }}
                className='cursor-pointer'>
                    <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-tertiary border-tertiary border-l-4 -ml-[1px] bg-tertiary bg-opacity-10 '  : 'text-white'}`}>{experience.period}</h1>
                </div>
            )}
            </div>

            <div className='flex flex-col gap-5'>
                <h1 className= 'text-secondary text-xl'>{experience[selectedItemIndex].title}</h1>
                <h1 className= 'text-tertiary text-xl'>{experience[selectedItemIndex].company}</h1> 
                <p className= 'text-white text-lg'>{experience[selectedItemIndex].description}</p>
        </div>
        </div>
    </div>
  )
}

export default Experience