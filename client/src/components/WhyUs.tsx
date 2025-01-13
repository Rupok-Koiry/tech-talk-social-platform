import { useState } from "react";

const WhyUs = () => {
  return (
    <section className="md:py-10 py-12 container mx-auto px-5 bg-secondary-background my-12 md:my-10  rounded-lg">
      <h2 className="text-3xl text-primary-text text-center font-semibold mb-4">
        Why Join <span className="text-primary-blue">TechTalk</span>?
      </h2>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 lg:w-1/2">
          <AccordionItem
            header="Expert Insights"
            text="Gain access to advice from industry leaders and tech experts. At TechTalk, we ensure that you’re learning from the best and staying updated with the latest trends."
          />
          <AccordionItem
            header="Thriving Community"
            text="Be a part of a vibrant community of tech enthusiasts who share knowledge, collaborate on projects, and inspire each other to grow and innovate."
          />
          <AccordionItem
            header="Curated Resources"
            text="Our platform offers a treasure trove of tutorials, guides, and tools carefully curated to help you succeed in the ever-evolving tech landscape."
          />
        </div>
        <div className="w-full px-4 lg:w-1/2">
          <AccordionItem
            header="Interactive Learning"
            text="Participate in live discussions, Q&A sessions, and webinars hosted by experts. Engage with like-minded peers and grow together."
          />
          <AccordionItem
            header="Recognition and Growth"
            text="Showcase your expertise, gain followers, and get recognized for your contributions to the tech community. Build your personal brand while making an impact."
          />
          <AccordionItem
            header="24/7 Support and Accessibility"
            text="Our team is here to assist you anytime. Whether you need help navigating the platform or finding specific resources, we’ve got you covered."
          />
        </div>
      </div>
    </section>
  );
};

type AccordionItemProps = {
  header: string;
  text: string;
};

const AccordionItem = ({ header, text }: AccordionItemProps) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className="mb-4 px-8 py-6 w-full rounded-lg bg-primary-background text-ry-white">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={handleToggle}
      >
        <div className="w-full">
          <h4 className="mt-1 text-lg font-bold text-primary-text">{header}</h4>
        </div>
        <div className="flex h-6 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary-blue">
          <svg
            className={`fill-primary stroke-primary transition duration-300 ease-in text-white ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill="#fff"
              stroke=""
            />
          </svg>
        </div>
      </button>

      <div
        className={`transition duration-300 ease-in ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 px-4 text-base leading-relaxed text-secondary-text">
          {text}
        </p>
      </div>
    </div>
  );
};

export default WhyUs;
