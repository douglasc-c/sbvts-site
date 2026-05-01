import { ContactSection } from '../components/home/ContactSection'
import { DirectorsSection } from '../components/home/DirectorsSection'
import { GarageStorySection } from '../components/home/GarageStorySection'
import { HomeHero } from '../components/home/HomeHero'
import { LatestArticlesSection } from '../components/home/LatestArticlesSection'
import { MidBannerSection } from '../components/home/MidBannerSection'
import { RiderLegacySection } from '../components/home/RiderLegacySection'
// import { UpcomingEventsSection } from '../components/home/UpcomingEventsSection'
import { homeGallery, homeImages, homeValues } from '../data/homeSections'
import { useSiteContent } from '../hooks/useSiteContent'
import './HomePage.css'

export function HomePage() {
  const { content } = useSiteContent()

  return (
    <main className="page-enter home-page">
      <HomeHero title={content.heroTitle} subtitle={content.heroSubtitle} imageUrl={homeImages.hero} />
      <RiderLegacySection features={content.features} imageUrl={homeImages.legacy} />
      <GarageStorySection imageUrl={homeImages.garage} />
      {/* <UpcomingEventsSection events={content.events} /> */}

      <DirectorsSection />

      <MidBannerSection imageUrl={homeImages.midBanner} />
      <ContactSection values={homeValues} />
      <LatestArticlesSection items={homeGallery} />
    </main>
  )
}
