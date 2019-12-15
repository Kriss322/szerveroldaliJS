const Schema = require('mongoose').Schema;
const db = require('../config/db');


const Fish = db.model('Fish', {
	name: String,
	gender: Number,
	color: String,
	age: Number,
	bio: String,
	favorites: [],
	dislike[]
});

module.exports = Fish;