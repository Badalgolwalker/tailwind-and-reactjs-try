import React, { useState } from 'react'
import { AiOutlineMenuFold , AiOutlineClose} from "react-icons/ai";
const header = () => {
    const [toggle , setToggle] = useState(false)
  return (
    <div className='bg-gradient-to-r from-cyan-300 to-slate-500 '>
<div className=' flex justify-between items-center p-3 max-w-[1240px]  mx-auto'>
    <div className='text-3xl font-bold '>HR</div>
    {
    toggle ?
    <AiOutlineClose onClick={() =>{setToggle(!toggle)}} className='text-white text-3xl md:hidden block' />
    :
    <AiOutlineMenuFold onClick={() =>{setToggle(!toggle)}} className='text-white text-3xl md:hidden block' />
    }
 
    <ul className='md:flex hidden gap-8 text-1xl text-white'>
        <li>Home</li>
        <li>company</li>
        <li>Resourse</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
   {/* {responsive nav} */}
   <ul className={` duration-500 text-2xl md:hidden w-full h-screen fixed bg-black ${toggle ? 'left-[0%]':'left-[-100%]'}  top-[92px] text-white`}>
        <li className='p-5'>Home</li>
        <li className='p-5'>company</li>
        <li className='p-5'>Resourse</li>
        <li className='p-5'>About</li>
        <li className='p-5'>Contact</li>
    </ul>
</div>
    </div>
  )
}

export default header