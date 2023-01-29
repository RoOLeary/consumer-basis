import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

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
        {/* <CallToAction /> */}
        <Reviews />
        {/* <Faqs /> */}
        <div className="relative bg-gray-900">
          <div className="relative h-56 bg-red-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
            <img className="h-full w-full object-cover" src="https://picnic.app/jobs/wp-content/uploads/sites/10/2022/08/cover-photo-min.jpg" alt="" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-white to-red-300 mix-blend-multiply"></div>
          </div>
          <div className="relative mx-auto max-w-md py-12 px-6 sm:max-w-7xl sm:py-20 md:py-28 lg:px-8 lg:py-32">
            <div className="md:ml-auto md:w-1/2 md:pl-10">
              <h2 className="text-lg font-semibold text-gray-300">Join our amazing crew today!</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">Check out our job openings naar jou</p>
              <p className="mt-3 text-lg text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.</p>
              <div className="mt-8">
                <div className="inline-flex rounded-md shadow">
                  <a href="#" className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-500 px-5 py-3 text-base font-medium text-white hover:bg-red-700">
                    Show me the jobs!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-7xl text-center">
              <h2 className="mb-2 text-4xl font-black tracking-tight text-gray-900">Video CTA.<br />Start using our app today.</h2>
              <br />
              <div className="video-container"><iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/fOBrFP0WKfo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe></div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
