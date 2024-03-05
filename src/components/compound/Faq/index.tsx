import Button from "@/components/primitive/Button";
import Typography from "@/components/primitive/Typography";
import { useRef, useState } from "react";
import { IoChevronUp } from "react-icons/io5";

interface IAccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: IAccordionItemProps) => {
  const contentHeight = useRef<HTMLDivElement>(null);
  return (
    <li>
      <button
        onClick={onClick}
        className={`flex w-full items-center justify-between border-b py-2 text-left transition duration-300 ${isOpen ? "border-brown text-brown" : "text-inherit"}`}
      >
        <Typography
          className="mt-2 transition duration-300"
          weight="bold"
          variant="h5"
          size="md"
          intent={isOpen ? "secondary" : "gray"}
        >
          {question}
        </Typography>
        <IoChevronUp
          className={`transition duration-300 ${isOpen ? "rotate-180 text-brown" : "text-gray "}`}
        />
      </button>
      <div
        className="transition-height overflow-hidden"
        style={
          isOpen && contentHeight !== null
            ? {
                height: contentHeight?.current?.scrollHeight,
              }
            : { height: "0px" }
        }
        ref={contentHeight}
      >
        <Typography className="mt-8" size="md" intent="gray">
          {answer}
        </Typography>
      </div>
    </li>
  );
};

interface IAccordionPops {
  data: {
    id: string;
    question: string;
    answer: string;
  }[];
}

const Accordion = ({ data }: IAccordionPops) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <ul>
      {data.map(({ answer, id, question }, index) => (
        <AccordionItem
          key={id}
          question={question}
          answer={answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </ul>
  );
};

interface IFaqProps {
  subHeading: string;
  heading: string;
  data: {
    id: string;
    title: string;
    description: string;
    faq: {
      id: string;
      question: string;
      answer: string;
    }[];
  }[];
}

export default function Faq({ data, heading, subHeading }: IFaqProps) {
  return (
    <section className="layout-width my-10 flex flex-col justify-between lg:flex-row">
      <div className="font-heavitas">
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
        <Button className="hidden font-poppins text-base font-semibold md:block">
          Book now
        </Button>
      </div>
      <div className="mt-8 grid gap-x-20 gap-y-10 md:grid-cols-2 lg:mt-auto">
        {data.map(({ id, title, description, faq }) => (
          <div className="max-w-md" key={id}>
            <div>
              <Typography
                data-aos="fade-left"
                data-aos-delay="0"
                className="uppercase"
                variant="h3"
                weight="semibold"
                size="3xl"
                intent="dark"
              >
                {title}
              </Typography>
              <Typography
                data-aos="fade-left"
                data-aos-delay="0"
                className="mt-2"
                variant="h2"
                size="md"
                intent="gray"
              >
                {description}
              </Typography>
            </div>
            <Accordion data={faq} />
          </div>
        ))}
      </div>
    </section>
  );
}
