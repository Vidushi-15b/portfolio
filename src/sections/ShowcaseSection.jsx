import React from 'react'
import { useRef } from 'react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  
  
  useGSAP(()=>{
    const projects=[project1Ref.current,project2Ref.current,project3Ref.current];
  projects.forEach((card,index) => {
    gsap.fromTo(card,
    {y:50,
      opacity:0
    },
    {y:0,
      opacity:1,
      duration:1,
      delay:0.3*(index+1),
      scrollTrigger:{
        trigger:card,
        start:'top bottom-=100',
       
      }
    },
)
  });
    gsap.fromTo(sectionRef.current,
      {opacity:0}
      ,{opacity:1,duration:1.5}
    )
  },[]);
  return (
    <div id='work' ref={sectionRef}className='app-showcase' >
      <div className='w-full'>
      <div className='showcaselayout'>
        {/*LEFT*/}
        <div ref={project1Ref} className='first-project-wrapper'>
            <div className='image-wrapper '>
                <img src="/images/project1.png" alt="web3" onClick={()=>window.open('https://euphonious-vacherin-fd5715.netlify.app/', '_blank')}
                style={{cursor:'pointer'}}/>
            </div>
            <div className='text-content'>
                <h2>Modern Web3 Blockchain D-App for simple transaction,user friendly App</h2>
                <p className='text-white-50 md:text-xl'> An App build by Solidity , React.js, Vite, HTML, CSS, and JavaScript, styled using Tailwind CSS., for user friendly experience .</p>
            </div>
            </div>

        {/*RIGHT*/}
        <div   className='project-list-wrapper overflow-hidden'>
            <div className='project' ref={project2Ref}>
                <div className='image-wrapper bg-[#44032e]'>
                    <img src='/images/project2.png' alt="healthcare-ai"className=' object-contain cursor-pointer' />
                </div>
              <h2>Ai-powered healthcare diagnostic</h2>
            </div>
            <div  ref={project3Ref} className='project'>
                <div className='image-wrapper bg-[#202155]'>
                    <img src='/images/project3.png' alt="healthcare-ai"className=' object-contain cursor-pointer '/>
                </div>
                <h2>Chatbot-Ai</h2>
                

          </div>   
        </div>      
      </div>
    </div>
  </div>
  )
}

export default ShowcaseSection
