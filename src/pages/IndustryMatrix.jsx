import { GraduationCap, HeartPulse, Landmark, Fuel, Factory, Users, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Wrapper from '../components/Wrapper'


const IndustryMatrix = () => {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <div className='bg-white py-16 sm:py-20 lg:py-24'>
            <Wrapper className='px-4 sm:px-6'>
                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className='font-jet text-[#4C5DE8] uppercase text-xs font-medium tracking-widest'
                >
                    Industry Breakdown Matrix
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                    className='text-[26px] sm:text-[30px] lg:text-[36px] font-extrabold text-[#111320] mt-4'
                >
                    Purpose-built editions for every sector.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                    className='font-Dm text-[#6B7290] mt-4 w-full sm:w-3/4 lg:w-1/2 leading-relaxed'
                >
                    Cephas Suite does not force a generic template onto specialized verticals. We
                    engineer distinct, purpose-built editions configured for unique compliance,
                    operational workflows, and end-user roles.
                </motion.p>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 sm:mt-10'>
                    {sectors.map((sector, index) => (
                        <motion.button
                            key={sector.title}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.4, delay: index * 0.07, ease: 'easeOut' }}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className='flex items-center justify-between border border-[#E5E7F0] rounded-lg px-5 py-4 text-left hover:border-[#4C5DE8]/40 transition-colors'
                        >
                            <div className='flex items-center gap-3'>
                                <motion.div
                                    className='w-9 h-9 shrink-0 rounded-md flex items-center justify-center'
                                    style={{ backgroundColor: `${sector.color}1A` }}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    <sector.icon
                                        className='w-4 h-4'
                                        style={{ color: sector.color }}
                                    />
                                </motion.div>
                                <div>
                                    <p className='font-Dm font-semibold text-[#111320] text-sm'>
                                        {sector.title}
                                    </p>
                                    <p
                                        className='font-jet uppercase text-[10px] tracking-wide mt-0.5'
                                        style={{ color: sector.color }}
                                    >
                                        {sector.tags}
                                    </p>
                                </div>
                            </div>
                            <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ChevronDown className='w-4 h-4 shrink-0 text-[#9AA0BC]' />
                            </motion.div>
                        </motion.button>
                    ))}
                </div>
            </Wrapper>
        </div>
    )
}

const sectors = [
    { icon: GraduationCap, title: 'Education', tags: 'K-12, Polytechnics, Universities', color: '#4C5DE8' },
    { icon: HeartPulse, title: 'Healthcare', tags: 'Hospitals, Clinics, Labs', color: '#E8574C' },
    { icon: Landmark, title: 'Finance', tags: 'Hotels, Resorts, Restaurants', color: '#C9A227' },
    { icon: Fuel, title: 'Oil & Gas', tags: 'Government, NGO, Real Estate', color: '#2FA88A' },
    { icon: Factory, title: 'Manufacturing', tags: 'Factories, Farms, Processing', color: '#4C5DE8' },
    { icon: Users, title: 'HR', tags: 'Supermarkets, Distributors', color: '#8A4CE8' },
]

export default IndustryMatrix