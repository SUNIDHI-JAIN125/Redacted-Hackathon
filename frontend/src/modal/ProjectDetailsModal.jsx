import React, { useContext } from 'react'
import { AppContext } from '../ContextAPI'

const ProjectDetailsModal = () => {
    const { currentGame, setCurrentModal, setCurrentGame } = useContext(AppContext)
    return (
        <div className='fixed grid h-[100%] z-20 bg-modal-bg place-items-center w-full backdrop-blur-sm lg:px-0 px-4 top-0 font-poppins'>
            <div className='rounded-md  font-poppins bg-white p-4 w-4/5'>
                <div class="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className='flex justify-between my-2'>
                        <p></p>
                        <p className='bg-red-500 w-[30px] h-[30px] text-2xl text-white rounded-full flex justify-center cursor-pointer' onClick={() => {
                            setCurrentModal(false)
                            setCurrentGame(null)
                        }}>x</p>
                    </div>

                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    #
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    BlockChain
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Balance
                                </th>

                                <th scope="col" class="px-6 py-3">
                                    Volume
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    %Change
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="relative odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 capitalize">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    1
                                </th>
                                <td class="px-6 py-4">
                                    {currentGame?.categories[0]}
                                </td>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center space-x-2">
                                    <img src={currentGame?.logo} className='w-[20px] rounded-full' />
                                    <p className='capitalize'> {currentGame?.name}</p>
                                </th>
                                <td class="px-6 py-4">
                                    {currentGame?.chains[0]}
                                </td>
                                <td class="px-6 py-4">
                                    {Math.ceil((currentGame?.metrics?.balance) / 1000)}k
                                </td>
                                <td class={` px-6 py-4`}>
                                    {currentGame?.metrics?.volume ? currentGame?.metrics?.volume : 0}
                                </td>
                                <td class={` px-6 py-4`}>
                                    <p className={`${currentGame?.metrics?.balancePercentageChange < 0 ? "text-red-400" : "text-green-500"}`}> {currentGame?.metrics?.balancePercentageChange ? currentGame?.metrics?.balancePercentageChange : 0} %</p>
                                </td>








                            </tr>


                        </tbody>
                    </table>
                </div>


            </div>

        </div>
    )
}

export default ProjectDetailsModal