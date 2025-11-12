const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true,
    default: 'Untitled Project'
  },
  serviceType: {
    type: String,
    required: true,
    enum: ['whatsapp-chat', 'instagram-post', 'twitter-post', 'imessage', 'telegram-chat', 'facebook-post', 'linkedin-profile', 'call-screen', 'notifications']
  },
  templateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Template'
  },
  theme: {
    type: String,
    enum: ['light', 'dark', 'custom'],
    default: 'light'
  },
  customTheme: {
    type: Object,
    default: {}
  },
  content: {
    type: Object,
    default: {}
  },
  settings: {
    type: Object,
    default: {}
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
projectSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Project', projectSchema);