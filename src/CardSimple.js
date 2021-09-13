import React from 'react'
import style from './Card.module.css'

function CardSimple({ children }) {
  return (
    <article className={style.article + ' ' + style.projets}>
      <div className={style.form}>
        <div className={style.pointer}>
          <div className={style.containerBorder} children={children}></div>
        </div>
      </div>
    </article>
  )
}

export default CardSimple
