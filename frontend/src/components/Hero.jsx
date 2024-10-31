import React, { Suspense } from 'react'
import { boy, heroImage, hulk, skate } from '../assets'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import Car from '../../public/Car'

const Hero = () => {
    useGLTF.preload('human.gltf')

    const listOfNfts = [1, 2, 3, 4]

    return (
        <div className='my-4'>


            <div className=' min-h-[350px] flex flex-1 space-x-3'>
                <div className='flex flex-[0.7] p-4 bg-primary-bg-light rounded-xl'>
                    <div className='w-3/5 rounded-xl bg-modal-bg  p-4 h-full'>
                        <p className='2xl:text-8xl text-[40px] font-spacegrotesk font-semibold text-white mt-4'>World of Web3 Games</p>
                        <p className='text-2xl  text-white my-3 font-spacegrotesk'>Play, Earn and Explore</p>
                        <p className='text-xl  text-white my-3 font-spacegrotesk'>Discover, Track & Trade Everything Defi, NFT and Gaming</p>
                        <div className='flex space-x-3 my-5'>
                            <button className='bg-blue-600 py-3 px-4 text-white font-poppins rounded-sm '>Explore Dapp </button>
                            <button className=' bg-transparent border border-white py-2 px-4 text-white font-poppins rounded-sm'>List a Project </button>

                        </div>
                    </div>
                    <div className='w-2/5'>
                        <img src={heroImage} className='' />
                    </div>
                </div>
                <div className='flex-[0.3] rounded-xl bg-gray-100 min-h-[300px] p-4'>
                    <p className='font-semibold text-[20px] my-2'>Top NFTs</p>
                    {listOfNfts?.map((e, i) => <div className='flex my-2 justify-between'>
                        <div className='flex space-x-2 items-center'>
                            <img src={boy} className='rounded-full w-[40px]  h-[40px] border' />
                            <div className='text-[12px] font-spacegrotesk font-semibold'>
                                <p>Jacks NFts</p>
                                <p>900K Holders</p>

                            </div>
                        </div>
                        <p className='p-2 text-primary-bg-light font-spacegrotesk text-[14px]'>$122</p>

                    </div>)}
                </div>


            </div>
            {/* <img src={skate} className='z-10' /> */}



        </div>
    )
}

export default Hero
