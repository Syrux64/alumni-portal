import React from 'react'
import Feed from './pages/feed/Feed'
import './App.css'
import Header from './component/ui/header/Header'

const App = () => {
  return (
    <div className='webApp'>
      <Header />
      <Feed />
    </div>
  )
}

export default App