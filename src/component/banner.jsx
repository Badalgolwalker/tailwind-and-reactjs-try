import React from 'react'
import Typed from 'react-typed';

const banner = () => {
  return (
    <div className='bg-gradient-to-r from-cyan-300 to-slate-500  py-[50px] w-fullx'>
        <div className='max-w-[1240px] py-[19px] mx-auto text-center font-bold my-[100px]'>
<div className='text:xl md:text-5xl p-[24px]'>
Learn with Diligently
</div>
<h2 className='text-white text-3xl md:text-[80px] md:p-[24px]'>
    Grow with Diligently
</h2>
<div className='text-[20px] md:text-[50px] md:p-[24px] text-white'>
    Learn
<Typed
className='pl-3'
                    strings={[ 'Frontend Devlopment','backend Development','React Native']}
                    typeSpeed={70}
                    backSpeed={50}
                    loop={true}
                />
                
</div>
<button className='bg-black text-white p-3 rounded'>Get Started</button>

        </div>
    </div>
  )
}

export default banner