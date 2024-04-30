import React, { useState } from 'react'
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'

const CardCarousel = ({ data, title,bg_color }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 5 : prevIndex - 1,
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 5 ? 0 : prevIndex + 1,
    )
  }

  return (
    <div className={`h-screen bg-${bg_color}`}>
      <h2 className="py-10 mt-10 text-4xl text-center">{title}</h2>

      <div className="relative mt-10 overflow-hidden">
        <button
          className="absolute left-0 z-10 transform -translate-y-1/2 top-1/2 carousel-control"
          onClick={prevSlide}
        >
          <span className="cursor-pointer text-slate-600">
            <IoIosArrowDropleft size={30} />
          </span>
        </button>
        <button
          className="absolute right-0 z-10 transform -translate-y-1/2 top-1/2 carousel-control"
          onClick={nextSlide}
        >
          <span className="cursor-pointer text-slate-600 ">
            <IoIosArrowDropright size={30} />
          </span>
        </button>
        <div className="flex">
          {data
            ?.slice(currentIndex, currentIndex + 5)
            ?.map(({ image, name, id }) => (
              <div key={id} className="w-1/5 p-4 text-center cursor-pointer ">
                <div className="w-[100%] hover:opacity-50 flex items-center justify-center  rounded-3xl border p-5">
                  <img
                    src={image}
                    alt={`carousel-item-${id}`}
                    className="w-[80%]  overflow-hidden"
                  />
                </div>
                <h2 className="mt-4">{name}</h2>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default CardCarousel
