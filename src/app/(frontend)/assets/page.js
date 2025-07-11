import dynamic from "next/dynamic";

const Assets = dynamic(() => import("@/features/assets/Assets"), {});

export default function AssetsPage() {
  return <Assets />;
}
