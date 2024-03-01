import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { IoLogoFacebook, IoLogoYoutube } from "react-icons/io5";
import { Link } from "react-router-dom";
interface IHeaderProps {
  data: {
    id: string;
    route: string;
    label: string;
    children?: {
      id: string;
      route: string;
      label: string;
    }[];
  }[];
}
export default function Header({ data }: IHeaderProps) {
  return (
    <header className="relative z-10 mx-auto mt-6.25 max-w-screen-2xl rounded-2xl bg-white">
      <nav className="flex items-center px-8">
        <div className="flex-center">
          <img
            src="/images/logo.png"
            alt="logo"
            className="size-20 object-contain"
          />
        </div>
        <ul className="mx-auto flex py-4 font-heavitas text-md uppercase text-primary-dark">
          {data.map(({ id, label, route, children }) => (
            <li className="group/menu relative" key={id}>
              <Link
                className="relative block p-5.25 transition duration-300 group-hover/menu:-translate-y-2 group-hover/menu:text-orange"
                to={route}
              >
                {label}
                {children && (
                  <ChevronDownIcon className="inline-block size-5 font-bold" />
                )}
                <span className="invisible absolute left-1/2 z-10 block size-2 -translate-x-1/2 rounded-full bg-orange opacity-0 transition duration-300 group-hover/menu:visible group-hover/menu:opacity-100" />
              </Link>
              {children && (
                <ul className="invisible absolute left-1/2 -translate-x-1/2 scale-75 rounded-lg border bg-white p-4 opacity-0 transition duration-500 group-hover/menu:visible group-hover/menu:scale-100 group-hover/menu:opacity-100">
                  {children.map((child) => (
                    <li key={child.id}>
                      <Link
                        className="block  text-nowrap p-2 text-base transition duration-300 hover:text-brown"
                        to={child.route}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="flex-center gap-2">
          <Link to="/">
            <IoLogoFacebook className="fill-brown text-3xl" />
          </Link>
          <Link to="/">
            <IoLogoYoutube className="fill-brown text-3xl" />
          </Link>
        </div>
      </nav>
    </header>
  );
}
