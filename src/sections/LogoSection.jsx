import React from 'react'
import { LogoIconLinks } from '../constants'
const LogoIcon = ({icon})=>{
    return(
        <div className='flex-none flex-center marquee-item'>
            <img src={icon.imgpath} alt={icon.name}  className='w-12 h-12 md:w-14 md:h-14 object-contain'/>
        </div>
            )   
        }

const LogoSection = () => {
  return (
    <div className='md:my-20 my-10 relative'>
      <div className='gradient-edge'/>
      <div className='gradient-edge'/>
      <div className='marquee h-52'>
        <div className='marquee-box md:gap-12 gap-5'>
          {LogoIconLinks.map((icon)=>{
           <LogoIcon key={icon.name} icon={icon}/>
          })}
        </div>
        <div className='marquee-box md:gap-12 gap-5'>
          {LogoIconLinks.map((icon)=>{
         return  <LogoIcon  key={icon.name} icon={icon}/>
          })}
           {LogoIconLinks.map((icon)=>{
         return  <LogoIcon key={icon.name} icon={icon}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default LogoSection
