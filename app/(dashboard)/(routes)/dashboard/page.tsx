import { UserButton } from "@clerk/nextjs";

function Dashboard() {
  return (
    <div>
      Dashboard(protected)
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default Dashboard;
