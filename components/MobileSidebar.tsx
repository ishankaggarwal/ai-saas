"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/Sidebar";

function MobileSidebar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 text-white">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}

export default MobileSidebar;
