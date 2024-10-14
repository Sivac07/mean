// routes/productPerformanceRoutes.js

const express = require('express');
const router = express.Router();
const ProductPerformance = require('../model/productPerformanceModel');

// Create a new product performance entry
router.post('/', async (req, res) => {
  try {
    const newPerformance = new ProductPerformance(req.body);
    const savedPerformance = await newPerformance.save();
    res.status(201).json(savedPerformance);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all product performance entries
router.get('/', async (req, res) => {
  try {
    const performances = await ProductPerformance.find();
    res.status(200).json(performances);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a single product performance entry by ID
router.get('/:id', async (req, res) => {
  try {
    const performance = await ProductPerformance.findById(req.params.id);
    if (!performance) return res.status(404).json({ error: 'Performance data not found' });
    res.status(200).json(performance);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a product performance entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedPerformance = await ProductPerformance.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPerformance) return res.status(404).json({ error: 'Performance data not found' });
    res.status(200).json(updatedPerformance);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a product performance entry by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedPerformance = await ProductPerformance.findByIdAndDelete(req.params.id);
    if (!deletedPerformance) return res.status(404).json({ error: 'Performance data not found' });
    res.status(200).json({ message: 'Performance entry deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
