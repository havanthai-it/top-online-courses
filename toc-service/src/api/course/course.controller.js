const mongoose = require('mongoose');

const CourseService = require('./course.service');
const Course = require('./course.model');

exports.get = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: 'Bad request' });
  }

  const course = await CourseService.get(id);
  return res.status(200).json(course);
}

exports.getAll = async (req, res) => {
  const courses = await CourseService.getAll();
  return res.status(200).json(courses);
}

exports.insert = async (req, res) => {
  // Should validate req.body first
  req.body._id = mongoose.Types.ObjectId();
  const course = new Course(req.body);

  const result = await CourseService.insert(course);
  return res.status(201).json(result);
}
