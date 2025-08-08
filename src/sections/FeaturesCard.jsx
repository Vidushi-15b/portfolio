import React from 'react'
import { abilities } from '../constants'

const FeaturesCard = () => {
  return (
    <div className='w-full padding-g-lg'>
        <div className='mx-auto grid-4-cols'>
          {abilities.map(({imgPath,title,desc})=>(
           <div key={title} className='card-border rounded-xl p-8 flex flex-col gap-4 object-contain transition-transform duration-300 hover:scale-110 cursor-pointer'>
            <div className='size-14 flex items-center justify-center rounded-full'>
                <img src={imgPath} alt={title}/>
            </div>
            <h3 className='white-text text-2xl font-semibold'> {title}</h3>
            <p className='white-text-50 text-lg'>{desc}</p>
           </div>
        ))}
        </div>
      
    </div>
  )
}

export default FeaturesCard
