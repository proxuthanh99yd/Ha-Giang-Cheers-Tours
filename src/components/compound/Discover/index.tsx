import Typography from "@/components/primitive/Typography";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { ActionSlideIcon } from "@/components/Icons";
const MotorBikeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={12}
    viewBox="0 0 16 12"
    fill="none"
    className="size-10 md:size-20"
  >
    <path
      d="M13.1875 6C11.6406 6 10.375 7.26559 10.375 8.8125C10.375 10.3594 11.6406 11.625 13.1875 11.625C14.7344 11.625 16 10.3594 16 8.8125C16 7.26559 14.7344 6 13.1875 6ZM13.1875 10.6875C12.1563 10.6875 11.3125 9.84372 11.3125 8.8125C11.3125 7.78128 12.1563 6.9375 13.1875 6.9375C14.2187 6.9375 15.0625 7.78128 15.0625 8.8125C15.0625 9.84372 14.2187 10.6875 13.1875 10.6875Z"
      fill="#B34B1E"
    />
    <path
      d="M2.8125 6C1.26559 6 0 7.26559 0 8.8125C0 10.3594 1.26559 11.625 2.8125 11.625C4.35941 11.625 5.625 10.3594 5.625 8.8125C5.625 7.26559 4.35941 6 2.8125 6ZM2.8125 10.6875C1.78128 10.6875 0.9375 9.84372 0.9375 8.8125C0.9375 7.78128 1.78128 6.9375 2.8125 6.9375C3.84372 6.9375 4.6875 7.78128 4.6875 8.8125C4.6875 9.84372 3.84372 10.6875 2.8125 10.6875Z"
      fill="#B34B1E"
    />
    <path
      d="M3.75 3.1875H8.5V6H3.75V3.1875ZM10.8438 1.3125H9.90625C9.64716 1.3125 9.4375 1.10284 9.4375 0.84375C9.4375 0.584656 9.64716 0.375 9.90625 0.375H10.8438C11.1028 0.375 11.3125 0.584656 11.3125 0.84375C11.3125 1.10284 11.1028 1.3125 10.8438 1.3125Z"
      fill="#F6B900"
    />
    <path
      d="M13.45 9.20444C13.3656 9.25132 13.2812 9.27947 13.1875 9.27947C13.0375 9.27947 12.8875 9.20444 12.7938 9.07325L10.6 5.792C10.45 5.57635 10.5157 5.28572 10.7219 5.13575C10.9375 4.9951 11.2281 5.05135 11.3781 5.26697L13.1875 7.95766L13.5812 8.54822C13.7219 8.76385 13.6656 9.05447 13.45 9.20444ZM8.03125 7.87322V9.74822H2.8125C2.29688 9.74822 1.875 9.32635 1.875 8.81072C1.875 8.2951 2.29688 7.87322 2.8125 7.87322H8.03125Z"
      fill="#F6B900"
    />
    <path
      d="M10.8438 0.375C10.5812 0.375 10.375 0.581219 10.375 0.84375V2.25H8.96875C8.80941 2.25 8.66875 2.32503 8.57503 2.45622L6.80934 5.0625H5.40938L3.91875 2.83125C3.675 2.46563 3.27187 2.25 2.83128 2.25H0.46875C0.206219 2.25 0 2.45622 0 2.71875C0 3.91878 0.909344 4.92184 2.08122 5.04372L3.58125 7.29375C3.825 7.65937 4.22813 7.875 4.66872 7.875H5.80312L6.125 8.46562L6.40625 9.02809C6.63122 9.46875 7.08128 9.75 7.5875 9.75H8.275C8.90309 9.75 9.4375 9.30941 9.55937 8.69063L9.63441 8.36253C10.0094 6.44997 11.7062 5.0625 13.6562 5.0625C13.9188 5.0625 14.125 4.85628 14.125 4.59375V3.65625C14.125 1.84687 12.6531 0.375 10.8438 0.375Z"
      fill="#B34B1E"
    />
  </svg>
);

const CloseBtnIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="none"
    className="size-10 lg:size-14"
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
);

