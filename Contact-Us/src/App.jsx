import React from 'react'
import Navigation from './components/Navigation/Navigation'
import './App.css'
import ContactHeader from './components/ContactHeader.jsx/ContactHeader.jsx'
import ContactForm from './components/ContactForm/ContactForm.jsx'

function App() {
  return (
    <div>
      <Navigation />
      <main className='main_container'>
      <ContactHeader />
      <ContactForm />
      </main>
    </div>
  )
}

export default App
