import React from 'react'
import Sidebar from './components/Sidebar'
import MusicPlayer from './components/MusicPlayer'
import Display from './components/Display'

function App() {
  return (
    <>
      <div className=' h-screen bg-black  text-white p-2 flex'>
      <div className=' flex'></div>
      <Sidebar/>
      <Display/>
      </div>
      <MusicPlayer/>

    </>
  )
}

export default App