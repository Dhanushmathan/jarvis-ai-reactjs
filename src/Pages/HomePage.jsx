import React, { useContext } from 'react';
import { dataContext } from '../context/VoiceContext';

const HomePage = () => {

    const { recognition, prompt, setPrompt } = useContext(dataContext);

    return (
        <div className='bg-gradient-to-b from-black from-30% to-violet-900 text-white min-h-screen font-poppins'>
            <header className='container mx-auto flex justify-between items-center px-6 py-2'>
                <div className='flex items-center sm:space-x-2'>
                    <img src="/assets/img/JARVIS logo.png" alt="jarvis logo" className='w-14 sm:w-20' />
                    <a href='#' className='text-lg sm:text-xl font-bold'>JARVIS.AI</a>
                </div>
                <nav className='md:flex space-x-6 hidden'>
                    <a href="#" className='hover:text-purple-700 font-semibold text-base'>Feature</a>
                    <a href="#" className='hover:text-purple-700 font-semibold text-base'>About</a>
                    <a href="#" className='hover:text-purple-700 font-semibold text-base'>Blog</a>
                </nav>
                <div className='space-x-2 sm:space-x-4'>
                    <button className='bg-gray-600 cursor-pointer hover:bg-gray-700 text-sm md:text-base lg:text-base px-2 py-1 sm:px-2 sm:py-2 md:px-4 md:py-2 font-semibold rounded-full'>Sign Up</button>
                    <button className='bg-purple-600 cursor-pointer hover:bg-purple-700 text-sm md:text-base lg:text-base px-3 py-1 sm:px-2 sm:py-2 font-semibold md:px-4 md:py-2 rounded-full'>Login</button>
                </div>
            </header>

            <section className='container mx-auto flex flex-col-reverse items-center md:flex-row mt-3 px-6'>
                <div className='text-center md:text-left md:w-1/2 space-y-5'>
                    <h1 className='text-4xl md:text-5xl mt-4 md:mt-0 leading-tight font-bold'>Get ready for the <br /> new era of <span className='text-purple-700'>JARVIS AI</span></h1>
                    <p className='text-base text-gray-400'>Discover news like never before with instant updates and voice-assisted features. Stay ahead, stay connected!</p>
                    <div className='flex items-center flex-col space-x-3 mt-2 relative'>
                        <button onClick={() => {
                            if (recognition && recognition.state !== 'started') { recognition.start(); }
                        }} className="rounded-full cursor-pointer bg-purple-600 hover:bg-purple-700 inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className='px-2 py-2 w-28 h-28 rounded-full '><path fill="currentColor" d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m7 9c0 3.53-2.61 6.44-6 6.93V21h-2v-3.07c-3.39-.49-6-3.4-6-6.93h2a5 5 0 0 0 5 5a5 5 0 0 0 5-5z" /></svg>
                        </button>
                    </div>
                </div>
                <div className='md:w-1/2 flex justify-center'>
                    <img src="/assets/img/AI robot.png" alt="ai robot" className='w-72 md:ml- md:w-[350px] drop-shadow-lg shadow-blue-500/50' />
                </div>
            </section>

            <footer className='text-[10px] font-medium text-center mt-6 text-gray-500'>
                <p>Created by &copy;<a href="https://www.linkedin.com/in/dhanushmathan2394/" className='hover:text-blue-600 hover:underline'>Dhanush mathan</a>, Thankyou Google AI</p>
            </footer>

        </div>
    )
}

export default HomePage;