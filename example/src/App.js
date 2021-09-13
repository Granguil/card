import React from 'react'

import { cardByDefault, SimpleCard, FormCard } from 'card'
import 'card/dist/index.css'

const App = () => {
  const cardnew = {
    ...cardByDefault,
    action: '/home',
    submit: (e) => {
      e.preventDefault()
      alert('Navigation Refusée')
    }
  }
  const card2 = {
    ...cardByDefault,
    action: 'http://www.sitedegranguil.fr',
    submit: () => {}
  }
  return (
    <div>
      <SimpleCard>
        <h3>Bonjour</h3>
      </SimpleCard>
      <FormCard card={cardnew}>
        <h3>Aucune Navigation</h3>
      </FormCard>
      <FormCard card={card2}>
        <h3>Go to Site de Granguil</h3>
      </FormCard>
    </div>
  )
}

export default App
