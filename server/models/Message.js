const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  },
  authorName: {
    type: String,
    required: true
  },
  authorAvatar: {
    type: String, // URL to avatar image
    default: ''
  },
  type: {
    type: String,
    enum: ['text', 'image', 'video', 'voice', 'call', 'system'],
    required: true
  },
  content: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['sent', 'delivered', 'read', 'none'],
    default: 'sent'
  },
  reactions: [{
    type: String,
    emoji: String
  }],
  isPinned: {
    type: Boolean,
    default: false
  },
  position: {
    type: Number, // Order in the chat
    required: true
  }
});

module.exports = mongoose.model('Message', messageSchema);