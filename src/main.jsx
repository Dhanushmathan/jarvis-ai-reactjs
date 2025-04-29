import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import VoiceContext from './context/VoiceContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <VoiceContext>
      <App />
    </VoiceContext>
  </BrowserRouter>
)
