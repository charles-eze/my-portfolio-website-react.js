import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"] {
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`).then((data) => setSinglePost(data[0]))
        .catch(console.error);
    }, [slug]);

    if (!singlePost) return <div>Loading...</div>;


    return (
        <main className='bg-purple-300 min-h-screen p-12'>
            <div className='-mx-7'>
            <article className='container shadow-lg bg-gray-100 rounded-lg mx-auto'>
                <header className='relative'>
                    <div className='absolute h-full w-full flex items-center justify-center md:p-8'>
                        <div className='bg-white bg-opacity-80 rounded p-3  md:p-12'>
                            <h1 className='cursive text-3xl lg:text-5xl mb-4 '>{singlePost.title}</h1>
                            <div className='flex justify-center text-gray-800'>
                                <img  src={urlFor(singlePost.authorImage).url()}
                                    alt={singlePost.name}
                                    className='w=10 h-10 rounded-full' />
                                <p className='cursive flex items-center pl-2 md:text-2xl text-xl'>{singlePost.name}</p>
                            </div>
                        </div>
                    </div>
                    <img 
                        src={singlePost.mainImage.asset.url} 
                        alt={singlePost.title}
                        className='w-full object-fill  rounded-t'
                        style={{ height: '400px' }} />
                </header>
                <div className='px-4 lg:px-48 py-12 lg:py-20 prose lg:prose-xl prose-lg max-w-full'>
                    <BlockContent blocks={singlePost.body} projectId='uzvxymqh' dataset='production' />
                </div>
            </article>
            </div>
        </main>
    );
    
};

