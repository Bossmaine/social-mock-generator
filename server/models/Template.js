const mongoose = require('mongoose');

const templateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  deviceName: {
    type: String,
    required: true,
    trim: true
  },
  platform: {
    type: String,
    required: true,
    enum: ['whatsapp', 'instagram', 'twitter', 'imessage', 'telegram', 'facebook', 'linkedin', 'generic']
  },
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  pixelRatio: {
    type: Number,
    default: 1
  },
  safeArea: {
    top: Number,
    bottom: Number,
    left: Number,
    right: Number
  },
  cssConfig: {
    type: Object,
    default: {}
  },
  previewImage: {
    type: String, // URL to image
    default: ''
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  isCustom: {
    type: Boolean,
    default: false
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
templateSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Template', templateSchema);