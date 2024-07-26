import React from 'react'
import {assets} from "../assets/assets"

function Sidebar() {
  return (
    <>
      <div className='h-[87%] w-[22%]  flex flex-col gap-2 flex-wrap'>
      <div className='h-[20%] w-[100%] bg-[#111111] rounded-lg'>
           <div className='flex items-center gap-4 pl-8 pt-5 cursor-pointer'>
           <img className='w-6' src={assets.home_icon}/>
            <p className='font-bold'>Home</p>
           </div>

           <div className='flex items-center gap-3 pl-8 pt-5 cursor-pointer '>
           <img className='w-6  opacity-55 ' src={assets.search_icon}/>
            <p className='font-semibold text-[#d6cbcb] hover:text-white'>Search</p>
           </div>
      </div>

      <div className='h-[78%] w-[100%] bg-[#111111] rounded-lg flex flex-col gap-5'>
            <div className='flex justify-around h-7 mt-5 opacity-60'>
              <div className='flex gap-5 '>
                <img className='w-6 h-6' src={assets.stack_icon}/>
                <p className='font-semibold'>Your Library</p>
              </div>

              <div className='flex gap-5 mt-1'>
                <img className='w-4 h-4' src={assets.plus_icon}/>
                <img className='w-4  h-4' src={assets.arrow_icon}/>
              </div>
            </div>
            
            <div className='flex justify-around flex-col gap-5 p-2'>
              <div className='bg-[#242323] h-32 flex  flex-col  rounded-lg items-start px-4 justify-evenly'>
                <p className='font-bold'>Create your first playlist</p>
                <h4 className=''>it's easy,we'll help you</h4>
                <button className='h-8 w-32 bg-white text-black rounded-2xl font-semibold'>Create playlist</button>
              </div>

              <div className='bg-[#242323] h-48 flex  flex-col  rounded-lg items-start px-4 justify-evenly'>
                <p className='font-bold'>Let's find some podcast to follow</p>
                <h4 className=''>we'll keep you update on new episodes</h4>
                <button className='h-7 w-36 bg-white text-black rounded-2xl font-semibold'>Browse podcast</button>
              </div>
            </div>
            
      </div>
      </div>
    </>
  )
}

export default Sidebar