import React from 'react'
import { Link } from 'react-router-dom'

const Banner3 = () => {
  return (
    <div className="relative w-full my-10 overflow-hidden">
      <img
        src="https://ecommo--ion.bluenile.com/static-dyo-bn/extraordinary_collection.448a4.jpg"
        alt="Banner Image"
        className="object-cover w-full h-auto"
      />
      <div className="absolute inset-0 flex flex-col px-5 transform -translate-y-1/2 gap-y-5 top-1/2">
        <div className="flex flex-col text-black gap-y-5">
          <h2 className="font-serif text-3xl font-medium">
            Make An Impression
          </h2>
          <p className="text-base w-[40%] text-justify">
            The best jewelry embraces extravagance. Discover truly remarkable,
            one-of-a-kind pieces that are sure to leave them speechless.
          </p>
        </div>
        <div className="flex gap-x-4">
        <Link to="products">
          <button className="text-black uppercase bg-white border-0 hover:bg-slate-300 btn sm:btn-sm md:btn-md ">
            SHOP THE EXTRAORDINARY COLLECTION
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner3
