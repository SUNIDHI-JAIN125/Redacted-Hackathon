import React, { Suspense } from 'react'
import { carVideo, codVideo, hulk, skate, sonicVideo } from '../assets'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import Car from '../../public/Car'
import { div } from 'three/webgpu'

const FeaturedGames = () => {
    useGLTF.preload('human.gltf')
    return (
        <div>
            <p className='font-spacegrotesk text-[30px] text-white font-semibold'>#Trending Games</p>
            <div className='grid grid-cols-3 my-4 p-3 gap-x-4'>
                <div className='rounded-lg'>
                    <video src={sonicVideo} autoPlay loop muted className='rounded-xl min-w-[400px]' />
                    <p className='font-spacegrotesk text-white font-semibold my-3'> #Sonic Hedge</p>
                </div>
                {/* <div>
                    <Canvas className='w-full bg-slate-100 p-4 rounded-xl' camera={{ position: [5, 2, 10], fov: 15 * (window.innerWidth / window.innerHeight) }} >

                        <ambientLight intensity={4} args={["#ffffff", 1]} />
                        <OrbitControls enableZoom={false} autoRotate={true} />
                        <Suspense fallback={null}>
                            <Car />

                        </Suspense>
                        <Environment preset='sunset' />
                    </Canvas>
                </div> */}
                <div className='rounded-lg'>
                    <video src={carVideo} autoPlay loop muted className='rounded-xl min-w-[400px]' />
                    <p className='font-spacegrotesk text-white font-semibold my-3'> #Ride To Live IV</p>
                </div>
                <div className='rounded-lg'>
                    <video src={codVideo} autoPlay loop muted className='rounded-xl' />
                    <p className='font-spacegrotesk text-white font-semibold my-3'> #Call Of Duty II</p>
                </div>


            </div>
        </div>

    )
}

export default FeaturedGames
