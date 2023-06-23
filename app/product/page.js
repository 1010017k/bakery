'use client'
import React from 'react'
import useCard from '../(store)/store'

export default function ProductPage(props) {
    const{ searchParamas } = props
    const { price_id } = props
    const product = useCard( state => state.product)
    const addItemToCart = useCard(state => state.addItemToCart)
    const {  cost,  productInfo, name, description} = product

    if (!product?.name) {
        window.location.href = '/'
    }

    function handleAddToCart() {
      const newItem = {
        quantity: 1,
        price_id,
        name,
        cost

      }
       addItemToCart({ newItem })
    }

  return (
  <div className="flex flex-col">
    <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] mx-auto">
        <div className="md:p-2 md:shadow">
    <img src={productInfo.images[0]} alt={name} className="w-full h-full object-cover"/>
    </div>
    <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
        <h3>{name}</h3>
        <p>${cost/100}</p>
        </div>
        <p className="text-sm flex-1">{description}</p>
        <button onClick={handleAddToCart} className="bg-slate-700 text-white hover:bg-slate-500 cursor-pointer ml-auto px-4 py-2">Add to Cart</button>
    </div>
    </div>
    </div>
  )
}
