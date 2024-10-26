import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../ContextAPI'

const NFTs = ({ nfts }) => {
    const { getGame, currentModal, setCurrentModal } = useContext(AppContext)


    useEffect(() => {




    }, [])


    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            #
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Game
                        </th>
                        <th scope="col" class="px-6 py-3">
                            BlockChain
                        </th>

                        <th scope="col" class="px-6 py-3">
                            Volume
                        </th>
                        <th scope="col" class="px-6 py-3">
                            %Change
                        </th>
                        <th scope="col" class="px-6 py-3">
                            View Actual Data
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {nfts?.map((e, i) => <tr class="relative odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {i + 1}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center space-x-2">
                            <img src={e?.logo} className='w-[20px] rounded-full' />
                            <p className='capitalize'> {e?.name}</p>
                        </th>
                        <td class="px-6 py-4">
                            {e?.chains[0]}
                        </td>
                        <td class="px-6 py-4">
                            <p>{i % 2 !== 0 ? "1.56k" : "30K"}</p>
                        </td>
                        <td class={`${i % 2 !== 0 ? "text-green-500" : "text-red-500"} px-6 py-4`}>
                            $0.244
                        </td>
                        <td class={` px-6 py-4 cursor-pointer`} onClick={() => {
                            getGame(e?.dappId)
                            setCurrentModal(true)
                        }}>
                            View
                        </td>




                    </tr>)}


                </tbody>
            </table>
        </div>

    )
}

export default NFTs