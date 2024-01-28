"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

function LandingNavbar({ userId }: { userId: string | null }) {
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative w-8 h-8 mr-4">
          <Image alt="logo" priority src="/logo.png" width={50} height={50} />
        </div>
        <h1 className="text-2xl font-bold text-white">Genius</h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link href={userId ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default LandingNavbar;
