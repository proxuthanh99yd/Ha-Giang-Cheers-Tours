import { useState } from "react";
import {
  IoAddOutline,
  IoCheckmark,
  IoChevronDown,
  IoRemoveOutline,
} from "react-icons/io5";
interface IHeroProps {
  data: {
    id: string;
    tourName: string;
    basicBike: number;
    bigBike: number;
  }[];
}

const PersonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={28}
    viewBox="0 0 21 28"
    fill="none"
    className="h-[2rem] w-[2rem] max-lg:mr-[2.13rem] max-lg:h-[4.33rem] max-lg:w-[4.33rem] max-md:h-[5.33rem] max-md:w-[5.33rem]"
  >
    <path
      d="M16.578 19.933l-.445-.723-.649-1.438-1.53-.956H7.061l-1.53.956L4 17.633l-1.267.338A3.012 3.012 0 00.5 20.877v4.718l6.109 2.406h3.899l7.17-3.361.323-2.326c0-1.36-.108-2.03-1.423-2.381z"
      fill="#B34B1E"
    />
    <path
      d="M18.283 17.971l-1.267-.338-1.532.139-1.53-.956h-3.446v11.185h3.899l6.109-2.406v-4.718c0-1.36-.918-2.555-2.233-2.906z"
      fill="#B34B1E"
    />
    <path
      d="M13.953 23.133h-6.89a.82.82 0 010-1.64h6.89a.82.82 0 110 1.64z"
      fill="#B34B1E"
    />
    <path
      d="M4 17.633v10.368h2.609c.019-.092.454-3.002.454-4.812V17.72l.546-.387-.546-.517L4 17.633zM13.953 16.816l-.547.489.547.415v5.469c0 1.81.435 4.72.454 4.812h2.609V17.633l-3.063-.817z"
      fill="#B34B1E"
    />
    <path
      d="M18.656 21.93h-1.64c-1.208 0-2.188.98-2.188 2.187v1.695c0 1.209.98 2.188 2.188 2.188h1.64c1.208 0 2.188-.98 2.188-2.188v-1.695c0-1.208-.98-2.187-2.188-2.187zM4 21.93H2.36c-1.209 0-2.188.98-2.188 2.187v1.695c0 1.209.98 2.188 2.187 2.188H4c1.208 0 2.188-.98 2.188-2.188v-1.695c0-1.208-.98-2.187-2.188-2.187z"
      fill="#B34B1E"
    />
    <path
      d="M13.133 12.688h-5.25a.82.82 0 00-.82.82v4.21l2.98 2.208a.82.82 0 00.465.144s1.334-1.74 1.474-1.836l.51-2.252 1.461-2.474a.82.82 0 00-.82-.82z"
      fill="#F6B900"
    />
    <path
      d="M13.133 12.688h-2.625v7.382a.82.82 0 00.465-.144l2.98-2.207v-4.211a.82.82 0 00-.82-.82z"
      fill="#F6B900"
    />
    <path
      d="M14.883 6.18h-8.75a.82.82 0 00-.82.82v3.938a5.201 5.201 0 005.195 5.195s2.133-2.33 2.133-5.195L15.703 7a.82.82 0 00-.82-.82z"
      fill="#F6B900"
    />
    <path
      d="M14.883 6.18h-4.375v9.953a5.201 5.201 0 005.195-5.195V7a.82.82 0 00-.82-.82zM16.633 0H8.32a3.011 3.011 0 00-3.008 3.008v.93c0 .453.368.82.82.82h8.75a.82.82 0 00.386-.096c.089-.047 2.185-1.192 2.185-3.842a.82.82 0 00-.82-.82z"
      fill="#F6B900"
    />
    <path
      d="M15.758 3.938h-10.5a.82.82 0 00-.82.82V7c0 .453.367.82.82.82h10.5a.82.82 0 00.82-.82V4.758a.82.82 0 00-.82-.82z"
      fill="#B34B1E"
    />
  </svg>
);

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={28}
    viewBox="0 0 25 28"
    fill="none"
    className="h-[2rem] w-[2rem] max-lg:mr-[2.06rem] max-lg:h-[4.33rem] max-lg:w-[4.33rem] max-md:h-[5.33rem] max-md:w-[5.33rem]"
  >
    <path
      d="M20.717 3.409c-4.545-4.545-11.887-4.545-16.374 0a11.536 11.536 0 000 16.374L12.5 28l8.158-8.158c4.545-4.545 4.545-11.888.058-16.433z"
      fill="#B34B1E"
    />
    <path
      d="M18.09 17.157a7.843 7.843 0 01-11.13 0 7.843 7.843 0 010-11.13 7.843 7.843 0 0111.13 0c3.031 3.089 3.031 8.1 0 11.13z"
      fill="#F6B900"
    />
    <path
      d="M6.088 11.741l5.244 1.05 1.05 5.244L16.81 7.312l-10.722 4.43z"
      fill="#B34B1E"
    />
  </svg>
);

