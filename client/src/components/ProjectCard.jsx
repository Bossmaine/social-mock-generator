import React from 'react';

const ProjectCard = ({ project, onSelect }) => {
  const getServiceTypeColor = (type) => {
    const colors = {
      'whatsapp-chat': 'bg-green-50 border-green-200',
      'instagram-post': 'bg-pink-50 border-pink-200',
      'twitter-post': 'bg-blue-50 border-blue-200',
      'imessage': 'bg-blue-50 border-blue-200',
      'telegram-chat': 'bg-sky-50 border-sky-200',
      'facebook-post': 'bg-indigo-50 border-indigo-200',
      'linkedin-profile': 'bg-blue-50 border-blue-200'
    };
    return colors[type] || 'bg-gray-50 border-gray-200';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div 
      className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 hover:shadow-md ${getServiceTypeColor(project.serviceType)}`}
      onClick={() => onSelect(project)}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-gray-800">{project.name}</h3>
        <span className="text-xs bg-white px-2 py-1 rounded-full border">
          {project.theme}
        </span>
      </div>
      
      <p className="text-sm text-gray-600 mb-3 capitalize">
        {project.serviceType.replace('-', ' ')}
      </p>
      
      <div className="text-xs text-gray-500 flex justify-between">
        <span>Created: {formatDate(project.createdAt)}</span>
        <span>Updated: {formatDate(project.updatedAt)}</span>
      </div>
    </div>
  );
};

export default ProjectCard;