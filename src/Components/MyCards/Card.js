import React from 'react'
import style from "./Card.module.css"

export default function Card({children, ...props}) {
  return (
    <div className={style.card} {...props}>{children}</div>
  )
}
