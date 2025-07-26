"use client";

import React from 'react'
import Header from './reusable-components/Header'
import { CardBody, CardContainer, CardItem } from "@/src/app/component/ui/3d-card";
import { projects } from '@/data/projects';

function RecentProjects() {
  return (
  <section id='projects'>
      <Header title="Recent Projects" />
      <div className='flex flex-col mx-4 sm:flex-col lg:flex-row sm:justify-center sm:items-center sm:gap-10 md:gap-20 lg:gap-20 xl:gap-20 2xl:gap-20'> 
      {projects.map((projects) => {
        return (
            <CardContainer className="inter-var" key={projects.id}>
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {projects.projectTitle}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {projects.projectDescription}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={projects.projectImage}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl "
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={projects.projectLink}
                    target="_blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    View Project →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={projects.projectSourceCode}
                    target="_blank"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Source Code
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
        )
      })}
      </div>
  </section>
  )  

}

export default RecentProjects