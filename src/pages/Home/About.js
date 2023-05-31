import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function About() {
  return (
    <div>
        <SectionTitle title="About Me" />

        <div className='flex w-full items-center'>
            <div className='h-[70vh] w-1/2'>
            <lottie-player 
            src="https://assets9.lottiefiles.com/packages/lf20_kkflmtur.json"  
            background="transparent"  
            speed="1"    
            ></lottie-player>
            </div>
            <div className='flex flex-col gap-5 w-1/2'>
                <p className='text-white'>
                Hey there! I'm Daniel Kelly, a code wrangler, pixel pusher, and black tea enthusiast. If the Matrix had a backstage, you'd find me there, juggling lines of code like a digital acrobat. With a passion for all things tech and a knack for turning black tea into elegant algorithms, I'm here to bring a touch of digital sorcery to the world.
                </p>
                <p className='text-white'>
                I believe that software development is not just about writing lines of code, but about creating experiences that leave a lasting impression. Whether it's crafting captivating websites, conjuring up user-friendly apps, or bringing ideas to life through elegant designs, I'm constantly seeking new ways to blend functionality with a sprinkle of whimsy. So, if you're ready to dive into a pixel-perfect adventure and explore the limitless possibilities of the digital realm, grab your virtual gear, and let's embark on a coding escapade together!
                </p>
            </div>
        </div>
    </div>
  )
}

export default About