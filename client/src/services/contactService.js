import api from './api.js';

const contactService = {
  // Create contact (public - no auth required)
  createContact: async (contactData) => {
    const response = await api.post('/contacts', contactData);
    return response.data;
  },

  // Get all contacts (admin only)
  getAllContacts: async () => {
    const response = await api.get('/contacts');
    return response.data;
  },

  // Get contact by ID (admin only)
  getContactById: async (id) => {
    const response = await api.get(`/contacts/${id}`);
    return response.data;
  },

  // Update contact (admin only)
  updateContact: async (id, contactData) => {
    const response = await api.put(`/contacts/${id}`, contactData);
    return response.data;
  },

  // Delete contact (admin only)
  deleteContact: async (id) => {
    const response = await api.delete(`/contacts/${id}`);
    return response.data;
  }
};

export default contactService;