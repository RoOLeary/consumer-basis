import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Perks } from '@/components/Perks'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { TextVisual } from '@/components/TextVisual'
import { JobTestimonial } from '@/components/JobTestimonial'
import { JoinUs } from '@/components/JoinUs'
import { Video } from '@/components/Video'

export default function Home() {
  return (
    <>
      <Head>
        <title>Consumer - Consumer Site Prototype.</title>
        <meta
          name="description"
          content="By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <Reviews />
        <TextVisual />
        <Video />
        <JobTestimonial />
        <Perks />
        <JoinUs />
      </main>
      <Footer />
    </>
  )
}
