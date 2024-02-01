import React from 'react'
import style from "./Input.module.css"

export default function Input({...props}) {
  return (
    <input className={style.Input} placeholder='Поиск' {...props} />
  )
}
