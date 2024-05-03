import React, { useEffect, useState } from 'react'
import { products } from '../assets/products'
import Card from './Card'
import Filter from './Filter'
import NotFound from './NotFound'
import SortPrice from './SortPrice'

const Products = () => {
  const [data, setData] = useState(products)

  const filterHandler = (filterby) => {
    if (filterby === 'all') {
      setData(products)
    } else {
      const filterData = products.filter((product) =>
        product.product_name.toLowerCase().includes(filterby.toLowerCase()),
      )
      setData(filterData)
    }
  }

  const sortHandler = (sortby) => {
    const sortedPrices = [...data].sort((a, b) => {
      if (sortby === 'ascending') {
        return a.sale_price - b.sale_price // Ascending order
      } else {
        return b.sale_price - a.sale_price // Descending order
      }
    })
    setData(sortedPrices)
    console.log(sortby, sortedPrices)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="px-10 py-10">
      <div className="flex items-center gap-x-4">
        <Filter filterHandler={filterHandler} />
        <SortPrice sortHandler={sortHandler} />
      </div>
      <div className="grid grid-cols-4 gap-4 ">
        {data.length > 0 ? (
          data?.map((item) => <Card key={item.id} {...item} />)
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  )
}

export default Products
