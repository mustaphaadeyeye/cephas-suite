import React from 'react'
import Wrapper from '../components/Wrapper'
import AppsSidebar from './Appssidebar'

const Product = () => {
  return (
    <div>
      <ProductHero />
      <AppsSidebar />
    </div>
  )
}

const ProductHero = () => {
  return (
    <Wrapper className='mt-30'>
      <h1 className='mx-auto w-4/5 text-black text-center text-[80px] font-extrabold leading-20'>
        Explore the Cephas Software Ecosystem
      </h1>

      <p className='text-[#4F5674] font-normal text-[17px] mx-auto w-1/2 text-center mt-2'>
        Deploy modular point solutions to eliminate specific operational bottlenecks,
        or activate unified multi-app suites configured for automated cross-departmental
        data sync.
      </p>
    </Wrapper>
  )
}

export default Product