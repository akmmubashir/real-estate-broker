import React from 'react'

const WhoWeAre = () => {
    return (
        <div className='bg-[#111111] grid grid-cols-12 gap-10 max-lg:gap-6 p-[80px_0px_80px] max-xl:p-[60px_40px_60px] max-lg:p-[40px_20px_40px] max-w-300 mx-auto'>
            <div className="col-span-4 max-lg:col-span-full">
                <div className='border border-[#D9BAA0] items-center p-[10px_20px] max-w-max  flex justify-center rounded-full cursor-default'>
                    <h3 className='whitespace-nowrap text-white text-[16px] font-medium'>Who We Are</h3>
                </div>
            </div>
            <div className="col-span-8 max-lg:col-span-full">
                <h2 className={` text-white text-[56px] lg:leading-16.5 max-lg:text-[24px] font-bold `}>
                    The largest privately held real estate investors and managers in the UAE
                </h2>
            </div>
            <div className="col-span-full flex flex-col gap-4">
                <p className='text-[18px] max-lg:text-[16px] max-md:text-[14px] text-justify text-[#edeeeb]'>DAMAC Properties is a prominent real estate developer headquartered in Dubai, UAE, widely recognized for delivering ultra-luxury residences including apartments, studios, townhouses, and villas across both residential and commercial segments. Established in 2002 by Hussain Sajwani, the company has expanded its footprint globally, becoming synonymous with Dubai’s high-end luxury real estate boom.</p>
                <p className='text-[18px] max-lg:text-[16px] max-md:text-[14px] text-justify text-[#edeeeb]'>Customer-centricity has been a key driver of DAMAC’s growth, supported by innovative marketing strategies and a strong emphasis on design quality and delivered value. Beyond architectural excellence, the company has received numerous awards for creating well-planned communities, reinforcing its commitment to building spaces that truly enhance lifestyle. Reflecting its adaptability to economic shifts, 2023 marked a significant milestone for DAMAC, with rising revenues driven by substantial growth in business inflows.</p>
                <p className='text-[18px] max-lg:text-[16px] max-md:text-[14px] text-justify text-[#edeeeb]'> Over the years, DAMAC has built a strong and diverse portfolio featuring landmark developments such as DAMAC Hills, DAMAC Islands, and DAMAC Lagoons. Operating in a highly competitive and constantly evolving market, the company has consistently positioned itself at the forefront of premium real estate by focusing on distinctive design, innovation, and scale.</p></div>
            <div className="col-span-6"></div>
            <div className="col-span-6"></div>

        </div>
    )
}

export default WhoWeAre