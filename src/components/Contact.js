import React from "react";
import { SocialIcon } from "react-social-icons";
import Fade from 'react-reveal/Fade';

const Contact = () => {
    return (
        <div className='flex-shrink-0 bg-gray-800 pb-8 md:pb-28'>
            <footer className='px-10 pt-16 pb-5 mx-auto text-white max-w-7xl'>
                <div className='mb-10 text-center md:mb-16'>
                    <Fade top ssrFadeout>
                        <h4 className='antialiased font-header text-xl text-yellow-400'>
                            Next step?
                        </h4>
                        <h3 style={{opacity:1, transform: 'none'}} className='mt-2 text-2xl md:text-3xl uppercase font-header'>
                            Let's work together!
                        </h3>
                    </Fade>
                </div>

                <div className='flex flex-col-reverse items-center mb-20 space-y-8 space-y-reverse md:items-start md:space-y-0 md:space-x-16 md:flex-row'>
                    <div className='text-lg md:w-1/2'>
                        <Fade left ssrFadeout>
                            <p className='react-reveal mb-6'>
                                If you'd like to talk about a project or need advice about product and ideation , simply send me a message. I'm currently available for development projects, entrepreneurial gigs or bug bounty events.
                            </p>
                            <div>
                                <p className='mb-4'>You can connect with me on:</p>
                                <div className='flex space-x-6'>                     
                                    <SocialIcon 
                                        url='https://www.linkedin.com/in/charles-eze-29432b17a/' 
                                        className='mr-1 md:mr-1 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125' 
                                        target='_blank'
                                        fgColor='#fff' 
                                        style={{ height:33, width:33}} />

                                    <SocialIcon 
                                        url='https://twitter.com/hackfolio' 
                                        className='mr-1 md:mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125' 
                                        target='_blank' 
                                        fgColor='#fff'
                                        style={{ height:33, width:33}} />

                                    <SocialIcon 
                                        url='https://github.com/charles-eze' 
                                        className='mr-1 md:mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-125' 
                                        target='_blank' 
                                        fgColor='#fff'
                                        style={{ height:33, width:33}} />              
                                </div>
                            </div>
                        </Fade>

                    </div>
                    <div className='w-full md:w-1/2'>
                        <Fade right ssrFadeout>
                            <form className='w-full'
                                method='post'
                                id='contact-form'
                                name='contact-forms'>
                                <input type='hidden' name='bot-field' />
                                <input type='hidden' name='form-name' value='contact-forms' />
                                <div className='flex flex-col space-y-6'>
                                    <input 
                                        type='email'
                                        required aria-label='Email'
                                        name='email'
                                        placeholder='Enter your email'
                                        className='w-full px-5 py-3 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md appearance-none focus:outline-none focus:placeholder-gray-400' />
                                    <textarea
                                        required aria-label='Message'
                                        name='message'
                                        placeholder='How can I help you?'
                                        className='w-full px-5 py-3 text-base leading-6 text-gray-900 placeholder-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md appearance-none focus:outline-none focus:placeholder-gray-400'>
                                    </textarea>
                                    <div className='rounded-md shadow'>
                                        <button 
                                            type='submit'
                                            className='flex items-center justify-center w-full px-5 py-3 space-x-1 text-base font-medium leading-6 text-gray-900 transition duration-150 ease-in-out border border-transparent rounded-md bg-purple-700 hover:bg-yellow-400 focus:outline-none focus:bg-indigo-400' >
                                            <span>
                                                <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'
                                                    className='w-5 h-5' >
                                                    <path strokeLinecap='round' strokeWidth='2'
                                                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'></path>
                                                </svg>
                                            </span>
                                            <span>Send Message</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </Fade>
                    </div>
                </div>
            </footer>
        </div>
    )

};

export default Contact;