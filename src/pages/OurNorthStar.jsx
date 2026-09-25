import { GraduationCap, HeartPulse, Landmark, Fuel, Factory, Users, ChevronDown } from 'lucide-react'
import Wrapper from '../components/Wrapper'

const OurNorthStar = () => {
    return (
        <div className='bg-[#0B0C17] py-16 sm:py-20 lg:py-24'>
            <Wrapper className='px-4 sm:px-6'>
                <p className='font-jet text-[#6B7290] uppercase text-xs tracking-widest mb-8 sm:mb-10'>
                    Our North Star
                </p>

                {/* Vision / Mission */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6'>
                    <div className='bg-[#171826] border border-[#262838] rounded-xl p-6 sm:p-8'>
                        <p className='font-jet text-[#4C5DE8] uppercase text-xs font-medium tracking-wide'>
                            Our Vision
                        </p>
                        <p className='font-Dm text-white mt-4 leading-relaxed'>
                            To become Africa's leading enterprise software platform powering businesses, institutions, governments, schools, hospitals, and complex industries.
                        </p>
                    </div>

                    <div className='bg-[#171826] border border-[#262838] rounded-xl p-6 sm:p-8'>
                        <p className='font-jet text-[#4C5DE8] uppercase text-xs font-medium tracking-wide'>
                            Our Mission
                        </p>
                        <p className='font-Dm text-white mt-4 leading-relaxed'>
                            To simplify organizational management through intelligent automation, AI-powered decision making, and deeply integrated digital transformation.
                        </p>
                    </div>
                </div>

                {/* Feature cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-5 sm:mt-6'>
                    {pillars.map((item) => (
                        <div
                            key={item.title}
                            className='bg-[#171826] border border-[#262838] rounded-xl p-6'
                        >
                            <div className='w-9 h-9 rounded-md bg-[#4C5DE8]/10 flex items-center justify-center'>
                                <item.icon className='w-4 h-4 text-[#4C5DE8]' />
                            </div>
                            <p className='font-Dm text-white font-semibold mt-4'>
                                {item.title}
                            </p>
                            <p className='font-Dm text-[#6B7290] text-sm mt-2 leading-relaxed'>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </div>
    )
}

const pillars = [
    {
        icon: Landmark,
        title: 'Eliminate Software Sprawl',
        description:
            "Organizations shouldn't juggle separate, disconnected software for payroll, student records, inventory, hospital wards, and general accounting. Cephas bundles everything under one identity.",
    },
    {
        icon: Landmark,
        title: 'Sovereign, Compliant Data',
        description:
            'Local compliance is foundational. Out of the box, our engine automates statutory remissions (PAYE, Pension, NHF, NSITF, VAT, WHT) and aligns with national digital accreditation standards.',
    },
    {
        icon: Landmark,
        title: 'Modular Adoption, Universal Scale',
        description:
            'Start with a standalone module (like Cephas Ledger or School Admissions) and expand into complete multi-departmental suites without rebuilding databases or retraining staff.',
    },
]

export default OurNorthStar