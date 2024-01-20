"use client";

import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ApiCounter from "@/components/ApiCounter";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    href: "/code",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

function Sidebar({ apiLimitCount = 0 }: { apiLimitCount: number }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col justify-between text-white space-y-5 bg-[#111827] h-full">
      <div className="px-5 py-3">
        <Link href="/dashboard" className="flex items-center gap-10 pl-4 mb-10">
          <div className="flex gap-2 items-center">
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            <h1 className="text-2xl font-semibold">Genius</h1>
          </div>
        </Link>
        <div className="space-y-4">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.label}
              className={cn(
                "text-sm flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-slate-700 rounded-lg",
                route.href === pathname ? "bg-slate-600" : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("mr-3 w-4 h-4", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <ApiCounter apiLimitCount={apiLimitCount} />
    </div>
  );
}

export default Sidebar;
