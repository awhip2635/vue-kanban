var  models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	description: { type: String, required: true },
	created: { type: Number, default: Date.now() },
	// Relations

    taskId: { type: ObjectId, ref: models.task.name, required: true }
});

module.exports = mongoose.model(models.comments.name, schema);