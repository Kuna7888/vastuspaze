import React from 'react'
import { PORTFOLIO_PROJECTS } from '../constants'

const Portfolio = () => {
  return (
    <section id='portfolio' className='max-w-7xl mx-auto border-b-2 '>
        <div className="mb-20">
            <h2 className='text-xl lg:text-3xl tracking-tight text-center uppercase mt-20 mb-12'>Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {PORTFOLIO_PROJECTS.map((project, index)=>{
                    return <div key={index} className="group relative overflow-hidden rounded-3xl mx-4">
                        <img src={project.image} alt={project.name} className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110' />
                        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
                            <h3 className='mb-2 text-xl font-medium '>{project.name}</h3>
                            <p className="mb-12 p-4">{project.description}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
        </section>
  )
}

export default Portfolio
