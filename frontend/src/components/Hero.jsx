import React from 'react'
import { hulk, skate } from '../assets'

const Hero = () => {
    return (
        <div className='relative my-4 lg:px-20 xl:px-40 3xl:px-80'>

            <div className='flex justify-between items-center'>
                <div className='flex-[0.5] flex-col flex'>

                    <p className='text-8xl font-poppins font-semibold text-white my-4'>The World Dapp Store</p>
                    <p className='text-2xl font-poppins  text-white my-2'>Discover, Track & Trade Everything Defi, NFT and Gaming</p>

                    <div className='my-4 space-x-3'>
                        <button className='bg-blue-600 py-2 px-4 text-white font-poppins rounded-sm'>Explore Dapp </button>
                        <button className=' bg-transparent border border-white py-2 px-4 text-white font-poppins rounded-sm'>List a Project </button>
                    </div>
                </div>
                <div className='flex-[0.5]'>
                    <img src={skate} className='z-10' />
                </div>

            </div>

        </div>
    )
}

export default Hero
