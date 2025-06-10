import React from 'react'

const PopularProductCard = ({imgURL, name, price}) => {
  return (
    <div className='flex flex-1 flex-col'>
        <img 
            src={imgURL}
            alt='Popular Product'
            width={280}
            height={280}
        />
        <h3>{name}</h3>
    </div>
  )
}

export default PopularProductCard