import React from 'react'
import './sass/App.scss'
import Home from './components/Right/friend/Home'
import Easier from './components/Right/easier/Easier'

const App = () => {
  return (
    <main>
      <Easier />
      <div id="left">
      </div>
      <div id="right">
        {/* <Home /> */}
      </div>
    </main>
  )
}

export default App