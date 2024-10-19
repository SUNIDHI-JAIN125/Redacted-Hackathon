import React, { useState } from 'react'
import { blast, bnb } from '../assets'

const BlockChainGames = () => {
    const games = [1, 2, 3, 4, 5, 6, 7, 9, 3, 4, 5, 6, 7, 8, 9, 0]
    const [currentTab, setCurrentTab] = useState(0)


    const handleChangeTab = (e) => {
        setCurrentTab(e)
    }

    return (
        <div>
            <div className='rounded-lg bg-primary-bg-light min-h-[100px]  p-4'>
                <p className='font-poppins text-2xl font-semibold my-3 text-white'>Top BlockChain Games</p>
                <p className='text-white my-2 font-poppins'>Explore the exciting realm of blockchain games. Analyze metrics, compare trends, and discover popular games across different blockchains. Use our filters to tailor your search, take informed decisions and uncover hidden gems. Your journey into the future of gaming starts here.</p>
                <hr className='h-[1px] my-8 text-gray-500' />

                <div className='flex space-x-2 font-semibold text-gray-100 my-4 items-center'>
                    <p className={`${currentTab == 0 ? "bg-slate-500 px-3 py-2 rounded-sm" : ""} cursor-pointer`} onClick={(e) => handleChangeTab(0)}>Top Action Games</p>
                    <p className={`${currentTab == 1 ? "bg-slate-500 px-3 py-2 rounded-sm" : ""} cursor-pointer`} onClick={(e) => handleChangeTab(1)}>Top NFT</p>
                    <p className={`${currentTab == 2 ? "bg-slate-500 px-3 py-2 rounded-sm" : ""} cursor-pointer`} onClick={(e) => handleChangeTab(2)}>Move2Earn</p>
                    <p className={`${currentTab == 3 ? "bg-slate-500 px-3 py-2 rounded-sm" : ""} cursor-pointer`} onClick={(e) => handleChangeTab(3)}>Others</p>

                </div>



                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left ">
                        <thead class="text-xs text-white uppercase border">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    #
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Game
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Network
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Token Price
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Players
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Change in (24H)
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {games?.map((e, i) => <tr class="border-b text-gray-100" key={i}>
                                <th scope="row" class="px-6 py-4 font-medium my-2">
                                    {i + 1}
                                </th>
                                <td class="px-6 py-4 flex space-x-3 items-center">
                                    <img src={i % 2 == 0 ? blast: bnb} className='w-[30px]'/>
                                    <p>{i % 2 !== 0 ? "Immortal Army" : "Rush Tower"}</p>

                                </td>
                                <td class="px-6 py-4">
                                    <p>{i % 2 !== 0 ? "Ethereum" : "Polygon"}</p>

                                </td>
                                <td class="px-6 py-4">
                                    <p>${i % 2 !== 0 ? "0.08" : "0.20"}</p>
                                    <p class={`${i % 2 !== 0 ? "text-green-500" : "text-red-500"}`} >{i % 2 !== 0 ? "+4.5%" : "-1.2%"}</p>
                                </td>
                                <td class="px-6 py-4">
                                    <p>{i % 2 !== 0 ? "1.56k" : "30K"}</p>
                                </td>
                                <td class={`${i % 2 !== 0 ? "text-green-500" : "text-red-500"} px-6 py-4`}>
                                    <p>{i % 2 !== 0 ? "+4.5%" : "-1.2%"}</p>
                                </td>
                            </tr>)}

                        </tbody>
                    </table>
                </div>


            </div>

        </div>
    )
}

export default BlockChainGames
