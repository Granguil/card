import React from 'react'
import CardForm from './CardForm'
import CardSimple from './CardSimple'

export const FormCard = ({ card, children }) => {
  return <CardForm card={card} children={children} />
}

export const cardByDefault = {
  action: '/',
  method: 'GET',
  submit: () => console.log('Data Submit'),
  encType: 'application/x-www-form-urlencoded'
}

export const SimpleCard = ({ children }) => {
  return <CardSimple children={children} />
}
