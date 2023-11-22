"use client"
import React, { useState, MouseEvent } from "react";

interface AccordionItemProps {
  header: string;
  text: string;
}

interface AccordionProps {}

const AccordionItem: React.FC<AccordionItemProps> = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = (event: MouseEvent) => {
    event.preventDefault();
    setActive(!active);
  };

  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={(event) => handleToggle(event)}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 9.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-dark ">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color">
          {text}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC<AccordionProps> = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white  mb-[4rem] mt-[4rem] lg:mb-[8rem] lg:mt-[2rem]">
    <div className="container mx-auto">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
            <span className="mb-2 block text-lg font-semibold text-primary">
              FAQ
            </span>
            <h2 className="mb-4 text-3xl font-bold text-dark  sm:text-[40px]/[48px]">
              Any Questions? Look Here
            </h2>
            <p className="text-base text-body-color">
            This section is designed to provide quick and concise solutions, 
            saving you time and keeping you informed
            </p>
          </div>
        </div>
      </div>

      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 lg:w-1/2">
          <AccordionItem
            header="Is there a free trial available?"
            text="While we don't offer a free trial, we provide a comprehensive free version of Whatellz. This version allows you to explore and test all the features to ensure it aligns perfectly with your needs."
          />
          <AccordionItem
            header="What type of messages should I refrain from sending?"
            text="Best practices include avoiding sales pitches to numbers with no prior interaction. Nurture your contacts before introducing sales content. Additionally, steer clear of words that may trigger the WhatsApp anti-spam Bot, such as 'Sports Betting,' 'Drugs,' 'Medication,' and 'Gambling.' Opt for subtler alternatives to ensure smooth communication. (e.g., use 'Sports Trading/Arbitrage' instead of 'Sports Betting')."
          />
          <AccordionItem
            header="Is it acceptable to send messages to numbers generated and verified on Whatellz?"
            text="It's not advisable to send broadcast messages directly to numbers generated and verified on Whatellz. Since these contacts may be unfamiliar, it's crucial to initiate engagement through SMS marketing first. This ensures a more personalized and effective approach, allowing you to nurture and eventually convert them into customers within the Whatellz platform. Taking these steps helps build a connection and enhances the overall success of your messaging strategy."
          />
        </div>
        <div className="w-full px-4 lg:w-1/2">
          <AccordionItem
            header="How can I bring my leads into Whatellz?"
            text="Bringing your leads into Whatellz is a flexible process! You can import them using a CSV file, bring in contacts from your phone, generate and verify numbers, or scrape groups you're part of. Important Note: Avoid sending broadcast messages directly to numbers generated and verified on Whatellz, as they may be unfamiliar contacts. Ensure to engage them initially through SMS marketing before nurturing and converting them into customers within Whatellz."
          />
          <AccordionItem
            header="Can Whatellz be operated on any device?"
            text="No, Whatellz is specifically designed for Windows operating systems. It requires installation on a Windows computer for optimal performance. If you prefer running Whatellz in the cloud without installing it on your personal computer, a Virtual Private Server (VPS) is necessary. Utilizing a virtual machine ensures uninterrupted 24/7 operation, free from disturbances on your personal device. Access our step-by-step tutorials for a smooth setup process."
          />
          <AccordionItem
            header="Is there a risk of my WhatsApp number being compromised with Whatellz?"
            text="Not at all. Whatellz is designed with robust safety measures, including built-in fail-safes and Human-Randomization message sending intervals (you choose the minimum and maximum seconds to wait between each message). It ensures the security of your account. However, exercise caution by avoiding content that could lead to multiple reports. Take advantage of Whatellz's opt-out feature, allowing leads to leave your list using a trigger word. Keep in mind, excessive reports may result in WhatsApp blocking your line. Your security is our priority with Whatellz."
          />
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 right-0 z-[-1]">
      <svg
        width="1440"
        height="886"
        viewBox="0 0 1440 886"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="1308.65"
            y1="1142.58"
            x2="602.827"
            y2="-418.681"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3056D3" stop-opacity="0.36" />
            <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
            <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </section>
  );
};
