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
import { useEffect, useState, useRef } from "react";
import useDebounce from './../../hooks/useDebounce';
import { jobs } from './../../lib/utils';

export default function Jobs() {

  const router = useRouter(); 
  const control = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: false});

  const [query, setQuery] = useState('');
  const debouncedSearch = useDebounce(query, 300)
  const searchForm = useRef(null);
  
  const searchFilter = (array) => {
    return array.filter(  
       // eslint-disable-next-line no-console
        (el) => el.title.toLowerCase().includes(query)
    )
  }
  
  //Applying our search filter function to our array of countries recieved from the API
  const filtered = searchFilter(jobs);

  // eslint-disable-next-line no-console
  //Handling the input on our search bar
  const handleChange = (e) => {
    // eslint-disable-next-line no-console
    
    setQuery(e.target.value)
  }

  return (
    <>
      <Head>
        <title>Recruitment Site Prototype.</title>
        <meta
          name="description"
          content="By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
        />
      </Head>
      
     

      <div className="bg-white">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <Link href="/" aria-label="Home" className="flex title-font font-black items-center text-gray-900 md:mb-0 rounded shake">
            {/* // eslint-disable-next-line @next/next/no-img-element */}
            {/* <Image alt="Logo" src="/assets/images/logo.svg" width="60" height="60" decoding="async" data-nimg="1" className="starting-logo dark-version default-logo shake rounded" loading="lazy" style={{ "color": "transparent", "borderRadius": "13px"}} /> */}
          </Link>
        </div>
        <div className="px-6 pt-6 lg:px-8 absolute z-10 w-full">
          <nav className="flex items-center justify-between" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link href={"/"} className="-m-1.5 p-1.5">
                {/* // eslint-disable-next-line @next/next/no-img-element */}
                <Image className="h-full shake rounded-md" width="60" height="60" src="/assets/images/logo.svg" alt="" />
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
              <a href="#" className="text-sm font-semibold leading-6 text-black">Teams</a>

              <a href="#" className="text-sm font-semibold leading-6 text-black">Careers</a>

              <a href="#" className="text-sm font-semibold leading-6 text-black">Blog</a>

              <a href="#" className="text-sm font-semibold leading-6 text-black">Contact</a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm font-semibold leading-6 text-black">Log in <span aria-hidden="true">&rarr;</span></a>
            </div>
          </nav>
          
          <div role="dialog" aria-modal="true">
            <div focus="true" className="hidden inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex items-center justify-between">
                <Link href={"/"} className="-m-1.5 p-1.5">
                  <Image className="h-full shake rounded-md" src="/assets/images/logo.svg" width="60" height="60" alt="" />
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
                    <a href="#" className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10">Log in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="jobs" className="relative bg-white pt-20">      
      <div className="bg-white">
              <div>
                

                <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-4">
                  <div className="flex items-baseline justify-between border-b border-gray-200 pt-24 pb-6">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900">All Jobs</h1>

                    <div className="flex items-center">
                      <div className="relative inline-block text-left">
                        <div>
                          <button type="button" className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                            Sort
                            
                            <svg className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                        <span className="sr-only">View grid</span>
                        
                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <button type="button" className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden">
                        <span className="sr-only">Filters</span>
                        
                        <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <section className="pt-6 pb-24">
                    
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                      
                      <form className="hidden lg:block">
                      
                        <div className="border-b border-gray-200 py-6">
                          {/*  Text Filter  */}
                          <h3 className="-my-3 flow-root mb-4">
                            <span className="font-medium text-gray-900">Filter</span>
                          </h3>
                          <div className="col-span-6 sm:col-span-3 flex">
                            
                            <input onChange={(e) => setQuery(e.target.value)} type="text" name="search-term" id="search-term" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm" placeholder="Wat wil je doen?" />
                            
                          </div>
                        </div>
                       
                        <div className="border-b border-gray-200 py-6">

                          {/* Department */}
                          <h3 className="-my-3 flow-root">

                            <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                              <span className="font-medium text-gray-900">Department</span>
                            </button>
                          </h3>

                          <div className="pt-6" id="filter-section-0">
                            <div className="space-y-4">
                              <div className="flex items-center">
                                <input id="filter-color-0" name="department[]" value="commercial" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-color-0" className="ml-3 text-sm text-gray-600">Commercial</label>
                              </div>

                              <div className="flex items-center">
                                <input id="filter-color-1" name="department[]" value="creative" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-color-1" className="ml-3 text-sm text-gray-600">Creative</label>
                              </div>

                              <div className="flex items-center">
                                <input id="filter-color-2" name="department[]" value="technology" type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-color-2" className="ml-3 text-sm text-gray-600">Technology</label>
                              </div>

                              <div className="flex items-center">
                                <input id="filter-color-3" name="department[]" value="logistics" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-color-3" className="ml-3 text-sm text-gray-600">Logistics</label>
                              </div>

                              <div className="flex items-center">
                                <input id="filter-color-0" name="department[]" value="people" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-color-0" className="ml-3 text-sm text-gray-600">People</label>
                              </div>

                              <div className="flex items-center">
                                <input id="filter-color-1" name="department[]" value="facilities" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-color-1" className="ml-3 text-sm text-gray-600">Facilities</label>
                              </div>

                              <div className="flex items-center">
                                <input id="filter-color-2" name="department[]" value="data" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-color-2" className="ml-3 text-sm text-gray-600">Data Analytics</label>
                              </div>

                              <div className="flex items-center">
                                <input id="filter-color-3" name="department[]" value="finance" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-color-3" className="ml-3 text-sm text-gray-600">Finance</label>
                              </div>

                              
                            </div>
                          </div>
                        </div>
                        {/* Availabity */}
                        <div className="border-b border-gray-200 py-6">

                      
                          <h3 className="-my-3 flow-root">
                          
                            <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                              <span className="font-medium text-gray-900">Availabilty</span>
                            </button>
                          </h3>
                        
                          <div className="pt-6" id="filter-section-0">
                            <div className="space-y-4">
                              <div className="flex items-center">
                                <input id="filter-color-0" name="availability[]" value="full-time" type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-color-0" className="ml-3 text-sm text-gray-600">Full time</label>
                              </div>

                              <div className="flex items-center">
                                <input id="filter-color-1" name="availability[]" value="part-time" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-color-1" className="ml-3 text-sm text-gray-600">Part time</label>
                              </div>

                              <div className="flex items-center">
                                <input id="filter-color-2" name="availability[]" value="weekend" type="checkbox"  className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-color-2" className="ml-3 text-sm text-gray-600">Weekend</label>
                              </div>

                              <div className="flex items-center">
                                <input id="filter-color-3" name="availability[]" value="evening" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-color-3" className="ml-3 text-sm text-gray-600">Evenings</label>
                              </div>

                              
                            </div>
                          </div>
                        </div>
                        {/* Location */}
                        <div className="border-b border-gray-200 py-6">
                          <h3 className="-my-3 flow-root">
                          
                            <button type="button" className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                              <span className="font-medium text-gray-900">Location</span>
                            </button>
                          </h3>
                        
                          <div className="pt-6" id="filter-section-1">
                            <div className="space-y-4">
                              <div className="flex items-center">
                                <input id="filter-category-0" name="location[]" value="nl" type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-category-0" className="ml-3 text-sm text-gray-600">The Netherlands</label>
                              </div>

                              <div className="flex items-center">
                                <input id="filter-category-1" name="location[]" value="fr" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-category-1" className="ml-3 text-sm text-gray-600">France</label>
                              </div>

                              <div className="flex items-center">
                                <input id="filter-category-2" name="location[]" value="de" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" />
                                <label htmlFor="filter-category-2" className="ml-3 text-sm text-gray-600">Germany</label>
                              </div>

                              
                            </div>
                          </div>
                        </div>

                      </form>

                      <div className="lg:col-span-3">
                        <div className="h-96 rounded-lg lg:h-full">

                        <div className="overflow-hidden bg-white shadow sm:rounded-md">
                          <ul role="list" className="divide-y divide-gray-200">
                              {filtered && filtered.length > 1 ? filtered.map((job, id) => (
                                <li key={id}>
                                  <Link href={`jobs${job.link}`} className="block hover:bg-gray-50">
                                    <div className="px-4 py-4 sm:px-6">
                                      <div className="flex items-center justify-between">
                                        <p className="truncate text-sm font-medium text-red-600">{job.title}</p>
                                        <div className="ml-2 flex flex-shrink-0">
                                          <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800 capitalize">{job.type}</p>
                                        </div>
                                      </div>
                                      <div className="mt-2 sm:flex sm:justify-between">
                                        <div className="sm:flex">
                                          <p className="flex items-center text-sm text-gray-500">
                                            <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                              <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                                            </svg>
                                            {job.department}
                                          </p>
                                          <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                                            <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                              <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" />
                                            </svg>
                                            {job.location}
                                          </p>
                                        </div>
                                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                          <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd" />
                                          </svg>
                                          <p>
                                            Closing on 
                                            <time dateTime="2023-01-14"> Feb 14, 2023</time>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                </li>
                                )
                              ) : <p>No results found</p> }
                          </ul>

                        
                        </div>
                        <div className="flex items-center justify-center py-10 lg:px-0 sm:px-6 px-4">
                              <div className="w-full flex items-center justify-between dark:border-gray-700">
                                  <div className="flex items-center pt-3 text-gray-600 dark:text-gray-200  hover:text-red-700 cursor-pointer">
                                      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                          <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                          <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                          </svg>
                                          {/* <p className="text-sm ml-3 font-medium leading-none ">Previous</p>                     */}
                                  </div>
                                  <div className="sm:flex hidden">
                                      <p className="text-sm font-medium leading-none cursor-pointer text-red-700 dark:text-red-400 border-t border-red-400 pt-3 mr-4 px-2">1</p>
                                      <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 dark:text-gray-200  hover:text-red-700 dark:hover:text-red-400 border-t border-transparent hover:border-red-400 pt-3 mr-4 px-2">2</p>
                                      <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 dark:text-gray-200  hover:text-red-700 dark:hover:text-red-400 border-t border-transparent hover:border-red-400 pt-3 mr-4 px-2">3</p>
                                      <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 dark:text-gray-200  hover:text-red-700 dark:hover:text-red-400 border-t border-transparent hover:border-red-400 pt-3 mr-4 px-2">4</p>
                                      <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 dark:text-gray-200  hover:text-red-700 dark:hover:text-red-400 border-t border-transparent hover:border-red-400 pt-3 mr-4 px-2">5</p>
                                      <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 dark:text-gray-200  hover:text-red-700 dark:hover:text-red-400 border-t border-transparent hover:border-red-400 pt-3 mr-4 px-2">6</p>
                                      <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 dark:text-gray-200  hover:text-red-700 dark:hover:text-red-400 border-t border-transparent hover:border-red-400 pt-3 mr-4 px-2">7</p>
                                      <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 dark:text-gray-200  hover:text-red-700 dark:hover:text-red-400 border-t border-transparent hover:border-red-400 pt-3 mr-4 px-2">8</p>
                                  </div>
                                  <div className="flex items-center pt-3 text-gray-600 dark:text-gray-200  hover:text-red-700 cursor-pointer">
                                      <p className="text-sm font-medium leading-none mr-3">Next</p>
                                      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                          <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                          <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                          </svg>
                                          
                                  </div>
                              </div>
                          </div>

                        </div>
                      </div>
                    </div>
                 
                  </section>
                </main>
              </div>
            </div>
      </section>
      
      {/* <TextVisual />
      <JoinUs /> */}
    <Footer />
    </>
  )
}
