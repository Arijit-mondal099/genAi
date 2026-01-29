import "dotenv/config";
import readlineSync from "readline-sync";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY });

// AI model
export const LLM_Model = ai.chats.create({
    model: "gemini-3-flash-preview",
    history: []
})

export const main = async () => {
    const user_prompt = readlineSync.question("Ask me anything: ");
    if (!user_prompt) throw new Error("Please provide me an prompt!");

    const res = await LLM_Model.sendMessage({ message: user_prompt });
    if (!res.text) throw new Error("Oops something went wrong please try again!");
    console.log("LLM:", res.text);

    // calling fun recursivly
    main();
}

main()
