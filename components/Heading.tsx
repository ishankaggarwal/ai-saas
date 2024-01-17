"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type Props = {
  title: string;
  description: string;
  icon: LucideIcon;
  bgColor: string;
  iconColor: string;
};

function Heading({
  title,
  description,
  icon: Icon,
  bgColor,
  iconColor,
}: Props) {
  return (
    <div className="flex p-4 items-center gap-3">
      <div className={cn("w-fit p-2 rounded-lg", bgColor)}>
        <Icon className={cn("w-8 h-8", iconColor)} />
      </div>
      <div className="flex flex-col">
        <div className="font-bold text-3xl">{title}</div>
        <div className="font-light text-sm">{description}</div>
      </div>
    </div>
  );
}

export default Heading;
