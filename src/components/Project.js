import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import Contact from "./Contact";

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"] {
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setProjectData(data))
           .catch(console.error); 
    }, []);

    return (
        <div>
            <main className='bg-purple-300 min-h-screen p-12'>
                <section className='container mx-auto cursor:pointer'>
                    <h1 className='text-5xl flex justify-center cursive'>My Projects</h1>
                    <h2 className='text-lg md:text-2xl text-gray-600 flex justify-center mb-12 font-sans'>
                        Welcome to my projects page!
                    </h2>
                    <section className='grid md:grid-cols-2 md:gap-8 gap-4 -mx-3 md:-mx-0'>
                      {projectData && projectData.map((project, index) => (
                        <article className='relative rounded-lg shadow-xl bg-white md:p-16 px-3 py-6'>
                            <h3 className='text-gray-800 text-3xl font-bold mb-2 hover:text-red-700'>
                                <a 
                                href={project.link}
                                alt={project.title}
                                target="_blank"
                                rel="noopener noreferrer">{project.title}</a>
                            </h3>
                            <div className='text-gray-500 text-xs space-x-4'>
                                <span>
                                    <strong className='font-bold'>Finished on</strong>:{" "}
                                    {new Date(project.date).toLocaleDateString()}
                                </span>                               
                                <span>
                                    <strong className='font-bold'>Company</strong>:{" "}
                                    {project.place}
                                </span>
                                <span>
                                    <strong className='font-bold'>Type</strong>:{" "}
                                    {project.projectType}
                                </span>
                                <p className='my-6 text-lg text-gra-700 leading-relaxed'>
                                    {project.description}</p>
                                <a href={project.link}
                                rel="noopener noreferrer"
                                target="_blank"
                                className='text-red-500 font-bold md:text-lg text-sm hover:underline hover:text-purple-700'> 
                                View The Project{" "}
                                    <span role='img' aria-label='right pointer'>{'>>'}</span> 
                                </a>
                            </div>
                        </article>
                      ))}
                    </section>
                </section>
            </main>
            <div id='contact' className=''>
                <Contact />
            </div>
        </div>
    )
}