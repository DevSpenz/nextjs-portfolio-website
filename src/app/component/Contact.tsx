import React from 'react'
import { cn } from '@/lib/utils'
import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram } from '@tabler/icons-react'

export default function Contact() {
  return (
    <section id="contact" className='py-20'>
      <div className="relative flex f h-[20rem] w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
          )}
        />
    {/* Radial gradient for the container to give a faded look */}
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4"> 
            <p className='text-2xl font-bold lg:text-4xl text-gray-900 dark:text-gray-100 z-20'>
            Let&apos;s elevate your business to the next level.
          </p>
          <p className='text-lg text-gray-600 dark:text-gray-400 mt-4 z-20 text-center'>
            Let&apos;s connect and discuss how we can work together to achieve your goals.
          </p>
          <div className='my-10 z-20'>
        <a href="#" className='px-8 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white'>
            Get in touch
        </a>
          </div> 
      </div>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4'>
        <p className='text-neutral-600 dark:text-neutral-400'>
          &copy; 2025 Luis Spencer | All rights reserved.
        </p>
        <div className='flex'>
          <a href="#" className='rounded-full bg-gray-200 dark:bg-gray-800 p-2 m-2 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors' target='_blank'>
            <IconBrandGithub/>
          </a>

          <a href="#" className='rounded-full bg-gray-200 dark:bg-gray-800 p-2 m-2 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors' target='_blank'>
            <IconBrandFacebook/>
          </a>

          <a href="#" className='rounded-full bg-gray-200 dark:bg-gray-800 p-2 m-2 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors' target='_blank'>
            <IconBrandInstagram/>
          </a>
          
        </div>
      </div>
    </section>
  )
}
