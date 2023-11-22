"use client"

export const Banner = () => {

  const scroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
 
  return (
    <section className="px-2 pt-44 md:px-0 mb-[8rem] md:mb-[8rem]">
      <div className="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-left text-black sm:text-5xl md:text-6xl md:text-center">
          <span className="block">Automate Your</span>
          <span className="block mt-1 text-primary lg:inline lg:mt-0">WhatsApp Marketing</span>
        </h1>
        <h2 className="capitalize w-full mx-auto text-base text-left md:max-w-md sm:text-base lg:text-xl md:max-w-3xl md:text-center mb-12">
          <span className="text-gray-90">Engage At Scale, Promote Your Product Or Service To Over 2 Billion People!</span>
        </h2>
        <div className="relative flex flex-col justify-center md:flex-row md:space-x-4">
          <a
            href="/download"
            className="flex items-center cursor-pointer w-full px-6 py-3 mb-3 text-lg text-white bg-primary rounded-md md:mb-0 md:w-auto hover:scale-105 hover:-translate-y-0.5 transition transform duration-200 ease-in-out"
          >
            Dowload It Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
          <a
            className="flex items-center cursor-pointer px-6 py-3 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600 hover:scale-105 hover:-translate-y-0.5 transition transform duration-200 ease-in-out"
            onClick={() => scroll('desc')}
          >
            Learn More
          </a>
        </div>
      </div>
      <div className="container items-center max-w-4xl px-5 mx-auto mt-16 text-center">
        <img src="/dashboard.png" alt="Laptop" className="shadow-xl border-4 border-primary rounded-md" />
      </div>

    </section>
  );
};
