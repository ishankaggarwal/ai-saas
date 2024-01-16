import { UserButton } from "@clerk/nextjs";

function Dashboard() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default Dashboard;
