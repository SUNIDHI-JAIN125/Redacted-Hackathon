import React from 'react'


const Footer = () => {
    return (
        <div className=' pb-16 sm:w-full'>
            <div className='bg-transparent rounded-xl border  min-h-[100px] '>
                <div className='flex justify-between py-10 lg:px-16 px-4 '>
                    <div className='font-spacegrotesk font-semibold'>

                        <p className='text-white lg:text-[20px] text-[10px]'>Seamless Experience</p>
                        <p className='text-white lg:text-[20px] text-[10px]'>For <span className='text-primary-bg-light'>Everyone</span></p>
                    </div>
                    <div className='font-spacegrotesk text-white lg:text-[15px] text-[8px]'>
                        <p className=''>About IoSide</p>
                        <p className='my-2'>Apply For Partnered Project Launch</p>
                        <p>Terms and Conditions</p>
                    </div>
                </div>
                <div className='flex justify-center'><hr className='h-[1px] w-5/6 opacity-20' /></div>
                <div className='flex md:px-32 px-8 lg:py-4 justify-between mt-2'>
                    <div>
                        <p className='text-gray-300 font-spacegrotesk lg:text-[12px] text-[10px]'>©IoSide2024</p>
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default Footer 