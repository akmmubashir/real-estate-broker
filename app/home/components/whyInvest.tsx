"use client";
import React from 'react'
import { ArrowUpIcon } from '@/app/components/icons'

const WhyInvest = () => {

    const [expandedId, setExpandedId] = React.useState<number | null>(null)

    const data = [
        {
            id: 1,
            title: "High Rental Yields",
            description:
                "Investors can earn rental yields of up to 8-10%** annually, surpassing many global markets.",
            image: "/assets/images/high-rental-yields.png",
            more:
                "Rental demand remains strong across prime Dubai communities with steady occupancy, attractive payment plans, and developer-backed guarantees on select projects.",
        },
        {
            id: 2,
            title: "Safe Community",
            description:
                "Well-planned neighbourhoods with low crime rates and 24/7 security ensure peace of mind.",
            image: "/assets/images/safe-community.png",
            more:
                "Family-friendly master communities feature schools, clinics, parks, and dedicated patrol units with smart surveillance for added comfort.",
        },
        {
            id: 3,
            title: "Top Healthcare",
            description:
                "The UAE ranks among the world's safest nations, with a well-developed, effective law enforcement system.",
            image: "/assets/images/top-healthcare.png",
            more:
                "World-class hospitals, international specialists, and comprehensive insurance options ensure convenient access to premium healthcare.",
        },
        {
            id: 4,
            title: "Best Amenities",
            description:
                "Premium amenities including pools, gyms, parks, retail, and leisure spaces.",
            image: "/assets/images/best-amenities.png",
            more:
                "Resort-style living with concierge, lifestyle clubs, waterfront promenades, and integrated retail for seamless everyday convenience.",
        },
    ];

    return (
        <div className='p-[80px_0px_80px] max-xl:p-[60px_40px_60px] max-lg:p-[40px_20px_40px] max-w-300 mx-auto flex flex-col gap-10'>
            <div className='flex flex-col gap-2 items-center'>
                <h2 className={`text-[#282828] text-[48px] max-lg:text-[24px] text-center w-2/3 max-lg:w-full`}>Why Choose to Invest in DAMAC Properties in Dubai</h2>
                <p className='text-[#3a3a3a] text-[18px] max-lg:text-[16px] max-md:text-[14px] text-center'>Explore a refined collection of DAMAC Properties townhouses in Dubai, elegant villas, and off-plan developments that elevate contemporary luxury. With flexible payment options and strategically located projects, investing in DAMAC real estate is now more convenient than ever.</p>
            </div>
            <div className="grid grid-cols-12 items-center gap-10 max-lg:gap-6">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className={`group col-span-6 max-lg:col-span-full flex flex-col gap-4 relative ${expandedId === item.id ? 'h-auto min-h-100' : 'h-100 max-lg:h-80'} bg-[#f6f3ec] hover:bg-[#d9baa0] transition-all duration-300 rounded-[30px] bg-no-repeat bg-cover bg-center`}
                        style={{
                            backgroundImage: `url(${item.image})`,
                            // filter: 'grayscale(100%) brightness(40%)',
                        }}
                    >
                        <div className='absolute w-15 h-15 right-0 top-0 bg-white rounded-[0_0px_0px_30px]'></div>
                        <div className='absolute w-7.5 h-7.5 right-15 top-0 bg-white rotate-180' style={{ clipPath: 'path("M0 0 Q0,30 30,30 L 0 30 Z")' }}></div>
                        <div className='absolute w-7.5 h-7.5 right-0 top-15 bg-white rotate-180' style={{ clipPath: 'path("M0 0 Q0,30 30,30 L 0 30 Z")' }}></div>
                        <button
                            type='button'
                            aria-label={expandedId === item.id ? 'Collapse details' : 'Expand details'}
                            aria-expanded={expandedId === item.id}
                            onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                            className={`absolute cursor-pointer w-13 h-13 right-0 top-0 bg-[#ebebeb] group-hover:bg-[#d9baa0] rounded-full group-hover:scale-110 hover:scale-95! transition-all duration-300 flex justify-center items-center ${expandedId === item.id ? '-rotate-135' : 'rotate-45'}`}
                        >
                            <ArrowUpIcon size="w-6 h-6 m-[15px]" color="stroke-[#3a3a3a]" stroke="2" />
                        </button>
                        <div className='mt-auto bg-linear-to-t from-black/85 via-black/60 to-transparent  p-7.5 max-lg:p-5  overflow-hidden rounded-b-[30px]'>
                            <h6 className='text-[#ffffff] font-medium text-[30px] max-lg:text-[20px] w-2/3 max-lg:w-full mb-1'>{item.title}</h6>
                            <p className='text-[16px] max-lg:text-[14px] text-white/90'>{item.description}</p>

                            <div
                                className={`transition-all duration-300 ease-in-out ${expandedId === item.id ? 'max-h-64 opacity-100 mt-3' : 'max-h-0 opacity-0'} overflow-hidden`}
                                id={`details-${item.id}`}
                            >
                                <p className='text-[16px] max-lg:text-[14px] text-white/90'>
                                    {item.more}
                                </p>
                                {/* <div className='mt-3 flex gap-3'>
                                    <a href='/contact' className='px-4 py-2 rounded-full bg-white text-[#160A0A] text-[13px] font-medium hover:bg-[#f6f3ec] transition-colors'>Contact Us</a>
                                    <a href='/projects' className='px-4 py-2 rounded-full bg-transparent border border-white/60 text-white text-[13px] hover:bg-white/10 transition-colors'>Explore Projects</a>
                                </div> */}
                            </div>

                            {expandedId === item.id ? <button
                                type='button'
                                onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                                aria-controls={`details-${item.id}`}
                                aria-expanded={expandedId === item.id}
                                className='cursor-pointer mt-3 text-white/90 text-[14px] underline underline-offset-4 hover:text-white transition-colors'
                            >
                                {expandedId === item.id ? 'Show less' : 'Show more'}
                            </button> : null}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WhyInvest