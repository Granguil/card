import React from 'react'
import style from './Card.module.css'

function CardForm({ card, children }) {
  return (
    <article className={style.article}>
      <form
        action={card.action}
        method={card.method}
        onSubmit={(e) => {
          card.submit(e)
        }}
        encType={card.encType}
        className={style.form}
      >
        <div className={style.pointer}>
          <div className={style.containerBorder} children={children}></div>
        </div>
      </form>
    </article>
  )
}

export default CardForm
