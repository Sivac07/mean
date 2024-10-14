// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const itemRoutes = require('./routes/itemRoutes');  // Item routes
const productPerformanceRoutes = require('./routes/productPerformanceRoutes');  // New Product Performance routes

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use Routes
app.use('/api/items', itemRoutes);
app.use('/api/product-performance', productPerformanceRoutes); // Use the new product performance routes

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
