import { Observable } from 'rxjs/Rx';
import appTypes from '../app/types';
import actions from './actions';

export const {
  setSectionPosition,
  setChartPosition,
  setLowestNotePosition,
  setHighestNotePosition,
  setSummaryNotePosition
} = actions;

const {
  setChartSticked,
  setChartUnsticked,
  showLowestNote,
  hideLowestNote,
  showHighestNote,
  hideHighestNote,
  showSummaryNote,
  hideSummaryNote,
  setChartStickedTop,
  setChartStickedBottom
} = actions;

export const setChartStickedEpic = (action$, store) => {
  return action$.ofType(appTypes.ON_SCROLL)
    .filter(action => {
      const { windowScrollY } = action.payload;

      const { chart, section } = store.getState().totalWord;

      const sectionPosition = section.offsetTop + section.clientHeight;

      const desiredPosition = windowScrollY >= chart.offsetTop
        && windowScrollY <= sectionPosition - chart.clientHeight;

      const desiredChartCondition = !chart.isSticked;

      const shouldSetChartSticked = desiredPosition && desiredChartCondition;

      return shouldSetChartSticked;
    })
    .mergeMap(() =>
      Observable.of(
        setChartSticked(),
        setChartStickedTop(),
      )
    );
};

export const setChartUnstickedEpic = (action$, store) => {
  return action$.ofType(appTypes.ON_SCROLL)
    .filter(action => {
      const { windowScrollY } = action.payload;

      const totalWord = store.getState().totalWord;
      const { section, chart } = totalWord;

      const sectionPosition = section.offsetTop + section.clientHeight;

      const desiredPosition = windowScrollY < chart.offsetTop ||
        windowScrollY > sectionPosition;

      const shouldSetChartUnsticked = desiredPosition && chart.isSticked;

      return shouldSetChartUnsticked;
    })
    .map(() => setChartUnsticked());
};

export const setChartStickedTopEpic = (action$, store) => {
  return action$.ofType(appTypes.ON_SCROLL)
    .filter(action => {
      const { windowScrollY } = action.payload;

      const totalWord = store.getState().totalWord;
      const { section, chart } = totalWord;

      const sectionPosition = section.offsetTop + section.clientHeight;

      const desiredPosition = windowScrollY > chart.offsetTop &&
        windowScrollY < sectionPosition - chart.clientHeight;

      const desiredChartCondition = chart.isSticked && !chart.isStickedTop;

      const shouldSetChartStickedTop = desiredPosition && desiredChartCondition;

      return shouldSetChartStickedTop;
    })
    .map(() => setChartStickedTop());
}

export const setChartStickedBottomEpic = (action$, store) => {
  return action$.ofType(appTypes.ON_SCROLL)
    .filter(action => {
      const { windowScrollY } = action.payload;

      const totalWord = store.getState().totalWord;
      const { section, chart } = totalWord;

      const sectionPosition = section.offsetTop + section.clientHeight;

      const desiredPosition = windowScrollY < chart.offsetTop ||
        windowScrollY > sectionPosition - chart.clientHeight;

      const desiredChartCondition = chart.isSticked && chart.isStickedTop;

      const shouldSetChartStickedBottom = desiredPosition && desiredChartCondition;

      return shouldSetChartStickedBottom;
    })
    .map(() => setChartStickedBottom());
};

export const showLowestNoteEpic = (action$, store) => {
  return action$.ofType(appTypes.ON_SCROLL)
    .filter(action => {
      const { windowScrollY } = action.payload;
      const { chart, lowestNote } = store.getState().totalWord;

      const chartHeight = chart.clientHeight;

      const { offsetTop, clientHeight, isVisible } = lowestNote;

      const topPosition = offsetTop - chartHeight;
      const bottomPosition = offsetTop + clientHeight - chartHeight;

      const desiredPosition = windowScrollY >= topPosition && windowScrollY <= bottomPosition;
      const shouldShowNote = desiredPosition && !isVisible;

      return shouldShowNote;
    })
    .map(() => showLowestNote())
};

