import React from 'react'

const Header = () => {
    return (
        <div className='w-full min-h-[100px]  mx-auto rounded-lg font-poppins text-white font-semibold flex  items-center px-4 justify-between'>
            <div className='flex items-center lg:space-x-8 space-x-2'>
                <p></p>
                <input type="text" className='py-2 px-4  w-full rounded-lg bg-gray-200 border outline-none text-black font-light' placeholder='Search Dapp'/>
            </div>
            <div>
                <button className='bg-primary-bg-light py-3 px-4 rounded-lg text-[10px]'>Connect Wallet</button>
            </div>

        </div>
    )
}

export default Header
