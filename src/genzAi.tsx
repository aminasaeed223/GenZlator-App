// genzAi.tsx
import { GoogleGenerativeAI } from "@google/generative-ai";

// ✅ Replace this with your actual API key securely in production
const API_KEY = "AIzaSyCs7V8p8oZTH0bxDOssWmYeJd6t7wqtXzI";
const genAI = new GoogleGenerativeAI(API_KEY);

// Gen Z Translator
export async function convertToGenZ(text: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" }); // ✅ Valid model

    const prompt = `Rewrite this sentence in Gen Z slang (only one version, don't explain): "${text}"`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const output = await response.text();

    return output;
  } catch (error) {
    console.error("Gen Z conversion failed:", error);
    return "❌ Gen Z conversion failed.";
  }
}

// English Translator
export async function convertToEnglish(text: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" }); // ✅ Valid model

    const prompt = `Convert this Gen Z slang into simple English (one short version, no explanation): "${text}"`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const output = await response.text();

    return output;
  } catch (error) {
    console.error("English conversion failed:", error);
    return "❌ English conversion failed.";
  }
}
