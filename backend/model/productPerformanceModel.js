// model/productPerformanceModel.js

const mongoose = require('mongoose');

const ProductPerformanceSchema = new mongoose.Schema({
  unit_sold: { type: Number, required: true },
  rating: { type: Number, required: true }
});

module.exports = mongoose.model('Product_Performance', ProductPerformanceSchema);
