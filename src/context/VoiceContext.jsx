import React, { createContext, useState } from 'react';
import run from '../services/gemini';
import { useNavigate } from 'react-router-dom';

export const dataContext = createContext();

const VoiceContext = ({ children }) => {

    const [prompt, setPrompt] = useState("Listening...");
    const navigate = useNavigate();

    const speak = (text) => {
        const text_speak = new SpeechSynthesisUtterance(text)
        text_speak.volume = 1;
        text_speak.rate = 1;
        text_speak.pitch = 1;
        text_speak.lang = "en-US";
        window.speechSynthesis.speak(text_speak);
    }

    const aiResponse = async (prompt) => {
        const text = await run(prompt)
        setPrompt(text)
        speak(text);
    };

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition();

    recognition.onresult = (e) => {
        const currentIndex = e.resultIndex;
        const transcript = e.results[currentIndex][0].transcript;
        console.log("Use Said: ", transcript);

        setPrompt(transcript);
        aiResponse(transcript);

        setTimeout(() => {
            navigate("/ai-response");
        }, 10);
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

export default VoiceContext;