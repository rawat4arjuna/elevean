import dynamic from "next/dynamic";

const Dashboard = dynamic(() => import("@/features/dashboard/Dashboard"));

export default function Page() {
  return <Dashboard />;
}
