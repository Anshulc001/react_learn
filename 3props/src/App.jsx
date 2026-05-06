import React from 'react'
import Cards from './components/cards'

const App = () => {
  return (
    <div>
      app component
      <Cards title="Card 1" description="This is the first card" />
      <Cards title="Card 2" description="This is the second card" />
    </div>
  )
}

export default App
