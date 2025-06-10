import React from 'react'
import { products } from '../constants/index.js'
import PopularProductCard from '../components/PopularProductCard.jsx'

const PopularProducts = () => {
  return (
    <section id="products" className='bg-gray-400 max-sm:mt-12'>
      <div className='mt-20 bg-yellow-100 flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin'>Our <span className=' text-coral-red'>Popular</span> Products</h2>
        <p className='mt-5 font-montserrat text-slate-gray'>Our product blah blah blah just trying to do this popular products section by myself. Blah.</p>
      </div>
      <div className='mt-14 bg-green-100 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14'>
      {products.map((product) => (
          <PopularProductCard key={product.name} {...product}/>
        ))}
      </div>
    </section>
  )
}

export default PopularProducts