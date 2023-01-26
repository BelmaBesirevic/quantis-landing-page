import React from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
    >
      <span>{direction === 'next' ? <FaArrowAltCircleRight /> : <FaArrowAltCircleLeft />}</span>
    </button>
  )
}
