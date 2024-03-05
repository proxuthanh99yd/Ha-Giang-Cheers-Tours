import Typography from "@/components/primitive/Typography";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IGreatTripsProps {
  id: string;
  title: string;
  image: string;
  route: string;
  price: {
    basicBike: number;
    bigBike: number;
  };
  info: {
    id: string;
    label: string;
    icon: ReactNode;
    content: string;
  }[];
}

const GreatTrips = ({ title, image, price, info, route }: IGreatTripsProps) => (
  <div className="rounded-2xl bg-white p-4">
    <div className="group/cardTour relative aspect-[7/4] overflow-hidden rounded-2xl">
      <img
        className="absolute h-full w-full object-cover transition duration-500 group-hover/cardTour:scale-110"
        src={image}
        alt={title}
      />
      <Link
        className="bg-gradient-itemCardTour absolute h-full w-full"
        to={route}
      />
      <div className="absolute bottom-1 left-2 flex h-fit w-fit flex-col gap-x-4 md:left-0 md:flex-row">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white md:text-2xl lg:text-[2.125rem]">
            ${price.basicBike}
          </span>
          <div className="flex w-fit flex-col">
            <span className="text-xs font-semibold uppercase text-[#d9d9d9] md:font-bold">
              Easy Rider - Basic Bike
            </span>
            <div className="mt-0 w-full border-t border-solid border-white opacity-50 md:mt-[1.07rem] md:opacity-80" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-white md:text-2xl lg:text-[2.125rem]">
            ${price.bigBike}
          </span>
          <div className="flex w-fit flex-col">
            <span className="text-xs font-semibold uppercase text-[#d9d9d9] md:font-bold">
              Easy Rider - Big Bike
            </span>
            <div className="mt-0 w-full border-t border-solid border-white opacity-50 md:mt-[1.07rem] md:opacity-80" />
          </div>
        </div>
      </div>
    </div>
    <div>
      <Link className="my-4 block" to={route}>
        <Typography
          size="xl"
          weight="bold"
          className="uppercase text-primary-dark"
        >
          {title}
        </Typography>
      </Link>
      <ul className="space-y-2 text-md">
        {info.map(({ id, icon, content, label }) => (
          <li key={id} className="flex items-center gap-1">
            <span className="flex items-center gap-2 text-nowrap text-sm font-bold text-brown lg:text-base">
              {icon} {label}:
            </span>
            <p className="line-clamp-1 w-full text-nowrap text-gray">
              {content}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

interface IOurProps {
  data: IGreatTripsProps[];
  subHeading: string;
  heading: string;
}

export default function Our({ data, heading, subHeading }: IOurProps) {
  return (
    <section id="tour" className="relative py-12">
      <img
        src="/images/mask-great-trips.png"
        alt=""
        className="absolute left-0 top-0 h-full w-full object-cover"
      />
      <div className="layout-width relative z-10">
        <div className="text-center font-heavitas">
          <Typography data-aos="fade-up" variant="h3" intent="white">
            {subHeading}
          </Typography>
          <Typography
            data-aos="fade-up"
            className="mt-2"
            variant="h2"
            size="5xl"
            intent="white"
          >
            {heading}
          </Typography>
        </div>
        <div
          data-aos="zoom-in-up"
          className="mt-10 grid grid-cols-1 gap-7.5 md:grid-cols-2"
        >
          {data.map((item) => (
            <GreatTrips key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
