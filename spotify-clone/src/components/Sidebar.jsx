import React from 'react'
import {assets} from "../assets/assets"
function Sidebar() {
  return (
    <>
        <div className='h-[18%] rounded-md bg-[#181818] w-[22%] p-5 flex flex-col gap-3'>
        <div className='p-1 flex gap-5 font-bold'>
            <img className='h-6 ' src={assets.home_icon}></img>
            Home
        </div>
        <div className='p-1 flex gap-5 font-bold'>
            <img className='h-6 ' src={assets.search_icon}></img>
            Search
        </div>
        </div>
        
    </>
  )
}

export default Sidebar