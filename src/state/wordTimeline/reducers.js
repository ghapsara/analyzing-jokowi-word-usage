import { combineReducers } from 'redux';
import types from './types';
import { lengthData } from './utils';

const selectionInitialState = {
  isAutoSelecting: false
}

const selectionReducer = (state = selectionInitialState, action) => {
  switch (action.type) {
    case types.ON_SELECT:
    case types.START_AUTO_SELECT: {
      return {
        ...state,
        isAutoSelecting: true
      }
    }
    case types.STOP_AUTO_SELECT: {
      return {
        ...state,
        isAutoSelecting: false
      }
    }
    default:
      return state;
  }
}

const selectedIndexReducer = (state = lengthData - 1, action) => {
  switch (action.type) {
    case types.AUTO_SELECT: {
      const nextIndex = (state + 1) % lengthData;

      return nextIndex;
    }
    case types.ON_SELECT: {
      const { index } = action.payload;
      return index;
    }
    default:
      return state;
  }
};

const sectionPositionInitialState = {
  offsetTop: 0,
  clientHeight: 0
};

const sectionPositionReducer = (state = sectionPositionInitialState, action) => {
  switch (action.type) {
    case types.SET_SECTION_POSITION: {
      const { offsetTop, clientHeight } = action.payload;

      return {
        offsetTop,
        clientHeight
      };
    }
    default:
      return state;
  }
};

const chartPositionInitialState = {
  offsetTop: 0,
  clientHeight: 0
};

const chartPositionReducer = (state = chartPositionInitialState, action) => {
  switch (action.type) {
    case types.SET_CHART_POSITION: {
      const { offsetTop, clientHeight } = action.payload;

      return {
        offsetTop,
        clientHeight
      };
    }
    default:
      return state;
  }
};

export default combineReducers({
  selection: selectionReducer,
  selectedIndex: selectedIndexReducer,
  sectionPosition: sectionPositionReducer,
  chartPosition: chartPositionReducer
});
