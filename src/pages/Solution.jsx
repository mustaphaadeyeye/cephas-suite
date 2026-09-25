import React from 'react'
import Wrapper from '../components/Wrapper'
import CustomerSegments from './Customersegments'
import ArchitectureCTA from './ArchitectureCTA'


const Solution = () => {
  return (
    <div>
        <SolutionHero/>
        <CustomerSegments/>
        <ArchitectureCTA/>
    </div>
  )
}


const SolutionHero = () => {
    return (
        <div className=''>
                <Wrapper className='mt-23 sm:mt-20 lg:mt-30 px-4 sm:px-6'>
        <h1 className='mx-auto w-full sm:w-4/5 md:w-2/3 text-black text-center text-[36px] sm:text-[52px] md:text-[64px] lg:text-[80px] font-extrabold leading-[1.1] lg:leading-20'>
         Tailored operational engines for your industry.
        </h1>
      
        <p className='text-[#4F5674] font-normal text-[15px] sm:text-[16px] lg:text-[17px] mx-auto w-full sm:w-3/4 lg:w-1/2 text-center mt-4'>
          Discover pre-configured stacks of Cephas Apps and Suites designed 
          around the compliance, workflow, and transaction patterns of your 
          sector.
        </p>
      </Wrapper>
        
                 
              </div>
    )
}
export default Solution