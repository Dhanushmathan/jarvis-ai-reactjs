import React, { createContext, useState } from 'react';
import run from '../data/gemini';

export const dataContext = createContext();

const UserContext = ({ children }) => {

    const [prompt, setPrompt] = useState("Listening...");

    const speak = (text) => {
        const text_speak = new SpeechSynthesisUtterance(text)
        text_speak.volume = 1;
        text_speak.rate = 1;
        text_speak.pitch = 1;
        text_speak.lang = "en", 'ta';
        window.speechSynthesis.speak(text_speak);
    }

    const aiResponse = async (prompt) => {
        const text = await run(prompt)
        setPrompt(text)
        speak(text);
    };

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()
    recognition.onresult = (e) => {
        const currentIndex = e.resultIndex;
        const transcript = e.results[currentIndex][0].transcript
        setPrompt(transcript)
        aiResponse(transcript)
    }

    const value = { recognition, prompt, setPrompt };

    return (
        <div>
            <dataContext.Provider value={value}>
                {children}
            </dataContext.Provider>
        </div>
    )
}

export default UserContext;