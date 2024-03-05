import Hero from "@/components/compound/Hero";
import StartWith from "@/components/compound/StartWith";
import Our from "@/components/compound/Our";
import {
  CHEERS,
  DISCOVER,
  FAQ,
  FROM_OUR,
  HERO_ITEMS,
  OUR,
  START_WITH,
  WEATHER_FORECAST,
  WELCOME,
} from "./constants";
import Faq from "@/components/compound/Faq";
import Discover from "@/components/compound/Discover";
import FromOur from "@/components/compound/FromOur";
import Cheers from "@/components/compound/Cheers";
import WeatherForecast from "@/components/compound/WeatherForecast";
import Welcome from "@/components/compound/Welcome";
import ScrollButton from "@/components/compound/ScrollButton";

export default function Home() {
  return (
    <>
      <Hero data={HERO_ITEMS} />
      <Welcome {...WELCOME} />
      <StartWith {...START_WITH} />
      <Our {...OUR} />
      <Discover {...DISCOVER} />
      <FromOur {...FROM_OUR} />
      <Cheers {...CHEERS} />
      <WeatherForecast {...WEATHER_FORECAST} />
      <Faq {...FAQ} />
      <ScrollButton />
    </>
  );
}
