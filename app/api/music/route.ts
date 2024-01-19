import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY,
});

export async function POST(
    req: NextRequest,
){
    try {
        
        const {userId} = auth();
        const body = await req.json();
        const {values} = body;

        if(!userId) return NextResponse.json({status:401, error: "Unauthorized"});
        if(!values.prompt) return NextResponse.json({status:400, error: "Prompt is required"});

        const response = await replicate.run(
          "meta/musicgen:b05b1dff1d8c6dc63d14b0cdb42135378dcb87f6373b0d3d341ede46e59e2b38",
          {
            input: {
              model_version: "stereo-melody-large",
              prompt: values.prompt,
            }
          }
        );
        
        return NextResponse.json(response);

    } catch (error) {
        console.log("[MUSIC_ERROR]",error);
        return NextResponse.json({ status: 500, error: "Internal Server Error" });
    }
}