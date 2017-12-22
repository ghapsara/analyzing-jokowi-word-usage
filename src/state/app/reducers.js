import types from './types';

const appInitialState = {
  windowScrollY: 0,
  isDesktop: true,
  browserType: 0
};

const appReducer = (state = appInitialState, action) => {
  switch (action.type) {
    case types.ON_SCROLL: {
      const { windowScrollY } = action.payload;

      return {
        ...state,
        windowScrollY
      }
    }
    case types.SET_BROWSER_TYPE: {
      const { isDesktop } = action.payload;
      return {
        ...state,
        isDesktop
      }
    }
    default:
      return state;
  }
};

export default appReducer;
