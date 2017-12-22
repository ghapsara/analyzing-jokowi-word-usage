const desktopWidthMinimumSize = 760;

export const calculateBrowserType = (width) => {
  return width > desktopWidthMinimumSize;
}

export default {
  calculateBrowserType
};
