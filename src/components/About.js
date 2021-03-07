import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import Contact from "./Contact";
import Zoom from 'react-reveal/Zoom';

export default function About() {
    const [aboutData, setAboutData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "about"] {
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`).then((data) => setAboutData(data))
           .catch(console.error); 
    }, []);

    return (
        <div>
            <main className='flex-grow'>
                <section className='px-6 mx-auto lg:px-0 max-w-xl lg:max-w-3xl '>
                    <div className='relative inline-block mb-6 md:mb-10'>
                        <h1 className='relative z-10 mt-8 text-4xl font-semibold leading-tight text-gray-800 font-header md:text-6xl lg:text-7xl lg:font-medium xl:text-7xl md:mt-16 xl:mt-24'>
                           <span>About Me</span> 
                        </h1>
                        <div className='relative left-0 z-0 -mt-2 -ml-3 -mr-5 md:-mr-14 h-4 md:h-5 lg:h-8 bottom-2 md:-top-3 rounded-full bg-purple-300'></div>
                    </div>
                    <div className='cursor-pointer' style={{opacity: 1, transform: "none"}}>
                        <Zoom left ssrFadeout>
                            <div className='md:prose-xl prose-lg text-gray-700'>
                                <p>{"My name is Charles Eze and I am a self taught software developer currently living in "}
                                    <a href='https://en.wikipedia.org/wiki/Lagos'
                                    className='text-blue-600 hover:text-blue-700 no-underline hover:underline'
                                    rel="noopener noreferrer"
                                    target="_blank">Lagos,</a>{" Nigeria."}</p>
                                <p>After working for four years in the process industry as a process engineer, I now develop web applications and also test the security of web applications.</p>
                                <p>{"I am open to local, international and remote projects. "}
                                    <a
                                        href="#contact"
                                        className='text-blue-600 hover:text-blue-700 no-underline hover:underline'>Let's talk!</a>
                                </p>
                            </div>
                        </Zoom> 
                    </div>
                </section>
                    <div className='md:px-14 md:pb-14 px-5 pb-9' style={{opacity: 1, transform: "none"}}>
                        <section className='prose-lg md:prose-lg mt-10'>
                        <div>    
                            <Zoom left ssrFadeout>
                                <h2 className='flex justify-center rounded-lg shadow-sm font-bold text-gray-700'>My Certificates</h2>
                                <section className='grid md:grid-cols-3 md:gap-8 gap-4 -mx-3 md:-mx-0'>
                                {aboutData && aboutData.map((about, index) => (
                                    <article className='relative rounded-lg shadow-xl bg-white md:p-4 px-4 pb-6' key={index}>
                                        <h3 className='text-gray-800 text-3xl font-bold mb-2 hover:text-red-700'>
                                            <a 
                                            href={about.link}
                                            alt={about.title}
                                            target="_blank"
                                            rel="noopener noreferrer">{about.title}</a>
                                        </h3>
                                        <div className='text-gray-500 text-xs space-x-4'>
                                            <span>
                                                <strong className='font-bold'>Finished on</strong>:{" "}
                                                {new Date(about.date).toLocaleDateString('en-GB')}
                                            </span>                               
                                            <span>
                                                <strong className='font-bold'>Issued By</strong>:{" "}
                                                {about.place}
                                            </span>
                                            <p className='my-6 text-lg text-gray-700 leading-relaxed'>
                                                {about.description}</p>
                                            <a href={about.link}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className='text-red-500 font-bold md:text-lg text-base hover:underline hover:text-purple-700'> 
                                            View this certificate{" "}
                                                <span role='img' aria-label='right pointer'>{'>>'}</span> 
                                            </a>
                                        </div>
                                    </article>
                                ))}
                                </section>
                            </Zoom>
                        </div>
                        </section>
                    </div>
            </main>
            <div id='contact' className=''>
                <Contact />
            </div>
        </div>
    )
}