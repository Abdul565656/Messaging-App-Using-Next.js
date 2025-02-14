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
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Discussion Forums</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {topics.map((topic) => (
                        <div
                            key={topic.img}
                            className="flex flex-col bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300
                            border border-gray-200" 
                        >
                            <div className="flex-shrink-0 self-center w-20 h-20 mb-4 relative"> 
                                <img src={topic.img} alt={topic.text} className="w-full h-full object-cover rounded-full" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 text-center mb-3">{topic.text}</h2> 
                            <p className="text-gray-600 text-center text-sm mb-6 flex-grow line-clamp-2"> 
                                {topic.description}
                            </p>
                            <Link href={`/forum/${topic.slug}`}>
                            <button
                                className="px-6 py-2.5 rounded-full text-white font-semibold bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
                            >
                                Discuss Now
                            </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Forums
