import React from 'react'
import { assets } from '../assets/assets'

function Navbar() {
  return (
    <>
        <div className='w-full flex justify-between items-center font-semibold'>
            <div className='flex items-center gap-2'>
                <img className='w-8 bg-black p2 rounded-2xl cursor-pointer ' src={assets.arrow_left}/>
                <img className='w-8 bg-black p2 rounded-2xl cursor-pointer ' src={assets.arrow_right}/>

            </div>
            
        </div>
    </>
  )
}

export default Navbar