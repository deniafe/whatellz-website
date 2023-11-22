import { SmallFeatureCard } from './SmallFeatureCard';


export const SmallFeatures = () => {
  const features = [
    {
      icon: '',
      title: 'Charge Engagements!',
      desc:
        'Supercharge your engagement strategy with Whattelz! Elevate your communication game and watch those responses soar! 🚀',
    },
    {
      icon: '',
      title: 'Over 2 billion Users',
      desc:
        `Tap into an audience of over 2 billion active users! Let your brand shine where everyone connects! 🌎✨`,
    },
    {
      icon: '',
      title: '98% average open rate',
      desc:
        `Achieve a phenomenal 98% average open rate with Whatellz. Elevate your brand's reach and open rates! 🌟💬`,
    },
    {
      icon: '',
      title: 'Multimedia Messaging',
      desc: `Whatellz supports multimedia messaging, allowing businesses to send images, videos, and audio messages! 📸🎙️`
    },
    {
      icon: '',
      title: 'Broadcast Messages',
      desc: `Easily broadcast high-response WhatsApp messages. Efficiently categorize, and target contacts in collections! 🚀📢📊`,
    },
    {
      icon: '',
      title: 'No Code Chat-Bots',
      desc: `Build simple chatbots for instant responses to common queries. Boost sales, and turn every chat into a delightful experience! 🤖`,
    },
  ]
  return (
    <section id="desc" className="py-20">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-4 max-w-[510px] text-center lg:mb-8">
              <span className="mb-2 block text-lg font-semibold text-primary">
                What We Offer
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark  sm:text-4xl md:text-[40px]">
                Grow Your Business
              </h2>
              <p className="text-base text-body-color">
                Elevate customer interactions, personalize communication, and boost sales—all with the power of Whatellz
              </p>
            </div>
          </div>
        </div>
        </div>
      <div className="container max-w-6xl mx-auto">
        {/* <h2 className="text-4xl font-bold tracking-tight text-center capitalize text-black">
         Whatellz Gives You Super Powers
        </h2>
        <p className="mt-2 text-lg text-center text-gray-900">with whatellz, you can</p> */}
        <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
          {features.map((feature, i) => (
            <SmallFeatureCard key={i} title={feature.title} desc={feature.desc} />
          ))}
        </div>
      </div>
    </section>
  );
};