export default function Hero({ data }: IHeroProps) {
  const [selected, setSelected] = useState<number>(0);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [basicPax, setBasicPax] = useState<number>(1);
  const [bigPax, setBigPax] = useState<number>(1);

  const handleSelected = (index: number) => {
    setSelected(index);
    setDropdown((open) => !open);
  };
  const handleIncrementBasicPax = () => {
    setBasicPax((curr) => ++curr);
  };
  const handleDecrementBasicPax = () => {
    if (basicPax <= 0) return;
    setBasicPax((curr) => --curr);
  };
  const handleIncrementBigPax = () => {
    setBigPax((curr) => ++curr);
  };
  const handleDecrementBigPax = () => {
    if (bigPax <= 0) return;
    setBigPax((curr) => --curr);
  };
  const total =
    data[selected].basicBike * basicPax + data[selected].bigBike * bigPax;
  return (
    <section className="h-screen w-full object-cover">
      <img
        src="/images/hero-bg.jpeg"
        alt=""
        className="absolute top-0 h-screen w-full object-cover"
      />
      <div className="flex-center absolute top-0 h-screen w-full">
        <div className="-translate-x-1/3">
          <p className="font-heavitas text-7xl text-white">Back to</p>
          <p className="translate-x-1/2 font-tomatoes text-9xl text-white">
            nature
          </p>
        </div>
      </div>
      <div className="absolute bottom-10.75 left-1/2 flex w-full max-w-7xl -translate-x-1/2 items-center justify-between rounded-xl bg-white px-8 py-5.25 uppercase">
        <div className="space-y-2">
          <span className="text-md text-gray">Tour</span>
          <div className="text-lg font-bold">
            <div className="flex items-center">
              <LocationIcon />
              <div className="relative flex cursor-pointer items-center gap-10 rounded-md px-2 py-1.5 hover:bg-[#f1f5f9]">
                <button
                  onClick={() => setDropdown((open) => !open)}
                  className="absolute inset-0"
                />
                {data[selected].tourName}
                <IoChevronDown />
                <ul
                  className={`absolute -top-2 right-0 w-full -translate-y-full text-nowrap rounded-lg border bg-white p-1 shadow transition duration-300 ${dropdown ? "visible opacity-100" : "invisible opacity-0"}`}
                >
                  {data.map(({ id, tourName }, index) => (
                    <li
                      key={id}
                      className="relative flex cursor-pointer items-center gap-1 rounded-md px-2 py-1.5 hover:bg-[#f1f5f9]"
                    >
                      <button
                        onClick={() => handleSelected(index)}
                        className="absolute inset-0"
                      />
                      <span
                        className={
                          selected === index ? "opacity-100" : "opacity-0"
                        }
                      >
                        <IoCheckmark />
                      </span>

                      {tourName}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span className="block h-9 border" />
        <div className="space-y-2">
          <span className="text-md text-gray">EASY RIDER - BASIC BIKE</span>
          <div className="text-lg font-bold">
            <div className="flex items-center gap-2">
              <PersonIcon />
              <div className="flex items-center gap-4">
                {basicPax} pax
                <button
                  onClick={handleDecrementBasicPax}
                  className="flex-center size-10 rounded-full shadow-md shadow-slate-200 drop-shadow-md"
                >
                  <IoRemoveOutline className="text-2xl" />
                </button>
                <button
                  onClick={handleIncrementBasicPax}
                  className="flex-center size-10 rounded-full shadow-md shadow-slate-200 drop-shadow-md"
                >
                  <IoAddOutline />
                </button>
              </div>
            </div>
          </div>
        </div>
        <span className="block h-9 border" />
        <div className="space-y-2">
          <span className="text-md text-gray">EASY RIDER - BIG BIKE</span>
          <div className="text-lg font-bold">
            <div className="flex items-center gap-2">
              <PersonIcon />
              <div className="flex items-center gap-4">
                {bigPax} pax
                <button
                  onClick={handleDecrementBigPax}
                  className="flex-center size-10 rounded-full shadow-md shadow-slate-200 drop-shadow-md"
                >
                  <IoRemoveOutline className="text-2xl" />
                </button>
                <button
                  onClick={handleIncrementBigPax}
                  className="flex-center size-10 rounded-full shadow-md shadow-slate-200 drop-shadow-md"
                >
                  <IoAddOutline />
                </button>
              </div>
            </div>
          </div>
        </div>
        <button
          disabled={!total}
          className="flex-center flex-col rounded-lg bg-brown px-6.25 py-3.25 font-bold text-white disabled:bg-gray"
        >
          <span className="text-[28px]">${total}</span>
          <span className="text-lg">Book now</span>
        </button>
      </div>
    </section>
  );
}
