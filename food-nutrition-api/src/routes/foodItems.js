const express = require('express');
const router = express.Router();
const FoodItem = require('../models/FoodItem');

// Create a new food item
router.post('/', async (req, res) => {
  try {
    const foodItem = new FoodItem(req.body);
    await foodItem.save();
    res.status(201).send(foodItem);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Retrieve all food items
router.get('/', async (req, res) => {
  try {
    const foodItems = await FoodItem.find();
    res.status(200).send(foodItems);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Retrieve a specific food item by ID
router.get('/:id', async (req, res) => {
  try {
    const foodItem = await FoodItem.findById(req.params.id);
    if (!foodItem) return res.status(404).send('Food item not found');
    res.status(200).send(foodItem);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Update a food item
router.put('/:id', async (req, res) => {
  try {
    const foodItem = await FoodItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!foodItem) return res.status(404).send('Food item not found');
    res.status(200).send(foodItem);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete a food item
router.delete('/:id', async (req, res) => {
  try {
    const foodItem = await FoodItem.findByIdAndDelete(req.params.id);
    if (!foodItem) return res.status(404).send('Food item not found');
    res.status(200).send(foodItem);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
