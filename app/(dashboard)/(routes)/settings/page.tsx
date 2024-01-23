"use client";

import { SettingsIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Heading from "@/components/Heading";
import { SubscriptionButton } from "@/components/SubscriptionButton";
import { checkSubscription } from "@/lib/subscription";

const SettingsPage = () => {
  const [isPro, setIsPro] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const proStatus = await checkSubscription();
      setIsPro(proStatus);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Heading
        title="Settings"
        description="Manage account settings."
        icon={SettingsIcon}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "You are currently on a Pro plan."
            : "You are currently on a free plan."}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
};

export default SettingsPage;
