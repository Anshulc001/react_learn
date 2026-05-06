import React from 'react'
import Card from './components/card'
import Navbar from './components/navbar'


const App = () => {
  return (
   <>
    <div id="main"></div>
    <h1>Welcome to My React App</h1>
    <p>This is a simple React application that demonstrates the use of components.</p>
    <Navbar />
    <Card />

   </> 
  )
}

export default App
