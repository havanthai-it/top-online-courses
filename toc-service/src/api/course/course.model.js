const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({

  _id: mongoose.Schema.Types.ObjectId,

  name: { type: String, required: true },

  short_description: { type: String, required: false },

  author: { type: String, required: false },

  created_date: { type: Date, required: false },

  updated_data: { type: Date, required: false },

  price: { type: Number, required: false },

  platform: { type: String, required: true },

  tags: [mongoose.Schema.Types.ObjectId]

}, { versionKey: false });

module.exports = mongoose.model('course', courseSchema);
