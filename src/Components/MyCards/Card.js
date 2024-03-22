import React from 'react'
import styles from "./Card.module.css"

export default function Card({children, clicked, setCurrent, current, type, color, ...props}) {
  const clickHandler = () => {
    setCurrent(children)
  }

  return (
    <div 
      className={clicked ? [styles.card, styles.clicked].join(' ') : styles.card} onClick={clickHandler}
      style={{borderColor: color, color: color}}
      {...props}
    >
      {children}
      <p className={styles.type}>
        {type}
      </p>
    </div>
  )
}