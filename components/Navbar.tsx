import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/MobileSidebar";

function Navbar() {
  return (
    <div className="flex justify-between p-2">
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default Navbar;
