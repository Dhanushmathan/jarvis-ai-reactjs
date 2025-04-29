import React, { useContext, useState } from 'react'
import { dataContext } from '../context/VoiceContext';

const VoiceModeBtn = () => {

    const { recognition, userSpeech, setPrompt } = useContext(dataContext);

    return (
        <div className='flex flex-col items-start justify-center mt-16'>
            <div className='flex'>
                <button onClick={() => {
                    if (recognition && recognition.state !== 'started') {
                        recognition.start();
                    }
                }} className="cursor-pointer text-white bg-purple-600 hover:bg-purple-700 float-right rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className='px-2 py-2 w-28 h-28'><path fill="currentColor" d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m7 9c0 3.53-2.61 6.44-6 6.93V21h-2v-3.07c-3.39-.49-6-3.4-6-6.93h2a5 5 0 0 0 5 5a5 5 0 0 0 5-5z" /></svg>
                </button>
                <div className='bg-gradient-to-l from-black from-30% to-violet-900 text-white ml-1.5 max-w-screen max-h-max mt-12 p-1.5 rounded-lg'>
                    <p>{userSpeech}</p>
                </div>
            </div>
        </div>
    )
}

export default VoiceModeBtn