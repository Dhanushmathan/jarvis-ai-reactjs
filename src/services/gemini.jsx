import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro-latest",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 100,
    responseMimeType: "text/plain",
};

const run = async (prompt) => {
    try {
        const chatSession = await model.startChat({
            generationConfig,
            history: [],
        });

        const result = await chatSession.sendMessage(prompt);
        return result.response.text();
    } catch (error) {
        console.error("Gemini Error: ", error);
        return "Sorry chellam, AI is busy now. Try again later.";
    }
}


export default run;