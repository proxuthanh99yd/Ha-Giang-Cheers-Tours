import { Link } from "react-router-dom";
import { ALL_TOUR, CHEERS_TOURS, CONTACT_US } from "./constants";

interface IFooterItemsProps {
  data: {
    id: string;
    label: string;
    icon: JSX.Element;
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
    <footer className="relative flex items-center bg-[#fffdf6] px-24 pb-96 pt-36">
      <img
        className="absolute bottom-0 left-0 h-full w-full object-cover"
        src="/images/bg-footer.png"
        alt="bg-footer"
      />
      <div className="relative z-10 mr-60">
        <img
          className="size-64 object-contain"
          src="/images/logo-footer.png"
          alt="logo-footer"
        />
      </div>
      <div className="relative z-10 flex flex-1 justify-between text-md">
        <FooterItems title="Contact us" data={CONTACT_US} />
        <FooterItems title="All Tour" data={ALL_TOUR} />
        <FooterItems title="Cheers tours" data={CHEERS_TOURS} />
      </div>
    </footer>
  );
}
