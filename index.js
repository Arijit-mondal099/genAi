import "dotenv/config";
import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import readline_sync from "readline-sync";

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GENAI_API_KEY });

const LLM = ai.chats.create({
  model: "gemini-3-flash-preview",
  history: [], // initial context
  config: {
    systemInstruction: "You are a personal chatbot for arijit mondal. Your name is Jarvis.",
    thinkingConfig: {
      thinkingLevel: ThinkingLevel.MEDIUM,
    },
  },
});

export const main = async () => {
  try {
    const user_prompt = readline_sync.question("Ask me anything: ");
    if (!user_prompt) throw new Error("Please provide me an prompt!");

    const res = await LLM.sendMessageStream({ message: user_prompt });

    console.log("Jarvis: ");
    for await (const chunk of res) {
      console.log(chunk.text);
    }

    main();
  } catch (error) {
    throw new Error(error);
  }
};

main();
