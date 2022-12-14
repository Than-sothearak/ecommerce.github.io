import Link from 'next/link';
import React from 'react';
import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className='hero-banner-container'>
      <div  className='product-banner-desc'>
        <p className='product-banner'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
                
        <Link href={`prodct/${heroBanner.product}`} >
            <button type='button'>{heroBanner.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
        </div>
        <img src={urlFor(heroBanner.image)} alt='headphone' className='hero-banner-image'/>
      </div>
      
    </div>
  )
}

export default HeroBanner;