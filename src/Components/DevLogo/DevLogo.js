import React from 'react'
import devBig from '../../Assets/dev-big.png'
import devSmall from '../../Assets/dev-small.png'

export default function DevLogo({isBig = false, ...props}) {
  if(isBig) {
    return <img src={devBig} alt="developers logo" {...props}/>
  } else {
    return <img src={devSmall} alt="developers logo" {...props}/>
  }
}
