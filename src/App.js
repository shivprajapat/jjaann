import React from 'react'
import './sass/App.scss'
import Home from './components/Right/friend/Home'

const App = () => {
  return (
    <main>
      <div id="left">
      </div>
      <div id="right">
        <Home />
      </div>
    </main>
  )
}

export default App