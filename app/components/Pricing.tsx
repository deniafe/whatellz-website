"use client"
import React, { ReactNode, useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation" 
import Link from "next/link";

interface PricingCardProps {
  children: ReactNode;
  description: string;
  price: string;
  type: string;
  subscription: string;
  buttonText: string;
  active?: boolean;
  url: string
}

const PricingCard: React.FC<PricingCardProps> = ({
  children,
  description,
  price,
  type,
  subscription,
  buttonText,
  active,
  url
}) => {
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3 cursor-pointer">
      <div className="relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 border-stroke bg-white px-8 py-10 shadow-pricing sm:p-12 lg:px-6 lg:py-10 xl:p-[50px]">
        <span className="mb-3 block text-lg font-semibold text-primary">
          {type}
        </span>
        <h2 className="mb-5 text-[42px] font-bold text-gray-800 ">
          {price}
          <span className="text-base font-medium text-gray-700">
            / {subscription}
          </span>
        </h2>
        <p className="mb-8 border-b border-stroke pb-8 text-base text-gray-700">
          {description}
        </p>
        <div className="mb-9 flex flex-col gap-[14px]">{children}</div>
        <Link
          href={url}
          className={` ${
            active
              ? "block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-opacity-90"
              : "block w-full rounded-md border border-stroke bg-transparent p-3 text-center text-base font-medium text-primary transition hover:border-primary hover:bg-primary hover:text-white"
          } `}
        >
          {buttonText}
        </Link>
        <div>
          <span className="absolute right-0 top-7 z-[-1]">
            <svg
              width={77}
              height={172}
              viewBox="0 0 77 172"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx={86}
                cy={86}
                r={86}
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1={86}
                  y1={0}
                  x2={86}
                  y2={172}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" stopOpacity="0.09" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
          {/* <span className="absolute right-4 top-4 z-[-1]">
            <svg
              width={41}
              height={89}
              viewBox="0 0 41 89"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="38.9138"
                cy="87.4849"
                r="1.42021"
                transform="rotate(180 38.9138 87.4849)"
                fill="#3056D3"
              />
              <circle
                cx="38.9138"
                cy="74.9871"
                r="1.42021"
                transform="rotate(180 38.9138 74.9871)"
                fill="#3056D3"
              />
              <circle
                cx="38.9138"
                cy="62.4892"
                r="1.42021"
                transform="rotate(180 38.9138 62.4892)"
                fill="#3056D3"
              />
              <circle
                cx="38.9138"
                cy="38.3457"
                r="1.42021"
                transform="rotate(180 38.9138 38.3457)"
                fill="#3056D3"
              />
              <circle
                cx="38.9138"
                cy="13.634"
                r="1.42021"
                transform="rotate(180 38.9138 13.634)"
                fill="#3056D3"
              />
              <circle
                cx="38.9138"
                cy="50.2754"
                r="1.42021"
                transform="rotate(180 38.9138 50.2754)"
                fill="#3056D3"
              />
              <circle
                cx="38.9138"
                cy="26.1319"
                r="1.42021"
                transform="rotate(180 38.9138 26.1319)"
                fill="#3056D3"
              />
              <circle
                cx="38.9138"
                cy="1.42021"
                r="1.42021"
                transform="rotate(180 38.9138 1.42021)"
                fill="#3056D3"
              />
              <circle
                cx="26.4157"
                cy="87.4849"
                r="1.42021"
                transform="rotate(180 26.4157 87.4849)"
                fill="#3056D3"
              />
              <circle
                cx="26.4157"
                cy="74.9871"
                r="1.42021"
                transform="rotate(180 26.4157 74.9871)"
                fill="#3056D3"
              />
              <circle
                cx="26.4157"
                cy="62.4892"
                r="1.42021"
                transform="rotate(180 26.4157 62.4892)"
                fill="#3056D3"
              />
              <circle
                cx="26.4157"
                cy="38.3457"
                r="1.42021"
                transform="rotate(180 26.4157 38.3457)"
                fill="#3056D3"
              />
              <circle
                cx="26.4157"
                cy="13.634"
                r="1.42021"
                transform="rotate(180 26.4157 13.634)"
                fill="#3056D3"
              />
              <circle
                cx="26.4157"
                cy="50.2754"
                r="1.42021"
                transform="rotate(180 26.4157 50.2754)"
                fill="#3056D3"
              />
              <circle
                cx="26.4157"
                cy="26.1319"
                r="1.42021"
                transform="rotate(180 26.4157 26.1319)"
                fill="#3056D3"
              />
              <circle
                cx="26.4157"
                cy="1.4202"
                r="1.42021"
                transform="rotate(180 26.4157 1.4202)"
                fill="#3056D3"
              />
              <circle
                cx="13.9177"
                cy="87.4849"
                r="1.42021"
                transform="rotate(180 13.9177 87.4849)"
                fill="#3056D3"
              />
              <circle
                cx="13.9177"
                cy="74.9871"
                r="1.42021"
                transform="rotate(180 13.9177 74.9871)"
                fill="#3056D3"
              />
              <circle
                cx="13.9177"
                cy="62.4892"
                r="1.42021"
                transform="rotate(180 13.9177 62.4892)"
                fill="#3056D3"
              />
              <circle
                cx="13.9177"
                cy="38.3457"
                r="1.42021"
                transform="rotate(180 13.9177 38.3457)"
                fill="#3056D3"
              />
              <circle
                cx="13.9177"
                cy="13.634"
                r="1.42021"
                transform="rotate(180 13.9177 13.634)"
                fill="#3056D3"
              />
              <circle
                cx="13.9177"
                cy="50.2754"
                r="1.42021"
                transform="rotate(180 13.9177 50.2754)"
                fill="#3056D3"
              />
              <circle
                cx="13.9177"
                cy="26.1319"
                r="1.42021"
                transform="rotate(180 13.9177 26.1319)"
                fill="#3056D3"
              />
              <circle
                cx="13.9177"
                cy="1.42019"
                r="1.42021"
                transform="rotate(180 13.9177 1.42019)"
                fill="#3056D3"
              />
              <circle
                cx="1.41963"
                cy="87.4849"
                r="1.42021"
                transform="rotate(180 1.41963 87.4849)"
                fill="#3056D3"
              />
              <circle
                cx="1.41963"
                cy="74.9871"
                r="1.42021"
                transform="rotate(180 1.41963 74.9871)"
                fill="#3056D3"
              />
              <circle
                cx="1.41963"
                cy="62.4892"
                r="1.42021"
                transform="rotate(180 1.41963 62.4892)"
                fill="#3056D3"
              />
              <circle
                cx="1.41963"
                cy="38.3457"
                r="1.42021"
                transform="rotate(180 1.41963 38.3457)"
                fill="#3056D3"
              />
              <circle
                cx="1.41963"
                cy="13.634"
                r="1.42021"
                transform="rotate(180 1.41963 13.634)"
                fill="#3056D3"
              />
              <circle
                cx="1.41963"
                cy="50.2754"
                r="1.42021"
                transform="rotate(180 1.41963 50.2754)"
                fill="#3056D3"
              />
              <circle
                cx="1.41963"
                cy="26.1319"
                r="1.42021"
                transform="rotate(180 1.41963 26.1319)"
                fill="#3056D3"
              />
              <circle
                cx="1.41963"
                cy="1.4202"
                r="1.42021"
                transform="rotate(180 1.41963 1.4202)"
                fill="#3056D3"
              />
            </svg>
          </span> */}
        </div>
      </div>
    </div>
  );
};

