const mongoose = require('mongoose');

const CategoryService = require('./category.service');

exports.get = async (req, res) => {
  const id = req.params.id;

  if (!id) {
    return res.status(400).json({ message: 'Bad request' });
  }

  const category = await CategoryService.get(id);
  return res.status(200).json(course);
}

exports.getAll = async (req, res) => {
  const categories = await CategoryService.getAll();
  return res.status(200).json(categories);
}