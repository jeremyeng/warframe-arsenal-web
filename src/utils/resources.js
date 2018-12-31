export const staticAssetsUrl = (path = '') => {
  return `${process.env.STATIC_ASSETS_URL}/${path}`;
};
