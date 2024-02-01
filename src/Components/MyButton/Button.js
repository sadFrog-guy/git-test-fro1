import React from 'react'
import style from "./Button.module.css" 

export default function ({children}) {
  return (
    <button className={style.button}>{children}</button>
  )
}
