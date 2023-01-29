import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

import { Container } from '@/components/Container'

const reviews = [
  {
    title: 'It really works.',
    body: 'Yowzers! This Picnic website really is the business!',
    author: 'Foodie',
    rating: 5,
  },
  {
    title: 'You need this app.',
    body: 'I can do all my shopping and plan my meals out really easily.',
    author: 'Customer',
    rating: 5,
  },
  {
    title: 'Snappy Title',
    body: 'The recipes alone are awesome! And the bundle offerings are exceptional value for money.',
    author: 'Foodie Customer',
    rating: 5,
  },
  {
    title: 'Traditional Dublin Coddle.',
    body: 'Delicious stodgey awesomeness from home.',
    author: 'Customer Foodie',
    rating: 5,
  },
  {
    title: 'Traditional Dutch Stampot',
    body: 'Delicious stodgey awesomeness from the NL',
    author: 'Client Shopper',
    rating: 5,
  },
  {
    title: 'Snack Food',
    body: 'The reason to have an air-fryer!',
    author: 'Shopper Client',
    rating: 5,
  },
  {
    title: 'Something German.',
    body: 'This is literally the most important app you will ever download in your life. Get on this before it’s so popular that everyone else is getting these tips too.',
    author: 'Recipe Person',
    rating: 5,
  },
  {
    title: 'Something French',
    body: 'Quelque chose en Francais ici',
    author: 'Recipe Person 2',
    rating: 5,
  },
  {
    title: 'Another Dutch Recipe',
    body: 'Deutsch. Yep. I got nothing.',
    author: 'Recipe Person 3',
    rating: 5,
  },
  {
    title: 'Nyom nyom nyom.',
    body: 'More delcious choice than I can comprehend!',
    author: 'Recipe Person 4',
    rating: 5,
  },
  {
    title: 'Lovely Fresh stuff.',
    body: 'Yum. Fresh stuff is great. ',
    author: 'Another Recipe',
    rating: 5,
  },
  {
    title: 'Meal ideas for Spring time',
    body: 'Meal tips and recipes are a huge time saver',
    author: 'Yet another',
    rating: 5,
  },
  {
    title: 'Delicious and Fast recipes.',
    body: 'Wow, would be great to package this site as a PWA also!',
    author: 'Recipe X',
    rating: 5,
  },
  {
    title: 'Wow this app is the cat\'s pyjamas!',
    body: 'Can\'t wait to see what the new webstore is gonna look like',
    author: 'User 420',
    rating: 5,
  },
]

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-yellow-400' : 'fill-gray-300'
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef()
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef()
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  'md:hidden',
                reviewIndex >= columns[0].length && 'lg:hidden'
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && 'lg:hidden'
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="careers"
      aria-labelledby="reviews-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-black tracking-tight text-gray-900 sm:text-center"
        >
          Consumer vacancies (or perhaps recipes &#129300;)
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Note; trying out this vertical style css scroller. Could be worth looking at for the comp in flight. 
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
