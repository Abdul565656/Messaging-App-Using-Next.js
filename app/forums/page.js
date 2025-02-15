import React from 'react';
import Link from 'next/link';

const Forums = () => {
    const topics = [
        {
            text: "Python",
            img: "/images/Python.png",
            description: "Let's discuss everything related to Python",
            slug: "Python-new"
        },
        {
            text: "JavaScript",
            img: "/images/JavaScript.png",  
            description: "Explore the world of front-end and back-end development with JavaScript.",
             slug: "JavaScript-new"
        },
        {
            text: "Data Science",
            img: "/images/data-science.avif", 
            description: "Dive into data analysis, machine learning, and AI.",
             slug: "DataScience-new"
        },
        {
            text: "Web Development",
            img: "/images/web-dev.jpg",       
            description: "Discuss HTML, CSS, frameworks, and everything related to building websites.",
             slug: "Web-Dev-new"
        },
        {
            text: "Cloud Computing",
            img: "/images/Cloud-Computing.avif",        
            description: "Learn about AWS, Azure, GCP, and the cloud ecosystem.",
             slug: "Cloud-Computing-new"
        },
        {  
            text: "Mobile Development",
            img: "/images/mobile-dev.png",
            description: "Discussions on iOS, Android, React Native, Flutter, and other mobile technologies.",
             slug: "Mobile-Dev-new"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-700 to-blue-900 py-20 px-4">
            <div className="container mx-auto text-center">
                <h1 className="text-5xl font-bold text-white mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-300">
                        Discussion Forums
                    </span>
                </h1>
                <p className="text-lg text-gray-200 mb-12 max-w-3xl mx-auto">
                    Join our thriving community of developers and tech enthusiasts to explore, learn, and grow together.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topics.map((topic) => (
                        <div
                            key={topic.slug}
                            className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-600 shadow-lg transform hover:scale-105 transition duration-300"
                        >
                            <div className="relative h-48 flex items-center justify-center bg-black/30">
                                <img src={topic.img} alt={topic.text} className="w-20 h-20 rounded-lg shadow-lg" />
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-white mb-2">{topic.text}</h2>
                                <p className="text-gray-300 mb-6 text-sm">{topic.description}</p>
                                <Link href={`/forum/${topic.slug}`}>
                                    <button className="w-full px-4 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-pink-500 to-purple-500 hover:opacity-90 transition-all">
                                        Join Discussion
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Forums;