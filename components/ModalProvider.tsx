"use client";

import { useEffect, useState } from "react";
import ProModalComponent from "@/components/ProModalComponent";

export function ModalProvider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <ProModalComponent />
    </>
  );
}
