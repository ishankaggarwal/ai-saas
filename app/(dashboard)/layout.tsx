import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:w-72 md:fixed z-80 bg-gray-800">
        <div className="h-full">
          <Sidebar />
        </div>
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
