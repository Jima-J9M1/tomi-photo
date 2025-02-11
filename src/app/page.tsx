import { Hero } from '@/components/ui/hero'
import { FeaturedWorks } from '@/components/ui/featured-works'
import { Carousel } from '@/components/ui/carousel'

const carouselImages = [
  {
    src: '/images/carousel/slide1.jpg',
    alt: 'Wedding Photography',
    title: 'Wedding Photography',
    description: 'Capturing your special moments with elegance and style',
  },
  {
    src: '/images/carousel/slide2.jpg',
    alt: 'Portrait Photography',
    title: 'Portrait Photography',
    description: 'Professional portraits that tell your story',
  },
  {
    src: '/images/carousel/slide3.jpg',
    alt: 'Event Photography',
    title: 'Event Photography',
    description: 'Documenting your events with precision and creativity',
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-20">
        <Carousel images={carouselImages} />
      </section>
      <FeaturedWorks />
      {/* We'll add more sections here */}
    </>
  )
}
