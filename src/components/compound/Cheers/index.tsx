import { ActionSlideIcon } from "@/components/Icons";
import Button from "@/components/primitive/Button";
import Typography from "@/components/primitive/Typography";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface IMainCheersProps {
  slide: {
    id: string;
    title?: string;
    content?: string;
    image: string;
    user?: string;
    job?: string;
    description?: string;
    info?: {
      id: string;
      label: string;
      content: string;
      icon: JSX.Element;
    }[];
  }[];
}

const MainCheers = ({ slide }: IMainCheersProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3">
      <div
        data-aos="fade-right"
        className="order-1 mt-10 flex flex-col justify-between lg:order-none lg:mt-auto"
      >
        <div className="space-y-5">
          <Typography weight="semibold" size="3xl" intent="gray">
            {slide[activeIndex]?.title}
          </Typography>
          <Typography className="max-w-lg" size="md" intent="gray">
            {slide[activeIndex]?.content}
          </Typography>
        </div>
        <div className="mt-5">
          <ul className="space-y-3">
            {slide[activeIndex]?.info?.map(({ id, label, content, icon }) => (
              <li
                className="flex items-center gap-1 text-md text-gray"
                key={id}
              >
                {icon} <span className="font-bold text-brown">{label}</span>{" "}
                {content}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-4">
            <Button to="/">JOIN WITH US</Button>
            <Button intent="secondary" to="/">
              CALL US
            </Button>
          </div>
        </div>
      </div>
      <div className="relative col-span-2 self-start lg:ml-32">
        <Swiper
          onSlideChange={(e) => setActiveIndex(e.realIndex)}
          navigation={{
            prevEl: ".prev-main-cheers",
            nextEl: ".next-main-cheers",
          }}
          modules={[Navigation]}
          className="rounded-2xl xl:pr-56"
          slidesPerView={1}
          spaceBetween={25}
        >
          {slide.map(({ id, image }) => (
            <SwiperSlide
              className="relative aspect-[47/34] overflow-hidden rounded-2xl"
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
        <div className="absolute top-1/2 w-full">
          <button className="prev-main-cheers absolute left-2 top-1/2 z-50 -translate-y-1/2">
            <ActionSlideIcon />
          </button>
          <button className="next-main-cheers absolute right-2 top-1/2 z-50 -translate-y-1/2 rotate-180">
            <ActionSlideIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

interface ISecondCheersProps {
  slide: {
    id: string;
    title?: string;
    content?: string;
    image: string;
    user?: string;
    job?: string;
    description?: string;
    info?: {
      id: string;
      label: string;
      content: string;
      icon: JSX.Element;
    }[];
  }[];
}

const SecondCheers = ({ slide }: ISecondCheersProps) => {
  return (
    <div className="px-10">
      <div className="relative">
        <Swiper
          navigation={{
            prevEl: ".prev-second-cheers",
            nextEl: ".next-second-cheers",
          }}
          modules={[Navigation]}
          className=""
          slidesPerView={1}
          spaceBetween={25}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
          }}
        >
          {slide.map(({ id, image, user, job, description }) => (
            <SwiperSlide
              className="group relative aspect-[357/443] cursor-pointer overflow-hidden rounded-2xl"
              key={id}
            >
              <img
                className="absolute left-0 top-0 z-0 h-full w-full object-cover"
                src={image}
                alt={id}
              />
              <div className="absolute bottom-[1.5rem] left-1/2 z-10 h-[4.9375rem] w-[17.75rem] -translate-x-1/2 rounded-[1rem] bg-brown px-[0.87rem] pb-[0.87rem] pt-[0.94rem] opacity-90 transition-all duration-200 group-hover:opacity-0">
                <h2 className="line-clamp-1 text-center text-[1rem] font-semibold leading-normal tracking-[0.005rem] text-white">
                  {user}
                </h2>
                <div className="mt-[0.25rem] flex flex-nowrap items-center justify-center whitespace-nowrap text-[0.875rem] font-normal leading-[1.57] tracking-[0.00219rem] text-white">
                  {job}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={5}
                    height={4}
                    viewBox="0 0 5 4"
                    fill="none"
                    className="mx-[0.2rem] h-[0.3rem] w-[0.3rem]"
                  >
                    <circle cx="2.5" cy={2} r={2} fill="white" />
                  </svg>
                </div>
              </div>
              <div className="absolute left-0 top-0 z-20 h-full w-full translate-y-[110%] rounded-[1rem] bg-black/50 p-[1.5rem] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <h2 className="line-clamp-1 text-center text-[1rem] font-semibold leading-normal tracking-[0.005rem] text-brown">
                  {user}
                </h2>
                <div className="mt-[0.25rem] line-clamp-2 flex items-center justify-center whitespace-nowrap text-[0.875rem] font-normal leading-[1.57] tracking-[0.00219rem] text-white">
                  {job}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={5}
                    height={4}
                    viewBox="0 0 5 4"
                    fill="none"
                    className="mx-[0.59rem] h-[0.3rem] w-[0.3rem]"
                  >
                    <circle cx="2.5" cy={2} r={2} fill="white" />
                  </svg>
                </div>
                <div className="my-[0.75rem] h-[1px] w-full bg-[#D9D9D9]" />
                <p className="text-[0.875rem] font-normal leading-[1.57] tracking-[0.00219rem] text-white">
                  {description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-1/2 w-full">
          <button className="prev-second-cheers absolute -left-10 top-1/2 z-50 -translate-y-1/2">
            <ActionSlideIcon />
          </button>
          <button className="next-second-cheers absolute -right-10 top-1/2 z-50 -translate-y-1/2 rotate-180">
            <ActionSlideIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

interface ICheersProps {
  subHeading: string;
  heading: string;
  data: {
    id: string;
    title: string;
    slide: {
      id: string;
      title?: string;
      content?: string;
      image: string;
      user?: string;
      job?: string;
      description?: string;
      info?: {
        id: string;
        label: string;
        content: string;
        icon: JSX.Element;
      }[];
    }[];
  }[];
}

export default function Cheers({ data, heading, subHeading }: ICheersProps) {
  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <section className="layout-width mt-24">
      <div className="mb-8 flex flex-col justify-between lg:flex-row lg:items-end">
        <div className="font-heavitas">
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
        <ul className="mt-5 flex gap-3 md:gap-6 lg:mt-auto lg:gap-9">
          {data.map(({ id, title }, index) => (
            <li key={id}>
              <button
                onClick={() => setTabIndex(index)}
                className={`relative text-xs font-semibold uppercase before:absolute before:bottom-[-0.25rem] before:left-0 before:w-full before:border before:border-solid md:text-md ${tabIndex === index ? "text-brown before:border-brown" : "text-gray"}`}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {data[tabIndex].slide[0]?.content && (
        <MainCheers slide={data[tabIndex].slide} />
      )}
      {!data[tabIndex].slide[0]?.content && (
        <SecondCheers slide={data[tabIndex].slide} />
      )}
    </section>
  );
}
