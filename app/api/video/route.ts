import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";
import {increaseFreeAPILimit, checkApiLimit} from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

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

        const freeTrail = await checkApiLimit();
        const isPro = await checkSubscription();
        if(!freeTrail && !isPro) return new NextResponse("Free Trial has expired",{status:403});

        const response = await replicate.run(
          "cjwbw/damo-text-to-video:1e205ea73084bd17a0a3b43396e49ba0d6bc2e754e9283b2df49fad2dcf95755",
          {
            input: {
              prompt: values.prompt,
            }
          }
        );
        
        if(isPro){
          await increaseFreeAPILimit();
      }
        return NextResponse.json(response);

    } catch (error) {
        console.log("[VIDEO_ERROR]",error);
        return NextResponse.json({ status: 500, error: "Internal Server Error" });
    }
}