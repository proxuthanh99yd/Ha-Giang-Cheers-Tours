import { IoLogoFacebook, IoLogoYoutube, IoMenuOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Drawer } from "rizzui";

interface IMobileNavProps {
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
  className?: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}
export default function MobileNav({
  data,
  className,
  isOpen,
  setIsOpen,
}: IMobileNavProps) {
  return (
    <nav className={className}>
      <div className={isOpen ? "hidden" : "block"}>
        <img
          src="/images/logo.png"
          alt="logo"
          className="size-20 object-contain"
        />
      </div>
      <button onClick={() => setIsOpen(true)}>
        <IoMenuOutline className="text-5xl text-white" />
      </button>
      <Drawer
        placement="left"
        containerClassName="fixed max-w-[100vw] max-h-screen transition duration-300 inset-0 z-100 bg-white"
        className=""
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size="full"
      >
        <img
          src="/images/bg-nav-res.png"
          className="absolute h-full w-full object-cover"
          alt="bg-menu"
        />
        <ul className="relative z-10 mt-10 space-y-5 text-center font-heavitas text-primary-dark md:text-3xl">
          {data.map(({ id, label, route, children }) => {
            if (children) {
              return children.map((child) => (
                <li key={child.id}>
                  <Link className="block py-2" to={child.route}>
                    {child.label}
                  </Link>
                </li>
              ));
            }
            return (
              <li key={id}>
                <Link className="block py-2" to={route}>
                  {label}
                </Link>
              </li>
            );
          })}
          <li className="flex-center gap-5">
            <Link to="/">
              <IoLogoFacebook className="fill-brown text-4xl md:text-6xl" />
            </Link>
            <Link to="/">
              <IoLogoYoutube className="fill-brown text-4xl md:text-6xl" />
            </Link>
          </li>
        </ul>
        <button
          className="absolute right-10 top-1/2 z-30 block -translate-y-1/2"
          onClick={() => setIsOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={28}
            height={28}
            viewBox="0 0 28 28"
            fill="none"
            className="size-8 md:size-14"
          >
            <path
              d="M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14z"
              fill="#B34B1E"
            />
            <path
              d="M17.104 14l4.195-4.196a1.22 1.22 0 000-1.724L19.92 6.701a1.22 1.22 0 00-1.724 0L14 10.897 9.804 6.7a1.22 1.22 0 00-1.724 0l-1.379 1.38a1.22 1.22 0 000 1.723L10.897 14 6.7 18.196a1.219 1.219 0 000 1.724l1.38 1.38a1.22 1.22 0 001.723 0L14 17.103l4.196 4.195a1.22 1.22 0 001.724 0l1.38-1.379a1.22 1.22 0 000-1.724L17.103 14z"
              fill="#fff"
            />
          </svg>
        </button>
      </Drawer>
    </nav>
  );
}
