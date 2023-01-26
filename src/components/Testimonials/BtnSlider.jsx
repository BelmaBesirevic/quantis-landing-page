import React from 'react'
import { GrNext, GrPrevious } from 'react-icons/gr'

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
    >
      <span>{direction === 'next' ? <GrNext /> : <GrPrevious />}</span>
    </button>
  )
}
