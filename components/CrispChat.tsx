"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

function CrispChat() {
  useEffect(() => {
    Crisp.configure("bd3e5de5-42a8-4aab-ba63-d29cd9f1dd7f");
  });

  return null;
}

export default CrispChat;
