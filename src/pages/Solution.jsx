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
                <Wrapper className='mt-30'>
        <h1 className='mx-auto w-2/3 text-black text-center text-[80px] font-extrabold leading-20'>
         Tailored operational engines for your industry.
        </h1>
      
        <p className='texr-[#4F5674] font-normal text-[17px] mx-auto w-1/2 text-center mt-4'>
          Discover pre-configured stacks of Cephas Apps and Suites designed 
          around the compliance, workflow, and transaction patterns of your 
          sector.
        </p>
      </Wrapper>
        
                 
              </div>
    )
}
export default Solution