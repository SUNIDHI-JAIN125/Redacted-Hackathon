// models/Game.js
const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
  gameID: { type: String, required: true, unique: true },
  data: { type: Object, required: true },
  lastFetched: { type: Date, default: Date.now }
});



const Game = mongoose.model('Games', GameSchema);

module.exports = Game;

