import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { platform, niche } = body;

    const apiKey = process.env.GEMINI_API_KEY;

    // The Ultimate VidIQ-Style Prompt
    const prompt = `You are Kairo, a highly advanced YouTube/Social Media SEO Analyzer (like VidIQ). Analyze the niche "${niche}" on "${platform}". Return ONLY a valid, raw JSON object (no markdown, no backticks). The JSON must exactly match this structure:
    {
      "title": "A highly clickable, SEO-optimized title",
      "seoScore": "A number between 85 and 99",
      "viralTags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
      "videoHook": "A 5-second script for the beginning of the video to retain viewers",
      "bestTime": "Optimal posting time",
      "actionableAdvice": "One sentence strategy"
    }`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });

    const data = await response.json();
    const aiText = data.candidates[0].content.parts[0].text;

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