import { Banner } from './components/Banner'
import { CTA } from './components/CTA'
import { FAQ } from './components/FAQ'
import { Features } from './components/Feature'
import { FeatureSlider } from './components/FeatureSlider'
import { HeroImage } from './components/HeroImage'
import { Pricing } from './components/Pricing'
import { Services } from './components/Services'
import { SmallFeatures } from './components/SmallFeature'

export default function Home() {
  return (
    <>
      <Banner />
      <SmallFeatures />
      <FeatureSlider />
      <Features />
      <CTA />
      <Pricing />
      <FAQ />
    </>
  )
}
