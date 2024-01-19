"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  MessageSquare,
  Music,
  VideoIcon,
  LucideIcon,
  ArrowRight,
} from "lucide-react";
import { useRouter } from "next/navigation";

type Tool = {
  label: string;
  icon: string | LucideIcon;
  href: string;
  color: string;
  bgColor: string;
};

const tools: Tool[] = [
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },
];

function Dashboard() {
  const router = useRouter();
  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center">
        <p className="sm:text-2xl md:text-3xl font-bold">
          Explore the power of AI
        </p>
        <p className="sm:text-xl font-light text-slate-600">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="absolute flex flex-col p-20 md:pd-32 gap-5 space-y-3 w-full">
        {tools.map((tool) => (
          <div key={tool.label} className="w-full">
            <Card
              onClick={() => router.push(tool.href)}
              className="p-4 w-full flex justify-between items-center cursor-pointer hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-x-4">
                <div className="flex items-center">
                  <tool.icon
                    className={cn("w-7 h-7 mr-1", tool.color, tool.bgColor)}
                  />
                  <div className="font-medium">{tool.label}</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
