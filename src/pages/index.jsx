import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Perks } from '@/components/Perks'
import { Recipes } from '@/components/Recipes'
import { ShortCut } from '@/components/Shortcut'
import { TextVisual } from '@/components/TextVisual'
import { JobTestimonial } from '@/components/JobTestimonial'
import { JoinUs } from '@/components/JoinUs'
import { Video } from '@/components/Video'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import { jobs } from '../lib/utils';

export default function Home() {

  const router = useRouter(); 
  const control = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: false});


  return (
    <>
      <Head>
        <title>Recruitment Site Prototype.</title>
        <meta
          name="description"
          content="By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
        />
      </Head>
      
      <main>

      <div className="isolate bg-white">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <Link href="/" aria-label="Home" className="flex title-font font-black items-center text-gray-900 md:mb-0 rounded shake"><Image alt="Logo" src="/assets/images/logo.svg" width="60" height="60" decoding="async" data-nimg="1" className="starting-logo dark-version default-logo shake rounded" loading="lazy" style={{ "color": "transparent", "borderRadius": "13px"}} />
          </Link>
        </div>
        <div className="px-6 pt-6 lg:px-8 absolute z-10 w-full">
          <nav className="flex items-center justify-between" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link href={"/"} className="-m-1.5 p-1.5">
                <Image alt="Logo" src="/assets/images/logo.svg" width="60" height="60" decoding="async" data-nimg="1" className="starting-logo dark-version default-logo shake rounded" loading="lazy" style={{ "color": "transparent", "borderRadius": "13px"}} />
              </Link>
            </div>
            <div className="flex hidden">
              <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Open main menu</span>
                
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              <a href="#" className="text-sm font-semibold leading-6 text-white">Teams</a>

              <a href="#" className="text-sm font-semibold leading-6 text-white">Our Mission</a>

              <a href="#" className="text-sm font-semibold leading-6 text-white">Life at Picnic</a>

            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm font-semibold leading-6 text-white bg-red rounded-full p-2">All jobs</a>
            </div>
          </nav>
          
          <div role="dialog" aria-modal="true">
            <div focus="true" className="hidden inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex items-center justify-between">
                <Link href={"/"} className="-m-1.5 p-1.5">
                  <Image className="h-full shake rounded-md" width="60" height="60" src="/assets/images/logo.svg" alt="" />
                </Link>
                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                  <span className="sr-only">Close menu</span>
                  
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10">Teams</a>

                    <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10">Careers</a>

                    <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10">Blog</a>

                    <a href="#" className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-400/10">Contact</a>
                  </div>
                  <div className="py-6">
                    <a href="#" className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10">height="60"</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main>
          <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36 relative md:px-6 lg:px-8" style={{ "backgroundImage": 'url("assets/images/hero-bg.png")', "backgroundSize": "cover", "height": "600px", "backgroundPosition": "center center",  "backgroundAttachment": "scroll" }}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="hidden sm:mb-8 sm:flex sm:justify-start">
                <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-white">
                  420 jobs in over 60 locations!
                </div>
              </div>
              <div className="text-left">
                <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl">Join the grocery revolution</h1>
                {/* <p className="mt-6 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p> */}
                <div className="mt-10 flex items-center justify-start gap-x-6">
                  <Link href={"/jobs"} className="rounded-md bg-red-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">All Jobs</Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <svg className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678" xmlns="http://www.w3.org/2000/svg">
                <path fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)" fillOpacity=".3" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
                <defs>
                  <linearGradient id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9089FC"></stop>
                    <stop offset="1" stopColor="#FF80B5"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </main>
      </div>
      <section id="jobs" className="relative bg-white pt-20">      
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="sm:text-center"><h2 className="text-3xl font-black tracking-tight text-gray-900 text-left mb-8">What is your next Challenge?</h2></div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {jobs ? jobs.map((job, id) => (

              <div key={job.id} className="flex justify-center text-6xlbg-gray-100">
                <Link className="block relative md:h-48 overflow-hidden rounded" href={`${router.asPath}berlin`}>
                  <Image width={640} height={415} alt="ecommerce" className="object-cover object-center w-full h-full block" src={job.jobImage} />
                  <div className="mt-4 absolute top-0 right-0 left-0 bottom-0">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 absolute bg-white p-2 rounded" style={{ "top": "50%", "right": "50%", 
                      "transform": "translate(50%,-50%)"}}>{job.title}</h3>
                  </div>
                </Link>
              </div>
              )
              ) : ''}
              
            </div>
        </div>
      </section>
      <ShortCut />
      <Perks />
      <JoinUs />
      <JobTestimonial />
      <Video /> 
     
      <TextVisual />
      {/* <PrimaryFeatures /> */}
      
      <div className="bg-white pt-24 relative">
        <div className="relative mt-24 -mb-24 bg-red-600 px-12 py-24 flex items-center">
            
            <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20" style={{ "height":"80px", "transform": "translateZ(0)"}}>
              <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0"><polygon className="fill-red-600" points="2560 0 2560 100 0 100"></polygon></svg>
            </div>
            <div className="hidden md:block w-3/12"></div>
              <div className="flex-1 relative">
                <div className="text-white text-base md:text-xl max-w-2xl leading-tight pb-12">
                  <h2 className="text-white font-black tracking-tightest text-3xl pb-4">About Picnic</h2>
                  <p className="mt-3 text-lg text-white">Picnic is een Nederlandse online-supermarkt. Het bedrijf bezorgt uitsluitend aan huis en heeft geen eigen winkels. Het is actief in Nederland (sinds 2015), Duitsland (2018) en Frankrijk (2021)</p>
                </div>
                <span className="absolute top-0 left-0 w-4 h-full bg-white -ml-20"></span>
              </div>
            </div>
            <br />
            <br />
            <div 
              style={{ 
                transform: inView ? "none" : "translateY(200px)",
                opacity: inView ? 1 : 0,
                transition: "all 0.25s ease-out 0.25s"}} 
                ref={ref}
                className={'bg-red'}
              >
            <img src="/assets/images/Picnic-Amersfoort-1-1280x720-1.jpeg" className="relative block w-10/12 h-25 object-contain -mt-12 bg-red" width="1200" height="450" />
            </div>
            <div className="w-64 bg-red-600"></div>
          </div>
    </main>
  <Footer />
</>
)
}
