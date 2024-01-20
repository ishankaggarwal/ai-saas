import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/MobileSidebar";
import { getApiLimitCount } from "@/lib/api-limit";

async function Navbar() {
  const apiLimitCount = await getApiLimitCount();

  return (
    <div className="flex justify-between p-2">
      <MobileSidebar apiLimitCount={apiLimitCount} />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default Navbar;
