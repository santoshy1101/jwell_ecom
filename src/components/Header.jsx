import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { FaHeadphones } from 'react-icons/fa6'
import { FaShoppingCart } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { IoIosSearch } from 'react-icons/io'
import { FaHeart } from 'react-icons/fa6';

const value=20

const Header = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between px-10 py-2 overflow-auto text-black ">
        {/* left */}
        <div className="flex items-center gap-x-8">
          <span className="flex items-center gap-x-2">
            <FaPhoneAlt size={value} />
            <span>1-800-242-2728</span>
          </span>
          <span className="flex items-center gap-x-2">
            <FaLocationDot size={value} />
            <span>Stores</span>
          </span>
          <span className="flex items-center gap-x-2">
            <FaHeadphones size={value} />
            <span>Virtual Appointment</span>
          </span>
        </div>
        {/* right */}
        <div className="flex items-center gap-x-5">
          <span>
            <IoIosSearch size={value} />
          </span>
          <span>
            <FaHeart size={value} />
          </span>
          <span>
            <CgProfile size={value} />
          </span>
          <span className="flex items-center gap-x-2">
            <FaShoppingCart size={value} />
            <span>(2)</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
