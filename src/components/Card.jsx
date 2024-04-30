import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io";

const Card = ({product_image,product_name,price,sale_price}) => {
 
  return (
    <div className="relative text-white border-blue-400 shadow-xl cursor-pointer card bg-base-100 hover:opacity-80">

    <span className='absolute left-2 top-2 hover:opacity-50'><img src="https://ion.bluenile.com/images/ShipsInTime/bluenile/galleries/jewel/byFastShipping.svg" alt="time_logo" />
    </span>
    <span className='absolute text-black right-2 top-2 hover:opacity-50'><IoIosHeartEmpty size={30}/></span>
  
   
  <figure><img src={product_image} alt="Shoes"   className='w-[100%] overflow-hidden'/></figure>
  <div className="flex flex-col px-5 py-5 gap-y-8">
    <h2 className="text-base card-title">
    {product_name}
    </h2>
    <div className="flex gap-x-5">
      <div className="text-xl line-through badge badge-outline text-slate-300">₹{price}</div> 
      <div className="text-xl badge badge-outline">₹{sale_price}</div>
    </div>
  </div>
</div>
  )
}

export default Card