interface ListProps {
  children: ReactNode;
}

const List: React.FC<ListProps> = ({ children }) => {
  return (
    <p className="text-base text-gray-700">{children}</p>
  );
};

interface PricingProps {}

export const Pricing: React.FC<PricingProps> = () => {

  return (
    <section className="relative z-10 overflow-hidden bg-white mb-[4rem] mt-[4rem]  lg:mb-[8rem] lg:mt-[2rem]">
      <div className="container">
        <div className="-mx-8 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Pricing Table
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.208] text-gray-800 sm:text-4xl md:text-[40px]">
                Our Pricing Plan
              </h2>
              <p className="text-base text-gray-700">
                Discover the perfect fit for your needs as we offer clear, 
                straightforward pricing options tailored to support your goals and budget
              </p>
            </div>
          </div>
        </div>

        <div className="md:mx-8 flex flex-wrap justify-center">
          <div className="-mx-4 flex flex-wrap">
            <PricingCard
              type="Free"
              price="₦0"
              subscription="month"
              description="A perfect way to test and see if whatellz is fit for your business."
              buttonText="Download Whatellz"
              url="/download"
            >
              <List>1 WhatsApp Profile</List>
              <List>1 Broadcast</List>
              <List>20 Daily Broadcast Messages / Day</List>
              <List>1 Chat-Bot</List>
              <List>50 Chat-Bot Messages And Triggers / Day</List>
              <List>1 Sequence</List>
              <List>200 Sequence Messages / Month</List>
              <List>1 Collection / Numbers List</List>
              <List>100 Numbers Generation / Day</List>
              <List>100 Numbers Verification / Day</List>
              <List>200 Group Participants scraping / Month </List>
              <List>200 Contacts scraping / Month </List>
              <List>0 Numbers Export / Day </List>
              <List>1 Numbers Import / Day </List>
            </PricingCard>
            <PricingCard
              type="Starter"
              price="₦8,000"
              subscription="month"
              description="Perfect for using in a personal business and startup."
              buttonText="Choose Starter"
              active
              url="/payment-email/#starter"
            >
              <List>3 WhatsApp Profiles</List>
              <List>10 Broadcasts</List>
              <List>1000 Broadcast Messages / Day</List>
              <List>10 Chat-Bot</List>
              <List>3000 Chat-Bot Messages And Triggers / Day</List>
              <List>10 Sequence</List>
              <List>10000 Sequence Messages / Month</List>
              <List>10 Collection / Numbers List</List>
              <List>1000 Numbers Generation / Day</List>
              <List>1000 Numbers Verification / Day</List>
              <List>500 Group Participants Scraping / Day </List>
              <List>500 Contacts scraping / Day </List>
              <List>Unlimited Numbers Export / Day </List>
              <List>Unlimited Numbers Import / Day </List>
            </PricingCard>
            <PricingCard
              type="Business"
              price="₦15,000"
              subscription="month"
              description="Perfect for when you are getting really serious about your whatsapp marketing."
              buttonText="Choose Business"
              url="/payment-email/#business"
            >
               <List>10 WhatsApp Profiles</List>
              <List>20 Broadcasts</List>
              <List>2000 Broadcast Messages / Day</List>
              <List>20 Chat-Bot</List>
              <List>6000 Chat-Bot Messages And Triggers / Day</List>
              <List>20 Sequence</List>
              <List>20000 Sequence Messages / Month</List>
              <List>20 Collection / Numbers List</List>
              <List>5000 Numbers Generation / Day</List>
              <List>5000 Numbers Verification / Day</List>
              <List>1000 Group Participants Scraping / Day </List>
              <List>1000 Contacts Scraping / Day </List>
              <List>Unlimited Numbers Export / Day </List>
              <List>Unlimited Numbers Import / Day </List>
            </PricingCard>
          </div>
        </div>
      </div>
    </section>
  );
};
