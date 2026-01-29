import "dotenv/config";
import readlineSync from "readline-sync";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY });

// this is the context window array
const CONTEXT = [];

export const LLM_Model = async (promtp) => {
    if (!promtp) throw new Error("Oops look's like you haven't passed me an prompt!");

    // add user prompt to the context array
    CONTEXT.push({
        role: "user",
        parts: [{ text: promtp }],
    });

    try {
        const res = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: CONTEXT,
            config: {
                systemInstruction: "You are a chatbot. Your name is mondal."
            }
        });

        console.log("LLM:", res.text);

        // add the llm res to the context array
        CONTEXT.push({
            role: "model",
            parts: [{ text: res.text }],
        })
    } catch (error) {
        throw error;   
    }
}

export const main = async () => {
    const user_prompt = readlineSync.question("How can i help you today? ");
    await LLM_Model(user_prompt);
    main();
}

main();
