import React from 'react'
import style from "./ImageOfBus.module.css"
import image from '../../Assets/photo_2024-01-27_18-39-52.jpg'

export default function ImageOfBus() {
  return (
    <div>
        <img className={style.image} 
            src={image} alt=''
        />
    </div>
  )
}