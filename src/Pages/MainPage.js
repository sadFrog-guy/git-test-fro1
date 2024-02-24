import React from 'react'
import ImageOfBus from '../Components/ImageOfBus/ImageOfBus'

export default function MainPage() {
  return (
    <>
        <div className='first-image'>
            <ImageOfBus isBig={true}/>
        </div>
        <p className="heading-route">route.kg</p>
    </>
  )
}
