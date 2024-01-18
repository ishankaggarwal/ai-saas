import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(
    req: NextRequest,
){
    try {
        
        const {userId} = auth();
        const body = await req.json();
        const {messages} = body;

        if(!userId) return NextResponse.json({status:401, error: "Unauthorized"});
        if(!openai.apiKey) return NextResponse.json({status:500, error: "API key not configured"});
        if(!messages) return NextResponse.json({status:400, error: "Messages are required"});

        const response = await openai.chat.completions.create({
            model:"gpt-3.5-turbo",
            messages:[{
                role:"system",
                content:"You are a code generator and you must answer in markdown code snippets. Use code comments to explain the code."
            },{
                role:"user",
                content:messages
            }],
        });
        return NextResponse.json({content:response.choices[0].message.content});

    } catch (error) {
        console.log("[CODE_ERROR]",error);
        return NextResponse.json({ status: 500, error: "Internal Server Error" });
    }
}