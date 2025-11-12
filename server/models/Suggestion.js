const mongoose = require('mongoose');

const suggestionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  screenshotUrl: {
    type: String,
    required: true
  },
  deviceName: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    required: true
  },
  metadata: {
    type: Object,
    default: {}
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected', 'needs-info'],
    default: 'pending'
  },
  adminNotes: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
suggestionSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Suggestion', suggestionSchema);