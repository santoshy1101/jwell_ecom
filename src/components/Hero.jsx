import React, { useEffect } from 'react'
import { shape_data } from '../assets/diamond_shape'
import { placeholer_data } from '../assets/diamond_placeholder'
import Banner1 from './Banner1'
import Banner3 from './Banner3'
import CardCarousel from './CardCarousel'
import Banner2 from './Banner2'
import Banner4 from './Banner4'

const Hero = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Banner1 />
      <Banner3 />

      <CardCarousel
        data={shape_data}
        bg_color={'#fff8ef'}
        title={'Explore Diamonds'}
      />
      <Banner2 />
      <CardCarousel
        data={placeholer_data}
        bg_color={'white'}
        title={'Explore Blue Nile'}
      />
      <Banner4 />
    </div>
  )
}

export default Hero
