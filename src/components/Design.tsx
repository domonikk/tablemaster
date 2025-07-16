import React from 'react'

const Design = () => {
  return (
   <div className='h-screen w-full flex justify-center items-center'>
        <div className='grid h-[98vh] w-[98vw] grid-cols-2 grid-rows-12 md:grid-cols-10 md:grid-rows-7 gap-4'> 
            <div className=' col-span-1 row-span-4  md:col-span-6 md:row-span-3 bg-[#660503] rounded-3xl flex flex-col justify-center items-center text-center font-headline lg:text-9xl md:text-6xl text-3xl'>Markova Regular</div>
            <div className=' col-span-1 row-span-4 md:col-span-4 md:row-span-4 bg-colors rounded-3xl flex justify-center items-center'></div>
            <div className=' col-span-1 row-span-4 md:col-span-3 md:row-span-2 bg-logos rounded-3xl flex justify-center items-center'></div>
            <div className=' col-span-1 row-span-4 md:col-span-3 md:row-span-4 bg-header bg-poster rounded-3xl flex justify-center items-center'></div>
            <div className=' col-span-1 row-span-4 md:col-span-4 md:row-span-3 bg-vid rounded-3xl flex justify-center items-center'></div>
            <div className=' col-span-1 row-span-4 md:col-span-3 md:row-span-2 bg-img1 rounded-3xl flex justify-center items-center'></div>
        </div>
  </div>

  )
}

export default Design