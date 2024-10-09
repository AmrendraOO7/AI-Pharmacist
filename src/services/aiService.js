import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { MEDICAL_DATA } from "../data/medicalData";
import { API_KEY } from "../helper/common";

// const GOOGLE_API_KEY = process.env.API_KEY;

const GOOGLE_API_KEY = API_KEY;

class serviceAi {
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

    async getAdviceFor(symptoms) {
        const prompt = `
            You are an experienced AI Pharmasist. Based on the following symptoms, provide:
            1. Possible conditions
            2. Recommended over-the-counter medications
            3. Important precautions
            4. When to seek immediate medical attention

            Patient Symptoms: ${symptoms}

            Please provide a detailed response using the data from the MEDICAL_DATA dataset: ${JSON.stringify(MEDICAL_DATA)} and then your assistance.
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

export default new serviceAi();
