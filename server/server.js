const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const projectRoutes = require('./routes/projects');
const templateRoutes = require('./routes/templates');
const messageRoutes = require('./routes/messages');
const suggestionRoutes = require('./routes/suggestions');
const authRoutes = require('./routes/auth');

// Use routes
app.use('/api/projects', projectRoutes);
app.use('/api/templates', templateRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/suggestions', suggestionRoutes);
app.use('/api/auth', authRoutes);

// Basic route to test if server works
app.get('/', (req, res) => {
  res.json({ message: 'Social Mock Generator API is running!' });
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social-mock-generator')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});