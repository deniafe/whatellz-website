// components/FeatureSection.tsx

import { FC } from 'react';
import { FeatureCard } from './FeatureCard';


export const Features = () => {

  const features = [
    {
      icon: '',
      position: 'right',
      title: 'Connect Multiple WhatsApp Profile',
      image: '/profile.png',
      desc:
        `Unlock unparalleled flexibility! Seamlessly manage multiple WhatsApp profiles within Whatellz, 
        empowering you to broaden your reach and streamline communication across various accounts effortlessly.`,
    },
    {
      icon: '',
      position: 'right',
      title: 'Generate Numbers',
      image: '/generate.png',
      desc:
        `More numbers, more power! 
        With Whatellz, effortlessly generate new WhatsApp numbers to expand your network, 
        ensuring you always have the right channels to connect with your audience.`,
    },
    {
      icon: '',
      position: 'right',
      title: 'Verify Numbers',
      image: '/verification.png',
      desc: `Ensure reliability from the start! Whatellz simplifies the verification process, 
            guaranteeing that every WhatsApp number you generate is validated and ready for effective communication.`,
    },
    {
      icon: '',
      position: 'right',
      title: 'Scrape Groups And Contacts',
      image: '/collections.png',
      desc: `Dive into targeted connections! Scrape any group you are part of.
             Whatellz empowers you to scrape relevant groups and contacts, paving the way for targeted and personalized engagement.`,
    },
    {
      icon: '',
      position: 'right',
      title: 'Create And Run Chatbots',
      image: '/chatbot.png',
      desc: `Revolutionize customer interactions! With Whatellz, easily build and run chatbots that deliver instant responses, 
      automate routine tasks, and enhance user engagement—making every interaction meaningful.`,
    },
    {
      icon: '',
      position: 'right',
      title: 'Create And Run Broadcasts',
      image: '/broadcast.png',
      desc: `Amplify your message! Whatellz lets you create and run impactful broadcasts, ensuring your announcements, promotions, 
            or updates reach a wide audience on WhatsApp, fostering engagement and brand visibility`
    },
    {
      icon: '',
      position: 'right',
      title: 'Create And Run Sequences',
      image: '/broadcast2.png',
      desc: `Nurture leads effortlessly! Whatellz enables the creation and execution of drip campaigns, allowing you to systematically 
            engage and guide your audience through personalized journeys, ultimately boosting conversions.`,
    },
    {
      icon: '',
      position: 'right',
      title: 'Dark Mode',
      image: '/dark.png',
      desc: `Navigate with style and ease! Embrace the sleek and sophisticated Dark Mode feature in Whatellz, 
      enhancing your user experience and providing a visually appealing interface for all your WhatsApp marketing endeavors.`,
    },
    {
      icon: '',
      position: 'right',
      title: 'See Everything That Happens In The Browser',
      image: '/connect2.png',
      desc: `Stay in control! Whatellz grants you a comprehensive view of all activities within the browser, offering transparency 
      and empowering you to make informed decisions as you manage and optimize your WhatsApp marketing strategies.`,
    },
  ]


  return (
    <div className="py-auto">
      {/* <h2 className="text-4xl font-bold tracking-tight text-center capitalize text-black">
        Take control of your YouTube marketing
      </h2>
      <p className="mt-2 text-lg text-center text-gray-900">
        with these powerful features
      </p> */}
      {features.map((feature, i) => (
        <FeatureCard key={i} title={feature.title} desc={feature.desc} image={feature.image} position={feature.position} />
      ))}
    </div>
  );
};
