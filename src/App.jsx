import React from 'react'
import './App.css'
import Form from './components/Form'


function App() {

  return (
    <div className='' id='display'>
      
      <Form identity={document.querySelector('div')}></Form>
    </div>
  )
}

export default App
