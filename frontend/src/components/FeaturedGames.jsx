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
            <div className='flex flex-1 justify-between'>
                <div className='flex-[0.5] bg-gray-900 p-4'>
                    <p className='text-[50px] text-white font-spacegrotesk'>Sonic Hedge</p>
                    <p className='text-white font-spacegrotesk'>Sonic Hedgehock: In a fast-paced Web3 adventure, Sonic Hedgehock sprints through a vibrant, decentralized world filled with blockchain-based challenges and rewards. <br></br> <br></br>Players guide Sonic Hedgehock through thrilling landscapes, collecting rare tokens and NFTs that empower them with unique abilities.<br></br> <br></br> Engage in competitive races, overcome on-chain obstacles, and unlock special achievements that are stored securely on the blockchain, giving players true ownership of their in-game assets.</p>

                </div>
                <div className='rounded-lg flex-[0.5]'>
                    <video src={sonicVideo} autoPlay loop muted className='min-w-[400px] rounded-tr-2xl rounded-bl-2xl' />
                    {/* <p className='font-spacegrotesk text-white font-semibold my-3'> #Sonic Hedge</p> */}
                </div>

            </div>


            <div className='flex flex-1 justify-between mt-10 mb-10'>
                <div className='flex-[0.5] rounded-lg'>
                    <video src={carVideo} autoPlay loop muted className='w-full rounded-br-2xl rounded-tl-2xl' />
                    {/* <p className='font-spacegrotesk text-white font-semibold my-3'> #Ride To Live IV</p> */}
                </div>
                <div className='flex-[0.5] bg-gray-900 p-4'>
                    <p className='text-[50px] text-white font-spacegrotesk'>Drift Feast</p>
                    <p className='text-white font-spacegrotesk'>

                    Drift Feast: Web3 Pursuit: Hit the gas and dive into the exhilarating world of Drift Feast: Web3 Pursuit, where high-stakes racing meets blockchain innovation.<br></br> <br></br> Race through stunning, decentralized cityscapes, earning blockchain-backed rewards and unlocking rare NFT car upgrades as you outpace your rivals. <br></br> <br></br> Customize and truly own your vehicles with exclusive skins and performance boosts, stored securely on-chain. Take part in global tournaments, engage in player-to-player races, and rise through the ranks to dominate the leaderboards.
                    </p>
                </div>
              

            </div>
            {/* <div className='grid grid-cols-3 my-4 p-3 gap-x-4'>

                <div className='rounded-lg'>
                    <video src={codVideo} autoPlay loop muted className='rounded-xl' />
                    <p className='font-spacegrotesk text-white font-semibold my-3'> #Call Of Duty II</p>
                </div>


            </div> */}
        </div>

    )
}

export default FeaturedGames
