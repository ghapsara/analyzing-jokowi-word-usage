import { combineReducers } from 'redux';
import types from './types';
import { getData } from './utils';

const indexReducer = (state = -1, action) => {
  switch (action.type) {
    case types.ADD_INDEX: {
      return state + 1;
    }
    case types.STOP_ADD_INDEX: {
      return -1;
    }
    default:
      return state;
  }
};

const dataReducer = (state = getData(), action) => {
  switch (action.type) {
    case types.STOP_ADD_INDEX: {
      return getData();
    }
    case types.SELECT_DATA: {
      const { index } = action.payload;
      const data = state.map((item, i) => {
        if (i === index) {
          return {
            ...item,
            isFalling: true
          }
        };
        return item;
      });

      return data;
    }
    default:
      return state;
  }
};

const positionInitialState = {
  offsetTop: 0,
  clientHeight: 0
}

const positionReducer = (state = positionInitialState, action) => {
  switch (action.type) {
    case types.SET_POSITION: {
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

const indexLoopReducer = (state=false, action) => {
  switch (action.type) {
    case types.START_ADD_INDEX: {
      return true;
    }
    case types.STOP_ADD_INDEX: {
      return false;
    }
    default:
      return state;
  }
}

export default combineReducers({
  index: indexReducer,
  data: dataReducer,
  position: positionReducer,
  indexLoop: indexLoopReducer
});
