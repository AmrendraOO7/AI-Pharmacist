import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { MEDICAL_DATA } from "../data/medicalData";

const GOOGLE_API_KEY = 'AIzaSyAXvhn9H4zEGK9FphN4mBhaknXXF0TqW7Q';

class AIService {
    constructor() {
        if (!GOOGLE_API_KEY) {
            throw new Error("Google API Key is not set");
        }
        this.model = new ChatGoogleGenerativeAI({
            apiKey: GOOGLE_API_KEY,
            modelName: "gemini-pro",
            temperature: 0.7,
        });
    }

    async getAdvice(symptoms) {
        const prompt = `
            You are an experienced AI Pharmacist. Based on the following symptoms, provide:
            1. Possible conditions
            2. Recommended over-the-counter medications
            3. Important precautions
            4. When to seek immediate medical attention

            Patient Symptoms: ${symptoms}

            Please provide a detailed response using only the data from the MEDICAL_DATA dataset: ${JSON.stringify(MEDICAL_DATA)}
        `;

        try {
            const response = await this.model.invoke(prompt);

            //let cleanTest = response.content.replace('*', '').replace('**', '').replace(':**', ':').replace('.**', '.')
            console.log(response.content)
            return response.content;
        } catch (error) {
            console.error('Error getting AI advice:', error);
            throw error;
        }
    }
}

export default new AIService();
