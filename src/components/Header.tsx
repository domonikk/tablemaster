import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
      <div className='h-screen w-full flex justify-center items-center'>
            <div className=' h-full '> 
                <div className='h-[90vh] w-[98vw] bg-header rounded-3xl flex flex-col justify-center items-center space-y-6 text-center'>
                    <Image 
                      src="/balls.png"  
                      alt="logo"
                      height={500} 
                      width ={400}   
                      className=''
                    /> 
                    <h1 className= 'font-headline lg:text-8xl sm:text-6xl text-white '  >
                        TABLE MASTERS
                    </h1>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Header