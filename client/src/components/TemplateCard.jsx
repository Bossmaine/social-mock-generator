import React from 'react';
import { SocialIcon } from 'react-social-icons';


const TemplateCard = ({ template, onSelect }) => {
  const getPlatformColor = (platform) => {
    const colors = {
      whatsapp: 'bg-green-100 border-green-300',
      instagram: 'bg-pink-100 border-pink-300',
      twitter: 'bg-blue-100 border-blue-300',
      imessage: 'bg-blue-50 border-blue-200',
      telegram: 'bg-sky-100 border-sky-300',
      facebook: 'bg-indigo-100 border-indigo-300',
      linkedin: 'bg-blue-100 border-blue-300',
      generic: 'bg-gray-100 border-gray-300'
    };
    return colors[platform] || 'bg-gray-100 border-gray-300';
  };

  const getPlatformIcon = (platform) => {
    const icons = {
      whatsapp: <SocialIcon url="https://whatsapp.com" />,
      instagram: <SocialIcon url="https://instagram.com" />,
      twitter: <SocialIcon url="https://x.com" />,
      imessage: '💬',
      telegram: '📱',
      facebook: <SocialIcon url="https://facebook.com" />,
      linkedin: '💼'
    };
    return icons[platform] || '📱';
  };

  return (
    <div 
      className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-105 ${getPlatformColor(template.platform)}`}
      onClick={() => onSelect(template)}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl">{getPlatformIcon(template.platform)}</span>
        <span className="text-xs bg-white px-2 py-1 rounded-full font-medium">
          {template.platform}
        </span>
      </div>
      
      <h3 className="font-semibold text-gray-800 mb-1">{template.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{template.deviceName}</p>
      
      <div className="text-xs text-gray-500 flex justify-between">
        <span>{template.width}×{template.height}</span>
        <span>{template.pixelRatio}x</span>
      </div>
    </div>
  );
};

export default TemplateCard;