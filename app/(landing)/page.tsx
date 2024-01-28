import LandingHero from "@/components/LandingHero";
import LandingNavbar from "@/components/LandingNavbar";
import { auth } from "@clerk/nextjs";

function Landing() {
  const { userId }: { userId: string | null } = auth();

  return (
    <div className="h-full">
      <LandingNavbar userId={userId} />
      <LandingHero userId={userId} />
    </div>
  );
}

export default Landing;
