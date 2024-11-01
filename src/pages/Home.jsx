import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import videoSrc from './../assets/Globe.mp4'; // Ensure this path is correct
import './Home.css';

const Home = () => {
    return (
        <>
            <section className="relative bg-black dark:bg-gray-900 ">
                <div className="video-background flex flex-col justify-center items-center">
                    <video
                        className="absolute inset-0 object-cover w-full h-full"
                        autoPlay
                        loop
                        muted
                    >
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                    
                    <div className="hero py-8 z-2 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                        <Link // Change anchor to Link
                            to="/blog" // Link to the Blog page
                            className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-white bg-gray-800 rounded-full hover:bg-gray-700"
                            role="alert"
                        >
                            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">New</span>
                            <span className="text-sm font-medium">Let's see How can we make changes</span>
                            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                            </svg>
                        </Link>
                        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                            Track, Understand, and Act on Climate Change.
                        </h1>
                        <p className="mb-8 text-lg font-normal text-gray-400 lg:text-xl sm:px-16 xl:px-48">
                            ClimaLens brings you powerful, interactive insights into Earth’s changing climate. See the trends, understand the impacts, and learn what we can do together.
                        </p>
                        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                            <Link // Change anchor to Link
                                to="/contact-us" // Link to the Contact Us page
                                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                            >
                                Contact Us
                                <svg
                                    className="ml-2 -mr-1 w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </Link>
                            <Link // Change anchor to Link
                                to="/resource" // Link to the Resources page
                                className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-300 rounded-lg border border-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-800"
                            >
                                <svg
                                    className="mr-2 -ml-1 w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                                </svg>
                                Explore Resources
                            </Link>
                        </div>
                        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                            <span className="font-semibold text-gray-400 uppercase">FEATURED IN</span>
                            <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
                                <a href="#" className="mr-5 mb-5 lg:mb-0 hover:text-gray-400">
                                    {/* Add your featured logos here */}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
