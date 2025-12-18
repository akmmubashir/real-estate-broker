import React from 'react'

// type Props = {}

const HeroSection = () => {
    return (
        <div className='relative'>
            {/* Background layer with grayscale filter */}
            <div
                aria-hidden
                className='absolute inset-0 bg-no-repeat bg-cover bg-center'
                style={{
                    backgroundImage: "url(/assets/common/image.jpg)",
                    filter: 'grayscale(100%) brightness(60%)',
                }}
            />
            {/* Gradient overlay below content */}
            <div className="absolute inset-0 z-10 bg-linear-to-b from-black/90 via-black/0 to-transparent pointer-events-none" />
            <div className='relative z-20 h-screen max-lg:h-full max-lg:gap-[40px_0] p-[160px_0px_60px] max-xl:p-[140px_40px_60px] max-lg:p-[120px_20px_60px] max-w-300 mx-auto flex flex-col justify-between'>
                <div className='relative'>
                    <h2 className='text-white text-[22px] absolute left-2 top-20'>Luxury <br /> Real-Estate</h2>
                    <h1 className='text-[140px] leading-[160px] font-semibold text-white w-full flex flex-col justify-between items-stretch'><span className='ms-auto'>Luxury</span>
                        <span> Perfected</span></h1>

                    <p className='absolute bottom-6 right-0 w-1/3 font-medium text-[18px] text-end'> Discover exceptional residences where elegance meets everyday comfort.
                        Thoughtfully selected homes for elevated lifestyles.</p>
               <div>
                </div>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, excepturi cumque sapiente sunt laboriosam nam praesentium velit, officia, quis consequatur deserunt corrupti! Illo quisquam dicta eum architecto similique veritatis fuga.</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection