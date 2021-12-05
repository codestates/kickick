export const categoryName = (str) => {
  const idx = str.indexOf("_");
  return str.slice(0, idx);
};
