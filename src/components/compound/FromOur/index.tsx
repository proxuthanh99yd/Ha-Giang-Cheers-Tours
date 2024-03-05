import { ActionSlideIcon, StarIcon } from "@/components/Icons";
import Typography from "@/components/primitive/Typography";
import { Link } from "react-router-dom";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface IFromOurProps {
  subHeading: string;
  heading: string;
  data: {
    id: string;
    author: string;
    content: string;
  }[];
}

export default function FromOur({ data, heading, subHeading }: IFromOurProps) {
  return (
    <section className="layout-width mt-24">
      <div className="mb-10 text-center font-heavitas">
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
      <div className="relative">
        <Swiper
          navigation={{
            prevEl: ".prev-form-our",
            nextEl: ".next-form-our",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Navigation, Autoplay]}
          className="mx-12 py-2"
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          spaceBetween={30}
        >
          {data.map(({ id, author, content }) => (
            <SwiperSlide
              className="flex-center group relative h-60 flex-col gap-2 overflow-hidden rounded-2xl bg-[#f2f2f2] p-6 shadow transition hover:bg-white"
              key={id}
            >
              <Typography intent="gray" className="text-center">
                {content}
              </Typography>
              <span className="flex">
                {Array.from({ length: 5 }, (_, idx) => (
                  <StarIcon key={idx} />
                ))}
              </span>
              <Typography intent="secondary" size="lg" weight="semibold">
                {author}
              </Typography>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-1/2 w-full">
          <button className="prev-form-our absolute left-0 top-1/2 z-50 -translate-y-1/2">
            <ActionSlideIcon />
          </button>
          <button className="next-form-our absolute right-0 top-1/2 z-50 -translate-y-1/2 rotate-180">
            <ActionSlideIcon />
          </button>
        </div>
      </div>
      <div className="flex-center mt-6 flex-col space-y-2">
        <span>View us on:</span>
        <div className="flex gap-7">
          <Link className="h-14 w-40 rounded-lg p-3 shadow" to="/">
            <img
              className="h-full w-full object-contain"
              src="/images/image-1815-1.png"
              alt="image-1815"
            />
          </Link>
          <Link className="h-14 w-40 rounded-lg p-3 shadow" to="/">
            <img
              src="/images/google.png"
              className="h-full w-full object-contain"
              alt="google"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
