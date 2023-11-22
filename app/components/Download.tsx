"use client"
import { useState } from 'react';

export const Download = () => {
  const [clicked, setClicked] = useState(false);


  const user = { email: 'user@example.com', password: 'userpassword' }; // Replace with your actual user data

  return (
    <div>
      <section className="w-full px-8 py-16 xl:px-8 h-screen">
        <div className="w-full mt-16 md:mt-0 md:w-3/5 mx-auto">
          <div className="h-auto p-8 py-10 overflow-hidden bg-secondary border-b-2 border-secondary rounded-lg shadow-xl px-7">
            <h3 className="mb-2 text-xl font-medium text-center text-gray-800">
              Click the link below to download Whatellz for windows.
            </h3>
            <h6 className="text-gray-500 text-center mb-6">
              You might have to wait a few seconds for your download to start.
              After clicking the link, wait a few seconds, and your download
              should start shortly.
            </h6>
            <div className="block text-center mb-4">
              <i
                className="fa fa-download text-primary text-lg animate-bounce"
                aria-hidden="true"
              ></i>
              <a
                // href="https://github.com/deniafe/tubely/releases/download/v0.2.2/tubely-Setup-0.2.2.exe"
                rel="nofollow"
                className="w-full px-3 py-4 font-medium text-lg text-primary focus:outline-none underline"
                onClick={() => setClicked(true)}
              >
                whatellz.exe
              </a>
            </div>
            <h6
              className={`text-gray-600 font-semibold text-center mb-6 ${
                clicked ? '' : 'hidden'
              }`}
            >
              Your Download will start shortly ...
            </h6>
          </div>
        </div>
      </section>
    </div>
  );
};
