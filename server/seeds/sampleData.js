const mongoose = require('mongoose');
require('dotenv').config();

// Import models
const User = require('../models/User');
const Template = require('../models/Template');
const Project = require('../models/Project');
const Message = require('../models/Message');

const sampleData = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('📊 Connected to database for seeding...');

    // Clear existing data
    await User.deleteMany({});
    await Template.deleteMany({});
    await Project.deleteMany({});
    await Message.deleteMany({});
    console.log('🧹 Cleared existing data');

    // Create sample users
    const users = await User.create([
      {
        name: 'Admin User',
        email: 'admin@socialmock.com',
        role: 'admin'
      },
      {
        name: 'Test User',
        email: 'test@socialmock.com',
        role: 'user'
      }
    ]);
    console.log('👥 Created sample users');

    // Create sample templates
    const templates = await Template.create([
      {
        name: 'iPhone 14 - WhatsApp',
        deviceName: 'iPhone 14',
        platform: 'whatsapp',
        width: 390,
        height: 844,
        pixelRatio: 3,
        safeArea: { top: 47, bottom: 34, left: 0, right: 0 },
        cssConfig: {
          backgroundColor: '#111b21',
          bubbleColorUser: '#005c4b',
          bubbleColorOther: '#202c33',
          textColor: '#e9edef'
        },
        status: 'published'
      },
      {
        name: 'Android - WhatsApp',
        deviceName: 'Google Pixel 6',
        platform: 'whatsapp',
        width: 412,
        height: 915,
        pixelRatio: 2.6,
        safeArea: { top: 24, bottom: 0, left: 0, right: 0 },
        cssConfig: {
          backgroundColor: '#e5ddd5',
          bubbleColorUser: '#dcf8c6',
          bubbleColorOther: '#ffffff',
          textColor: '#303030'
        },
        status: 'published'
      },
      {
        name: 'iPhone - Instagram',
        deviceName: 'iPhone 14 Pro',
        platform: 'instagram',
        width: 393,
        height: 852,
        pixelRatio: 3,
        safeArea: { top: 47, bottom: 34, left: 0, right: 0 },
        status: 'published'
      },
      {
        name: 'Desktop - Twitter',
        deviceName: 'Web Browser',
        platform: 'twitter',
        width: 800,
        height: 600,
        pixelRatio: 1,
        status: 'published'
      }
    ]);
    console.log('📱 Created sample templates');

    // Create sample projects
    const projects = await Project.create([
      {
        userId: users[1]._id,
        name: 'Business WhatsApp Chat',
        serviceType: 'whatsapp-chat',
        templateId: templates[0]._id,
        theme: 'dark',
        content: {
          participants: [
            { name: 'You', isUser: true },
            { name: 'John Business', isUser: false }
          ],
          chatTitle: 'John Business',
          chatDescription: 'Business account'
        },
        settings: {
          showTimestamps: true,
          showStatus: true,
          showProfilePictures: true
        }
      },
      {
        userId: users[1]._id,
        name: 'Instagram Post Mockup',
        serviceType: 'instagram-post',
        templateId: templates[2]._id,
        theme: 'light',
        content: {
          username: 'traveler_jane',
          caption: 'Beautiful sunset at the beach! 🌅 #sunset #beach #vacation',
          likes: 1250,
          comments: 89
        }
      }
    ]);
    console.log('📝 Created sample projects');

    // Create sample messages for the first project
    const messages = await Message.create([
      {
        projectId: projects[0]._id,
        authorName: 'John Business',
        type: 'text',
        content: 'Hello! I wanted to discuss the project timeline.',
        timestamp: new Date(Date.now() - 30 * 60000), // 30 minutes ago
        status: 'read',
        position: 1
      },
      {
        projectId: projects[0]._id,
        authorName: 'You',
        type: 'text',
        content: 'Hi John! Sure, I have the timeline ready.',
        timestamp: new Date(Date.now() - 25 * 60000), // 25 minutes ago
        status: 'read',
        position: 2
      },
      {
        projectId: projects[0]._id,
        authorName: 'You',
        type: 'text',
        content: 'Can we schedule a call tomorrow at 2 PM?',
        timestamp: new Date(Date.now() - 20 * 60000), // 20 minutes ago
        status: 'delivered',
        position: 3
      },
      {
        projectId: projects[0]._id,
        authorName: 'John Business',
        type: 'text',
        content: 'That works perfectly for me! Looking forward to it.',
        timestamp: new Date(Date.now() - 15 * 60000), // 15 minutes ago
        status: 'read',
        position: 4
      }
    ]);
    console.log('💬 Created sample messages');

    console.log('✅ Sample data created successfully!');
    console.log(`📊 Database now has:`);
    console.log(`   - ${users.length} users`);
    console.log(`   - ${templates.length} templates`);
    console.log(`   - ${projects.length} projects`);
    console.log(`   - ${messages.length} messages`);

  } catch (error) {
    console.error('❌ Error creating sample data:', error);
  } finally {
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
  }
};

// Run the sample data function
sampleData();