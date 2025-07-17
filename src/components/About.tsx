'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";   
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 


gsap.registerPlugin(ScrollTrigger);


const About = () => {


   useGSAP(() => {
    const firstMsgSplit = SplitText.create(".first-message", {
      type: "words",
    });
   
   

    gsap.to(firstMsgSplit.words, {
      color: "#ff5c00",
      ease: "power1.in", 
      duration:1,
      stagger: 0.25,
      scrollTrigger: {
        trigger: ".about-content",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    });

   

  });

  return (
    <section className="about-content"> 
        <div className="px-5 lg:px-16 md:px-16 mx-auto flex-center relative">  
          <div className="w-full h-full sticky top-0"> 
            <div className="about-wrapper">  
               <h1 className="first-message text-xl md:text-3xl lg:text-4xl font-bold text-center"> 
                 Creating a mini brand guideline for a ping pong brand was a unique challenge, especially since it was my first time approaching branding in this way.
                  I wanted to move beyond the expected and reimagine the brand through a more refined, almost iconic lens similar to Wimbledon. Inspired by that, 
                  I curated a collection of imagery, fonts, logo concepts, and a tailored color palette that together give the brand a sense of personality, energy, and timelessness. 
                  Meet my mini idea of <br/> 
                  <div className="font-headline text-5xl md:text-6xl lg:text-7xl mt-10">TABLE MASTERS.</div>
               </h1>   
            </div>
          </div>
        </div> 
    </section> 
  )
}

export default About