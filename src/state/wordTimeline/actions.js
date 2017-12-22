import types from './types';

const startAutoSelect = () => ({
  type: types.START_AUTO_SELECT
});

const stopAutoSelect = () => ({
  type: types.STOP_AUTO_SELECT
});

const autoSelect = () => ({
  type: types.AUTO_SELECT
});

const onSelect = (index) => ({
  type: types.ON_SELECT,
  payload: {
    index
  }
});

const setSectionPosition = ({ offsetTop, clientHeight }) => ({
  type: types.SET_SECTION_POSITION,
  payload: {
    offsetTop,
    clientHeight
  }
});

const setChartPosition = ({ offsetTop, clientHeight }) => ({
  type: types.SET_CHART_POSITION,
  payload: {
    offsetTop,
    clientHeight
  }
});

export default {
  startAutoSelect,
  stopAutoSelect,
  autoSelect,
  onSelect,
  setSectionPosition,
  setChartPosition
};
