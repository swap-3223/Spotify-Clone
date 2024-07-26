// import React from 'react'
// import { assets, songsData } from '../assets/assets'

// function MusicPlayer() {
//   return (
//     <>
//     <div className='bg-black flex items-center justify-between text-white w-full h-[14%] px-4'>
//         <div className='hidden lg:flex items-center gap-4'>
//             <img className='w-12 rounded-sm'  src={songsData[0].image}/>
//             <div>
//               <p>{songsData[0].name}</p>
//               <p className='text-gray-400 text-sm'>{songsData[0].desc.slice(0,15)}...</p>
//             </div>
//         </div>
//         <div className='flex flex-col items-center gap-1 m-auto'>
//             <div className='flex gap-4'>
//                 <img className='w-4 cursor-pointer' src={assets.shuffle_icon}/>
//                 <img className='w-4 cursor-pointer' src={assets.prev_icon}/>
//                 <img className='w-4 cursor-pointer' src={assets.play_icon}/>
//                 <img className='w-4 cursor-pointer' src={assets.next_icon}/>
//                 <img className='w-4 cursor-pointer' src={assets.loop_icon}/>
//             </div>
//             <div className='flex items-center gap-5'>
//                 <p>01:03</p>
//                 <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
//                   <hr className='cursor-pointer h-1 border-none w-5 bg-green-800 rounded-full'/>
//                 </div>
//                 <p>03:00</p>
//             </div>
//         </div>
//         <div className='hidden lg:flex items-center gap-2 opacity-75 '>
//             <img className='w-4' src={assets.plays_icon}/>
//             <img className='w-4' src={assets.mic_icon}/>
//             <img className='w-4' src={assets.queue_icon}/>
//             <img className='w-4' src={assets.speaker_icon}/>
//             <img className='w-4' src={assets.volume_icon}/>
//               <div className='w-20 bg-slate-50 h-1 rounded'>

//               </div>
//             <img className='w-4' src={assets.mini_player_icon}/>
//             <img className='w-4' src={assets.zoom_icon}/>

//         </div>
//     </div>
//     </>
//   )
// }

// export default MusicPlayer