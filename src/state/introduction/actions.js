import types from './types';

const startAddIndex = () => ({
  type: types.START_ADD_INDEX
});

const stopAddIndex = () => ({
  type: types.STOP_ADD_INDEX
})

const addIndex = () => ({
  type: types.ADD_INDEX
});

const selectData = (index) => ({
  type: types.SELECT_DATA,
  payload: {
    index
  }
});

const setPosition = ({ offsetTop, clientHeight }) => ({
  type: types.SET_POSITION,
  payload: {
    offsetTop,
    clientHeight
  }
});

export default {
  startAddIndex,
  stopAddIndex,
  addIndex,
  selectData,
  setPosition
};
