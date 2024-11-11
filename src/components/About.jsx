import React from 'react';

const About = () => {
    return (
        <div className="relative flex flex-col md:flex-row items-center justify-between py-20 p-10 bg-white">
            <div className="w-full md:w-1/2 h-full mb-10 md:mb-0">
                <img
                    src='image03.jpg'
                    alt="Person in forest"
                    className="object-cover w-full h-full rounded-lg"
                />
            </div>

            <div className="w-full md:w-1/2 px-4 md:px-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6">
                    We build an equitable future for the environment and for people.
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-8">
                    Rebuild Earth for Tomorrow is more than just an organization - it's a call to action. By promoting ecological awareness, sustainable practices, and community involvement, we're not just talking about a better tomorrow, we're building it.

                    Be part of the solution. Join the movement and let's work together to create a carbon-neutral future that's not just a dream, but a reality. The time to act is now. Will you be part of the change?
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href="#" className="bg-green-800 text-white px-6 py-3 rounded-md hover:bg-green-900">
                        About us
                    </a>
                    <a href="#" className="text-green-800 px-6 py-3 rounded-md border-2 border-green-800">
                        Our impact
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
