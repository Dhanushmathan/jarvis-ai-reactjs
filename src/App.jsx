import AiResponse from './Pages/AiResponse';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/ai-response' element={<AiResponse />} />
            <Route path="*" element={<div className='text-center text-2xl font-bold'>404 Not Found</div>} />
        </Routes>
    )
}

export default App;