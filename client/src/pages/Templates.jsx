import React, { useState, useEffect } from 'react';
import TemplateCard from '../components/TemplateCard.jsx';
import LoadingSpinner from '../components/LoadingSpinner.jsx';
import { templatesAPI } from '../services/api';

const Templates = () => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchTemplates();
  }, []);

  const fetchTemplates = async () => {
    try {
      setLoading(true);
      const response = await templatesAPI.getAll();
      setTemplates(response.data);
    } catch (err) {
      setError('Failed to load templates');
      console.error('Error fetching templates:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredTemplates = filter === 'all' 
    ? templates 
    : templates.filter(template => template.platform === filter);

  const platforms = ['all', 'whatsapp', 'instagram', 'twitter', 'imessage', 'telegram'];

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <LoadingSpinner size="large" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
          <p className="text-red-600">{error}</p>
          <button 
            onClick={fetchTemplates}
            className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Templates</h1>
      <p className="text-gray-600 mb-8">Choose from our pre-built templates for different platforms and devices.</p>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-2 mb-8">
        {platforms.map(platform => (
          <button
            key={platform}
            onClick={() => setFilter(platform)}
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
              filter === platform 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {platform === 'all' ? 'All Platforms' : platform}
          </button>
        ))}
      </div>

      {/* Templates grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredTemplates.map(template => (
          <TemplateCard 
            key={template._id} 
            template={template}
            onSelect={(template) => {
              console.log('Selected template:', template);
              // We'll implement template selection in the next task
            }}
          />
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No templates found for the selected platform.</p>
        </div>
      )}
    </div>
  );
};

export default Templates;