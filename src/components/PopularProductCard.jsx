import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img 
            src={imgURL}
            alt={name}
            width={280}
            height={280}
        />
        <div className='mt-8 flex justify-start gap-2.5 '>
          <img 
            src={star}
            alt='rating'
            width={24}
            height={24}
          />
          <p className='text-xl font-montserrat text-slate-gray leading-normal'>(4.5)</p>
        </div>
        <h3 className='text-2xl font-palanquin font-semibold leading-normal mt-1'>{name}</h3>
        <p className='font-montserrat leading-normal text-coral-red font-medium'>{price}</p>
    </div>
  )
}

export default PopularProductCard