import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <div className="p-2">
      <Button variant="ghost" className="md:hidden">
        <Menu />
      </Button>
    </div>
  );
}

export default Navbar;
