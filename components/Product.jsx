import Link from 'next/link';
import React from 'react'
import { urlFor } from '../lib/client';
const Product = ({product: { image, model, brand, slug, price}}) => {


  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img src={urlFor(image && image[0])}
           width={250}
           height={250}
           className='product-image'
          />
          <p className='product-name'>{brand}</p>
          <p className='product-price'>${price.toLocaleString('en', { maximumFractionDigits: 0 })}</p>
          
        </div>
      </Link>
    </div>
  )
}

export default Product