import React from 'react'
import { motion } from 'framer-motion'
import Wrapper from '../components/Wrapper'
import AppsSidebar from './Appssidebar'

const Product = () => {
  return (
    <div className=''>
      <ProductHero />
      <AppsSidebar />
    </div>
  )
}

const ProductHero = () => {
  return (
    <Wrapper className='mt-22 sm:mt-20 lg:mt-30 px-4 sm:px-6'>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='mx-auto w-full sm:w-4/5 text-black text-center text-[36px] sm:text-[52px] md:text-[64px] lg:text-[80px] font-extrabold leading-[1.1] lg:leading-20'
      >
        Explore the Cephas Software Ecosystem
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        className='text-[#4F5674] font-normal text-[15px] sm:text-[16px] lg:text-[17px] mx-auto w-full sm:w-3/4 lg:w-1/2 text-center mt-3 sm:mt-2'
      >
        Deploy modular point solutions to eliminate specific operational bottlenecks,
        or activate unified multi-app suites configured for automated cross-departmental
        data sync.
      </motion.p>
    </Wrapper>
  )
}

export default Product