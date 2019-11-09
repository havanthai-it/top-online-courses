const mongoose = require('mongoose');


const courseSchema = mongoose.Schema({

  _id: mongoose.Schema.Types.ObjectId,

  name: { type: String, required: true },

  url: { type: String, required: true }

}, { versionKey: false });

module.exports = mongoose.model('platform', courseSchema);
