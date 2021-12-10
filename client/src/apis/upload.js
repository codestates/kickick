import api from "./";
/**
 * @param {formData} formData requried
 */

export const uploadSingleImage = (formData) => {
  return api.post(`/upload/single`, formData);
};

export const uploadArrayImage = (formData) => {
  return api.post(`/upload/single`, formData);
};
