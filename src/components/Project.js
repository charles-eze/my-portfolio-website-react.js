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
            githublink,
            livedemolink,
            tags
        }`).then((data) => setProjectData(data))
           .catch(console.error); 
    }, []);

    return (
        <div>
            <main className='bg-purple-300 min-h-screen md:p-12 px-6 py-10'>
                <section className='container mx-auto cursor:pointer'>
                    <h1 className='text-5xl flex justify-center cursive'>My Projects</h1>
                    <h2 className='text-lg md:text-2xl text-gray-800 flex justify-center mb-12 font-sans'>
                        Welcome to my projects page!
                    </h2>
                    <section className='grid md:grid-cols-2 md:gap-8 gap-4 -mx-3 md:-mx-0'>
                      {projectData && projectData.map((project, index) => (
                        <article className='relative rounded-lg shadow-xl bg-white md:p-16 px-3 py-6' key={index}>
                            <h3 className='text-gray-800 text-3xl font-bold mb-2 hover:text-red-700'>
                                <a 
                                href={project.githublink}
                                alt={project.title}
                                target="_blank"
                                rel="noopener noreferrer">{project.title}</a>
                            </h3>
                            <div className='text-gray-500 text-xs space-x-4'>
                                <span>
                                    <strong className='font-bold'>Finished on</strong>:{" "}
                                    {new Date(project.date).toLocaleDateString('en-GB')}
                                </span>                               
                                <span>
                                    <strong className='font-bold'>Company</strong>:{" "}
                                    {project.place}
                                </span>
                                <span>
                                    <strong className='font-bold'>Type</strong>:{" "}
                                    {project.projectType}
                                </span>
                                <p className='my-6 text-lg text-gray-700 leading-relaxed'>
                                    {project.description}</p>
                                <a href={project.githublink}
                                rel="noopener noreferrer"
                                target="_blank"
                                className='text-red-500 font-bold md:text-lg text-sm hover:text-purple-700'> 
                                View Github Repo{" "}
                                    <span>{'>>'}</span> 
                                </a>
                                <a href={project.livedemolink}
                                rel="noopener noreferrer"
                                target="_blank"
                                className='text-red-500 font-bold md:text-lg text-sm hover:text-purple-700'> 
                                View Live Demo{" "}
                                    <span>{'>>'}</span> 
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