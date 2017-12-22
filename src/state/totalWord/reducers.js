import { combineReducers } from 'redux';
import types from './types';

const sectionInitialState = {
  offsetTop: 0,
  clientHeight: 0
};

const sectionReducer = (state = sectionInitialState, action) => {
  switch (action.type) {
    case types.SET_SECTION_POSITION: {
      const { offsetTop, clientHeight } = action.payload;

      return {
        ...state,
        offsetTop,
        clientHeight
      }
    }
    default:
      return state;
  }
};

const chartInitialState = {
  isSticked: false,
  isStickedTop: true,
  offsetTop: 0,
  clientHeight: 0
};

const chartReducer = (state = chartInitialState, action) => {
  switch (action.type) {
    case types.SET_CHART_POSITION: {
      const {
        offsetTop,
        clientHeight
      } = action.payload;
      return {
        ...state,
        offsetTop,
        clientHeight
      }
    }
    case types.SET_CHART_STICKED: {
      return {
        ...state,
        isSticked: true
      }
    }
    case types.SET_CHART_UNSTICKED: {
      return {
        ...state,
        isSticked: false
      }
    }
    case types.SET_CHART_STICKED_TOP: {
      return {
        ...state,
        isStickedTop: true
      }
    }
    case types.SET_CHART_STICKED_BOTTOM: {
      return {
        ...state,
        isStickedTop: false
      }
    }
    default:
      return state;
  }
};

const lowestNoteInitialState = {
  isVisible: false,
  offsetTop: 0,
  clientHeight: 0
};

const lowestNoteReducer = (state = lowestNoteInitialState, action) => {
  switch (action.type) {
    case types.SHOW_LOWEST_NOTE: {
      return {
        ...state,
        isVisible: true
      }
    }
    case types.HIDE_LOWEST_NOTE: {
      return {
        ...state,
        isVisible: false
      }
    }
    case types.SET_LOWEST_NOTE_POSITION: {
      const { offsetTop, clientHeight } = action.payload;
      return {
        ...state,
        offsetTop,
        clientHeight
      }
    }
    default:
      return state;
  }
};

const highestNoteInitialState = {
  isVisible: false,
  offsetTop: 0,
  clientHeight: 0
}

const highestNoteReducer = (state = highestNoteInitialState, action) => {
  switch (action.type) {
    case types.SHOW_HIGHEST_NOTE: {
      return {
        ...state,
        isVisible: true
      }
    }
    case types.HIDE_HIGHEST_NOTE: {
      return {
        ...state,
        isVisible: false
      }
    }
    case types.SET_HIGHEST_NOTE_POSITION: {
      const { offsetTop, clientHeight } = action.payload;
      return {
        ...state,
        offsetTop,
        clientHeight
      }
    }
    default:
      return state;
  }
}
const summaryNoteInitialState = {
  isVisible: false,
  offsetTop: 0,
  clientHeight: 0
}

export const summaryNoteReducer = (state = summaryNoteInitialState, action) => {
  switch (action.type) {
    case types.SHOW_SUMMARY_NOTE: {
      return {
        ...state,
        isVisible: true
      }
    }
    case types.HIDE_SUMMARY_NOTE: {
      return {
        ...state,
        isVisible: false
      }
    }
    case types.SET_SUMMARY_NOTE_POSITION: {
      const { offsetTop, clientHeight } = action.payload;
      return {
        ...state,
        offsetTop,
        clientHeight
      }
    }
    default:
      return state;
  }
}

export default combineReducers({
  section: sectionReducer,
  chart: chartReducer,
  lowestNote: lowestNoteReducer,
  highestNote: highestNoteReducer,
  summaryNote: summaryNoteReducer
});
