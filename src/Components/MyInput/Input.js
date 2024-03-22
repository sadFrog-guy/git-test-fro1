import React from 'react'
import style from "./Input.module.css"

export default function Input({children, setNumber, number , ...props}) {
  return (
    <input placeholder="Введите номер маршрута или улицу..." onChange={e => setNumber(e.target.value)} value={number} className={style.Input} {...props}></input>
  )
}