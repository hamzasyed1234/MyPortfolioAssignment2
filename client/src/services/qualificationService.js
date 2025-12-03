import api from './api.js';

const qualificationService = {
  // Get all qualifications (public)
  getAllQualifications: async () => {
    const response = await api.get('/qualifications');
    return response.data;
  },

  // Get qualification by ID (public)
  getQualificationById: async (id) => {
    const response = await api.get(`/qualifications/${id}`);
    return response.data;
  },

  // Create qualification (admin only)
  createQualification: async (qualificationData) => {
    const response = await api.post('/qualifications', qualificationData);
    return response.data;
  },

  // Update qualification (admin only)
  updateQualification: async (id, qualificationData) => {
    const response = await api.put(`/qualifications/${id}`, qualificationData);
    return response.data;
  },

  // Delete qualification (admin only)
  deleteQualification: async (id) => {
    const response = await api.delete(`/qualifications/${id}`);
    return response.data;
  }
};

export default qualificationService;