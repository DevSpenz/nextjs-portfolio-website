import React from 'react'
import Header from './reusable-components/Header'
import Image from 'next/image'

function About() {
  return (
    <section id="about" className="my-20 mt-40">
      <Header title='About me'/>
      <div className='grid gap-4 items-center md:[grid-template-columns:1fr_1fr] py-10 px-5 sm:px-10'>
        <div>
          <Image src="/images/mypic.jpeg" alt='about-image' width={500} height={500} className='rounded-lg w-full object-cover'/>
        </div>

        <div className='flex flex-col gap-4 lg:p-10'>
          <p className='text-lg text-gray-700 dark:text-gray-300'>
            I am a passionate web developer with a keen interest in creating dynamic and responsive web applications. My journey in web development has equipped me with a diverse skill set, including proficiency in HTML, CSS, JavaScript, and various frameworks.
          </p>
          <p className='text-lg text-gray-700 dark:text-gray-300'>
            I thrive on challenges and enjoy learning new technologies to enhance my skills. My goal is to build user-friendly interfaces that provide seamless experiences across all devices.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About