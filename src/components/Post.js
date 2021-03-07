import React, { useState, useEffect } from "react";
import sanityClient from "../client.js"
import { Link } from "react-router-dom";
import Contact from "./Contact";

export default function Post() {
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"] {
                    title,
                    slug,
                    publishedAt,
                    mainImage{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    }

        }`)
        .then((data) => setPost(data))
        .catch(console.error);
    }, []);

    return (
    <div>
        <main className='bg-purple-300 min-h-screen p-12'>
            <section className='container mx-auto'>
                <h1 className='text-5xl flex justify-center cursive'>My Blog Posts</h1>
                <h2 className='text-lg text-gray-600 flex justify-center mb-12'>Welcome to my blog</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {postData && postData.map((post, index) => (
                    <article>
                        <Link  to={'/post/' + post.slug.current} key={post.slug.current}>
                        <span className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-purple-600' 
                            key={index}>
                            <img
                                src={post.mainImage.asset.url}
                                alt={post.mainImage.alt}
                                className='w-full h-full rounded-r object-fill absolute' />
                            <span className='relative h-full flex justify-end items-end pr-4 pb-4'>
                                <h3 className='text-lg font-medium px-3 py-4 bg-indigo-600 hover:bg-gray-700 text-red-100 bg-opacity-80 rounded'>{post.title}</h3>
                                <div className='absolute text-xs text-gray-900'>
                                    <strong className='font-bold'>Published on</strong>:{" "}
                                    {new Date(post.publishedAt).toLocaleDateString('en-GB')}
                                </div> 
                            </span>
                        </span>
                        </Link>
                    </article>
            )) }
                </div>

            </section>
        </main>
        <div id='contact' className=''>
        <Contact />
        </div>
    </div>
    )
}