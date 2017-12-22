import types from './types';

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

const setChartSticked = () => ({
  type: types.SET_CHART_STICKED
});

const setChartStickedTop = () => ({
  type: types.SET_CHART_STICKED_TOP
});

const setChartStickedBottom = () => ({
  type: types.SET_CHART_STICKED_BOTTOM
});

const setChartUnsticked = () => ({
  type: types.SET_CHART_UNSTICKED
});

const setLowestNotePosition = ({ offsetTop, clientHeight }) => ({
  type: types.SET_LOWEST_NOTE_POSITION,
  payload: {
    offsetTop,
    clientHeight
  }
});

const showLowestNote = () => ({
  type: types.SHOW_LOWEST_NOTE
});

const hideLowestNote = () => ({
  type: types.HIDE_LOWEST_NOTE
});

const setHighestNotePosition = ({ offsetTop, clientHeight }) => ({
  type: types.SET_HIGHEST_NOTE_POSITION,
  payload: {
    offsetTop,
    clientHeight
  }
});

const showHighestNote = () => ({
  type: types.SHOW_HIGHEST_NOTE
});

const hideHighestNote = () => ({
  type: types.HIDE_HIGHEST_NOTE
});

const setSummaryNotePosition = ({ offsetTop, clientHeight }) => ({
  type: types.SET_SUMMARY_NOTE_POSITION,
  payload: {
    offsetTop,
    clientHeight
  }
});

const showSummaryNote = () => ({
  type: types.SHOW_SUMMARY_NOTE
});

const hideSummaryNote = () => ({
  type: types.HIDE_SUMMARY_NOTE
});

export default {
  setSectionPosition,
  setChartPosition,
  setLowestNotePosition,
  setChartSticked,
  setChartUnsticked,
  showLowestNote,
  hideLowestNote,
  setChartStickedTop,
  setChartStickedBottom,
  showHighestNote,
  hideHighestNote,
  setHighestNotePosition,
  setSummaryNotePosition,
  showSummaryNote,
  hideSummaryNote
};
