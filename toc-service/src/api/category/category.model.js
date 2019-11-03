const mongoose = require('mongoose');

const tagSchema = mongoose.Schema({

  _id: mongoose.Schema.Types.ObjectId,

  name: { type: String, require: true },

}, { versionKey: false });

const topicSchema = mongoose.Schema({

  _id: mongoose.Schema.Types.ObjectId,

  name: { type: String, require: true },

  tags: [tagSchema]

}, { versionKey: false });

const categorySchema = mongoose.Schema({

  _id: mongoose.Schema.Types.ObjectId,

  name: { type: String, require: true },

  topics: [topicSchema]

}, { versionKey: false });

module.exports = mongoose.model('category', categorySchema);
