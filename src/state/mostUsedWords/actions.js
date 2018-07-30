import types from './types';

const addCoordinateData = (data) => ({
  type: types.ADD_COORDINATE_DATA,
  payload: {
    data
  }
});

const showChart = () => ({
  type: types.SHOW_CHART
});

const renderSpiralLine = () => ({
  type: types.RENDER_SPIRAL_LINE
});

const renderSpiralPoints = () => ({
  type: types.RENDER_SPIRAL_POINTS
});

const autoSelect = (word) => ({
  type: types.AUTO_SELECT,
  payload: {
    word
  }
});

const onSelect = (word) => ({
  type: types.ON_SELECT,
  payload: {
    word
  }
});

const startAutoSelect = () => ({
  type: types.START_AUTO_SELECT
});

const stopAutoSelect = () => ({
  type: types.STOP_AUTO_SELECT
})

const setOnSelectIndex = (index) => ({
  type: types.SET_ONSELECT_INDEX,
  payload: {
    index
  }
})

const onHelperClick = () => ({
  type: types.ON_HELPER_CLICK
})

const setSectionPosition = ({ offsetTop, clientHeight }) => ({
  type: types.SET_SECTION_POSITION,
  payload: {
    offsetTop,
    clientHeight
  }
});

export default {
  addCoordinateData,
  showChart,
  renderSpiralLine,
  renderSpiralPoints,
  autoSelect,
  onSelect,
  startAutoSelect,
  stopAutoSelect,
  setOnSelectIndex,
  onHelperClick,
  setSectionPosition
};
