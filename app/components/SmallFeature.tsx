import { SmallFeatureCard } from './SmallFeatureCard';


export const SmallFeatures = () => {
  const features = [
    {
      icon: '',
      title: 'Grow New Channels Rapidly',
      desc:
        'If you’ve got a new channel, traffic is going to be your biggest problem, but with Tubely it’s not a problem anymore. You will get a constantly increasing supply of views and organic viewership.',
    },
    {
      icon: '',
      title: 'Get Subscribers Everyday',
      desc:
        'More subscribers means more dedicated viewership and more authority. With Tubely you will get real subscribers, not fake accounts that YouTube detects and penalizes you for.',
    },
    {
      icon: '',
      title: 'Create New Collaborations',
      desc:
        'Get in contact with the top YouTube channels of your niche. Talk to them and strike out partnerships, even send them offers, do exchanges, buy rights to videos, and cross-promote. Anything is possible!',
    },
    {
      icon: '',
      title: 'Increase Your Watch Time',
      desc:
        'Watch time is the most important metric that YouTube considers to rank your videos. If your watchtime is higher, it will get you more viewers through search and other sources.',
    },
    {
      icon: '',
      title: 'Reignite Your Dead Channels',
      desc:
        'Did you give up on YouTube already? It’s time to reignite your video passion and get viewers back to your older channels. With Tubely you can drive traffic anywhere. Even to older channels.',
    },
    {
      icon: '',
      title: 'Get More Social Authority',
      desc:
        'Be right in front of the targeted viewers in your niche no matter which YouTube channel or which video they are watching. Get more popularity and get recognized, resulting in more traffic and authority to you.',
    },
  ]
  return (
    <section id="desc" className="py-20">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-4 max-w-[510px] text-center lg:mb-8">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Services
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark  sm:text-4xl md:text-[40px]">
                What We Offer
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
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
