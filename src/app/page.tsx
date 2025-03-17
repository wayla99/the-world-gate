"use client";
import GameScreen from "@/components/GameScreen";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <GameScreen />
    </main>
  );
}
