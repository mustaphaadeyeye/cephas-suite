import React from 'react'
import { motion } from 'framer-motion'
import Wrapper from '../components/Wrapper'
import OurNorthStar from './OurNorthStar'
import IndustryMatrix from './IndustryMatrix'
import ArchitectureCTA from './ArchitectureCTA'



const About = () => {
  return (
    <div>
        <AboutHero/>
        <OurNorthStar/>
        <IndustryMatrix/>
        <SecuritySection/>
        <ArchitectureCTA/>
    </div>
  )
}

const AboutHero = () => {
    return (
        <div>
            <Wrapper className='mt-23 sm:mt-24 lg:mt-28 px-4 sm:px-6'>
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className='font-jet text-[#4C5DE8] uppercase font-medium text-sm sm:text-base'
                >
                    The Operating System for Emerging Enterprises
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                    className='text-[30px] sm:text-[38px] lg:text-[48px] font-extrabold text-[#111320] w-full md:w-2/3 leading-[1.15] lg:leading-13 mt-4'
                >
                    One unified platform to run any institution, industry, or scale.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                    className='font-Dm mt-6 font-normal text-[#6B7290] text-sm sm:text-base w-full sm:w-3/4 md:w-2/4'
                >
                    From high growth startups to multi-campus universities, teaching hospitals, and 
                    government ministries Cephas Suite replaces brittle, disconnected point apps with 
                    an AI-powered, single tenant capable ERP ecosystem.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                    className='mt-10 sm:mt-14 mb-5 grid grid-cols-2 sm:grid-cols-4 border border-[#E5E7F0] rounded-lg overflow-hidden'
                >
                    {stats.map((stat, index) => {
                        const isLastCol = index === stats.length - 1
                        const isLastRowMobile = index >= stats.length - 2
                        const isRightColMobile = index % 2 === 0
                        return (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}
                            className={[
                                'px-4 sm:px-6 py-4 sm:py-5 border-[#E5E7F0]',
                                isLastRowMobile ? '' : 'border-b',
                                isRightColMobile ? 'border-r' : '',
                                'sm:border-b-0',
                                isLastCol ? 'sm:border-r-0' : 'sm:border-r',
                            ].join(' ')}
                        >
                            <p className='font-Dm font-bold text-[#4C5DE8] text-lg'>
                                {stat.value}
                            </p>
                            <p className='font-jet text-[10px] uppercase tracking-wide text-[#9AA0BC] mt-1'>
                                {stat.label}
                            </p>
                        </motion.div>
                        )
                    })}
                </motion.div>
            </Wrapper>
        </div>
    )
}

const stats = [
    { value: '12+', label: 'Industry Editions' },
    { value: '30+', label: 'Specialized Modules' },
    { value: 'Native', label: 'AI Automation' },
    { value: 'Unified', label: 'Database Architecture' },
]


const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, delay: i * 0.1, ease: 'easeOut' },
    }),
}

const SecuritySection = () => {
    return (
        <div className='bg-[#F5F6FA] py-16 sm:py-20 lg:py-24'>
            <Wrapper className='px-4 sm:px-6'>
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className='font-jet text-[#4C5DE8] uppercase text-xs font-medium tracking-widest'
                >
                    Trust, Security & Compliance
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                    className='text-[26px] sm:text-[30px] lg:text-[36px] font-extrabold text-[#111320] mt-4 w-full md:w-2/3 leading-tight'
                >
                    Enterprise-grade security, built for African regulatory realities.
                </motion.h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-8 sm:mt-10'>
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            custom={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={cardVariants}
                            whileHover={{ y: -4, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.08)' }}
                            className='bg-white border border-[#E5E7F0] rounded-xl p-5 sm:p-6'
                        >
                            <div className='flex items-center justify-between flex-wrap gap-2'>
                                <p className='font-jet text-[#4C5DE8] uppercase text-[10px] font-medium tracking-wide'>
                                    {feature.tag}
                                </p>
                                <span className='font-jet text-[10px] font-medium text-[#4C5DE8] bg-[#4C5DE8]/10 px-2.5 py-1 rounded-full'>
                                    {feature.badge}
                                </span>
                            </div>

                            <p className='font-Dm font-bold text-[#111320] mt-4'>
                                {feature.title}
                            </p>

                            <p className='font-Dm text-[#6B7290] text-sm mt-3 leading-relaxed'>
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Wrapper>
        </div>
    )
}

const features = [
    {
        tag: 'RBAC',
        badge: '20+ roles',
        title: 'Role-Based Access Control',
        description:
            'Over 20 discrete system roles—from Super Administrators to Store Managers, Doctors, Lecturers, and Vendors—with granular field-level read/write permissions.',
    },
    {
        tag: 'Compliance',
        badge: 'NDPR / GDPR',
        title: 'Sovereign Cloud & Regional Compliance',
        description:
            'Compliant with national data protection regulations (NDPR/GDPR). Private organizational data protected with AES-256 encryption at rest and TLS 1.3 in transit.',
    },
    {
        tag: 'Integrations',
        badge: '15+ connectors',
        title: 'Native Integration Ecosystem',
        description:
            'Out-of-the-box support for payment gateways, bank APIs, biometric hardware, barcode printers, GPS fleet trackers, Microsoft 365, and Google Workspace.',
    },
]




export default About