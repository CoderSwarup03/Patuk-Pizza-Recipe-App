import React from 'react'
import Navbar from '../components/Navbar'
import FoodDetails from '../data/FoodDetails'
import { Link, useParams } from 'react-router-dom'
import Footer from '../components/Footer'

const BlogDetails = () => {
    const id = useParams();
    const item = FoodDetails[id.id]
    return (
        <>
            <Navbar />
            <div className='bg-[#fdf8f1]'>
                <div className="max-w-4xl mx-auto p-6 mt-[10vh]">
                    <img src={item.img} alt={item.name} className="w-1/2 h-1/2 object-cover rounded-xl shadow-md" />
                    <h1 className="text-md md:text-3xl font-bold mt-6">{item.name}</h1>
                    <h2 className="text-md md:text-xl font-semibold mt-4">Ingredients:</h2>
                    <ul className="list-disc pl-6 text-gray-700">
                        {item.ingredients.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>

                    <h2 className="text-md md:text-xl font-bold md:font-semibold mt-4">Steps:</h2>
                    <ol className="list-decimal pl-6 text-gray-700">
                        {item.steps.map((step, i) => <li key={i}>{step}</li>)}
                    </ol>
                    <Link to="/" className="inline-block mt-6 text-amber-600 hover:underline">
                        ← Back to Recipes
                    </Link>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default BlogDetails