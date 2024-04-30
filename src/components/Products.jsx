import React, { useEffect } from 'react';
import { products } from '../assets/products';
import Card from './Card';

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="grid grid-cols-4 gap-4 px-10 py-10">
   {
    products?.map((item)=><Card key={item.id} {...item}/>)
   }
  </div>
  )
}

export default Products