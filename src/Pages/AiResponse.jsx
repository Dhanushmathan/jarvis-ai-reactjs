import React, { useContext } from 'react'
import { dataContext } from '../context/VoiceContext';
import { useNavigate } from 'react-router-dom';

const AiResponse = () => {

  const { prompt } = useContext(dataContext);
  const navigate = useNavigate();

  return (
    <div className="bg-black text-white flex flex-col items-center font-poppins">
      <button onClick={navigate("/")} className="flex  text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m7.85 13l2.85 2.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L4.7 12.7q-.3-.3-.3-.7t.3-.7l4.575-4.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7L7.85 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"></path></svg>
      </button>
      <h1 className="text-3xl font-bold mb-6">AI Response</h1>
      <div className="bg-gray-800 p-6 rounded-lg max-w-md">
        <p className="text-lg">{prompt}</p>
      </div>
    </div>
  )
}

export default AiResponse;