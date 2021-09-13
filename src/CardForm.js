import React from 'react'
import style from './Card.module.css'

function CardForm({ card, children }) {
  return (
    <article className={style.article}>
      <form
        action={card.action}
        method={card.method}
        onSubmit={(e) => card.submit(e)}
        className={style.form}
      >
        <button className={style.pointer}>
          <div className={style.containerBorder} children={children}></div>
        </button>
      </form>
    </article>
  )
}

export default CardForm
