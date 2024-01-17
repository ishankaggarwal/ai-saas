"use client";

import Heading from "@/components/Heading";
import { MessageSquare } from "lucide-react";

function ConversationPage() {
  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model"
        icon={MessageSquare}
        bgColor="bg-violet-500/10"
        iconColor="text-violet-500"
      />
    </div>
  );
}

export default ConversationPage;
