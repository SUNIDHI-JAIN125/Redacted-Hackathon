import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import BlockChainGames from '../components/BlockChainGames'
import FeaturedGames from '../components/FeaturedGames'
import News from '../components/News'
import Footer from '../components/Footer'

const LandingPage = () => {
    return (
        <div className='min-h-screen w-full bg-primary-bg-dark py-4 m-0 px-8'>
            <Header />
            <Hero />
            <FeaturedGames />
            <BlockChainGames />
            <News/>
            <Footer/>


        </div>
    )
}

export default LandingPage
