import { combineEpics } from 'redux-observable';
import reducers from './reducers';
import {
  setChartStickedEpic,
  setChartUnstickedEpic,
  setChartStickedTopEpic,
  setChartStickedBottomEpic,
  hideLowestNoteEpic,
  showLowestNoteEpic,
  hideHighestNoteEpic,
  showHighestNoteEpic,
  showSummaryNoteEpic,
  hideSummaryNoteEpic
} from './operations';

export const totalWordEpics = combineEpics(
  setChartStickedEpic,
  setChartUnstickedEpic,
  setChartStickedTopEpic,
  setChartStickedBottomEpic,
  hideLowestNoteEpic,
  showLowestNoteEpic,
  hideHighestNoteEpic,
  showHighestNoteEpic,
  showSummaryNoteEpic,
  hideSummaryNoteEpic
);

export { default as totalWordOperations } from './operations';

export { default as totalWordUtilities } from './utils';

export default reducers;
