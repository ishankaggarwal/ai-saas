"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useProModal } from "@/hooks/useProModal";
import { Badge } from "@/components/ui/badge";
import {
  Check,
  Code,
  ImageIcon,
  LucideIcon,
  MessageSquare,
  Music,
  VideoIcon,
  Zap,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

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

function ProModalComponent() {
  const proModal = useProModal();
  const [loading, setLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setLoading(true);
      const response = await axios.get("/api/stripe");
      window.location.href = response.data.url;
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center pb-2">
            <div className="flex items-center justify-center gap-2 ">
              Upgrade to Genius
              <Badge variant="premium" className="p-1 text-sm">
                PRO
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center space-y-2 text-zinc-900 font-medium">
            {tools.map((tool) => (
              <Card
                key={tool.href}
                className="flex justify-between items-center p-3"
              >
                <div className="flex items-center gap-x-4">
                  <div className={cn("w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-6 h-6", tool.color)} />
                  </div>
                  <div className="font-semibold text-sm">{tool.label}</div>
                </div>
                <Check className="text-primary" />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            disabled={loading}
            onClick={onSubscribe}
            variant="premium"
            className="w-full space-y-4"
          >
            <Zap className="fill-white w-4 h-4 " />
            Upgrade
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ProModalComponent;
