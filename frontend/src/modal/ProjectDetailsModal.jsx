import React, { useContext } from 'react'
import { AppContext } from '../ContextAPI'
import Chart from '../components/Chart'
import { div } from 'three/webgpu'

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
                    <div>
                        <p>Tokens</p>
                        {currentGame?.tokens?.map((e, i) => <div className='flex text-[13px] font-spacegrotesk'>
                            <div className='p-4 rounded-lg border shadow-lg bg-gray-900 text-white'>Symbol : {e?.symbol}</div>
                            <div className='p-4 rounded-lg border shadow-lg bg-gray-900 text-white flex '>Logo  :  <img src={e?.logo} className='ml-2'/></div>
                            <div className='p-4 rounded-lg border shadow-lg bg-gray-900 text-white'>Price : {e?.price ? e?.price : "N/A"}</div>
                            <div className='p-4 rounded-lg border shadow-lg bg-gray-900 text-white'>Contract Address : {e?.smartContract}</div>
                            <div className='p-4 rounded-lg border shadow-lg bg-gray-900 text-white'>% Price Change : {e?.pricePercentageChange ? e?.pricePercentageChange
:"N/A"                           }</div>





                        </div>)}
                    </div>
                    <Chart />

                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead class="text-xs  uppercase bg-gray-900 dark:text-gray-40 text-white">
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
                                    Volume %Change
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="relative dark:bg-gray-900  border-b capitalize">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
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
                                    <p className={`${currentGame?.metrics?.volumePercentageChange < 0 ? "text-red-400" : "text-green-500"}`}> {currentGame?.metrics?.volumePercentageChange ? currentGame?.metrics?.volumePercentageChange : 0} %</p>
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