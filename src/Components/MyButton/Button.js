import React from 'react'
import style from "./Button.module.css" 

export default function Button({children, disabled=false, ...props}) {
  return (
    <button {...props} className={disabled ? [style.button, style.disabled].join(' ') : style.button}>{children}</button>
  )
}