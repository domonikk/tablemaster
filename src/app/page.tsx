import About from '@/components/About'
import Design from '@/components/Design'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar' 
import gsap from "gsap";
import React from 'react' 
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 


gsap.registerPlugin(ScrollTrigger);

const page = () => {
  return (
    <section className='home'> 
        <div className='home-content'>   
            <Navbar/>
            <Header/> 
            <About/>
            <Design/>
        </div>
    </section>
  )
}

export default page