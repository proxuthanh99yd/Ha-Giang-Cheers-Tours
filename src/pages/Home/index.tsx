import Hero from "@/components/compound/Hero";
import { HERO_ITEMS } from "./constants";

export default function Home() {
  return (
    <>
      <Hero data={HERO_ITEMS} />
    </>
  );
}