export const hideLowestNoteEpic = (action$, store) => {
  return action$.ofType(appTypes.ON_SCROLL)
    .filter(action => {
      const { windowScrollY } = action.payload;
      const { chart, lowestNote } = store.getState().totalWord;

      const chartHeight = chart.clientHeight;

      const { offsetTop, clientHeight, isVisible } = lowestNote;

      const topPosition = offsetTop - chartHeight;
      const bottomPosition = offsetTop + clientHeight - chartHeight;

      const desiredPosition = windowScrollY <= topPosition || windowScrollY >= bottomPosition;
      const shouldHideNote = desiredPosition && isVisible;

      return shouldHideNote;
    })
    .map(() => hideLowestNote())
};

export const showHighestNoteEpic = (action$, store) => {
  return action$.ofType(appTypes.ON_SCROLL)
    .filter(action => {
      const { windowScrollY } = action.payload;
      const { chart, highestNote } = store.getState().totalWord;

      const chartHeight = chart.clientHeight;

      const { offsetTop, clientHeight, isVisible } = highestNote;

      const topPosition = offsetTop - chartHeight;
      const bottomPosition = offsetTop + clientHeight - chartHeight;

      const desiredPosition = windowScrollY >= topPosition && windowScrollY <= bottomPosition;
      const shouldShowNote = desiredPosition && !isVisible;

      return shouldShowNote;
    })
    .map(() => showHighestNote())
};

export const hideHighestNoteEpic = (action$, store) => {
  return action$.ofType(appTypes.ON_SCROLL)
    .filter(action => {
      const { windowScrollY } = action.payload;
      const { chart, highestNote } = store.getState().totalWord;

      const chartHeight = chart.clientHeight;

      const { offsetTop, clientHeight, isVisible } = highestNote;

      const topPosition = offsetTop - chartHeight;
      const bottomPosition = offsetTop + clientHeight - chartHeight;

      const desiredPosition = windowScrollY <= topPosition || windowScrollY >= bottomPosition;
      const shouldHideNote = desiredPosition && isVisible;

      return shouldHideNote;
    })
    .map(() => hideHighestNote())
};

export const showSummaryNoteEpic = (action$, store) => {
  return action$.ofType(appTypes.ON_SCROLL)
    .filter(action => {
      const { windowScrollY } = action.payload;
      const { chart, summaryNote } = store.getState().totalWord;

      const chartHeight = chart.clientHeight;

      const { offsetTop, clientHeight, isVisible } = summaryNote;

      const topPosition = offsetTop - chartHeight;
      const bottomPosition = offsetTop + clientHeight - chartHeight;

      const desiredPosition = windowScrollY >= topPosition && windowScrollY <= bottomPosition;
      const shouldShowNote = desiredPosition && !isVisible;

      return shouldShowNote;
    })
    .map(() => showSummaryNote())
};

export const hideSummaryNoteEpic = (action$, store) => {
  return action$.ofType(appTypes.ON_SCROLL)
    .filter(action => {
      const { windowScrollY } = action.payload;
      const { chart, summaryNote } = store.getState().totalWord;

      const chartHeight = chart.clientHeight;

      const { offsetTop, clientHeight, isVisible } = summaryNote;

      const topPosition = offsetTop - chartHeight;
      const bottomPosition = offsetTop + clientHeight - chartHeight;

      const desiredPosition = windowScrollY <= topPosition || windowScrollY >= bottomPosition;
      const shouldHideNote = desiredPosition && isVisible;

      return shouldHideNote;
    })
    .map(() => hideSummaryNote())
};


export default {
  setSectionPosition,
  setChartPosition,
  setLowestNotePosition,
  setHighestNotePosition,
  setSummaryNotePosition
};
