'use client'
import Link from 'next/link'
import React from 'react'
import useCard from './(store)/store'
import Modal from './Modal'

export default function Header() {
    const cartItems = useCard(state => state.cart)
    const openModal = useCard(state => state.openModal)
    const setOpenModal= useCard(state => state.setOpenModal)
  return (
    
 <header className="sticky top-0 p-6 bg-whiite border-b border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex item-center justify-between">
          
          {openModal && (
            <Modal />
          )}
          <Link href='/'>
          <h1 className='uppercase cursor-pointer hover:scale-110'>Bakery</h1>
          </Link>
          <div onClick={setOpenModal} className='relative grid place-items-center'>
            {cartItems.length > 0 && (
                <div className='absolute aspect-square h-4 grid place-items-center top-0 bg-blue-400 text-white rounded-full right-0 -translate-y-1/2 translate-x-1/2'>
                    <p className='text-sm'>{cartItems.length}</p>
                    </div>
            )}
          <i className="fa-solid fa-cart-shopping cursor-pointer hover:text-slate-500"></i>
          </div>
          </header>


  )
}
