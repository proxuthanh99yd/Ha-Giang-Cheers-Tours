import Button from "@/components/primitive/Button";
import Typography from "@/components/primitive/Typography";

interface IItemsPops {
  className?: string;
  data: {
    id: string;
    label: string;
  }[];
}

const Items = ({ className, data }: IItemsPops) => (
  <ul className={className}>
    {data.map(({ id, label }) => (
      <li
        className="flex-center relative h-16 w-full max-w-80 text-xs font-bold text-[#fff0ea]"
        key={id}
      >
        {label}
        <img
          className="absolute bottom-0 left-0 -z-10 h-full w-full"
          src="/images/bg-text-cheer.png"
          alt="text-bg"
        />
      </li>
    ))}
  </ul>
);

interface IStartWithPops {
  subHeading: string;
  heading: string;
  items: {
    id: string;
    label: string;
  }[];
  description: string;
}

export default function StartWith({
  heading,
  subHeading,
  items,
  description,
}: IStartWithPops) {
  return (
    <section className="relative">
      <img
        src="/images/mask.png"
        alt="mark"
        className="absolute h-full w-full object-cover"
      />
      <div data-aos="fade-up" className="layout-width mb-10 py-24">
        <div className="font-heavitas">
          <Typography data-aos="fade-up" variant="h3" intent="secondary">
            {subHeading}
          </Typography>
          <Typography
            data-aos="fade-up"
            className="mt-2 max-w-md"
            variant="h2"
            size="5xl"
            intent="secondary"
          >
            {heading}
          </Typography>
        </div>
        <div className="mt-5 flex flex-col justify-between lg:flex-row">
          <div className="order-1 max-w-3xl space-y-8 lg:order-none">
            <Items
              className="flex flex-wrap items-center gap-7.5"
              data={items}
            />
            <div
              data-aos="fade-up"
              className="space-y-4 font-poppins text-[13px] text-gray"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            <div className="space-x-5">
              <Button>Book now</Button>
              <Button intent={"secondary"}>Read more</Button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="flex-center mt-5 lg:-mt-40 lg:flex-none"
          >
            <img src="/images/mapvn.png" alt="map" />
          </div>
        </div>
      </div>
    </section>
  );
}
