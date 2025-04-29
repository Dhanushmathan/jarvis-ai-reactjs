import React, { createContext, useState } from 'react';
import run from '../services/gemini';
import { useNavigate } from 'react-router-dom';

export const dataContext = createContext();

const VoiceContext = ({ children }) => {

    const [userSpeech, setUserSpeech] = useState(""); // 🗣️ User speech
    const [aiResponseText, setAiResponseText] = useState(""); // 🤖 AI reply
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
        const text = await run(prompt);
        setAiResponseText(text); // AI response
        speak(text);
        navigate("/ai-response");
    };

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = (e) => {
        const currentIndex = e.resultIndex;
        const transcript = e.results[currentIndex][0].transcript;
        console.log("User Said: ", transcript);

        setUserSpeech(transcript); // store user speech
        aiResponse(transcript);
        recognition.stop();
    }

    const value = { recognition, userSpeech, aiResponseText };

    return (
        <dataContext.Provider value={value}>
            {children}
        </dataContext.Provider>
    )
}

export default VoiceContext;