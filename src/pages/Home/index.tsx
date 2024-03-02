import Hero from "@/components/compound/Hero";
import { HERO_ITEMS } from "./constants";
import StartWith from "@/components/compound/StartWith";

export default function Home() {
  return (
    <>
      <Hero data={HERO_ITEMS} />
      <StartWith />
    </>
  );
}
