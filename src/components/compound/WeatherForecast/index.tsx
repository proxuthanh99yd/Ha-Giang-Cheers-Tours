import Typography from "@/components/primitive/Typography";
import { useState } from "react";

const SunIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width={24} height={24} rx={12} fill="#FFC122" />
    <g clipPath="url(#clip0_5374_3557)">
      <path
        d="M12.001 7.335V6.168m0 10.5v1.167M8.743 8.743l-.825-.825m7.425 7.425l.825.825M7.335 12H6.168m10.5 0h1.167m-2.492-3.258l.825-.825m-7.425 7.425l-.825.825m4.083-1.25a2.917 2.917 0 110-5.833 2.917 2.917 0 010 5.833z"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_5374_3557">
        <path fill="#fff" transform="translate(5 5)" d="M0 0H14V14H0z" />
      </clipPath>
    </defs>
  </svg>
);

const RainIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width={24} height={24} rx={12} fill="#62B4FF" />
    <mask id="a" fill="#fff">
      <path d="M8.039 7.8A4.202 4.202 0 0116.2 9.2a2.8 2.8 0 110 5.6H8.5a3.5 3.5 0 01-.476-6.968" />
    </mask>
    <path
      d="M7.096 7.467a1 1 0 001.886.666l-1.886-.666zM16.2 9.2h-1a1 1 0 001 1v-1zm-8.04-.377a1 1 0 10-.27-1.982l.27 1.982zm.822-.69A3.202 3.202 0 0112 6V4a5.202 5.202 0 00-4.904 3.467l1.886.666zM12 6a3.2 3.2 0 013.2 3.2h2A5.2 5.2 0 0012 4v2zm4.2 4.2A1.8 1.8 0 0118 12h2a3.8 3.8 0 00-3.8-3.8v2zM18 12a1.8 1.8 0 01-1.8 1.8v2A3.8 3.8 0 0020 12h-2zm-1.8 1.8H8.5v2h7.7v-2zm-7.7 0A2.5 2.5 0 016 11.3H4a4.5 4.5 0 004.5 4.5v-2zM6 11.3a2.5 2.5 0 012.16-2.477L7.89 6.84A4.5 4.5 0 004 11.3h2z"
      fill="#fff"
      mask="url(#a)"
    />
    <path
      d="M8.325 17.25l-.7 1.4M11.825 17.25l-.7 1.4M15.325 17.25l-.7 1.4"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface IWeatherForecastProps {
  subHeading: string;
  heading: string;
  data: {
    id: string;
    label: string;
    image: string;
    sunny: string;
    rain: string;
  }[];
}
export default function WeatherForecast({
  heading,
  subHeading,
  data,
}: IWeatherForecastProps) {
  const [index, setIndex] = useState<number>(0);
  return (
    <section className="relative py-20 md:px-10">
      <img
        src="/images/mask-weather.png"
        alt=""
        className="absolute left-0 top-0 h-full w-full object-cover"
      />
      <div className="layout-width relative z-10">
        <div className="text-center font-heavitas">
          <Typography data-aos="fade-up" variant="h3" intent="secondary">
            {subHeading}
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-2"
            variant="h2"
            size="5xl"
            intent="secondary"
          >
            {heading}
          </Typography>
        </div>
        <div className="my-8 aspect-[1278/467] overflow-hidden rounded-2xl">
          <img
            className="h-full w-full object-cover"
            src={data[index].image}
            alt={data[index].label}
          />
        </div>
        <ul className="flex flex-wrap justify-center gap-1 md:justify-between md:gap-0">
          {data.map(({ id, label }, idx) => (
            <li key={id}>
              <button
                onClick={() => setIndex(idx)}
                className={`size-10 rounded-full text-xs font-medium uppercase text-gray transition duration-300 hover:bg-brown hover:text-white md:size-14 md:text-md lg:size-20 ${idx === index ? "bg-brown text-white" : ""}`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        <Typography
          className="mt-6 text-center lg:mt-10"
          intent="dark"
          size="md"
        >
          A lovely time to travel. Excellent wildlife sightseeing
        </Typography>
        <div className="flex-center mt-3 gap-5 text-xs md:text-base">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#f9f9f9] p-3.5 text-gray shadow-inner">
            <SunIcon />
            <span>{data[index].sunny}</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#f9f9f9] p-3.5 text-gray shadow-inner">
            <RainIcon />
            <span>{data[index].rain}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
