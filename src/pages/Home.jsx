import HeroSection from '../components/home/HeroSection'
import WhoWeAre from '../components/home/WhoWeAre'
import ProductPreview from '../components/home/ProductPreview'
import WhyChooseUs from '../components/home/WhyChooseUs'
import ProcessingJourney from '../components/home/ProcessingJourney'
import CTABanner from '../components/home/CTABanner'

/**
 * Landing page — all mandatory home sections in narrative order.
 */
export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="section-separator" aria-hidden />
      <WhoWeAre />
      <div className="section-separator" aria-hidden />
      <ProductPreview />
      <div className="section-separator" aria-hidden />
      <WhyChooseUs />
      <div className="section-separator" aria-hidden />
      <ProcessingJourney />
      <div className="section-separator" aria-hidden />
      <CTABanner />
    </>
  )
}
