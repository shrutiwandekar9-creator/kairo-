import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    // Using gemini-pro for maximum compatibility
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Act as Kairo AI Research Expert. User: "${message}". 
    Respond in STRICT JSON:
    {
      "text": "Your analysis...",
      "type": "graph",
      "chartData": [{"label": "Trend", "value": 80}, {"label": "Viral", "value": 65}],
      "quickReplies": ["Next steps?", "Rewrite script"]
    }`;

    const result = await model.generateContent(prompt);
    let text = result.response.text().trim().replace(/```json/gi, '').replace(/```/g, '');
    return NextResponse.json(JSON.parse(text));
  } catch (error) {
    return NextResponse.json({ text: "API Error, please try again." }, { status: 500 });
  }
}