// models/Game.js
const mongoose = require('mongoose');


const AllGames = new mongoose.Schema({
    page: { type: Number, required: true, unique: true },
    data: { type: Object, required: true },
    lastFetched: { type: Date, default: Date.now }
});

const PaginatedGames = mongoose.model('AllGames', AllGames);
module.exports = PaginatedGames
