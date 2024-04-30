import React from 'react'
import { Link } from 'react-router-dom'

const Banner2 = () => {
  return (
    <div
    className="relative w-full my-10 overflow-hidden"
  >
    <img
      src="https://ecommo--ion.bluenile.com/static-dyo-bn/asstorCollectionBanner_v1.69ff3.jpg"
      alt="Banner Image"
      className="object-cover w-full h-auto"
    />
    <div className="absolute inset-0 flex flex-col px-5 transform -translate-y-1/2 gap-y-5 top-1/2">
      <div className="flex flex-col text-white gap-y-5">
      <p className='text-xs font-bold uppercase '>Asstor Collection
      THE ASTOR COLLECTION</p>
        <h2 className="font-serif text-3xl font-medium">
        Outshines in Every Setting
        </h2>
        <p className="text-base w-[45%] text-justify">
        Superior brilliance is in the cut. Discover the brightest diamonds in our collection, crafted by highly skilled artisans to outshine the rest.
        </p>
      </div>
      <div className='flex gap-x-4'>
      <Link to="products">
        <button className="text-black uppercase bg-white btn btn-md sm:btn-sm md:btn-md hover:text-white">
          Shop Astor Diamonds
        </button>
        </Link>
        <Link to="products">
        <button className="text-black uppercase bg-white btn btn-md sm:btn-sm md:btn-md hover:text-white">
          Shop Astor Jewelry
        </button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Banner2