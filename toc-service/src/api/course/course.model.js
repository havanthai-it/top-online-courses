const mongoose = require('mongoose');

const courseDetailsSchema = mongoose.Schema({

  n_lectures: { type: Number, required: false },

  n_hours: { type: Number, required: false },

  n_enrollees: { type: Number, required: false },

  created_date: { type: Date, required: false },

  updated_data: { type: Date, required: false },

  price: { type: Number, required: false },

  discount_percent: { type: Number, required: false },

  rate: { type: Number, required: false },

  n_ratings: { type: Number, required: false },

  level: { type: String, required: false }, // [All level, Beginner, Intermediate, Advanced]

  has_certificate: { type: Boolean, required: false },

  author: { type: String, required: false },

  platform: { type: String, required: true },

  url: { type: String, required: false }

}, { versionKey: false });

const courseSchema = mongoose.Schema({

  _id: mongoose.Schema.Types.ObjectId,

  name: { type: String, required: true },

  description: { type: String, required: false },

  learned_lessons: [String],

  review: { type: String, required: false },

  details: courseDetailsSchema,

  tags: [mongoose.Schema.Types.ObjectId],

  created_date: { type: Date, required: false }

}, { versionKey: false });

module.exports = mongoose.model('course', courseSchema);