const CenterIcon = () => (
  <svg
    className="absolute left-1/2 top-1/2 z-[1] size-32 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group-hover:opacity-0 lg:size-52"
    xmlns="http://www.w3.org/2000/svg"
    width={176}
    height={176}
    viewBox="0 0 176 176"
    fill="none"
  >
    <circle
      cx={88}
      cy={88}
      r={87}
      stroke="#fff"
      strokeWidth={2}
      strokeLinejoin="round"
      strokeDasharray="10 10"
    />
  </svg>
);
interface ISwiperModalProps {
  data: {
    id: string;
    title: string;
    image: string;
    slide: {
      id: string;
      image: string;
    }[];
  }[];
  index: number;
  onIndex: (idx: number) => void;
}
const SwiperModal = ({ data, index, onIndex }: ISwiperModalProps) => {
  return (
    <div className="fixed inset-0 z-100 bg-black/20">
      <div className="absolute bottom-0 left-0 h-[95vh] w-full bg-white lg:h-auto">
        <div className="md:layout-width relative max-w-[100vw] py-12">
          <button
            onClick={() => onIndex(-1)}
            className="shadow-slideTrave absolute left-1/2 top-0 flex size-12 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white lg:size-16"
          >
            <CloseBtnIcon />
          </button>
          <ul className="my-8 flex justify-center gap-7.5">
            {data.map(({ id, title }, idx) => (
              <li key={id}>
                <button
                  onClick={() => onIndex(idx)}
                  className={`relative cursor-pointer pb-[0.25rem] text-md font-semibold leading-[1.42] tracking-[0.00875rem] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:origin-right before:scale-x-0 before:border-b-[3px] before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100 lg:text-xl ${index === idx ? "border-b-2 border-b-brown text-brown" : "text-[#b7b7b7]"}`}
                >
                  {title}
                </button>
              </li>
            ))}
          </ul>
          <Swiper
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            modules={[Navigation]}
            className="mx-12"
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
          >
            {data[index].slide.map(({ id, image }) => (
              <SwiperSlide
                className="group relative aspect-[124/85] overflow-hidden rounded-2xl"
                key={id}
              >
                <img
                  className="absolute left-0 top-0 z-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                  src={image}
                  alt={id}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute top-1/2 hidden w-full lg:block">
            <button className="prev absolute left-0 top-1/2 z-50">
              <ActionSlideIcon />
            </button>
            <button className="next absolute right-0 top-1/2 z-50 rotate-180">
              <ActionSlideIcon />
            </button>
          </div>
          <ul className="mt-[1.47rem] flex justify-center gap-x-[0.75rem] ">
            <li className="max-md:flex-1">
              <Link
                className="flex items-center gap-x-[0.5rem] rounded-[0.5rem] bg-[#fff0ea] px-[1.25rem] py-[0.75rem] "
                to="/"
              >
                <MotorBikeIcon />
                <span className="text-[0.875rem] font-semibold leading-[1.42] tracking-[0.00875rem] text-brown">
                  4 DAYS TOUR
                </span>
              </Link>
            </li>
            <li className="max-md:flex-1">
              <Link
                className="flex items-center gap-x-[0.5rem] rounded-[0.5rem] bg-[#fff0ea] px-[1.25rem] py-[0.75rem]"
                to="/"
              >
                <MotorBikeIcon />
                <span className="text-[0.875rem] font-semibold leading-[1.42] tracking-[0.00875rem] text-brown">
                  3 DAYS TOUR
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

interface IDiscoverProps {
  subHeading: string;
  heading: string;
  data: {
    id: string;
    title: string;
    image: string;
    slide: {
      id: string;
      image: string;
    }[];
  }[];
}

export default function Discover({
  heading,
  subHeading,
  data,
}: IDiscoverProps) {
  const [index, setIndex] = useState<number>(-1);
  return (
    <section className="layout-width mt-24">
      <div className="mb-10 font-heavitas">
        <Typography data-aos="fade-up" variant="h3" intent="secondary">
          {subHeading}
        </Typography>
        <Typography
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-2 max-w-md"
          variant="h2"
          size="5xl"
          intent="secondary"
        >
          {heading}
        </Typography>
      </div>
      <div data-aos="zoom-in-up" className="aos-init aos-animate">
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={30}
        >
          {data.map(({ id, image, title }, idx) => (
            <SwiperSlide
              className="group relative aspect-[119/164] cursor-pointer overflow-hidden rounded-2xl"
              key={id}
              onClick={() => setIndex(idx)}
            >
              <img
                className="absolute left-0 top-0 z-0 h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                src={image}
                alt={title}
              />
              <CenterIcon />
              <div className="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 scale-90 rounded-full bg-[#cde82b99] opacity-0 backdrop-blur-[3px] transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 lg:size-52" />
              <p className="absolute left-1/2 top-1/2 z-[5] -translate-x-1/2 text-nowrap font-poppins font-semibold capitalize leading-[1.2] tracking-[0.00188rem] text-white lg:text-xl ">
                {title}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {index >= 0 && (
        <SwiperModal
          data={data}
          index={index}
          onIndex={(idx) => setIndex(idx)}
        />
      )}
    </section>
  );
}
