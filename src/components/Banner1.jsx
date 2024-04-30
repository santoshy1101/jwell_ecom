import React from 'react'
import { Link } from 'react-router-dom'

const Banner1 = () => {
  return (
    <div className="relative w-full my-10 overflow-hidden">
      <img
        src="https://ecommo--ion.bluenile.com/static-dyo-bn/DYO_Banner_v1.9eae0.jpg"
        alt="Banner Image"
        className="object-cover w-full h-auto"
      />
      <div className="absolute inset-0 flex flex-col px-5 transform -translate-y-1/2 gap-y-5 top-1/2">
        <div className="flex flex-col text-black gap-y-5">
          <h2 className="font-serif text-3xl font-medium">
            Design Your Own Engagement Ring
          </h2>
          <p className="text-base w-[45%] text-justify">
            Bring your love to life with a handcrafted design that perfectly
            suits your relationship, budget and style. Our expert artisans will
            pour their passion into every detail of your beautiful custom
            engagement ring.
          </p>
        </div>
        <div className="flex gap-x-4">
          <Link to="products">
            <button className="uppercase btn btn-md sm:btn-sm md:btn-md ">
              Shop Settings
            </button>
          </Link>
          <Link to="products">
            <button className="uppercase btn btn-md sm:btn-sm md:btn-md">
              Shop Diamonds
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Banner1
