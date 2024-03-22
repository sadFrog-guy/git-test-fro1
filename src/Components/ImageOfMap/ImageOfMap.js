import React from 'react'
import image from '../../Assets/map.png'
import style from "./ImageOfMap.module.css"

export default function ImageOfMap({image}) {
  return (
    <div className={style.image}>
        <img 
            src={image} alt=''
            style={{width: '90%'}}
        />
    </div>
  )
}
