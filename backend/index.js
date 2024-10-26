require('dotenv').config();
const express = require('express');
const axios = require('axios');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');

connectDB();
app.use(cors());




// Base URL
const DAPP_RADAR_BASE_URL = 'https://apis.dappradar.com/v2/dapps/';


const Game = require('./models/Game');
const PaginatedGames = require('./models/AllGames')

async function fetchGameData(gameID) {
  try {
    // Check the database for cached data
    const cachedGame = await Game.findOne({ gameID });

    // If cached data exists and is less than 24 hours old, return it
    if (cachedGame && (Date.now() - cachedGame.lastFetched) < 24 * 60 * 60 * 1000) {
      return cachedGame.data;
    }

    // Fetch new data from DappRadar API
    const url = `${DAPP_RADAR_BASE_URL}${gameID}`;
    const response = await axios.get(url, {
      headers: {
        'X-API-KEY': process.env.DAPP_RADAR_API_KEY,
        'accept': 'application/json',
      },
    });

    // Save the new data to the database
    const gameData = response.data;
    await Game.findOneAndUpdate(
      { gameID },
      { data: gameData, lastFetched: Date.now() },
      { upsert: true } // Create a new document if it doesn't exist
    );

    return gameData;

  } catch (error) {
    console.error(`Error fetching data for game ${gameID}:`, error);
    throw new Error('Error fetching game data');
  }
}


async function fetchPaginatedGames(page) {
  try {
    const games = await PaginatedGames.findOne({ page: page })

    // If cached data exists and is less than 24 hours old, return it
    if (games && (Date.now() - games.lastFetched) < 24 * 60 * 60 * 1000) {
      return games.data;
    }
    const url = `https://apis.dappradar.com/v2/dapps?page=${page}&resultsPerPage=50`
    // Fetch new data from DappRadar API
    const response = await axios.get(url, {
      headers: {
        'X-API-KEY': process.env.DAPP_RADAR_API_KEY,
        'accept': 'application/json',
      },
    });
    const gameData = response.data;
    await Game.findOneAndUpdate(
      { page },
      { data: gameData, lastFetched: Date.now() },
      { upsert: true } // Create a new document if it doesn't exist
    );

    return gameData;

  } catch (error) {
    throw new Error('Error fetching game data');
  }

}



// Route to fetch game data by ID
app.get('/game/:id', async (req, res) => {
  const gameID = req.params.id; // Extract game ID from the route
  try {
    const gameData = await fetchGameData(gameID);
    res.json(gameData);
  } catch (error) {
    console.log(error, "ERROR")
    res.status(500).json({ error: `Error fetching Game data for ID ${gameID}` });
  }
});


app.get('/all/:start', async (req, res) => {
  const { start } = req.params;
  const currentPage = start ? start : 1
  try {
    const gameData = await fetchPaginatedGames(currentPage);
    res.json(gameData);


  } catch (error) {
    res.status(400).json({ "Error": "Error" })

  }

})


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});




// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
