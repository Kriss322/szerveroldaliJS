const Schema = require('mongoose').Schema;
const db = require('../config/db');


const Fish = db.model('Match', {
	time: String,
	_pair1:{
		type: Schema.Types.ObjectId,
		ref: 'Fish'
	}
	_pair2:{
		type: Schema.Types.ObjectId,
		ref: 'Fish'
	}
});

module.exports = Fish;