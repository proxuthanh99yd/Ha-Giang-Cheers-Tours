import { Link } from "react-router-dom";
import { ALL_TOUR, CHEERS_TOURS, CONTACT_US } from "./constants";
import { ReactNode } from "react";

interface IFooterItemsProps {
  data: {
    id: string;
    label: string;
    icon: ReactNode;
    route: string;
  }[];
  title: string;
}
const FooterItems = ({ data, title }: IFooterItemsProps) => (
  <div className="">
    <h5 className="font-bold uppercase text-primary-dark">{title}</h5>
    <ul className="mt-4  space-y-3">
      {data.map(({ id, icon, label, route }) => (
        <li className="flex items-center gap-1.5 text-gray" key={id}>
          <span>{icon}</span>
          <Link to={route}>{label}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center gap-10 bg-[#fffdf6] px-24 pb-96 pt-16 lg:flex-row lg:justify-between lg:pt-36 xl:gap-32">
      <img
        className="absolute bottom-0 left-0 h-full w-full object-cover"
        src="/images/bg-footer.png"
        alt="bg-footer"
      />
      <div className="relative z-10">
        <img
          className="size-44 object-contain xl:size-56"
          src="/images/logo-footer.png"
          alt="logo-footer"
        />
      </div>
      <div className="relative z-10 mt-10 grid flex-1 gap-10 text-md md:grid-cols-2 lg:mt-0 lg:grid-cols-3">
        <FooterItems title="Contact us" data={CONTACT_US} />
        <FooterItems title="All Tour" data={ALL_TOUR} />
        <FooterItems title="Cheers tours" data={CHEERS_TOURS} />
      </div>
    </footer>
  );
}
