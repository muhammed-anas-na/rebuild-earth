import React from 'react';
const About = () => {
    return (
        <div className="relative flex items-center justify-between p-10 bg-white">
            <div className="w-1/2 h-full">
                <img
                    src='image03.jpg'
                    alt="Person in forest"
                    className="object-cover"
                />
            </div>

            <div className="w-1/2 px-16">
                <h2 className="text-4xl font-bold text-green-800 mb-6">
                    We build an equitable future for the environment and for people.
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                    We believe that eco-sustainability should be at the heart of all human activities and that reforestation is one of the most effective and concrete means of achieving it. We aim to operate responsibly and sustainably in every aspect of our work, promoting ethical practices with businesses and people. We support territories and communities to resist the effects of the climate crisis. How do we do this? We help companies become more effectively sustainable and we activate people to engage in concrete, simple, and responsible ways.
                </p>
                <div className="flex space-x-4">
                    <a href="#" className="bg-green-800 text-white px-6 py-3 rounded-md hover:bg-green-900">
                        About us
                    </a>
                    <a href="#" className="text-green-800 px-6 py-3 rounded-md hover:bg-green-200">
                        Our impact
                    </a>
                </div>
            </div>

        </div>
    );
};

export default About;