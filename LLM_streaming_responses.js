import "dotenv/config";
import readlineSync from "readline-sync";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY });

export const LLM_Model = async (promtp) => {
    if (!promtp) throw new Error("Oops look's like you haven't passed me an prompt!");

    try {
        const res = await ai.models.generateContentStream({
            model: "gemini-3-flash-preview",
            contents: CONTEXT,
            config: {
                systemInstruction: "You are a chatbot. Your name is modi."
            }
        });

        console.log("Modi: ")
        for await (const chunk of res) {
            console.log(chunk.text);
        }
    } catch (error) {
        throw error;   
    }
}

export const main = async () => {
    const user_prompt = readlineSync.question("Ask me anything: ");
    await LLM_Model(user_prompt);
    main();
}

main();
