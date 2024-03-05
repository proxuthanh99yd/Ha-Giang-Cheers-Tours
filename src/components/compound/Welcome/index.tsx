import { ActionSlideIcon, MuteIcon, UnMuteIcon } from "@/components/Icons";
import Typography from "@/components/primitive/Typography";
import { useRef, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface IWelcomeProps {
  subHeading: string;
  heading: string;
  data: {
    id: string;
    src: string;
  }[];
}

interface IVideoProps {
  src: string;
}

const Video = ({ src }: IVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMute, setIsMute] = useState(false);
  const handleMute = () => {
    setIsMute((curr) => {
      if (!videoRef.current) return curr;
      console.log(videoRef.current.muted);
      videoRef.current.muted = curr;
      return !curr;
    });
  };
  return (
    <div id="video-container">
      <video
        id="video"
        ref={videoRef}
        className="aspect-[9/16] w-full object-cover md:aspect-[4/3] lg:aspect-[21/9]"
        autoPlay
        muted
        loop
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute bottom-0 z-60 w-full">
        <div className="layout-width mb-14 flex justify-end">
          <button onClick={handleMute}>
            {isMute ? <UnMuteIcon /> : <MuteIcon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default function Welcome({ data, heading, subHeading }: IWelcomeProps) {
  // const sectionRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const video = sectionRef.current;

  //   // Function to scale the video
  //   const scaleVideo = () => {
  //     // Get scroll position
  //     const scrollPosition = window.scrollY;

  //     // Calculate scale based on scroll position
  //     const scale = 1 + scrollPosition / window.innerHeight;

  //     // Apply scale using GSAP
  //     gsap.set(video, { scale: scale });
  //     console.log(scale);
  //   };

  //   // Listen for scroll event and call scaleVideo function
  //   window.addEventListener("scroll", scaleVideo);

  //   // Initial scaling of the video
  //   scaleVideo();

  //   return () => {
  //     // Clean up the scroll event listener
  //     window.removeEventListener("scroll", scaleVideo);
  //   };
  // }, []);
  return (
    <section data-aos="zoom-in-up" className="relative">
      <Swiper
        allowTouchMove={false}
        navigation={{
          nextEl: ".next-video",
          prevEl: ".prev-video",
        }}
        modules={[Navigation]}
      >
        {data.map(({ id, src }) => (
          <SwiperSlide key={id}>
            <Video src={src} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-1/2 z-60 w-full">
        <div className="layout-width flex justify-between">
          <button className="prev-video brightness-0 invert">
            <ActionSlideIcon />
          </button>
          <button className="next-video rotate-180 brightness-0 invert">
            <ActionSlideIcon />
          </button>
        </div>
      </div>

      <div className="absolute left-1/2 top-0 z-50 flex h-full -translate-x-1/2 flex-col items-center justify-between py-14">
        <div className="text-center font-heavitas">
          <Typography variant="h3" size="lg" intent="white">
            {subHeading}
          </Typography>
          <Typography
            className="mt-2 text-nowrap"
            variant="h2"
            size="6xl"
            intent="white"
          >
            {heading}
          </Typography>
          <Typography
            className="mt-4 font-tomatoes md:mt-10"
            intent="white"
            size="6xl"
          >
            Viet nam
          </Typography>
        </div>
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div className="flex flex-col items-center">
            <img src="/images/award.svg" className="size-14" alt="award" />
            <div className="mt-2 flex flex-col items-center text-white">
              <span className="text-2xl font-semibold">Top #1</span>
              <span className="text-md">Epic loop in Vietnam</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src="/images/agency.svg" className="size-14" alt="agency" />
            <div className="mt-2 flex flex-col items-center text-white">
              <span className="text-2xl font-semibold">300 km</span>
              <span className="text-md">North of Hanoi</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/buswhite.svg"
              className="size-14"
              alt="buswhite"
            />
            <div className="mt-2 flex flex-col items-center text-white">
              <span className="text-2xl font-semibold">6 hours</span>
              <span className="text-md">Bus drive</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
