import api from "./";
/**
 * @param {formData} formData requried
 * @param {string} folder required
 */
export const uploadSingleImage = (formData, folder) => {
  return api.post(`/upload/single/${folder}`, formData);
};
/**
 * @param {formData} formData requried
 * @param {string} folder required
 */
export const uploadArrayImage = (formData, folder) => {
  return api.post(`/upload/array/${folder}`, formData);
};
