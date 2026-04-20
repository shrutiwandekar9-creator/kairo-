import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { platform, niche } = body;

    // Secret file se API key uthana
    const apiKey = process.env.GEMINI_API_KEY;

    // AI ko instruction dena (Prompt Engineering)
    const prompt = `You are Kairo, a highly advanced AI social media manager. Provide a viral content strategy for a creator making content about "${niche}" on "${platform}". Return ONLY a raw JSON object with no markdown formatting. The JSON must have these exact keys: "title" (string), "caption" (string), "bestTime" (string), "actionableAdvice" (string).`;

    // Asli Gemini AI ko call karna!
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const data = await response.json();
    const aiText = data.candidates[0].content.parts[0].text;

    // AI ke diye hue response ko saaf karke JSON mein badalna
    const cleanJson = aiText.replace(/```json/g, '').replace(/```/g, '').trim();
    const aiSuggestion = JSON.parse(cleanJson);

    return NextResponse.json(aiSuggestion);

  } catch (error) {
    console.error("AI Error:", error);
    return NextResponse.json(
      { error: "AI Engine processing failed." },
      { status: 500 }
    );
  }
}