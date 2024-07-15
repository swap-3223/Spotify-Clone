import React from 'react'
import Sidebar from './components/Sidebar'
import Liabrary from './components/Liabrary'
import MusicPlayer from './components/MusicPlayer'

function App() {
  return (
    <>
      <div className='w-screen h-screen bg-black text-white p-2'>
      <Sidebar/>
      <Liabrary/>
      <MusicPlayer/>
      </div>
    </>
  )
}

export default App