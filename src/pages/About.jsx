import React from 'react'
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
            <Wrapper className='mt-28'>
                <p className='font-jet text-[#4C5DE8] uppercase font-medium'>
                    The Operating System for Emerging Enterprises
                </p>

                <h1 className='text-[48px] font-extrabold text-[#111320] w-2/3 leading-13 mt-4'>
                    One unified platform to run any institution, industry, or scale.
                </h1>

                <p className='font-Dm mt-6 font-normal text-[#6B7290] w-2/4'>
                    From high growth startups to multi-campus universities, teaching hospitals, and 
                    government ministries Cephas Suite replaces brittle, disconnected point apps with 
                    an AI-powered, single tenant capable ERP ecosystem.
                </p>

                <div className='mt-14 mb-5 grid grid-cols-4 border border-[#E5E7F0] rounded-lg overflow-hidden'>
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className={`px-6 py-5 ${
                                index !== stats.length - 1 ? 'border-r border-[#E5E7F0]' : ''
                            }`}
                        >
                            <p className='font-Dm font-bold text-[#4C5DE8] text-lg'>
                                {stat.value}
                            </p>
                            <p className='font-jet text-[10px] uppercase tracking-wide text-[#9AA0BC] mt-1'>
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
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


const SecuritySection = () => {
    return (
        <div className='bg-[#F5F6FA] py-24'>
            <Wrapper>
                <p className='font-jet text-[#4C5DE8] uppercase text-xs font-medium tracking-widest'>
                    Trust, Security & Compliance
                </p>

                <h2 className='text-[36px] font-extrabold text-[#111320] mt-4 w-2/3 leading-tight'>
                    Enterprise-grade security, built for African regulatory realities.
                </h2>

                <div className='grid grid-cols-3 gap-6 mt-10'>
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className='bg-white border border-[#E5E7F0] rounded-xl p-6'
                        >
                            <div className='flex items-center justify-between'>
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
                        </div>
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