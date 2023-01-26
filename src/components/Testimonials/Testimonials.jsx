import React, { useState } from 'react'
import './Testimonials.css'
import BtnSlider from './BtnSlider'
import { FaQuoteLeft } from 'react-icons/fa'

const dataSlider = [
  {
    text: 'Quantis helped us to understand our website performance in a way that we never thought was possible. Their team of experts provided us with detailed reports and in-depth analysis that allowed us to make data-driven decisions and improve our online presence. We highly recommend Quantis for anyone looking to take their web analytics to the next level.',
    author: 'John Smith, CEO of XYZ Corp',
  },
  {
    text: "As a small business, we were struggling to make sense of our website data. Quantis provided us with the tools and guidance we needed to understand our audience and improve our online performance. Their customer service is exceptional, and we're very happy with the results we've seen so far.",
    author: 'Jane Doe, Owner of ABC Bakery',
  },
  {
    text: "We've been working with Quantis for several months now, and we've seen a significant increase in our website's performance. Their team of experts has provided us with valuable insights and guidance that has helped us to optimize our online presence and drive more sales. We highly recommend Quantis for any business looking to improve their web analytics.",
    author: 'Michael Brown, Marketing Manager at LMN Inc.',
  },
  {
    text: "Quantis has been a game-changer for our business. Their advanced analytics tools and expert consultation have helped us to understand our website's performance and make data-driven decisions. We're very pleased with the results we've seen, and we highly recommend Quantis for any business looking to take their web analytics to the next level.",
    author: 'Sarah Johnson, COO of PQR Inc.',
  },
]

export default function Testimonials() {
  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length)
    }
  }

  const moveDot = (index) => {
    setSlideIndex(index)
  }

  return (
    <section id='testimonials'>
      <div className='container-slider'>
        <div className='slides'>
          <div className='slides-heading'>
            <FaQuoteLeft className='quotes-icon' />
            <h3 className='section-heading'>Real Stories Real Results</h3>
          </div>
          {dataSlider.map((obj, index) => {
            return (
              <div
                key={index}
                className={
                  slideIndex === index + 1 ? 'slide active-anim' : 'slide'
                }
              >
                <p className='testimonial-text'>{obj.text}</p>
                <p className='testimonial-author'>{obj.author}</p>
              </div>
            )
          })}
        </div>
        <div className='controls'>
          <BtnSlider moveSlide={nextSlide} direction={'next'} />
          <BtnSlider moveSlide={prevSlide} direction={'prev'} />
        </div>
      </div>
    </section>
  )
}
