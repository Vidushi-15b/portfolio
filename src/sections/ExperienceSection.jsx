import React from 'react'
import TitleHeader from './TitleHeader'
import { expCards } from '../constants'
import GlowCrds from '../components/GlowCrds'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  useGSAP(()=>{
   gsap.utils.toArray('.timeline-card').forEach((card)=>{
    gsap.from(card,{
     xPercent:-100,
     opacity:0,
     transformOrigin:'left left',
     duration:1,
     ease:'power2.inOut',
     scrollTrigger:{
      trigger:card,
      start: 'top 80% ',
     }
    })
   })
   gsap.to('.timeline',{
    transformOrigin:'bottom bottom',
    ease:'power1.inOut',
    scrollTrigger:{
      trigger:'.timeline',
      start:'top center',
      end:'70% center',
      onUpdate:(self)=>{
        gsap.to('.timeline', {
          scaleY:1 - self.progress,
        })
      }
    }
   })
   gsap.utils.toArray('.expText').forEach((text)=>{
    gsap.from(text,{
     xPercent:0,
     opacity:0,
     duration:1,
     ease:'power2.inOut',
     scrollTrigger:{
      trigger:text,
      start: 'top 60% ',
     }
    })
   })
  },[])

  return (
    <section id='skills' className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
        <div className='w-full h-full md:px-20 px-5'>
        <TitleHeader title="Building Stuffs" sub="💼 My Career overview"/>
        <div className='mt-32 relative'>
          <div className='relative z-50 xl:space-y-32 space-y-10'>
          {expCards.map((cards,index)=>(
            <div key={cards.title} className='exp-card-wrapper'>
             <div className='xl:w-2/6'>
             <GlowCrds cards={cards} index={index}><div>
          <p className='text-white  p-1 ml-0 underline'>    {cards.title}</p> 
                </div>
             </GlowCrds>
             </div>
             <div className='xl:w-4/6'>
            <div className='flex items-start'>
            <div className='timeline-wrapper'>
              <div className='timeline'/>
              <div className='gradient-line w-1 h-full'/>
            </div>
            <div className='expText flex xl:gap-20 md:gap-10 gap-5 relative z-40'>
              <div className='timeline-logo '>
                <img src={cards.logopath} alt={cards.title}/>
              </div>
              <div>
                <h1 className='font-semibold text-3xl'>{cards.title}</h1>
                <p className='my-5 text-white-50'>🗓️ {cards.date}</p>
                <p className='text-[#839cb5] italic'>
                  Description -
                </p>
                <ul className='list-disc ms-5 mt-5 flex flex-col gap-5'>
                  {cards.description.map((description)=>(
                    <li key={description} className='text-lg'>
                      {description}
                    </li>
                  ))}

                </ul>
              </div>
            </div>
            </div>

             </div>
            </div>
          ))}
          </div>
        </div>
        </div>
      
    </section>
  )
}

export default ExperienceSection
