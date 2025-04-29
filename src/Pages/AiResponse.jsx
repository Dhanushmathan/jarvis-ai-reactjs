import React, { useContext, useEffect } from 'react'
import { dataContext } from '../context/VoiceContext';
import { useNavigate } from 'react-router-dom';
import VoiceModeBtn from '../components/VoiceModeBtn';

const AiResponse = () => {

  const { userSpeech, aiResponseText } = useContext(dataContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Recieved Prompt: ", prompt);
  }, [prompt]);

  return (
    <div className="bg-white font-poppins p-6 min-h-screen ">
      <h1 className="text-3xl font-bold mb-6 text-center">Hey Everyone, I'm Jarvis.AI</h1>
      <div className="p-6 rounded-lg max-w-md border-2 border-gray-300 shadow-lg mx-auto">
        <p className="text-lg">{aiResponseText}</p>
      </div>
      <div className='flex flex-col items-start justify-center mt-16 fixed bottom-0 left-0 right-0 p-1.5'>
        <VoiceModeBtn />
      </div>
    </div>
  )
}

export default AiResponse;