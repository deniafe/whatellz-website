// components/FeatureCard.tsx

import { FC } from 'react';

interface FeatureCardProps {
  title: string;
  desc: string;
  image?: string;
  position?: string;
}

export const FeatureCard: FC<FeatureCardProps> = ({title, desc, image, position}) => {
  return (
    <section className="px-2 py-12 md:px-0">
      <div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
        <div className="flex flex-wrap items-center sm:-mx-3">
          {position === 'left' && (
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <img src={image} alt="Feature" />
              </div>
            </div>
          )}
          <div className="w-full md:w-1/2 md: md:pl-4">
            <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl">
                <span className="block xl:inline">{title}</span>
              </h2>
              <p className="mx-auto text-base text-gray-800 sm:max-w-md lg:text-xl md:max-w-3xl">{desc}</p>
              {/* Add your button or other content here */}
            </div>
          </div>
          {position === 'right' && (
            <div className="w-full md:w-1/2">
              <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
                <img src={image} alt="Feature" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
