import React from 'react'
import { boy, hulk, skate } from '../assets'

const News = () => {
    const featuredGames = [0, 1,2,3,5,6,7,1,1,1,1,1]
    return (
        <div className='min-h-[100px] rounded-md my-8 p-4'>
            <p className='text-2xl font-spacegrotesk font-semibold text-white'>News</p>
            <hr className='my-4' />
            <div className='flex whitespace-nowrap p-4 overflow-x-auto no-scrollbar '>
                {featuredGames?.map((e, i) => <div className="rounded-lg max-h-[300px] min-w-[300px] mx-1  p-3">
                    <img src={boy} className=' object-fill w-full h-4/5 rounded' />
                    <p className='font-spacegrotesk text-white my-3 italic p-4 border'>Need For Speed {i}</p>


 
                </div>)}
            </div>

        </div>
    )
}

export default News
