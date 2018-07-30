import types from './types';

const onScroll = (windowScrollY) => ({
  type: types.ON_SCROLL,
  payload: {
    windowScrollY
  }
});

const setBrowserType = (isDesktop) => ({
  type: types.SET_BROWSER_TYPE,
  payload: {
    isDesktop
  }
})

export default {
  onScroll,
  setBrowserType
};
