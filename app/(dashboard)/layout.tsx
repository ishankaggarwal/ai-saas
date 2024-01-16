import Navbar from "@/components/ui/Navbar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:w-72 md:fixed z-80 bg-gray-800">
        <div>Hello</div>
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
