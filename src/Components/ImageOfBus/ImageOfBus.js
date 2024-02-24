import React from 'react'
import image from '../../Assets/photo_2024-01-27_18-39-52.jpg'

export default function ImageOfBus({isBig = false}) {
  return (
    <div>
        <img
            src={image} alt=''
            width={isBig ? 200 : 132}
        />
    </div>
  )
}