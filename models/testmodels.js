const mongoose = require('mongoose');
// const request = require('request');

// const TestmodelSchema = new mongoose.Schema({
// 	name: String,
// 	favorite_number: Number,
// 	favorite_words: [String],
// 	favorite_people: [{
// 		name: String,
// 		rating: Number
// 	}]
// });

const Testmodels = [{
	name: 'Sam',
	favorite_number: 7,
	favorite_words: ['word1', 'word2', 'memes'],
	favorite_people: [{name: 'Mom', rating: 10}, {name: 'Dad', rating: 10}],
	lovesMemes: false,
	startEditing: false
}];

// const Testmodel = mongoose.model('Testmodel', TestmodelSchema);

// module.exports = mongoose.model('Testmodel', TestmodelSchema);

module.exports = Testmodels;
