const mongoose = require('mongoose');

const PlatformService = require('./platform.service');
const Platform = require('./platform.model');

exports.getAll = async (req, res) => {
  const courses = await PlatformService.getAll();
  return res.status(200).json(courses);
}

exports.insert = async (req, res) => {
  // Should validate req.body first
  req.body._id = mongoose.Types.ObjectId();
  const course = new Course(req.body);

  const result = await PlatformService.insert(course);
  return res.status(201).json(result);
}
