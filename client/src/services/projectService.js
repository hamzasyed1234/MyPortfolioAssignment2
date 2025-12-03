import api from './api.js';

const projectService = {
  // Get all projects (public)
  getAllProjects: async () => {
    const response = await api.get('/projects');
    return response.data;
  },

  // Get project by ID (public)
  getProjectById: async (id) => {
    const response = await api.get(`/projects/${id}`);
    return response.data;
  },

  // Create project (admin only)
  createProject: async (projectData) => {
    const response = await api.post('/projects', projectData);
    return response.data;
  },

  // Update project (admin only)
  updateProject: async (id, projectData) => {
    const response = await api.put(`/projects/${id}`, projectData);
    return response.data;
  },

  // Delete project (admin only)
  deleteProject: async (id) => {
    const response = await api.delete(`/projects/${id}`);
    return response.data;
  }
};

export default projectService;