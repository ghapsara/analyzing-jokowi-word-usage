import { combineReducers } from 'redux';
import types from './types';
import { getData } from './utils';

const dataReducer = (state = getData(), action) => {
  switch (action.type) {
    case types.ON_SELECT:
    case types.AUTO_SELECT: {
      const { word } = action.payload;

      return state.map(d => {
        if (d.word === word) {
          return ({
            ...d,
            isSelected: true
          })
        }
        return {
          ...d,
          isSelected: false
        }
      });
    }
    case types.ADD_COORDINATE_DATA: {
      const { data } = action.payload;
      return data;
    }
    default:
      return state;
  }
};

const chartInitialState = {
  isChartVisible: false,
  isSpiralLineRendered: false,
  isSpiralPointsRendered: false,
}

const chartReducer = (state=chartInitialState, action) => {
  switch (action.type) {
    case types.SHOW_CHART: {
      return {
        ...state,
        isChartVisible: true
      }
    }
    case types.RENDER_SPIRAL_LINE: {
      return {
        ...state,
        isSpiralLineRendered: true
      }
    }
    case types.RENDER_SPIRAL_POINTS: {
      return {
        ...state,
        isSpiralPointsRendered: true
      }
    }
    default:
      return state;
  }
}

const dataSelectionInitialState = {
  isAutoSelecting: true,
  currentSelectedIndex: 0
};

const dataSelectionReducer = (state = dataSelectionInitialState, action) => {
  switch (action.type) {
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
    case types.AUTO_SELECT: {
      const currentSelectedIndex = state.currentSelectedIndex + 1;
      return {
        ...state,
        currentSelectedIndex
      }
    }
    case types.ON_SELECT: {
      return {
        ...state,
        isAutoSelecting: false
      }
    }
    case types.SET_ONSELECT_INDEX: {
      const { index } = action.payload;
      return {
        ...state,
        currentSelectedIndex: index
      }
    }
    default:
      return state;
  }
};

const helperVisibilityReducer = (state = false, action) => {
  switch (action.type) {
    case types.ON_HELPER_CLICK: {
      return !state;
    }
    default:
      return state;
  }
}

const sectionPositionInitialState = {
  offsetTop: 0,
  clientHeight: 0
};

const sectionPositionReducer = (state = sectionPositionInitialState, action) => {
  switch (action.type) {
    case types.SET_SECTION_POSITION: {
      return action.payload;
    }
    default:
      return state;
  }
}

export default combineReducers({
  data: dataReducer,
  chart: chartReducer,
  dataSelection: dataSelectionReducer,
  helperVisibility: helperVisibilityReducer,
  sectionPosition: sectionPositionReducer
});
