import React from 'react'
import { Link } from 'react-router-dom'

const Banner4 = () => {
  return (
    <div className="relative w-full my-10 overflow-hidden ">
      <img
        src="https://ecommo--ion.bluenile.com/static-dyo-bn/engagement.db6c3.jpg"
        alt="Banner Image"
        className="object-cover w-full h-auto"
      />
      <div className="absolute inset-0 right-0 flex flex-col px-5 transform -translate-y-1/2 gap-y-5 top-1/2 item">
      {/* Modify the child div to align its content to the end (right in a flex container) */}
      <div className="flex flex-col items-end text-black gap-y-5"> 
        {/* Add 'items-end' class to move child elements to the end (right) */} 
        <h2 className="font-serif text-3xl font-medium">
          An Unforgettable Proposal
        </h2>
        <p className="text-base w-[40%] text-justify">
          Glamourous details and matching bands—we have the perfect rings to seal the deal.
        </p>
      </div>
      <div className="flex justify-end gap-x-4">
        {/* Add 'justify-end' class to move the button to the right */}
        <Link to="products">
        <button className="text-black uppercase bg-white border-0 hover:bg-slate-300 btn sm:btn-sm md:btn-md ">
          SHOP ENGAGEMENT RINGS
        </button>
        </Link>
      </div>
    </div>
    
    </div>
  )
}

export default Banner4
