import React from 'react'
import Navigation from './components/Navigation/Navigation'
import './App.css'
import ContactHeader from './components/ContactHeader.jsx/ContactHeader.jsx'
import ContactForm from './components/ContactForm/ContactForm.jsx'

function App() {
  return (
    <div>
      <Navigation />
      <ContactHeader />
      <ContactForm />
    </div>
  )
}

export default App
