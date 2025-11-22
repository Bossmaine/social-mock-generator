import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Templates API
export const templatesAPI = {
  getAll: () => api.get('/templates'),
  getById: (id) => api.get(`/templates/${id}`),
  getByPlatform: (platform) => api.get(`/templates/platform/${platform}`),
};

// Projects API
export const projectsAPI = {
  getAll: () => api.get('/projects'),
  getById: (id) => api.get(`/projects/${id}`),
  create: (data) => api.post('/projects', data),
  update: (id, data) => api.put(`/projects/${id}`, data),
  delete: (id) => api.delete(`/projects/${id}`),
};

// Messages API
export const messagesAPI = {
  getByProject: (projectId) => api.get(`/messages/project/${projectId}`),
  create: (data) => api.post('/messages', data),
};

export default api;