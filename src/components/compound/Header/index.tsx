import {
  IoBicycleOutline,
  IoChevronDown,
  IoHomeOutline,
  IoLogoFacebook,
  IoLogoWhatsapp,
  IoLogoYoutube,
  IoMailOutline,
  IoMenuOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import { useEffect, useRef, useState } from "react";

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
  const [scroll, setScroll] = useState<boolean>(true);
  const scrollPreviousRef = useRef<number>(0);
  const scrollCurrentRef = useRef<number>(0);
  const [scrollTop, setScrollTop] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (
        scrollPreviousRef.current < scrollCurrentRef.current &&
        window.scrollY > 70
      ) {
        setScroll(false);
      } else {
        setScroll(true);
      }
      scrollPreviousRef.current = scrollCurrentRef.current;
      scrollCurrentRef.current = window.scrollY;
      setScrollTop(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <header
        id="header"
        className={`layout-width sticky top-5 z-100  mt-6.25 rounded-2xl transition duration-300 lg:bg-white ${
          scroll
            ? scrollTop < 200
              ? "scroll-up"
              : "scroll-up "
            : "scroll-down"
        }`}
      >
        <MobileNav
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          className="flex justify-between lg:hidden"
          data={data}
        />
        <nav className="hidden items-center px-8 lg:flex">
          <div className="flex-center">
            <img
              src="/images/logo.png"
              alt="logo"
              className="size-20 object-contain"
            />
          </div>
          <ul className="mx-auto flex py-4 font-heavitas text-xs uppercase text-primary-dark xl:text-md">
            {data.map(({ id, label, route, children }) => (
              <li className="group/menu relative" key={id}>
                <Link
                  className="relative block p-2.5 transition duration-300 group-hover/menu:-translate-y-2 group-hover/menu:text-orange xl:p-5.25"
                  to={route}
                >
                  {label}
                  {children && (
                    <IoChevronDown className="inline-block font-bold" />
                  )}
                  <span className="invisible absolute left-1/2 z-10 block size-2 -translate-x-1/2 rounded-full bg-orange opacity-0 transition duration-300 group-hover/menu:visible group-hover/menu:opacity-100" />
                </Link>
                {children && (
                  <ul className="invisible absolute left-1/2 -translate-x-1/2 scale-75 rounded-lg border bg-white p-4 opacity-0 transition duration-500 group-hover/menu:visible group-hover/menu:scale-100 group-hover/menu:opacity-100">
                    {children.map((child) => (
                      <li key={child.id}>
                        <Link
                          className="block text-nowrap p-2 text-base transition duration-300 hover:text-brown"
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
      <nav
        className={`fixed bottom-0 z-100 block w-full max-w-[100vw] bg-white p-4 md:hidden`}
      >
        <ul className="flex justify-between text-base font-medium text-[#284a0c]">
          <li>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <IoHomeOutline className="text-4xl font-bold" />
              Home
            </button>
          </li>
          <li>
            <button
              className="flex-center flex-col"
              onClick={() =>
                document
                  .getElementById("tour")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <IoBicycleOutline className="text-4xl font-bold" />
              Tour
            </button>
          </li>
          <li>
            <button className="flex-center flex-col">
              <IoLogoWhatsapp className="text-4xl font-bold" />
              WhatsApp
            </button>
          </li>
          <li>
            <button className="flex-center flex-col">
              <IoMailOutline className="text-4xl font-bold" /> Book Now
            </button>
          </li>
          <li>
            <button
              className="flex-center flex-col"
              onClick={() => setIsOpen(true)}
            >
              <IoMenuOutline className="text-4xl font-bold" /> Menu
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
