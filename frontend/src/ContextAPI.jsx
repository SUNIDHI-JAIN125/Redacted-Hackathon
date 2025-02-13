import React, { useState } from "react"
import axios from "axios"

export const AppContext = React.createContext();
export const AppContextProvider = ({ children }) => {

    const [games, setGames] = useState([])
    const [currentGame, setCurrentGame] = useState(null)
    const [collectTibles, setCollectTibles] = useState([])
    const [others, setOthers] = useState([])
    const [currentModal, setCurrentModal] = useState(false)



    const fetchItems = async (page) => {

        const currentPage = page ? page : 1
        try {
            const response = await axios.get(`https://redacted-hackathon.vercel.app/all/${currentPage}`);
            const filterGames = response.data.results?.filter((e, i) => e.categories[0] == "games")
            const Nfts = response.data.results?.filter((e, i) => e.categories[0] == "collectibles")
            const others = response.data.results?.filter((e, i) => e.categories[0] !== "collectibles" && e.categories[0] !== "games")
            setGames(filterGames)
            setCollectTibles(Nfts)
            setOthers(others)

            return {}

        } catch (error) {
            console.log(error)
        }
    }
    
    const getGame = async (id) => {

        try {
            const response = await axios.get(`${url}/game/${id}`);
            console.log(response.data.results, "YYY")
            setCurrentGame(response.data.results)
            return {}

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <AppContext.Provider value={{
                games,
                fetchItems,
                collectTibles,
                others,
                getGame,
                currentGame,
                currentModal,
                setCurrentModal




            }}>

                {children}
            </AppContext.Provider>

        </>
    )
}