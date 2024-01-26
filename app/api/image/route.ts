import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import {increaseFreeAPILimit, checkApiLimit} from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(
    req: NextRequest,
){
    try {
        
        const {userId} = auth();
        const body = await req.json();
        const {prompt,amount=1,resolution="512x512"} = body;

        if(!userId) return NextResponse.json({status:401, error: "Unauthorized"});
        if(!openai.apiKey) return NextResponse.json({status:500, error: "API key not configured"});
        if(!prompt) return NextResponse.json({status:400, error: "Prompt is required"});

        const freeTrail = await checkApiLimit();
        const isPro = await checkSubscription();
        if(!freeTrail && !isPro) return new NextResponse("Free Trial has expired",{status:403});

        const response = await openai.images.generate({
            model: "dall-e-2",
            prompt,
            n: parseInt(amount),
            size: resolution,           
        });

        if(!isPro){
            await increaseFreeAPILimit();
        }
        return NextResponse.json(response.data);

    } catch (error) {
        console.log("[IMAGE_ERROR]",error);
        return NextResponse.json({ status: 500, error: "Internal Server Error" });
    }
}