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
        'Find relevant videos for any keyword on 100% autopilot. Just enter the keywords and Tubely will collect the videos for you working in the background. Relevant videos will drive you relevant traffic, making sure your watch-time and conversions are high.',
    },
    {
      icon: '',
      position: 'right',
      title: 'Generate Numbers',
      image: '/generate.png',
      desc:
        'Leave engaging comments on targeted videos in your niche in 100% autopilot. Grab viewers, fresh subscribers and grow your channel organically without spending anything on paid traffic or hiring costly help.',
    },
    {
      icon: '',
      position: 'right',
      title: 'Verify Numbers',
      image: '/verification.png',
      desc: `You will not get stuck. Tubely comes with full detailed analytics showing you exactly how your campaign is performing. So you know what works and what isn't working`,
    },
    {
      icon: '',
      position: 'right',
      title: 'Scrape Groups And Contacts',
      image: '/collections.png',
      desc:
        'Random intervals between comments, and maintaining a safe interval between subsequent comments helps maximize approvals and protects you from bans. Tubely will also random-cycle between all the comments to make sure you get maximum variety',
    },
    {
      icon: '',
      position: 'right',
      title: 'Create Chatbots',
      image: '/chatbot.png',
      desc:
        'Want to use more than one youtube account? No worries. You can add as many accounts as you want. Tubely allows you to add as many accounts as possible and you get to pick the one you want for each campaign. Tubely takes care of it all',
    },
    {
      icon: '',
      position: 'right',
      title: 'Create Broadcasts',
      image: '/broadcast.png',
      desc:
        'Keep things organized and sorted between your video channels and projects by putting everything in separate groups. Each group will hold all the data and the interactions that you create for it without affecting the other groups.',
    },
    {
      icon: '',
      position: 'right',
      title: 'Multi Threaded & Non Intrusive',
      image: '/broadcast2.png',
      desc:
        'Tubely works silently in the background without disturbing your work. Its multi-threaded technology processes things faster on your PC while consuming minimal resources.',
    },
    {
      icon: '',
      position: 'right',
      title: 'Dark Mode',
      image: '/dark.png',
      desc:
        'Tubely works silently in the background without disturbing your work. Its multi-threaded technology processes things faster on your PC while consuming minimal resources.',
    },
    {
      icon: '',
      position: 'right',
      title: 'See Everything That Happens In The Browser',
      image: '/connect2.png',
      desc:
        'Tubely works silently in the background without disturbing your work. Its multi-threaded technology processes things faster on your PC while consuming minimal resources.',
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
