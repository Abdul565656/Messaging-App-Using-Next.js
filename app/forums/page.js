import React from 'react'
import Link from 'next/link';



const Forums = () => {

    const topics = [
        {
            text: "Python",
            img: "/images/Python.png",
            description: "Lets Discuss Everything Related To Python",
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
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
            <div className="container mx-auto px-4">
                <h1 className="text-6xl font-extrabold text-center text-white mb-4 tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                        Discussion Forums
                    </span>
                </h1>
                <p className="text-xl text-center text-gray-300 mb-16 max-w-2xl mx-auto font-light">
                    Join our thriving community of developers and tech enthusiasts to explore, learn and grow together
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topics.map((topic) => (
                        <div
                            key={topic.img}
                            className="group bg-gray-800/80 rounded-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 ease-out transform hover:-translate-y-1 shadow-xl"
                        >
                            <div className="h-48 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-gray-900/90 group-hover:opacity-90 transition-opacity duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-lg bg-gray-800 p-3 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                                        <img src={topic.img} alt={topic.text} className="w-full h-full object-cover rounded-lg" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                                    {topic.text}
                                </h2>
                                <p className="text-gray-400 mb-6 text-sm line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                                    {topic.description}
                                </p>
                                <Link href={`/forum/${topic.slug}`} className="block">
                                    <button
                                        className="w-full px-4 py-3 rounded-lg text-white font-medium bg-purple-800 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 shadow-md"
                                    >
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

export default Forums
