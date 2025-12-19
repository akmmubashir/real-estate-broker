import React from 'react'

// type Props = {}

const HeroSection = () => {
    const data = [
        { id: 1, count: "180+", title: "Residences Delivered" },
        { id: 2, count: "30+", title: "Industry Awards" },
        { id: 3, count: "98%", title: "Client Satisfaction" },
    ]
    return (
        <div className='relative'>
            {/* Background layer with grayscale filter */}
            <div
                aria-hidden
                className='absolute inset-0 bg-no-repeat bg-cover bg-center'
                style={{
                    backgroundImage: "url(/assets/common/image.jpg)",
                    filter: 'grayscale(100%) brightness(40%)',
                }}
            />
            {/* Gradient overlay below content */}
            <div className="absolute inset-0 z-10 bg-linear-to-b from-black/90 via-black/0 to-transparent pointer-events-none" />
            <div className='relative z-20 h-screen max-lg:h-full max-lg:gap-[40px_0] p-[160px_0px_60px] max-xl:p-[140px_40px_60px] max-lg:p-[120px_20px_60px] max-w-300 mx-auto flex flex-col justify-between'>
                <div className='relative'>
                    <h2 className='text-white text-[30px] absolute left-3 top-55'>Luxury <br /> Real-Estate</h2>
                    <h1 className='text-[160px] leading-40 font-semibold text-white w-full flex flex-col justify-between items-stretch'><span>Luxury</span>
                        <span className='ms-auto'> Perfected</span></h1>

                    <p className='absolute top-12 right-3 w-1/3 font-medium text-[18px] text-end'> Discover exceptional residences where elegance meets everyday comfort.
                        Thoughtfully selected homes for elevated lifestyles.</p>
                    <div className='w-full flex justify-center mt-10 gap-2.5'>
                        <button className='cursor-pointer uppercase text-[16px] max-md:text-[14px] p-[12px_20px] max-md:p-[8px_12px] rounded-lg bg-[#d9baa0] border border-[#d9baa0] hover:border-white hover:bg-white text-[#160A0A] hover:scale-95 transition-all duration-300 font-medium shadow-2xl'>Enquire</button>
                        <button className='cursor-pointer uppercase text-[16px] max-md:text-[14px] p-[12px_20px] max-md:p-[8px_12px] rounded-lg bg-[#d9baa0]/20 border border-[#d9baa0] hover:border-white hover:bg-white/10 text-white hover:scale-95 transition-all duration-300 font-medium shadow-2xl'>Explore Now</button>
                    </div>
                </div>
                <div className='flex max-lg:flex-wrap gap-2 justify-between items-center'>
                    <div className='flex items-center gap-4'>
                        <div className='flex'>
                            <div className='w-14 h-14 bg-white rounded-full flex justify-center items-center'/>
                            <div className='w-14 h-14 -ms-10 bg-gray-400 rounded-full flex justify-center items-center'/>
                            <div className='w-14 h-14 -ms-10 bg-gray-700 rounded-full flex justify-center items-center'/>
                        </div>
                        <p className='text-white text-[26px]'>15k+ People Join</p>
                    </div>
                    <div className='flex gap-10'>
                        {data.map(item => <div key={item.id} className='flex flex-col justify-start'>
                            <p className='text-white text-[30px] font-medium'>{item.count}</p>
                            <p className='text-white text-[20px] font-medium'>{item.title}
                            </p>
                        </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection