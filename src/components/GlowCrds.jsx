import React, { useRef } from 'react'

const GlowCrds = ({cards,children, index}) => {
    const cardsRefs = useRef([]);
    const handleMouseMove = (index)=>(e) =>{
    const cards = cardsRefs.current[index];
    if(!cards){
        return;
    }
    //get mouse position relative ot card
    const rect = cards.getBoundingClientRect();
    const X = e.clientX - rect.left - rect.width / 2;
    const Y = e.clientY - rect.top - rect.height / 2;
    
    let angle = Math.atan2(Y,X)*(180/Math.PI);
    angle = (angle+360) % 360;
    cards.style.setProperty('--start', angle+60);
    cards.style.setProperty('--start',  angle+60);
    }
  return (
    <div  ref={(el)=>(cardsRefs.current[index]=el)} onMouseMove={handleMouseMove(index)} className='card card-border timeline-card rounded-xl p-10'>
      <div className='glow'/>
      <div>
        <p className='text-white-50 text-lg'> ✪ {cards.review}</p>
      </div>
      {children}
    </div>

   
  )
}

export default GlowCrds
