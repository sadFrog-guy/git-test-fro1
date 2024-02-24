import React from 'react'
import style from "./Street.module.css"

export default function Street({children, ...props}) {
  return (
    <div className={style.Street} {...props}>{children}</div>
  )
}
