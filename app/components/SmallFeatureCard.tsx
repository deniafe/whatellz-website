// components/FeatureCard.tsx

import { FC } from 'react';

interface FeatureCardProps {
  title: string;
  desc: string;
}

export const SmallFeatureCard: FC<FeatureCardProps> = ({ title, desc }) => {
  return (
    <div className="relative flex flex-col items-center bg-secondary justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden sm:rounded-xl cursor-pointer hover:scale-105 hover:-translate-y-0.5 transition transform duration-200 ease-in-out">
      <div className="p-3 text-white bg-primary rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
          <path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5"></path>
          <circle cx="6" cy="14" r="3"></circle>
          <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5"></path>
        </svg>
      </div>
      <h4 className="text-xl text-center font-medium text-gray-900">{title}</h4>
      <p className="text-base text-center text-gray-900">{desc}</p>
    </div>
  );
};
