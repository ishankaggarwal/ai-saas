"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MAX_FREE_API_LIMIT } from "@/constants";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { useProModal } from "@/hooks/useProModal";

function ApiCounter({ apiLimitCount }: { apiLimitCount: number }) {
  const proModal = useProModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="flex justify-center items-center p-10">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-4">
          <div className="text-center text-sm text-white">
            {apiLimitCount} / {MAX_FREE_API_LIMIT} Free Generations
            <Progress
              className="mt-2 h-2"
              value={(apiLimitCount / MAX_FREE_API_LIMIT) * 100}
            />
          </div>
          <Button
            variant="premium"
            className="mt-2 w-full"
            onClick={proModal.onOpen}
          >
            <Zap className="h-4 w-4 fill-white" />
            Upgrade
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default ApiCounter;
