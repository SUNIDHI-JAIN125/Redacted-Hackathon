import React, { Suspense } from 'react'
import { hulk, skate } from '../assets'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import Car from '../../public/Car'

const Hero = () => {
    useGLTF.preload('human.gltf')
    return (
        <div className='relative my-4 lg:px-20 xl:px-40 3xl:px-80'>

            <div className='flex flex-1 justify-between items-center min-h-[500px]'>
                <div className='flex-[0.4] flex-col flex'>

                    <p className='2xl:text-8xl text-5xl font-poppins font-semibold text-white my-4'>The World Dapp Store</p>
                    <p className='text-2xl font-poppins  text-white my-2'>Discover, Track & Trade Everything Defi, NFT and Gaming</p>

                    <div className='my-4 space-x-3'>
                        <button className='bg-blue-600 py-2 px-4 text-white font-poppins rounded-sm'>Explore Dapp </button>
                        <button className=' bg-transparent border border-white py-2 px-4 text-white font-poppins rounded-sm'>List a Project </button>
                    </div>
                </div>
                <div className='flex-[0.6]'>
                    <div className='w-5/6 mx-auto mt-5'>
                        <Canvas className='w-full' camera={{ position: [5, 2, 10], fov: 15 * (window.innerWidth/window.innerHeight) }} >

                            <ambientLight intensity={4} args={["#ffffff", 1]} />
                            <OrbitControls enableZoom={false} autoRotate={true} />
                            <Suspense fallback={null}>
                                <Car />

                            </Suspense>
                            <Environment preset='sunset' />


                        </Canvas>

                        {/* <img src={skate} className='z-10' /> */}
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Hero
