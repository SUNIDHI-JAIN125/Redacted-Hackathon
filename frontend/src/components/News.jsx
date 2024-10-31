import React from 'react';
import { boy, hulk, skate,web3games, playing,zioverse,bestgames } from '../assets';

const News = () => {
    
    const featuredGames = [
        {
            id: 0,
            title: "Best Play-to-Earn Crypto NFT Games",
            image: zioverse,
            link: "https://dappradar.com/blog/best-play-to-earn-crypto-nft-games"
        },
        {
            id: 1,
            title: "Top Web3 Games",
            image: web3games,
            link: "https://www.alchemy.com/best/web3-games"
        },
        {
            id: 2,
            title: "How to Play Off the Grid and Earn HEX and GUNZ",
            image: bestgames,
            link: "https://dappradar.com/blog/how-to-play-off-the-grid-and-earn-hex-and-gunz"
        },
        {
            id: 3,
            title: "Exploring Web3 Games in Zionverse",
            image: boy,
            link: "https://www.zionverse.com/blogs/web-3-games"
        },
        {
            id: 4,
            title: "Experiencing Next-Generation Gaming with Web3",
            image: playing,
            link: "https://www.saratechnologies.com/blogs/experiencing-next-generation-gaming-with-the-web3"
        }
    ];

    return (
        <div className='min-h-[100px] rounded-md my-8 p-4 mt-10'>
            <p className='text-2xl font-spacegrotesk font-semibold pt-4 mb-6 text-white'>News</p>
            <hr className='my-4' />
            <div className='flex whitespace-nowrap p-4 overflow-x-auto no-scrollbar'>
                {featuredGames.map((game) => (
                    <div key={game.id} className="rounded-lg border border-gray-500 max-h-[400px]  min-w-[500px] mx-4 p-4 bg-gray-800">
                       
                        <a href={game.link} target="_blank" rel="noopener noreferrer">
                            <img src={game.image} alt={game.title} className='object-fill  w-full h-4/5 rounded' />
                            <p className=' text-white my-3  font-bold italic p-4 text-xl text-wrap hover:underline hover:text-blue-400'>{game.title} </p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
